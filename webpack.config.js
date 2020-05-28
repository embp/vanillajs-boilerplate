const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('@babel/register');

const config = {
    entry: {
        index: ['@babel/polyfill', './src/index.js'],
        privacyPolicy: ['@babel/polyfill', './src/privacy-policy/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // Allows url image references in css to work
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.webmanifest$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/privacy-policy/index.html',
            filename: 'privacy-policy/index.html',
            inject: true,
            chunks: ['privacyPolicy']
        }),
        new CopyPlugin(
            [
                { from: './src/site.webmanifest', to: './', flatten: true },
                { from: './src/*.png', to: './', flatten: true },
                { from: './src/favicon.ico', to: './', flatten: true },
                { from: './src/robots.txt', to: './', flatten: true }
            ],
            {
                copyUnmodified: true
            }
        )
    ],
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')]
    },
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
};

module.exports = config;
