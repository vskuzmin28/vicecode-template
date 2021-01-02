const gulp = require('gulp')
const babel = require('gulp-babel')

module.exports = function script() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: [["polyfill-es-shims", { "method": "usage-pure" }]]
    }))
    .pipe(gulp.dest('dist/assets/js/'))
}
