const gulp = require('gulp');

const svgSprite = require('./spriteSVG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');
const ttf2woff2 = require('./convertFonts');

const server = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: false,
    cors: false,
  });

  gulp.watch('src/images/**/*.png').on('change', server.reload);
  gulp.watch('src/images/sprite/svg/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('src/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('src/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('dist/*.html').on('change', server.reload);
  gulp.watch('src/fonts/**/*.ttf', gulp.series(ttf2woff2)).on('change', server.reload);

  return cb()
};
