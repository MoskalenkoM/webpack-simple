const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = (env, options) => {
  conf.devtool = options.mode === 'production' ? false : 'eval-sourcemap';

  return conf;
};
