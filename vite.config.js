import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  base: './', // Change this to your deployment path
  build: {
    outDir: 'docs' // Change this to your desired output directory
  }
})
