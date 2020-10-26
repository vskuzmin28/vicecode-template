const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function vendorsCSS() {
  return gulp.src('src/scss/libs/*.scss')
      .pipe(concat('libs.css'))
      .pipe(gulp.dest('dist/css/'))
};
