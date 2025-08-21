<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="tab-img">
            <img :src="item.img" :alt="item.name" />
            <span class="tab-rate">1</span>
        </div>
        <!-- 排名 -->
        <div class="desc">
            <div class="name">{{ item.name }}</div>
            <div class="hot-bar">
                <div class="inner">{{ item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue"
const props = defineProps(["item"])
// console.log(props)
</script>

<style scoped>
.tab-item {
    margin: 20px 0;
    display: flex;
}

.tab-img {
    background-color: #fff;
    width: 150px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
}
.tab-img img {
    width: 100%;
    /* 解决图片底部不对齐的问题 */
    vertical-align: top;
}

.tab-rate {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
    background-color: #f56600;
    border-radius: 20px 0;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.desc {
    margin-left: 30px;
    color: #fff;
    font-size: 30px;
    /* background-color: #bfa; */
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    flex: auto;
}

.hot-bar {
    background-color: #022467;
    border-radius: 20px;
    text-indent: 0.5em;
    overflow: hidden;
}

.inner {
    background-color: #f56600;
    border-radius: 20px;
    background-image: linear-gradient(90deg, #bb0434 50%, #4d0212);
    /* width: 50%; */
    /* width: 10%; */
    white-space: nowrap;
}
</style>
