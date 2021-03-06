// the name of the file can be either webpack.dev.js or webpack.development.js

// used to merge another webpack config file with this config file
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

// html-webpack plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
const plugin_html_webpack = new HTMLWebpackPlugin({template: './public/index.html'});
// module federation plugin
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const plugin_module_federation = new ModuleFederationPlugin({
    name: 'home',
    // filename not fileName
    filename: 'remoteEntry.js',
    exposes: {
        './HomeApp' : './src/boot.js'
    }
})

// development specific configuration
const devConfig = {
    mode: 'development',
    devServer: {
        port: 5003,
        historyApiFallback: {
            index: '/index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
        publicPath: 'http://localhost:5003/'
    },
    plugins: [ plugin_html_webpack, plugin_module_federation ]
}

// keep devConfig after commonConfig so that it has higher precedence
module.exports = merge(commonConfig, devConfig);