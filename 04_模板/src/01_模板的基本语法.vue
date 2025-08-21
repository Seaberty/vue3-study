<script setup>
const msg = "我爱vue"
const html = "<h2>这是一段html代码</h2>"
</script>

<template>
    <!-- 
        - 在模板中可以直接访问到组件中声明的变量
        - 除了组件中的变量外，vue 也为我们提供了一些全局对象可以访问：
            比如：Date、Math、RegExp ... 
            除此之外，也可以通过 app 对象来向 vue 中添加一些全局变量
            app.config.globalProperties
        - 使用插值(双大括号)，只能使用表达式
            表达式，就是有返回值的语句
        - 插值实际上就是在修改元素的 textContent，如果内容中含有标签，标签会被转义显示，不会作为标签显示

        指令：
            - 指令模板中为标签设置的一些特殊属性，它可以用来设置标签如何显示内容
            - 指令使用 v- 开头
                v-text 将表达式的值作为元素的 textContent 插入，作用同 {{}}
                    使用指令时，不需要通过 {{}} 来指定表达式
                v-html 将表达式的值作为元素的 innerHTML插入，有 xss 攻击的风险
    -->
    <h2>{{ msg }}</h2>
    <h3>{{ html }}</h3>
    <!-- <div>{{ hello }}</div> -->
    <div v-text="html"></div>
    <div v-html="html"></div>
</template>
