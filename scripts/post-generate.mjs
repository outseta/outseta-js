/**
 * Prepends `// @ts-nocheck` to all Orval-generated .ts files.
 *
 * The upstream Outseta spec produces some invalid TypeScript intersections
 * that cannot be fixed without modifying the spec itself.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const generatedDirs = [
  "packages/api-client/src/generated",
  "packages/react/src/generated",
];

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
    const content = readFileSync(file, "utf-8");
    if (!content.startsWith("// @ts-nocheck")) {
      writeFileSync(file, TS_NOCHECK + content);
    }
  }
}
