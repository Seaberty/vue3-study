// 根组件 在vue3中，组件就是一个对象
// 引入 MyButton 子组件
import MyButton from "../components/MyButton"

export default {
    data() {
        return {
            msg: '我爱vue！'
        }
    },
    // 注册字组件
    components: {
        // mybutton: MyButton
        MyButton
    },

    /* 
        template 是用字符串的形式在编写模板
            1. 这些字符串会在项目运行时，在浏览器中被编译为 js 的函数（性能不太好）
            2. 其次，在字符串中编写代码，体验很差

        为了解决上述问题，Vue 为我们提供了一种单文件模式（SFC）
            - 单文件组件的格式是 vue
            - vue 文件用来编写单文件组件，vue 文件本身并不能被浏览器识别，所以必须使用构建工具打包后，才能使用
            - 同时 vue 文件在打包时，构建工具会直接将 template 转换为函数，无需在浏览器中再去编译，这样一来性能也会有所提示
    */
    template: `
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    `
}