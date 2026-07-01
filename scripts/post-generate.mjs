/**
 * Post-processes Orval-generated files:
 *
 * 1. Prepends `// @ts-nocheck` to every generated `.ts` file. The upstream
 *    Outseta spec produces some invalid TypeScript intersections that cannot be
 *    fixed without modifying the spec itself.
 * 2. Rewrites the generated `@tanstack/react-query` imports in the React
 *    package to point at the local vanilla-React shim (`src/query.ts`), so the
 *    package ships the generated hooks without a `@tanstack/react-query`
 *    dependency.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const generatedDirs = [
  "packages/api-client/src/generated",
  "packages/react/src/generated",
];

const REACT_GENERATED_DIR = "packages/react/src/generated";
const REACT_QUERY_SHIM = "packages/react/src/query";
const REACT_QUERY_IMPORT = "@tanstack/react-query";

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.name.endsWith(".ts")) {
      files.push(full);
    }
  }
  return files;
}

const TS_NOCHECK = "// @ts-nocheck\n";

for (const dir of generatedDirs) {
  for (const file of walk(dir)) {
    let content = readFileSync(file, "utf-8");
    let changed = false;

    if (!content.startsWith("// @ts-nocheck")) {
      content = TS_NOCHECK + content;
      changed = true;
    }

    if (file.startsWith(REACT_GENERATED_DIR) && content.includes(REACT_QUERY_IMPORT)) {
      let importPath = relative(dirname(file), REACT_QUERY_SHIM)
        .split(sep)
        .join("/");
      if (!importPath.startsWith(".")) {
        importPath = `./${importPath}`;
      }
      content = content.split(REACT_QUERY_IMPORT).join(importPath);
      changed = true;
    }

    if (changed) {
      writeFileSync(file, content);
    }
  }
}
