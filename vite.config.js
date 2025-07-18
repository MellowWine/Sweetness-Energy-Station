import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 这是最重要的部分！
  // base 的值应该是 "/<你的仓库名>/"
  // 例如，如果你的仓库是 "sweetness-energy-station"，就填 "/sweetness-energy-station/"
  base: '/sweetness-energy-station/', 

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})