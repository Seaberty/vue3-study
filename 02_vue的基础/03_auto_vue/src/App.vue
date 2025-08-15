<script setup>
import { ref } from "vue"
const msg = ref("Hello Vue")

const changeMsgHandle = () => {
    msg.value = "哈哈"
}
</script>

<template>
    <!-- ref 对象在对象模板中可以自动解包（要求 ref 对象必须是顶层对象） -->
    <h1 class="box1">{{ msg }}</h1>
    <button @click="changeMsgHandle">点我一下</button>
</template>

<style scoped>
.box1 {
    color: red;
}
</style>
