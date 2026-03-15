import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from './plugins/vite-plugin-markdown'
import contentImages from './plugins/vite-plugin-content-images'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, writeFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [
    react(),
    markdown(),
    contentImages(),
    {
      name: 'spa-fallback-postbuild',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        try {
          mkdirSync(outDir, { recursive: true })
          copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
          writeFileSync(resolve(outDir, '.nojekyll'), '')
        } catch {
          // Build output not available (e.g. dev mode) — skip
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@content': resolve(__dirname, 'content'),
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    host: '0.0.0.0', // 监听所有网卡地址（之前解决 403 的配置）
    port: 5173, // 保持项目端口一致
    // 允许访问的主机白名单
    allowedHosts: [
      // 方式1：添加当前 ngrok 域名（临时，重启 ngrok 域名变了要重新加）
      '7b94-153-3-60-211.ngrok-free.app',
      // 方式2：允许所有 ngrok-free.app 子域名（推荐，无需频繁改）
      '.ngrok-free.app',
      // 方式3：允许所有主机（测试用，生产环境不建议）
      // 'all'
    ]
  }
})
