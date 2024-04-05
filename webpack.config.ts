import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const CopyPlugin = require('copy-webpack-plugin');


type Mode = 'production' | 'development';

interface EnvVariables{
  mode: Mode
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'), //путь к точке входа//
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            clean: true,
            // publicPath: '/',
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
              filename: 'style.css',
            }),
            new CopyPlugin({
              patterns: [
                { from: 'src/img', to: 'img' },
              ],
            }),
        ],
        module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
              },
            ],
          },
          resolve: {
            extensions: ['.tsx', '.ts', '.js'],
          },
          devtool: 'inline-source-map',
          devServer:{
            port: 8080,
            open: true,
          },
          stats: {
            errorDetails: true,
          },
          
    };
    return config
}

  