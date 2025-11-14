import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
            tailwind(),
          ],
  server: {
    proxy: {
      '/api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/kobisopenapi': {
        target: 'https://kobis.or.kr/kobisopenapi',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kobisopenapi/, '')
      },
    }
  },
})
 
