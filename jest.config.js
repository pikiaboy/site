const path = require('path');

module.exports = {
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
    testMatch: [path.join(__dirname, 'src/**/__test__/*.test.js')],
}