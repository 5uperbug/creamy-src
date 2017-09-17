'use strict';
var gulp        = require('gulp');
var htmlreplace = require('gulp-html-replace');

//script paths
var src   = ['src/*.txt', 'src/*.xml'],
    dest  = 'build/';

gulp.task('copy-misc', function() {
  return gulp.src(src)
    .pipe(gulp.dest(dest));
});
