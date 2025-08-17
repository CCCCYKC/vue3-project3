import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import Router from './router/router'
import pinia from './store/pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// 注册element-plus的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 路由挂载
app.use(Router);
app.use(pinia);

app.mount('#app')
