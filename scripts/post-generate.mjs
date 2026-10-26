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
 * 3. Rewrites the per-tag `export *` block in the package barrels
 *    (`src/index.ts`) from the generated tag folders, and fails with a message
 *    when a tag the barrels export is no longer generated.
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

// Package barrels re-export one module per OpenAPI tag. The tag lines live in a
// marked block that this script rewrites from the tag folders Orval generated,
// so a new tag is exported automatically. A tag that disappears (the spec
// renamed or dropped it) fails the run instead: its exports may be gone from
// the public API, which needs a person to check and pick the version bump.
const BARRELS = [
  { file: "packages/api-client/src/index.ts", generatedDir: "packages/api-client/src/generated" },
  { file: "packages/react/src/index.ts", generatedDir: "packages/react/src/generated" },
];

// Generated tag folders the barrels have never exported. Exporting one is a
// public API change, so it stays a deliberate edit here.
const UNEXPORTED_TAGS = new Set(["attribute", "public", "template"]);

// Orval's schema folder (api-client); the barrels export it outside the block.
const NON_TAG_DIRS = new Set(["models"]);

const BLOCK_START = "// BEGIN generated tag exports (scripts/post-generate.mjs)";
const BLOCK_END = "// END generated tag exports";
const TAG_EXPORT = /^export \* from "\.\/generated\/([^/]+)\/\1\.js";$/;
const EXPORTED_NAME = /^export (?:declare )?(?:async )?(?:const|let|function|type|interface|enum|class) (\w+)/gm;

const errors = [];

for (const { file, generatedDir } of BARRELS) {
  const errorCount = errors.length;
  const source = readFileSync(file, "utf-8");
  const start = source.indexOf(BLOCK_START);
  const end = source.indexOf(BLOCK_END);
  if (start === -1 || end < start) {
    errors.push(`${file}: missing the "${BLOCK_START}" ... "${BLOCK_END}" block.`);
    continue;
  }

  const block = source.slice(start + BLOCK_START.length, end);
  const previous = [];
  for (const line of block.split("\n").map((l) => l.trim()).filter(Boolean)) {
    const match = TAG_EXPORT.exec(line);
    if (!match) {
      errors.push(`${file}: unexpected line in the generated tag exports block: ${line}`);
      continue;
    }
    previous.push(match[1]);
  }

  const tags = readdirSync(generatedDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !NON_TAG_DIRS.has(e.name) && !UNEXPORTED_TAGS.has(e.name))
    .map((e) => e.name)
    .sort();

  const gone = previous.filter((tag) => !tags.includes(tag));
  if (gone.length > 0) {
    errors.push(
      `${file} exports ${gone.map((t) => `"./generated/${t}/${t}.js"`).join(", ")}, ` +
        `but Orval no longer generates ${gone.length === 1 ? "that tag" : "those tags"}: ` +
        `the spec renamed or dropped an API tag. Check which exports the package loses, ` +
        `delete the line(s) from the block by hand, rerun the generate script ` +
        `(new tags are added to the block) and add a changeset with the matching bump.`,
    );
  }

  // `export *` silently drops a name that two modules both export.
  const owner = new Map();
  for (const tag of tags) {
    const content = readFileSync(join(generatedDir, tag, `${tag}.ts`), "utf-8");
    for (const [, name] of content.matchAll(EXPORTED_NAME)) {
      if (owner.has(name) && owner.get(name) !== tag) {
        errors.push(`${file}: "${name}" is exported by both ${owner.get(name)} and ${tag}; export * would drop it.`);
      }
      owner.set(name, tag);
    }
  }

  const lines = tags.map((tag) => `export * from "./generated/${tag}/${tag}.js";`);
  const updated = `${source.slice(0, start + BLOCK_START.length)}\n${lines.join("\n")}\n${source.slice(end)}`;
  if (errors.length === errorCount && updated !== source) {
    writeFileSync(file, updated);
  }
}

if (errors.length > 0) {
  console.error(`post-generate: package barrels need attention:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
