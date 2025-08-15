<script setup>
import { ref } from "vue"
const current = ref(0) // 当前选中的tab
</script>

<template>
    <div class="tab-wrapper">
        <!-- tab头部 -->
        <div class="tab-header">
            <div
                @click="current = 0"
                class="tab-button"
                :class="{ active: current === 0 }"
            >
                热门球员
            </div>
            <div
                @click="current = 1"
                class="tab-button"
                :class="{ active: current === 1 }"
            >
                热门球队
            </div>
        </div>

        <!-- tab主体 -->
        <main>
            <div class="tab-list">
                <!-- 单个tab -->
                <div v-show="current === 0" class="tab-item">
                    <!-- 图片 -->
                    <div class="tab-img">
                        <img src="/images/messi.png" alt="梅西" />
                        <span class="tab-rate">1</span>
                    </div>
                    <!-- 排名 -->

                    <!-- tab 右侧内容 -->
                    <div class="tab-right">
                        <div class="name">梅西</div>
                        <div class="hot-bar">
                            <div class="inner">33344热度</div>
                        </div>
                    </div>
                </div>

                <div v-show="current === 1" class="tab-item">
                    <!-- 图片 -->
                    <div class="tab-img">
                        <img src="/images/法国.jpg" alt="法国" />
                        <span class="tab-rate">1</span>
                    </div>
                    <!-- 排名 -->

                    <!-- tab 右侧内容 -->
                    <div class="tab-right">
                        <div class="name">法国</div>
                        <div class="hot-bar">
                            <div class="inner">33344热度</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* 全局样式应用 移除margin padding */
:global(body) {
    margin: 0;
    padding: 0;
}

.tab-wrapper {
    background-color: #2d53d3;
    padding: 20px;
    box-sizing: border-box;
    width: 800px;
}

.tab-header {
    background-color: #fff;
    display: flex;
    font-size: 28px;
    border-radius: 10px;
    overflow: hidden;
}

.active {
    background-color: #bb0434;
    color: #fff;
}

.tab-button {
    /* 让flex盒子自动伸缩 */
    flex: auto;
    text-align: center;
    padding: 10px 0;
}

.tab-list {
    margin: 0 20px;
}

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

.tab-right {
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
