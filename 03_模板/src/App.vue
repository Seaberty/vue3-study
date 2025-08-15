<script setup>
const arr = ["box1", "box2", "box3"]
const arr2 = [{ box1: true, box2: true, box3: false }] // false的属性不显示
const style = {
    color: "red",
    backgroundColor: "#bfa"
}
</script>

<template>
    <div>
        <h1 class="header">我爱Vue</h1>
        <!-- <div :class="arr">我是div</div> -->
        <div :class="arr2" :style="style">我是div</div>
    </div>
</template>

<style scoped>
.header {
    background-color: orange;
}
</style>
