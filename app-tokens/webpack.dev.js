const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { camelCase } = require("camel-case");

const federatedRemotes = ["basic-host-remote_shared"];
const PORT_SHARED = 3002;
const deps = {
  ...require("./package.json").dependencies,
};

const isLocalhost = false;
const remoteUrl = (name) =>
  isLocalhost
    ? `${camelCase(name)}@http://localhost:${PORT_SHARED}/remote-entry.js`
    : `${camelCase(name)}@https://unpkg.com/${name}@${
        deps[name]
      }/dist/browser/remote-entry.js`;

const remotes = federatedRemotes.reduce(
  (remotes, lib) => ({
    ...remotes,
    [lib]: remoteUrl(lib),
  }),
  {}
);

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3003,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_tokens",
      remotes,
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
