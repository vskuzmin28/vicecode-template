let dist = 'dist'
let source = 'src'

let path = {
    dist: {
        html: dist + '/',
        css: dist + '/css/',
        js: dist + '/js/',
        img: dist +'/img/',
        fonts: dist + '/fonts/'
    },
    src: {
        html: source + '/',
        css: source + '/scss/style.scss',
        js: source + '/js/',
        img: source +'/img/*.{jpg, png, svg, webp}',
        fonts: source + '/fonts/*.ttf'
    },
    watch: {
        html: dist + '/**/*.html',
        css: dist + '/**/*.css',
        js: dist + '/**/*.js',
        img: dist +'/img/*.{jpg, png, svg, webp}'
    },
    clean: './' + dist + '/'
}

let gulp = require('gulp'), 
    browsersync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    htmlValidator = require('gulp-w3c-html-validator')

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + dist + '/'    
        },
        port: 3000,
        notify: true
    })
}

function pug2html() {
    return gulp.src('/pages/*.pug')
        .pipe(pug())
        .pipe(htmlValidator())
        .pipe(gulp.dest('/dist/'), browsersync.reload)
        .pipe(browsersync.stream())
}

function watchSrc() {
    gulp.watch([path.watch.html]).on('change', browsersync.reload)
}

let pugComp = gulp.series(pug2html)
let watch = gulp.parallel(pugComp, watchSrc, browserSync)

exports.pugComp = pugComp
exports.pug2html = pug2html
exports.watch = watch
exports.default = watch