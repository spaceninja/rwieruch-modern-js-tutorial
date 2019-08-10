const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
  // eslint-disable-next-line global-require
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
