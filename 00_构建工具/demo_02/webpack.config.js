const path = require("path")
module.exports = {
    mode: "production", // 设置打包的模式，production 生产模式 development 开发模式
    // entry: "./hello/hello.js" // 用来指定打包时的主文件，默认为 './src/index.js'，不建议修改
    // entry: ['./src/a.js', './src/b.js'] // 指定多个入口文件，会合并到一个文件中
    // entry: {
    //     hello: './src/a.js',
    //     b: './src/b.js'
    // } // 指定多个入口文件，保留多个文件，且对象的属性名为文件名
    entry: "./src/a.js",

    output: {
        path: path.resolve(__dirname, "dist"), // 指定打包的目录，必须是绝对的路径
        filename: "bundle-[id]-[fullhash].js", // 打包后的文件名 [参数]
        clean: true, // 自动清理打包目录
    }, // 配置代码打包后的地址
}