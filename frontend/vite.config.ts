import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = Number(process.env.LANDING_PORT_TARGET) || 8088
const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'https://localhost:8300'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_API_GATEWAY_URL': JSON.stringify(API_GATEWAY_URL),
    'import.meta.env.VITE_OAUTH_AUTHORIZE_URL': JSON.stringify('https://localhost:8003/o/authorize/'),
    'import.meta.env.VITE_OAUTH_CLIENT_ID': JSON.stringify('DZPOOZAXy2lhHEpSWNQt05YGWOn6zHo4dwVbBU7P'),
    'import.meta.env.VITE_OAUTH_REDIRECT_URI': JSON.stringify('https://localhost:8300/oauth/callback')
  },
  server: {
    hmr: false,
    port: PORT,
    host: HOST
  }
})