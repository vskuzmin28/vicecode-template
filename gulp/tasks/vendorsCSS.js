const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function vendorsCSS() {
  return gulp.src('src/scss/libs/*.scss')
      .pipe(concat('vendors.css'))
      .pipe(gulp.dest('dist/assets/css/'))
};
