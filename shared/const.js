const exposes = {
  "./Button": "./src/Button",
  "./Heading": "./src/Heading",
};
const shared = { react: { singleton: true }, "react-dom": { singleton: true } };

module.exports = {
  shared,
  exposes,
};
