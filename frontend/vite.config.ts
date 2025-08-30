import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const VITE_API_GATEWAY_URL = process.env.VITE_API_GATEWAY_URL || 'http://localhost:8300'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_API_GATEWAY_URL': JSON.stringify(VITE_API_GATEWAY_URL)
  }
})