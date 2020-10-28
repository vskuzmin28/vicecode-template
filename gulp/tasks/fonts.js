const gulp = require('gulp')

module.exports = fonts = () => {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/assets/fonts'))
}