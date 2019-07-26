const { getLoader } = require("react-app-rewired");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = function override(config, env) {
  const tsloader = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.(ts|tsx)$/)
  );
  tsloader.use[0].options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory([
          {
            libraryDirectory: "lib",
            libraryName: "antd"
          }
        ])
      ]
    }),
    transpileOnly: true
  };
  return config;
};
