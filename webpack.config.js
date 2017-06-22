let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');


//一些常用路径
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'app');
let BUILD_PATH = path.resolve(ROOT_PATH, 'build');
let NODE_MODULES = path.resolve(ROOT_PATH, 'node_modules');


module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    resolve:{
        extensions:['.js','.jsx']
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',query: { presets: ['react', 'es2015'] } },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {importLoaders: 1} //这里可以简单理解为，如果css文件中有 import 进来的文件也进行处理
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')(), //css 浏览器兼容
                                require('cssnano')() //压缩css
                            ]
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
                // exclude: /node_modules/,
                // loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {importLoaders: 1} //这里可以简单理解为，如果css文件中有 import 进来的文件也进行处理
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')(), //css 浏览器兼容
                                require('cssnano')() //压缩css
                            ]
                        }
                    }
                ]
                // exclude: /node_modules/,
                // loader: 'style-loader!css-loader!postcss-loader'
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },
    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),


    ],

    devServer: {
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
};
