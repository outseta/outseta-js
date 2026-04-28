import { defineConfig } from "orval";

export default defineConfig({
  outseta: {
    input: "./openapi.json",
    output: {
      target: "./packages/api-client/src/generated",
      schemas: "./packages/api-client/src/generated/models",
      mode: "tags-split",
      clean: true,
      client: "fetch",
      override: {
        header: false,
        mutator: {
          path: "./packages/api-client/src/client.ts",
          name: "customFetch",
        },
      },
    },
  },
  outsetaReactQuery: {
    input: "./openapi.json",
    output: {
      target: "./packages/react/src/generated",
      mode: "tags-split",
      clean: true,
      client: "react-query",
      override: {
        header: false,
        mutator: {
          path: "./packages/react/src/mutator.ts",
          name: "customFetch",
        },
      },
    },
  },
});
