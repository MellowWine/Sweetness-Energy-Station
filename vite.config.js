import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // --- 这里是唯一需要你确认和修改的地方 ---
  // 请确保这里的仓库名和你的 GitHub 仓库名完全一样！
  base: '/Sweetness-Energy-Station/', 
  // -----------------------------------------

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})