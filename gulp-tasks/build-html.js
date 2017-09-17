'use strict';
var gulp        = require('gulp');
var htmlreplace = require('gulp-html-replace');

//script paths
var htmlFiles = 'src/*.html',
    htmlDest  = 'build/';

gulp.task('build-html', ['nunjucks'], function() {
  return gulp.src(htmlFiles)
    .pipe(htmlreplace({
      'css': 'css/styles.min.css',
      'js': 'js/scripts.min.js'
    }))
    .pipe(gulp.dest(htmlDest));
});
