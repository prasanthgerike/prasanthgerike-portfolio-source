import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const PROJECT_ROOT = path.resolve();

export default defineConfig({
  base: "/prasanthgerike-portfolio-source/", // GitHub Pages repo name
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist/public"),
    emptyOutDir: true,
  },
});
