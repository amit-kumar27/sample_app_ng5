// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({filename: 'index_one.css',allChunks: true});

module.exports = {
  entry: {
    // This is our Express server for Dynamic universal
    server: "./src/server.ts",
    // This is an example of Static prerendering (generative)
    // prerender: "./prerender.ts"
  },
  target: "node",
  resolve: { extensions: [".ts", ".js"] },
  // Make sure we include all node_modules etc
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'scss-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'scss-loader']
        })
      }
    ]
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
        window: undefined,
        document: undefined,
        location: JSON.stringify({
            protocol: 'https',
            host: `localhost`,
        })
    }),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, "src"), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, "src"),
      {}
    ),
    new webpack.IgnorePlugin(/vertx/)
  ]
};
