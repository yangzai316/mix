const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');


module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        clean: true,
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /(\.less|\.css)$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        modifyVars: getThemeVariables({
                            dark: true, // 开启暗黑模式
                            compact: true, // 开启紧凑模式
                        }),
                        javascriptEnabled: true,
                    },
                },
            }],
        },]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    devServer: {
        static: './dist',
    },
};