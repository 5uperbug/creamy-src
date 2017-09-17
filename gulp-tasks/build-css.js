'use strict';
var gulp      = require('gulp');
var cleanCSS  = require('gulp-clean-css');
var rename    = require('gulp-rename');

//css paths
var cssFiles = 'src/css/**/*.css',
    cssDest  = 'build/css';
gulp.task('build-css', ['sass'], function() {
  return gulp.src(cssFiles)
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log('CSS Original Size: ' + details.stats.originalSize);
      console.log('CSS Minified Size: ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest(cssDest));
});
