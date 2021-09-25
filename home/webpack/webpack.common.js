// the name of the file should be webpack.common.js

const { VueLoaderPlugin } = require('vue-loader');

const babelRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            // for JSX and for ES7/6 tranpilation
            presets: ['@babel/preset-env'],
            // for modern features like async await
            plugins: ['@babel/plugin-transform-runtime']
        }
    }
}

const imgRule = {
    test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
    use: {
        loader: 'file-loader'
    }
}

const vueRule = {
    test: /\.vue$/,
    use: {
        loader: 'vue-loader'
    }
}

const styleRule = {
    test: /\.scss|\.css$/,
    use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [ babelRule, imgRule, vueRule, styleRule ]
    },
    plugins: [ new VueLoaderPlugin() ]
}