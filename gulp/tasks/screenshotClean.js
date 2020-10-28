const gulp = require('gulp')

module.exports = cleanCover = () => {
    return gulp.src('./cover', { read: false })
    .pipe(clean());
}