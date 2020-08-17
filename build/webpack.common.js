const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV != 'production'

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src/index.js")
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', ".scss", ".css"],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/, // 可以多加几个格式的文件
                exclude: path.resolve(__dirname, "../node_modules"),
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: 'url-loader', // file-loader/url-loader
                    options: {
                        // placeholders 占位符
                        name: '[name].[ext]', // 这样就还会保持原来的文件名
                        outputPath: 'imgs/', // 图片打包输出的路径
                        limit: 2048 // 限制文件大小(如果图片文件大于该值会打包出图片文件)
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.scss$/,
                // MiniCssExtractPlugin.loader
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    // 不管你是在js中直接引入css,还是在css中再引入css文件。加上下面的importLoaders，都会走sass-loader和postcss-loader。
                    options: {
                        importLoaders: 2,
                        modules: true // 应用css Modules
                    }
                }, "sass-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "ReactCli", template: './public/index.html', favicon: "./public/favicon.ico" }),
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../')
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name]-buddle.css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: true,
                    chunks: 'all',
                    automaticNameDelimiter: '~',
                    maxInitialRequests: 3,
                    maxAsyncRequests: 5,
                    priority: -10
                }
            }
        }
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    }
}