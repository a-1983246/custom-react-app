// @ts-ignore
const path = require("path");
module.exports = {
  entry: "./src/Index.tsx",
  output: {
    // @ts-ignore
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      // @ts-ignore
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.((j|t)s)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        // @ts-ignore
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
