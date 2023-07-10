import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({include: "**/*.jsx"})],
  publicDir: 'public',
  build: {
    outDir: 'build'
  },
  server: {
    host: true
  }
})
