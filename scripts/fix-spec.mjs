/**
 * Patches known issues in the Outseta OpenAPI spec that break Orval.
 *
 * - Replaces null values in x-enum-descriptions arrays with empty strings
 *   (Orval's jsStringEscape crashes on null).
 */
import { readFileSync, writeFileSync } from "node:fs";

const path = "openapi.json";
const spec = JSON.parse(readFileSync(path, "utf-8"));

for (const schema of Object.values(spec.components?.schemas ?? {})) {
  if (Array.isArray(schema["x-enum-descriptions"])) {
    schema["x-enum-descriptions"] = schema["x-enum-descriptions"].map(
      (d) => d ?? "",
    );
  }
}

writeFileSync(path, JSON.stringify(spec, null, 2));
