const gulp = require('gulp')
const htmlValidator = require('gulp-w3c-html-validator')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')

module.exports = pug2html =() => {
  return gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'))
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter())
}
