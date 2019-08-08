module.exports = {
  // 1. Use the src/index.js file as entry point to bundle it.
  //    If that file imports other JavaScript files, bundle them as well.
  entry: "./src/index.js",
  // 2. Tell webpack to use babel-loader for JS files
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  // 3. Put the bundled source code in a bundle.js file in the /dist folder.
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  // 4. Serve our application to the browser from the /dist folder.
  devServer: {
    contentBase: "./dist"
  }
};
