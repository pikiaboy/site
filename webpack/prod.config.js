const commonConfig = require('./common.config');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'production',
    stats: {
        warnings: false
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all'
        }
    }
});
