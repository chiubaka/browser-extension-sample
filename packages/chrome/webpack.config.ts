import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

const configure = (config: webpack.Configuration) => {
  config.plugins?.push(
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "options.html",
      template: "src/index.html",
      chunks: ["main"],
    }),
  );
  return config;
};

export default configure;
