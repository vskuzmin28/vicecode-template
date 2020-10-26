const gulp = require('gulp');

module.exports = function images() {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images/'));
};
