import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  // 🔥 IMPORTANT
  // For LOCAL development use "/"
  // Change to "/Atiksay-potfolio/" ONLY before GitHub Pages build
   base: "/Atiksay-potfolio/"
,

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    componentTagger(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
