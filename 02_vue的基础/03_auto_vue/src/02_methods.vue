<script>
export default {
    // data 用来指定实例对象中的响应式属性
    data() {
        return {
            msg: "今天天气真不错",
        }
    },

    /* 
        methods 用来指定实例对象中的方法
            - 它是一个对象，可以在它里面定义多个方法
            - 这些方法最终会被挂载到组件实例上
            - 可以直接通过组件实例来调用这些方法
            - 所有组件实例上的属性都可以在模板中直接访问
            - methods 中函数的 this 会被自动绑定为组件实例
    */
    methods: {
        sum(a, b) {
            console.log(this)

            return a + b
        },

        changeMsg() {
            this.msg = "新的消息"
        },
    },
}
</script>
<template>
    <h1>{{ msg }}</h1>
    <h2>{{ sum(3, 5) }}</h2>
    <hr />
    <button @click="changeMsg">点击更改</button>
</template>