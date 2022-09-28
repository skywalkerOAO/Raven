import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      '/top/man': {
        //target: 'http://localhost:10001',
        target: 'https://scxs.pysmei.com',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      },
      '/search.aspx?':{
        target: 'https://souxs.leeyegy.com',
        changeOrigin: true,
      }
    }
  }
})
