const gulp = require('gulp');
const realFavicon = require('gulp-real-favicon');
const fs = require('fs');

const FAVICON_DATA_FILE = './faviconData.json';

module.exports = favicon = done => {
    realFavicon.generateFavicon({
      masterPicture: './src/images/favicon/favicon.png',
      dest: './dist/assets/images/favicon',
      iconsPath: 'assets/images/favicon',
      design: {
              ios: {
                  pictureAspect: 'backgroundAndMargin',
                  backgroundColor: '#ffffff',
                  margin: '35%',
                  assets: {
                      ios6AndPriorIcons: false,
                      ios7AndLaterIcons: false,
                      precomposedIcons: false,
                      declareOnlyDefaultIcon: true
                  }
              },
              desktopBrowser: {
                  design: 'raw'
              },
              windows: {
                  pictureAspect: 'noChange',
                  backgroundColor: '#b91d47',
                  onConflict: 'override',
                  assets: {
                      windows80Ie10Tile: false,
                      windows10Ie11EdgeTiles: {
                          small: false,
                          medium: true,
                          big: false,
                          rectangle: false
                      }
                  }
              },
              androidChrome: {
                  pictureAspect: 'shadow',
                  themeColor: '#ffffff',
                  manifest: {
                      display: 'standalone',
                      orientation: 'notSet',
                      onConflict: 'override',
                      declared: true
                  },
                  assets: {
                      legacyIcon: false,
                      lowResolutionIcons: false
                  }
              },
              safariPinnedTab: {
                  pictureAspect: 'blackAndWhite',
                  threshold: 93.59375,
                  themeColor: '#5bbad5'
              }
          },
          settings: {
              scalingAlgorithm: 'Mitchell',
              errorOnImageTooSmall: false,
              readmeFile: false,
              htmlCodeFile: false,
              usePathAsIs: false
          },
      markupFile: FAVICON_DATA_FILE
    }, () => {
      done();
    });
  };
  
exports = injectFav = () => gulp
    .src(['./dist/index.html'])
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(gulp.dest('./dist'));