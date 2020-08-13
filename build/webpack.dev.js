const webpack = require("webpack");
const {merge} = require("webpack-merge");
const commonConifg = require("./webpack.common")

const devConfig = {
  mode:'development', // development模式
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    host: "localhost",
    port: 3500, 
    proxy: {
      '/api': "http://localhost:3000/"
    },
    hot: true
    // hotOnly: true
  },
  resolve:{
    extensions:['.js','.jsx','.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
    usedExports:true
  }
}

module.exports = merge(commonConifg, devConfig)