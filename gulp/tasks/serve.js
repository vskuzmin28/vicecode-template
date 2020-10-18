const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const svgSprite = require('./spriteSVG');
const pngSprite = require('./spritePNG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');
const ttf2woff2 = require('./convertFonts');

const server = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('src/images/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('src/images/sprite/svg/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('src/images/sprite/png/*.png', gulp.series(pngSprite)).on('change', server.reload);
  gulp.watch('src/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('src/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('dist/*.html').on('change', server.reload);
  gulp.watch('src/fonts/**/*.ttf', gulp.series(ttf2woff2)).on('change', server.reload);

  return cb()
};
