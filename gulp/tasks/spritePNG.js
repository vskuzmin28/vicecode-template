const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

const spritesmith = require('gulp.spritesmith');

module.exports = function spritePNG() {

  const spriteData = gulp.src('src/images/sprite/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite/sprite.png',
    cssName: 'sprite.scss',
    padding: 5,
    cssVarMap: function (sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  }));

  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/sprite/'));

  const cssStream = spriteData.css
    .pipe(gulp.dest('src/scss/helpers/'));

  return merge(imgStream, cssStream);
};


