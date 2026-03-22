import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: {
        chrome: 100,
        firefox: 100,
        safari: 15,
        edge: 100,
      },
      drafts: {
        nesting: true,
      },
      minify: true,
    },
  },

  build: {
    cssMinify: "lightningcss",

    lib: {
      entry: resolve(__dirname, "src/lib/index.js"),
      name: "UILib",
      fileName: (format) => `ui-lib.${format}.js`,
      formats: ["es", "cjs"],
    },

    cssCodeSplit: false,

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? "asset";
          if (name.endsWith(".css")) return "ui-lib.css";
          return name;
        },
      },
    },

    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
