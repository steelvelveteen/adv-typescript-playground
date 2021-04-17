const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
    return {
        mode,
        entry: {
            main: './src/index.ts'
        },
        devtool: 'inline-source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contentHash].js'
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    use: 'html-loader'
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/i,
                    use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
                },
                {
                  test: /\.(png|jpe?g|gif)$/i,
                  use: [
                    {
                      loader: "file-loader"
                    }
                  ]
                },
                {
                  test: /\.svg$/,
                  loader: 'svg-inline-loader'
              }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/template.html',
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'main.css'
            })
        ]
    };
};