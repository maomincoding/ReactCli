const webpack = require("webpack");
const path = require('path');
const apiMocker = require('mocker-api');
const {merge} = require("webpack-merge");
const commonConifg = require("./webpack.common");
const portfinder = require('portfinder');

// 端口号
portfinder.basePort = 5000; 

const devConfig = merge(commonConifg,{
  mode:'development', // development模式
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    hot: true,
    hotOnly: true,
    compress:true,
    open: true,
    progress: true,
    historyApiFallback:true,
    host: "localhost",
    port: process.env.PORT,
    https: false,
    before(app) {
      apiMocker(app, path.resolve('./mock/mocker.js'))
    }, 
    // proxy: {
    //   '/api': {
    //     target: "http://localhost:5000",
    //     changeOrigin: true,
    //     // ws: true,//websocket支持
    //     secure: false,
    //     pathRewrite: {
    //       "^/api": "/"
    //     }
    //   }
    // }
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