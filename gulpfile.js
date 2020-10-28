const gulp = require('gulp')
const script = require('./gulp/tasks/scripts')
const fonts = require('./gulp/tasks/fonts')
const vendors = require('./gulp/tasks/vendorsJS')
const imageMinify = require('./gulp/tasks/imageMinify')
const styles = require('./gulp/tasks/styles')
const clean = require('./gulp/tasks/clean')
const pug2html = require('./gulp/tasks/pug')
const spriteSVG = require('./gulp/tasks/spriteSVG')
const serve = require('./gulp/tasks/serve')
const convertFonts = require('./gulp/tasks/convertFonts')
const deploy = require('./gulp/tasks/deploy')
const favicon = require('./gulp/tasks/favicon')
const vendorsCSS = require('./gulp/tasks/vendorsCSS')
const images = require('./gulp/tasks/images')
const pageres = require('./gulp/tasks/screenshot')
const cleanCover = require('./gulp/tasks/screenshotClean')
const desktop = require('./gulp/tasks/psi')
const mobile = require('./gulp/tasks/psi-mobile')

const dev = gulp.parallel(pug2html, script, vendors, styles, vendorsCSS, images, spriteSVG, fonts, convertFonts)

const website = 'test-case-land.surge.sh';

exports.website = {website}

exports.default = gulp.series(
  clean,
  dev,
  serve
)

exports.build = gulp.series(
  clean,
  serve
)

exports.deploy = gulp.series(
  images,
  favicon,
  injectFav,
  deploy
)

exports.favicon = gulp.series(
  favicon,
  injectFav,
)

exports.pagespeed = gulp.parallel(
  desktop, 
  mobile
)

exports.screen = gulp.series(
  cleanCover,
  pageres
)