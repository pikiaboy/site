const commonConfig = require('./common.config');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map'
});
