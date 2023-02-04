const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {

    mode: 'development',
    devServer: {
        port: 4200,
    },
    plugins: [
        new FederationPlugin(
            {
                name: 'list',
                filename : 'list.js',
                exposes: {
                    './listIndex': './src/index'
                },
                shared: ['lodash']
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
            }
        )
    ]

}