let dist = 'dist'
let source = 'src'

let path = {
    build: {
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
        html: source + '/**/*.pug',
        css: source + '/**/*.scss',
        js: source + '/**/*.js',
        img: source +'/img/*.{jpg, png, svg, webp}'
    },
    clean: './' + dist + '/'
}

let gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    pug = require('pug')

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + dist + '/'    
        },
        port: 8080,
        notify: false
    })
}

let watch = gulp.parallel(browserSync)



exports.watch = watch
exports.default = watch