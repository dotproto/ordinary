var path = require('path');
var pkg = require('./package.json');

module.exports = {
  cmd: 'ordinary',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Use Javascript Ordinary Style',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json'),
  }
}
