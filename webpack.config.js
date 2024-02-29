const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  // ... other webpack config
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  // ... other webpack config
};

new webpack.DefinePlugin({
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
})