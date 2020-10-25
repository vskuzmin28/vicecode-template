const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function vendors() {
  return gulp.src('src/js/libs/*.js')
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/js/'))
};
