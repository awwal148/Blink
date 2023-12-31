const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

plugins: [
    new webpack.DefinePlugin({// <-- key to  reducing react size
        
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
]
