const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(), // This plugin loads environment variables from a .env file
    new webpack.DefinePlugin({
      'process.env.API_KEY': {
        API_KEY: JSON.stringify(process.env.API_KEY),
      },
    }),
  ],
};