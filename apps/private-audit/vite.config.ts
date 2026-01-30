import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/private-audit/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
