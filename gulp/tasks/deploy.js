const gulp = require('gulp');
const surge = require('gulp-surge')

module.exports = function deploy() {
  return surge({
    project: './dist/',
    domain: 'vskuzmin28.surge.sh'
  })
};
