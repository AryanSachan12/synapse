import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // define: {
  //   'process.env.VITE_AUTH0_DOMAIN' : JSON.stringify(process.env.VITE_AUTH0_DOMAIN)
  // }
});
