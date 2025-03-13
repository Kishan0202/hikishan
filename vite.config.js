import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({

  plugins: [react(), tailwindcss()],
  base: './', // Change this to your deployment path
  build: {
    outDir: 'docs' // Change this to your desired output directory
  }
})
