const gulp = require('gulp');
const surge = require('gulp-surge')

module.exports = function deploy() {
  return surge({
    project: './dist/',
    domain: '13-1-pro-msi.surge.sh'
  })
};
