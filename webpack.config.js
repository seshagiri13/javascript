const Htmlwebpackpluging = require('html-webpack-plugin');
module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "cheap-eval-source-map",
    plugins: [
        new Htmlwebpackpluging({template: './index.html'})
      ], 
     module : {
         rules : [
             {
                test: /\.js$/,
                exclude: /node_modules/,
                
                loader: "babel-loader"
             },
             {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: "css-loader"}
                ]
             }
         ]
     }
}

