import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: './public',
  build: {
    outDir: 'build',
    assetsDir: 'static', // Change assetsDir to 'static'
    base: '/static/',
  },
})
