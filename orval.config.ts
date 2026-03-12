import { defineConfig } from "orval";

export default defineConfig({
  outseta: {
    input: "./openapi.json",
    output: {
      target: "./packages/api-client/src/generated",
      schemas: "./packages/api-client/src/generated/models",
      mode: "tags-split",
      client: "fetch",
      override: {
        mutator: {
          path: "./packages/api-client/src/client.ts",
          name: "customFetch",
        },
      },
    },
  },
  outsetaZod: {
    input: "./openapi.json",
    output: {
      target: "./packages/api-client/src/generated/zod.ts",
      client: "zod",
    },
  },
  outsetaReactQuery: {
    input: "./openapi.json",
    output: {
      target: "./packages/react/src/generated",
      mode: "tags-split",
      client: "react-query",
      override: {
        mutator: {
          path: "./packages/api-client/src/client.ts",
          name: "customFetch",
        },
      },
    },
  },
});
