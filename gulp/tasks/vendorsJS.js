const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function vendors() {
  return gulp.src('src/js/libs/*.js')
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest('dist/assets/js/'))
};
