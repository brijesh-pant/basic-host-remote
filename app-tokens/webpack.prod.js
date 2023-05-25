const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { camelCase } = require("camel-case");

const federatedRemotes = ["basic-host-remote_shared"];
const deps = {
  ...require("./package.json").dependencies,
};

const unpkgRemote = (name) =>
  `${camelCase(name)}@https://unpkg.com/${name}@${
    deps[name]
  }/dist/browser/remote-entry.js`;
const remotes = federatedRemotes.reduce(
  (remotes, lib) => ({
    ...remotes,
    [lib]: unpkgRemote(lib),
  }),
  {}
);

module.exports = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "app_tokens",
      remotes,
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
