const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imgCompress = require('imagemin-jpeg-recompress')

module.exports = images = () => {
  return gulp.src('src/images/**/*.*')
    .pipe(imagemin([
      imgCompress({
        loops: 4,
        min: 70,
        max: 80,
        quality: 'high'
      }),
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/assets/images/'))
}
