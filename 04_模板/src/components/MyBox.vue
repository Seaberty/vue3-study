<template>
    <div>
        <h2>我是MyBox组件</h2>
        <div :class="$style.box1">我是MyBox中的box1</div>
    </div>
    <!-- <h1>MyBox</h1> -->
</template>
<script setup></script>

<style module>
.box1 {
    background-color: yellow;
}
</style>
