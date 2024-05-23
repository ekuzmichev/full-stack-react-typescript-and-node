const path = require("path");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
  jest: {
    configure: (jestConfig) => {
      jestConfig.transform = {
        "\\.css\\.ts$": "@vanilla-extract/jest-transform",
        ...jestConfig.transform,
      };
      return jestConfig;
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // ...

      const moduleScopePlugin = webpackConfig.resolve.plugins.find(
        (plugin) => plugin instanceof ModuleScopePlugin
      );
      moduleScopePlugin.allowedPaths.push(
        path.resolve(__dirname, "node_modules/@vanilla-extract/webpack-plugin")
      );

      return webpackConfig;
    },
  },
};
