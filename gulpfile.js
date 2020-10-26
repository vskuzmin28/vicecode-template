const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const convertFonts = require('./gulp/tasks/convertFonts');
const deploy = require('./gulp/tasks/deploy');

const dev = gulp.parallel(pug2html, script, vendors, styles, imageMinify, spriteSVG, fonts, convertFonts);

exports.default = gulp.series(
  clean,
  dev,
  serve
);

exports.build = gulp.series(
  clean,
  serve
);

exports.deploy = gulp.series(
  deploy
);