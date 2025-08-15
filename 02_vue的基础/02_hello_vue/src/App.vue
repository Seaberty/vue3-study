<script>
// 引入子组件
import MyButton from "../components/MyButton.vue";
export default {
    data() {
        return {
            msg: "我超爱vue！",
        };
    },

    components: {
        MyButton,
    },
};
</script>

<template>
    <div>
        <h1>{{ msg }}</h1>
        <MyButton></MyButton>
    </div>
</template>