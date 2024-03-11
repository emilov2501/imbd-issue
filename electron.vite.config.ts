import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin, splitVendorChunkPlugin } from 'electron-vite'
import { resolve } from 'path'
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    preview: {
      port: 1234
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), splitVendorChunkPlugin()]
  }
})
