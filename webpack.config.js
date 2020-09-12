const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const clientConfig = {

    entry: "./client/index.js",
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, 'dist/public'),
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: [
                                        'last 2 versions'
                                    ]
                                },
                                modules: false // Needed for tree shaking to work.
                            }
                        ],
                        '@babel/preset-react'
                    ],
                },
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]",
                    publicPath: url => url.replace(/public/, "")
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
    ]

};

const serverConfig = {
    
    entry: "./server/server.js",
    target: "node",
    output: {
        filename: `server.js`,
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                browsers: [
                                    'last 2 versions'
                                ]
                            },
                            modules: false // Needed for tree shaking to work.
                        }
                    ],
                    '@babel/preset-react'
                ],
            },
        },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    emit: false
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "css-loader",
                }]
            }
        ]
    }
};

module.exports = [clientConfig, serverConfig];