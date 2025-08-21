<script setup>
import { reactive } from "vue"
const msg = "我超级爱Vue"
const count = 0

const stu = reactive({
    name: "孙悟空",
})

function fn() {
    alert("哈哈哈哈")
}
</script>

<template>
    <h1>{{ msg }} -- {{ count }}</h1>
    <button @click="fn()">点我一下</button>
    <h2>{{ stu.name }}</h2>
</template>