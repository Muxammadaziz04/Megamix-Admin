import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: '@components/',
        replacement: resolve(__dirname, 'src/components')
      }
    ]
  },
  server: {
    host: true
  }
})
