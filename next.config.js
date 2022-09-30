// noinspection JSLastCommaInArrayLiteral,JSLastCommaInObjectLiteral

const configuration = {
  poweredByHeader: false,
  webpack: (config) => {
    config = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {test: /\.ttf$/, use: 'file-loader'},
        ],
      },
    };
    return config;
  },
};

module.exports = configuration;
