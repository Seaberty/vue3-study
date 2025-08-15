// 引入 vue
// 这里引入的 vue 版本，默认不支持通过 template 属性来设置模版
import { createApp } from "vue/dist/vue.esm-bundler.js";

// 创建一个根组件
const Root = {
    data() {
        return {
            message: "I love Vue"
        }
    },
    template: "<h1>{{message}}</h1>"
}

// 挂载实例
createApp(Root).mount('#app')