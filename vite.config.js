import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tejas_Patil_Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
