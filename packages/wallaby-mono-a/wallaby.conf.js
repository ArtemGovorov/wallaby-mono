var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
    resolve: {
      modulesDirectories: [require('path').join(__dirname, '../../node_modules')]
    }
  }
);

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/**/*.js', load: false }
    ],

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    env: {
      type: 'browser',
      kind: 'electron',
    },
  };
};
