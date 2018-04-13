const webpack = require('webpack');
const path = require('path');


const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'client/src');


module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: SRC_DIR
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2']
        }

      },
      {
        test: /\.s?css/,
        use: [{
          loader:
                'style-loader'
        },
        {
          loader:
               ' css-loader'
        },
        {
          loader:
                'scss-loader'
        }
        ]
      },
      {
        test: /\.svg|.png|.jpg$/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ]
  },
};
