const path = require('path')

const outputPath = path.resolve(__dirname,'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
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
            }
        ]
    },
    devServer: {
        contentBase:outputPath
    }
}