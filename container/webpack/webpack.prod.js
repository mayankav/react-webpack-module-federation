// the name of the file can be either webpack.prod.js or webpack.production.js

// used to merge another webpack config file with this config file
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;

// html-webpack plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
const plugin_html_webpack = new HTMLWebpackPlugin({template: './public/index.html'});
// module-federation plugin
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const plugin_module_federation = new ModuleFederationPlugin({
    name: 'container',
    shared: packageJson.dependencies,
    remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`
    }
});

// production specific configuration
const prodConfig = {
    mode: 'production',
    plugins: [plugin_module_federation, plugin_html_webpack],
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    }
}

// keep prodConfig after commonConfig so that it has higher precedence
module.exports = merge(commonConfig, prodConfig);