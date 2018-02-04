const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './scripts/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin()
    ]
};
