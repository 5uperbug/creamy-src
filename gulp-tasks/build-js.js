'use strict';
var gulp    = require('gulp');

//script paths
var jsFiles = 'src/js/**/*.js',
    jsDest  = 'build/js';

gulp.task('build-js', function() {
  return gulp.src(jsFiles)
    .pipe(gulp.dest(jsDest));
});
