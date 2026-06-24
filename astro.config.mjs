import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://eudysjmora.dev",
  output: "static",
  build: {
    format: "directory",
  },
});
