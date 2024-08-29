import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://hotel-booking-backend-kohl.vercel.app'
    }
  },
  plugins: [react(),eslint()],
})