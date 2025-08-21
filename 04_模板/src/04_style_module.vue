<template>
    <div class="app">
        <div :class="classes.box1">App中的box1</div>
        <MyBox></MyBox>
    </div>
</template>

<script setup>
import MyBox from "./components/MyBox.vue"
</script>

<!-- 
    css 模块
        - 自动的对模块中的类名进行 hash 化来确保类名的唯一性
        - 在模块中可以通过 $style.类名 使用
        - 也可以通过 module 属性值来指定变量名
-->
<style module="classes">
.box1 {
    background-color: #bfa;
}
</style>
