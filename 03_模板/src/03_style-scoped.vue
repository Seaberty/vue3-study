<template>
    <div class="app">
        <h1>今天天气真不错啊</h1>
        <h2>今天天气真不错啊</h2>
        <div class="box1">我是App中的box1</div>
        <MyBox></MyBox>
    </div>
</template>

<script setup>
import MyBox from "./components/MyBox.vue"
</script>

<!-- 
    可以直接通过 style 标签来编写样式
        如果直接通过 style 标签来编写样式，此时编写的样式是全局样式
        会影响到所有组件
-->

<!-- <style>
.box1 {
    background-color: yellowgreen;
}
</style> -->

<!-- 
    可以为 style 标签添加一个 scoped 属性，这样样式将成为局部样式，只对当前组件生效
    如何实现的？
        - 当我们在组件中使用 scoped 样式时，vue 会自动为组件中的所有元素生成一个随机的属性
            形如：data-v-7a7a37b1
            生成后，所有的选择器都会在最后添加一个 [data-v-7a7a37b1]
                h1 -> h1[data-v-7a7a37b1]
                .box1 -> .box1[data-v-7a7a37b1]
        
        ! 注意： 
            - 随机生成的属性，除了会添加到当前组件内的所有元素上，也会添加到当前组件引入的其他组件的根元素上，这样设计是为了可以通过父组件来为子组件设置一些样式
-->
<style scoped>
h1 {
    background-color: #bfa;
}
.box1 {
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
}

/* 
    将组件中所有的 h2 的字体颜色设置为黄色
    .app h2 --> .app h2[xxx]
    .app h2[data-v-7a7a37b1] 没用deep
    .app[data-v-7a7a37b1] h2 用了deep
*/
.app :deep(h2) {
    color: yellow;
}

/* 
    :global() 全局选择器
*/
:global(div) {
    border: 1px solid red;
}
</style>
