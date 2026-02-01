import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "node:path";

const PROJECT_ROOT = __dirname;

export default defineConfig({
  // 🔑 REQUIRED for GitHub Pages (repo name)
  base: "/prasanthgerike-portfolio-source/",

  // Your frontend lives here
  root: path.resolve(PROJECT_ROOT, "client"),

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
    },
  },

  build: {
    // Build output (we copy this to /docs)
    outDir: path.resolve(PROJECT_ROOT, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
});
