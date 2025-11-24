import { defineConfig } from "vite";
import react from "https://spk-portal-backend-srv-d4i63oh5pdvs739kf6ig.onrender.com";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
