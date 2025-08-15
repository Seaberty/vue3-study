// 创建一个对象
// const obj = {
//     name: "孙悟空",
//     age: 18
// }

/* 
    如果直接修改对象的属性，那么就是仅仅修改了属性，没有去做其他的事情，
        这种操作只会影响对象自身，不会导致元素的重新渲染

    我们希望在修改一个对象属性的同时，可以进行一些其他的操作，比如触发元素的重新渲染！

    要实现这个目的，必须要对对象进行改造，vue3 中使用的是代理模式来完成对象的改造
*/
// obj.name = "猪八戒"

// 创建一个对象
const obj = {
    name: "孙悟空",
    age: 18
}

// 来为对象创建一个代理
const handle = {
    // get 用来指定读取数据时的行为，它的返回值就是最终读取到的值
    // 指定 get 后，在通过代理读取对象属性时，就会调用 get 方法来获取值

    get(targer, prop, receiver) {
        // 返回值之前做一些其他的操作...
        // 在 vue 中，data() 返回的对象会被 vue 所代理
        // vue 代理后，当我们通过代理去读取属性时，返回值之前，它会先做一个跟踪的操作
        // 当我们通过代理去修改属性时，修改后，会通知之前所有用到该值的位置进行更新

        // track() 跟踪谁用了我这个属性
        /* 
            三个参数：
                targer 被代理的对象
                prop 读取的属性
                receiver 代理对象
        */
        return target[prop]
    },

    set(targer, prop, value, receiver) {
        target[prop] = value

        // trigger() 触发所有的使用该值的位置进行更新
        // 值修改之后做一些其他的操作
    }
} // handle 用来指代代理的行为

// 创建代理
const proxy = new Proxy(obj, handle)

// 修改代理的属性
proxy.age = 28

console.log(proxy.name);