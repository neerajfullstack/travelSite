const path = require('path');
const postCSSPlugin = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]
module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        "filename": "bundled.js",
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        watchFiles: ['./app/**/**.html', './app/**/&*.css', './app/**/*.js'],
        static: './app',
        hot: true,
        port: 3000
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader", {loader: 'postcss-loader', options:{postcssOptions: {plugins: postCSSPlugin}}}]
            }
        ]
    }
}

// www.downloadly.ir