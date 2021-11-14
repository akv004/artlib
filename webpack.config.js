const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFields: ["module", "browser", "main"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    filename: "index.js",
    library: "index",
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
    compress: true,
    port: 9000,
    hot: "only",
  open: true
  },
// following is to avoid warning on startup
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: "source-map",
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};