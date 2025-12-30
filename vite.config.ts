import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Build with AI",
        short_name: "BUILD WITH AI",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#6d28d9",
        description: "Build with AI — hackathon by Oriyonbonk and Softclub",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  }
});
