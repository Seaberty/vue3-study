<script>
import { reactive } from "vue"
export default {
    // 定义变量
    // 在组合式 api 中直接声明的变量，就是一个普通的变量，不是响应式的属性
    //      修改这些属性时，不会在视图中产生效果
    setup() {
        let msg = "今天天气真不错"

        function changeMsg() {
            msg = "新的消息！"
        }

        // 可以通过 reactive() 来创建一个响应式的对象
        const stu = reactive({
            name: "孙悟空",
            age: 18,
            gender: "男",
        })

        function changeAge() {
            stu.age = 19
        }

        // 在 setup() 中可以通过返回值来指定哪些内容要暴露给外部
        // 暴露后的内容，可以在模板中直接使用
        return {
            msg,
            changeMsg,
            stu,
            changeAge,
        }
    },
}
</script>
<template>
    <h1>
        {{ msg }}
    </h1>
    <button @click="changeMsg">修改消息</button>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
    <button @click="changeAge">点我一下</button>
</template>