import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mainContainer",
      remotes: {
        creationForm: "http://localhost:5173/assets/creationFormEntry.js",
        dashboard: "http://localhost:5174/assets/dashboardEntry.js",
        listing: "http://localhost:5175/assets/listingEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
