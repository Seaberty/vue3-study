<script>
import MyButton from "./components/MyButton.vue"
import { shallowReactive } from "vue"

export default {
    data() {
        // data 返回的对象最终会被 vue 所代理
        // this.$data.xxx = "xxx" 动态添加响应式数据（不建议这么做）
        // 建议将那些暂时没有使用到的属性，也添加到 data 返回的对象中，值可以设置为 null
        return {
            msg: "今天天气真不错",
            // vue 在构建响应式对象时，会同时将对象中的属性也做成响应式属性
            // 深层响应式对象
            stu: {
                name: "孙悟空",
                age: 18,
                gender: "男",
                friend: {
                    name: "猪八戒",
                },
            },

            hello: null,
        }

        // 创建浅层响应式对象
        // 直接修改对象的属性或数组的元素则不会响应式处理
        // return shallowReactive({
        //     msg: "大闸蟹今天没去玩游戏",
        //     stu: {
        //         name: "孙悟空",
        //         age: 18,
        //         gender: "男",
        //         friend: {
        //             name: "猪八戒",
        //         },
        //     },
        // })
    },
    components: {
        MyButton,
    },
}
</script>
<template>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
    <h2>{{ hello }}</h2>
    <hr />
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>