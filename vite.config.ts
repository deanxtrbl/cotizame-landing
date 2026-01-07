import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "solving-poster-repository-cleveland.trycloudflare.com",
      ".trycloudflare.com",
    ],
  },
});
