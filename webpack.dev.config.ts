import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config: webpack.Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      /*       {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
          include: [path.resolve(__dirname, "/src/assets/images/")],
          options: {
            outputPath: "/assets",
            name: "[name].[ext]",
          },
        },
      }, */
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: "./",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    //new BundleAnalyzerPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    //contentBase: path.join(__dirname, "build"),
    contentBase: "./",
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
