let production = 'dist'
let source = 'src'

let path = {
    build: {
        html: production + '/',
        css: production + '/css/',
        js: production + '/js/',
        img: production +'/img/',
        fonts: production + '/fonts/'
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
    clean: './' + production + '/'
}

let gulp = require('gulp'),
    browsersync = require('browser-sync').create()

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + production + '/'    
        },
        port: 8080,
        notify: false
    })
}

let watch = gulp.parallel(browserSync)

exports.watch = watch
exports.default = watch