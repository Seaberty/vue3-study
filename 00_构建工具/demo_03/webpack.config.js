module.exports = {
    mode: "production", // 设置打包的模式，production 生产模式 development 开发模式
    entry: "./src/index.js",
    output: {
        // clean: true
    },
    // 配置 css 解析loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}