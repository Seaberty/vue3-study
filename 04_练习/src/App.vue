<script setup>
import { ref, reactive } from "vue"
import TabItem from "./components/TabItem.vue"
const current = ref(0) // 当前选中的tab

const player = reactive({
    name: "梅西",
    img: "/images/messi.png",
    rank: 1,
    hot: 33344
})

const teamList = reactive({
    name: "法国",
    img: "/images/法国.jpg",
    rank: 1,
    hot: 23344
})
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
                <div v-show="current === 0">
                    <!-- 球员 -->
                    <TabItem :item="player"></TabItem>
                </div>

                <div v-show="current === 1">
                    <!-- 球队 -->
                    <TabItem :item="teamList"></TabItem>
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
    transition: 0.5s;
}

.tab-list {
    margin: 0 20px;
}
</style>
