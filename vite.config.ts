import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const PROJECT_ROOT = path.resolve();

export default defineConfig({
  base: "/prasanthgerike-portfolio-source/",   // GitHub Pages repo name
  root: path.resolve(PROJECT_ROOT, "client"),   // points to folder containing index.html
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist/public"), // build files go here
    emptyOutDir: true,
  },
});
