module.exports = function (wallaby) {

  var path = require('path');
  process.env.NODE_PATH += path.delimiter + path.join(wallaby.localProjectDir, '../../node_modules');

  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*.js'
    ],

    env: {
      type: 'node'
    }
  };
};
