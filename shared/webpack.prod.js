const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { merge } = require("webpack-merge");
const { camelCase } = require("camel-case");
const { shared, exposes } = require("./const");

const pkg = require("./package.json");
const name = camelCase(pkg.name);

const baseConfig = {
  mode: "production",
};

const browserConfig = {
  output: {
    path: path.resolve("./dist/browser"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: "remote-entry.js",
      exposes,
      shared,
    }),
  ],
};

// const nodeConfig = {
//   target: "node",
//   output: {
//     path: path.resolve("./dist/node"),
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name,
//       filename: "remote-entry.js",
//       library: { type: "commonjs" },
//       exposes,
//       shared,
//     }),
//   ],
// };

// module.exports = {
//   entry: "./src/index",
//   mode: "development",
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "dist"),
//     },
//     port: 3002,
//   },
//   output: {
//     publicPath: "auto",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//         options: {
//           presets: ["@babel/preset-react"],
//         },
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "shared",
//       library: { type: "var", name: "shared" },
//       filename: "remoteEntry.js",
//       exposes: {
//         "./Button": "./src/Button",
//       },
//       shared: { react: { singleton: true }, "react-dom": { singleton: true } },
//     }),
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };

// module.exports = [
//   merge(baseConfig, browserConfig),
//   // merge(baseConfig, nodeConfig),
// ];

module.exports = merge(baseConfig, browserConfig);
