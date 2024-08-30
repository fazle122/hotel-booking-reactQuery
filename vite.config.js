import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // proxy:{
    //   // '/api':'http://localhost:8000'
    //   '/api':'https://hotel-booking-backend-kohl.vercel.app'
    // }
    // proxy: {
    //   '/api': {
    //     target: 'https://hotel-booking-backend-kohl.vercel.app',
    //     changeOrigin: true,
    //     secure: false,
    //   }
    // }
  },
  plugins: [react(),eslint()],
})




