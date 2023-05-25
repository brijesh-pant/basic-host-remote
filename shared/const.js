const exposes = {
  "./Button": "./src/Button",
  "./Heading": "./src/Heading",
  "./Input": "./src/Input",
};
const shared = { react: { singleton: true }, "react-dom": { singleton: true } };

module.exports = {
  shared,
  exposes,
};
