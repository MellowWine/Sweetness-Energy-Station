import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入我们即将创建的全局样式
import './assets/main.css'

const app = createApp(App)

// 使用 Pinia
app.use(createPinia())
app.use(router)

app.mount('#app')