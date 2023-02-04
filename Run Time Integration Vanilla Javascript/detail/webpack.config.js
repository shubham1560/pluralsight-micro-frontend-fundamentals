const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const { devServer } = require('../list/webpack.config');

module.exports = {
    mode: 'development',
    devServer: {
        port: 4100
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new FederationPlugin({
            name: 'detail',
            filename: 'detail.js',
            exposes: {
                './detailPage': './src/index'
            },
            shared: ['lodash']
        })
    ]
}