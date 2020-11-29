module.exports = {
  entry: {
    main: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // babel-loader 本身不含配置，所以我们同时需要安装 @babel/preset-env 并将其添加到 presets(一系列 babel config 的快捷方式)
            plugins: [["@babel/plugin-transform-react-jsx", {pragma: "createElement"}]]
          }
        }
      }
    ]
  },
  mode: "development", // 增加 dist 代码可读性
  optimization: {
    minimize: false // 不压缩
  }
}