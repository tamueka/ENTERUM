var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


var page = function ({title, template, chunks, filename}) {
  return new HtmlWebpackPlugin(
    {
      title: title,
      template: template,
      chunks: chunks,
      minify: {
        collapseWhitespace: true
      },
      filename: filename
    }
  )
}

var commonConfig = {
  entry:{
    articles: ['babel-polyfill', path.join(__dirname, 'src', 'pages', 'articles', 'index')],
    article: ['babel-polyfill', path.join(__dirname, 'src', 'pages', 'article', 'index')]
  },
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv(), 
    page({
      title: 'ENTERUM',
      template: path.join(__dirname, 'src', 'pages', 'articles', 'index.html'),
      chunks: ['articles'],
      filename: path.resolve(__dirname, 'dist', 'index.html')
      }),
    page({
      title: 'ARTICLES',
      template: path.join(__dirname, 'src', 'pages', 'article', 'index.html'),
      chunks: ['article'],
      filename: path.resolve(__dirname, 'dist', 'article', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
            name: "assets/[name].[hash].[ext]",
           },
          },
         ],
        },
        {
          test: /\.(html|ejs)$/,
          use: ['html-loader', 'ejs-html-loader']
        }
      ]
    },
    resolve: {
          alias: {
            components: path.resolve(__dirname, 'src','components'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            styles: path.resolve(__dirname, 'src', 'styles'),
            utils: path.resolve(__dirname, 'src', 'utils'),
            data: path.resolve(__dirname, 'src', 'data'),
            services: path.resolve(__dirname, 'src', 'services'),
          }
        },
  devtool:'sourcemap'
};
var devConfig = {
  module: {
    rules: [
      {
      test: /\.scss$/,
      use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
      },
    ]
  },
  devServer: {
    overlay: true,
    port: 3000,
  }
};

var prodConfig = {
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      }),
      new CleanWebpackPlugin(['dist'])
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
          ]
        }, 
      ]
    }
};

module.exports = (env, argv) => (argv === 'development'
  ? merge(commonConfig, devConfig)
  : merge(commonConfig, prodConfig));
