import { defineConfig } from "vite";
import react from "https://spk-portal-frontend.onrender.com";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
