import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      '/novel/novelHot': {
        //target: 'http://localhost:10001',
        target: 'https://scxs.pysmei.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/novel\/novelHot/, '')
      },
      '/novel/novelSearch': {
        target: 'https://souxs.leeyegy.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/novel\/novelSearch/, '')
      },
      '/novel/chapterList': {
        target: 'https://infosxs.pysmei.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/novel\/chapterList/, '')
      },
  }
}})
