import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mindweal/',

  optimizeDeps: {
    esbuildOptions: {
      sourcemap: false
    }
  },

  esbuild: {
    sourcemap: false
  },

  build: {
    sourcemap: false
  },

  server: {
    sourcemapIgnoreList: () => true
  }
})
