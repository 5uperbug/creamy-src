var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'sass', 'nunjucks'], function() {
  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("src/pages/**/*.+(html|nunjucks)", ['nunjucks']);
  gulp.watch("src/templates/**/*.+(html|nunjucks)", ['nunjucks']);
  gulp.watch("src/*.html", browserSync.reload);
  gulp.watch("src/css/*.css", browserSync.reload);
});
