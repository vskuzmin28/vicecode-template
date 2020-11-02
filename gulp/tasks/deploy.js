const gulp = require('gulp');
const surge = require('gulp-surge')
const {website} = require('../../config')

module.exports = function deploy() {
  return surge({
    project: './dist/',
    domain: website
  })
};
