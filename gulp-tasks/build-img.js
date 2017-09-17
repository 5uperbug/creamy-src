'use strict';
var gulp        = require('gulp');
var htmlreplace = require('gulp-html-replace');

//script paths
var imageFiles = [
  'src/images/*.png',
  'src/images/*.jpg',
  'src/images/*.gif',
  'src/images/*.jpeg'
];
var imageDest = 'build/images';

var gulp = require('gulp');

gulp.task('build-image', function(cb) {
  gulp.src(imageFiles)
  .pipe(gulp.dest(imageDest))
});
