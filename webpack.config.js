const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const outputPath = path.resolve(__dirname,'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.(sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|ico)$/i,
                loader:'url-loader',
                options: {
                    limit:2048,
                    name:'./image/[name].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    devServer: {
        contentBase:outputPath
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                compress:{
                    drop_console:true
                }
            }
        })],
    },
}