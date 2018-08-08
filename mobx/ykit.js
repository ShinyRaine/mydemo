'use strict';

module.exports = {
    plugins: ['react'],
    config: {
        exports: [
            './scripts/index.js'
        ],
        modifyWebpackConfig: function(baseConfig) {
            return baseConfig
        }
    },
    hooks: {},
    commands: []
};
