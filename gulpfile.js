var $    = require('gulp-load-plugins')(),
    gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),    
    modRewrite = require('connect-modrewrite'),    
    util = require('gulp-util');

// File paths to various assets are defined here.
var PATHS = {
  sass: [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src'
  ],
  javascript: [
    'base/js/vendor/**/*.js',
    'base/js/misc/**/*.js'
  ]
};

// Combine SASS into one file
gulp.task('sass', function() {
  return gulp.src('base/scss/app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(cssnano())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('base/css'))
    .pipe(browserSync.stream());    
});

// Combine SASS into one file
gulp.task('fck', function() {
  return gulp.src('base/scss/fck.scss')
      .pipe($.sourcemaps.init())
      .pipe($.sass({
            includePaths: PATHS.sass
          })
          .on('error', $.sass.logError))
      .pipe($.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
      }))
      /*.pipe(rename({suffix: '.min'}))*/
      .pipe(cssnano())
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest('base/css'))
      .pipe(browserSync.stream());      
});

// Combine JavaScript into one file
gulp.task('javascript', function() {
  var uglify = $.uglify()
    .on('error', function (e) {
      console.log(e);
    });

  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.babel().on('error', swallowError))
    .pipe($.concat('app.js'))
    .pipe(uglify)
    .pipe($.sourcemaps.write())
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(gulp.dest('base/js'))
    .pipe(browserSync.stream());    
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [
                modRewrite(['^([^.]+)$ /view-index.html [L]'])
            ]
        }
    });
});

// running "gulp"
gulp.task('default', ['sass', 'javascript', 'fck']);

// running "gulp watch"
gulp.task('watch', ['sass', 'javascript', 'fck'], (function() {
  gulp.watch(['base/scss/**/*.scss'], ['sass']);
  gulp.watch(['base/scss/**/*.scss'], ['fck']);
  gulp.watch(['base/js/vendor/**/*.js', 'base/js/misc/**/*.js'], ['javascript']);
}));

// running "gulp server"
gulp.task('server', ['sass', 'javascript', 'fck', 'browser-sync'], (function() {
  gulp.watch(['base/scss/**/*.scss'], ['sass']);
  gulp.watch(['base/scss/**/*.scss'], ['fck']);
  gulp.watch(['base/js/vendor/**/*.js', 'base/js/misc/**/*.js'], ['javascript']);
  gulp.watch("**/*.html").on('change', browserSync.reload);  
}));



function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}