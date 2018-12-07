const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');



const commonConfig = {
  entry:['babel-polyfill', path.join(__dirname, 'src', 'index')],
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin(
      {
        title: 'ENTERUM',
        template: path.join(__dirname, 'src', 'index.html'),
        minify: {
          collapseWhitespace: true
        },
        filename: path.resolve(__dirname, 'dist', 'index.html')
      }
    ),
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
const devConfig = {
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


const prodConfig = {
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      }),
      new CleanWebpackPlugin(['dist']),
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
