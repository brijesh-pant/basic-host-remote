const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { camelCase } = require("camel-case");

const pkg = require("./package.json");
const name = camelCase(pkg.name);

const exposes = {
  "./Button": "./src/Button",
  "./Heading": "./src/Heading",
};
const shared = { react: { singleton: true }, "react-dom": { singleton: true } };

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
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
