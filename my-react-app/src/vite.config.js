import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Anda dapat mengubah port sesuai kebutuhan
  },
  build: {
    outDir: 'dist', // Direktori output untuk build
  },
});