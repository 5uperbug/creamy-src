var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('browserSync', function() {
  browserSync.init({
    server: "./src"
  });
});