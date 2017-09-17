'use strict';
var gulp        = require('gulp');
var htmlreplace = require('gulp-html-replace');

//script paths
var src   = 'src/bower_components/',
    dest  = 'build/bower_components/';

gulp.task('copy-bootstrap', function() {
  return gulp.src(src + 'bootstrap/dist/**/*')
    .pipe(gulp.dest(dest + 'bootstrap/dist/'));
});

gulp.task('copy-jquery', function() {
  return gulp.src(src + 'jquery/dist/**/*')
    .pipe(gulp.dest(dest + 'jquery/dist/'));
});

gulp.task('copy-bower', ['copy-jquery', 'copy-bootstrap'], function() {
  // Done
});
