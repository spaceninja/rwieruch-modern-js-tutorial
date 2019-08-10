const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // use source maps
  devtool: 'source-map',
  // Use the src/index.js file as entry point to bundle it.
  // If that file imports other JavaScript files, bundle them as well.
  entry: './src/index.js',
  // Tell webpack to use babel-loader for JS files
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    // Clear the `dist` folder before building
    new CleanWebpackPlugin(),
    // Generate HTML content
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: './src/index.html',
    }),
  ],
  // Put the bundled source code in a bundle.js file in the /dist folder.
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // Serve our application to the browser from the /dist folder.
  devServer: {
    contentBase: './dist',
  },
};
