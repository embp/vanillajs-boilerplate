const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
require('@babel/register');

const config = merge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: __dirname + '/public',
        compress: true,
        port: 3000,
        open: true,
        stats: {
            assets: false,
            children: false,
            chunks: false,
            chunkModules: false,
            colors: true,
            entrypoints: false,
            hash: false,
            modules: false,
            timings: false,
            version: false
        }
    },
    watch: false,
    devtool: 'source-map'
});

module.exports = config;
