// the name of the file can be either webpack.prod.js or webpack.production.js

// used to merge another webpack config file with this config file
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

// production specific configuration
const prodConfig = {
    mode: 'production',
    
}