var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve:prod', function() {
  browserSync.init({
    server: "./build"
  });
});
