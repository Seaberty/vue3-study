<script setup>
import { ref } from "vue"
const imgPath = ref("/images/messi.png")

const changeImg = () => {
    imgPath.value = "/images/neymar.png"
}

const attrs = {
    id: "box1",
    class: "hello"
}

const isDisabled = "true"

const attrName = "title"
const attrValue = "这是一个title属性"
</script>

<template>
    <!-- 
        当我们需要为标签动态的添加属性时，需要使用 v-bind 指令
            v-bind 可以简写为 : 

        当我们为一个布尔值设置属性时，
            如果值为 true，则该元素上有该属性（转换为 true，也算 true）
            如果值为 false，则该元素上没有该属性（转换为 false，也算 false）
            ! 特殊情况：
                "" 空串，在这里会被当成真值
    -->
    <!-- <button @click="changeImg">切换图片</button> -->
    <!-- <img v-bind:src="imgPath" alt="梅西" /> -->

    <!-- 动态添加属性 -->
    <img :[attrName]="attrValue" :src="imgPath" alt="梅西" />

    <!-- 给标签添加多个属性 -->
    <div :="attrs"></div>

    <input type="text" :disabled="isDisabled" />
</template>
