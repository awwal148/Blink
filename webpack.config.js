const path = require("path");
const {BundleAnalyserPlugin} = require("webpack-bundle-analyzer");

module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/present-env"],
                    },
                },
            },
        ],
    },
    optimization: {
        usedExports: true,
    },
    Plugins: [new BundleAnalyserPlugin()]
};











// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'images/',
//               publicPath: 'images/'
//             }
//           },
//           {
//             loader: 'image-webpack-loader',
//             options: {
//               mozjpeg: {
//                 progressive: true,
//                 quality: 65
//               },
//               optipng: {
//                 enabled: false,
//               },
//               pngquant: {
//                 quality: [0.65, 0.90],
//                 speed: 4
//               },
//               gifsicle: {
//                 interlaced: false,
//               },
//               webp: {
//                 quality: 75
//               }
//             }
//           }
//         ]
//       }
//     ]
//   }
// };
