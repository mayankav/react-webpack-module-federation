// the name of the file can be either webpack.dev.js or webpack.development.js

// used to merge another webpack config file with this config file
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

// html-webpack plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
const plugin_html_webpack = new HTMLWebpackPlugin({template: './public/index.html'});
// module-federation plugin
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const plugin_module_federation = new ModuleFederationPlugin({
    name: 'container',
    remotes: {
        // marketing in the key is just an alias 
        // marketing in the value is the name of the remote as mentioned in marketing's webpack config
        marketing: 'marketing@http://localhost:5001/remoteEntry.js'
    },
    shared: ['react', 'react-dom']
});

// development specific configuration
const devConfig = {
    mode: 'development',
    devServer: {
        port: 5000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [ plugin_html_webpack, plugin_module_federation ]
}

// keep devConfig after commonConfig so that it has higher precedence
module.exports = merge(commonConfig, devConfig);