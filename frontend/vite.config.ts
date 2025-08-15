import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_OAUTH_AUTHORIZE_URL': JSON.stringify('https://localhost:8003/o/authorize/'),
    'import.meta.env.VITE_OAUTH_CLIENT_ID': JSON.stringify('DZPOOZAXy2lhHEpSWNQt05YGWOn6zHo4dwVbBU7P'),
    'import.meta.env.VITE_OAUTH_REDIRECT_URI': JSON.stringify('https://localhost:8300/oauth/callback')
  },
})
