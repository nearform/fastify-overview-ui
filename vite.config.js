import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/fastify-overview-ui/',
  server: {
    port: 3001,
    proxy: {
      '/json-overview-ui': 'http://localhost:3000'
    }
  }
})
