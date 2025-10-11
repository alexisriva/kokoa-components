import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "KokoaComponents",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `kokoa-components.${format === "es" ? "es" : "cjs"}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
