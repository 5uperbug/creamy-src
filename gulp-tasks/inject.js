var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject', function () {
  var target = gulp.src('./src/templates/layout.nunjucks');
  var sources = gulp.src(['./src/js/*.js'], {read: false}, {relative: true});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src/templates/'));
});
