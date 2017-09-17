'use strict';
var gulp    = require('gulp');
var spawn   = require('child_process').spawn;

var buildQ  = [
  'build-css',
  'build-js',
  'build-html',
  'build-image',
  'copy-bower',
  'copy-misc'
]

gulp.task('build', buildQ, function() {
  // var cmd = spawn('./mv-build.sh', [], {stdio: 'inherit'});
  // cmd.on('close', function (code) {
  //   console.log('mv-build.sh exited with code ' + code);
  // });
});
