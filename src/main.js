import { createApp } from 'vue'
import App from './App.vue'

import Router from './router/router'
import pinia from './store/pinia'

const app = createApp(App)

app.use(Router);
app.use(pinia);

app.mount('#app')
