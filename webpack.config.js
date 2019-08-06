module.exports = {
  // 1. Use the src/index.js file as entry point to bundle it.
  //    If that file imports other JavaScript files, bundle them as well.
  entry: "./src/index.js",
  // 2. Put the bundled source code in a bundle.js file in the /dist folder.
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  // 3. Serve our application to the browser from the /dist folder.
  devServer: {
    contentBase: "./dist"
  }
};
