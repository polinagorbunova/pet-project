const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: {
        main: './main',
        polyfills: './polyfills'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts'],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    devtool: 'source-map'
}