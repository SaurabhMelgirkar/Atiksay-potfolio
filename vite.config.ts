import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  // ✅ ALWAYS use repo name for GitHub Pages
  base: "/Atiksay-potfolio/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    componentTagger(), // optional, safe in prod
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
