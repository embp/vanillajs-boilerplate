const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');

const config = {
    entry: {
        index: ['./src/index.js'],
        privacyPolicy: ['./src/privacy-policy/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/privacy-policy/index.ejs',
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
        ),
        // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
        new ImageminPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                [
                "svgo",
                {
                    plugins: [
                    {
                        removeViewBox: false
                    }
                    ]
                }
                ]
            ]
            }
        }),
    ],
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')]
    }
};

module.exports = config;
