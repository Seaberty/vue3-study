import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 添加全局属性
app.config.globalProperties.hello = 'hello'

app.mount('#app')