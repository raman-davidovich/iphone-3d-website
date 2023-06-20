import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import analize from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), analize.default()],
});
