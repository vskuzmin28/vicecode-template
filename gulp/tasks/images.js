const gulp = require('gulp')

module.exports = images = () => {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/assets/images/'));
}
