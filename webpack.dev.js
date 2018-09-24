const webpack = require('webpack');
const merge = require('webpack-merge');
const common= require('./webpack.common.js');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
    devServer: {
        contentBase: DIST_DIR,
        port: 8080,
        hot: true
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
