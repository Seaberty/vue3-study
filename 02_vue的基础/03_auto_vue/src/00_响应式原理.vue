<script>
// 组件，一个组件可以创建多个组件实例
// 组件就是一个普通的 js 对象
export default {
    /* 
        data 是一个函数
        在 data 中，this 就是当前的组件实例 vm
        如果使用箭头函数，则无法通过 this 来访问组件实例
        使用 vue 时，尽量减少使用箭头函数
    */
    // data: vm => {
    //     console.log('data', vm);
    // }
    data() {
        // console.log("data", this)

        // 直接向组件实例中添加的属性不会被 vue 所代理，不是响应数据，修改后页面不会发生变化
        this.name = "孙悟空"

        // vm.$data 是实际的代理对象，通过 vm 可以直接访问到 $data 中的属性
        // vm.$data.msg 等价于 vm.msg
        // 可以通过 vm.$data 动态的向组件中添加响应式数据

        // data 会返回一个对象作为返回值，vue 会对该对象进行代理
        // 从而将其转化为响应式数据，响应式数据可以直接通过组件实例访问
        return {
            msg: "我爱vue",
        }
    },
}
</script>
<template>
    <h1>{{ msg }}</h1>
</template>