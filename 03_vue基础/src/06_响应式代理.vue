<script setup>
import { reactive, ref } from "vue"
/* 
    reactive()
        - 返回一个对象的响应式代理
        - 返回的是一个深层响应式对象
        - 也可以使用 shallowReactive() 创建一个浅层响应对象
        - 缺点：
            - 只能返回对象的响应式代理！不能处理原始值

    ref()
        - 接收一个任意值，并返回它的响应式代理
*/
const stu = reactive({
    name: "孙悟空"
})

// ref 在生成响应式代理时，它是将值包装为了一个对象 0 --> {value: 0}
// 访问 ref 对象时，必须通过 对象.value 来访问其中的值
// 在模板中，ref 对象会被自动解包
let count = ref(0)

// count = 10 // 改变量只会影响到变量自己，在js中，无法实现对一个变量的代理
// console.log(count.value) // 0

// vue 给我们提供了一个语法糖，使得 ref 对象在 script 标签中也可以自动解包
// $ 是一个实验性的，需要在 vite 插件中做一些配置 reactivityTransform: true 已经废弃
function fn() {
    // count 自增
    count.value++
}
</script>

<template>
    <h1>{{ count }}</h1>
    <button @click="fn">{{ count }}</button>
</template>
