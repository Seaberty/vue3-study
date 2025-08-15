// 入口文件
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'


// 挂载实例
// mount() 的返回值就是根组件的实例
const vm = createApp(App).mount('#app')