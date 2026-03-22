import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "/",

  css: {
    transformer: "lightningcss",
  },

  build: {
    outDir: "dist-docs",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
