const gulp = require('gulp');

module.exports = function script() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js/'));
};
