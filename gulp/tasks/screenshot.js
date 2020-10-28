const path = require('path')
const gulp = require('gulp')
const Pageres = require('pageres')

module.exports = function pageres() {
    return new Pageres({delay: 0})
      .src('http://13-1-pro-msi.surge.sh/', ['1200x1024'])
      .dest(path.join('./cover/'))
      .run()
}