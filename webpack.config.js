const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry:{
  app:  './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'main.js',
  },
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 1239,
    writeToDisk: true,
    open: true,
},
  

  module: {
    rules: [
        {
      test: /\.html$/i,
      use: [
        {  
          loader: 'html-loader',
           options: {
               minimize: true,
           }
          }
          ],
    },

    {
        test: /\.css$/,
       use: [
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../' 
                }
              },
              'css-loader',
            ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }
      },
   ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/product.html'
  }),

  new HtmlWebpackPlugin({
    filename: 'checkout.html',
    template: './src/checkout.html'
}),

    new MiniCssExtractPlugin({filename: 'css/style.css'}),
    new CssMinimizerPlugin({})
  ]

};