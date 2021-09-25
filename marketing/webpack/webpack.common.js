// the name of the file should be webpack.common.js

const babelRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            // for JSX and for ES7/6 tranpilation
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // for modern features like async await
            plugins: ['@babel/plugin-transform-runtime']
        }
    }
}

module.exports = {
    module: {
        rules: [ babelRule ]
    }
}