const webpack = require("webpack");
const {merge} = require("webpack-merge");
const commonConifg = require("./webpack.common")
const portfinder = require('portfinder');

// 端口号
portfinder.basePort = 5000; 

const devConfig = merge(commonConifg,{
  mode:'development', // development模式
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    historyApiFallback:true,
    host: "localhost",
    port: process.env.PORT,
    proxy: {
      '/api': "http://localhost:3000/"
    },
    hot: true,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
    usedExports:true
  }
})

module.exports = new Promise((resolve, reject) => {
  //查找端口号
  portfinder.getPort((err, port) => {

    if (err) {
      reject(err);
      return;
    }

    //端口被占用时就重新设置evn和devServer的端口
    devConfig.devServer.port = process.env.PORT = port;

    resolve(devConfig);

  });

});