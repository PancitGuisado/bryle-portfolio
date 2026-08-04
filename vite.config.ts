import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "favicon.svg"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,mp4,jpg,jpeg,webp,woff2}"],
        maximumFileSizeToCacheInBytes: 150000000,
      },
      manifest: false, // We're using the existing site.webmanifest in index.html
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
