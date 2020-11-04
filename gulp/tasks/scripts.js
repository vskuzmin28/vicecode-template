const gulp = require('gulp')
const babel = require('gulp-babel')

module.exports = function script() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/assets/js/'))
}
