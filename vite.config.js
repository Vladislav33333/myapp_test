import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Оптимизации
  build: {
    outDir: "dist",
    minify: "terser", // Сжимает код сильнее
    sourcemap: true,
  },

  // Настройки сервера
  server: {
    open: true,
    port: 3000, // Фиксированный порт
    strictPort: true, // Не искать свободный порт
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
