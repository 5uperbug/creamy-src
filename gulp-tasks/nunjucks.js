var gulp            = require('gulp');
var nunjucksRender  = require('gulp-nunjucks-render');
var prettify        = require('gulp-html-prettify');
var removeLines     = require('gulp-remove-empty-lines');

// All HTML rendering related ops
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
    path: ['src/templates']
  }))
  // Remove empty lines, comments
  .pipe(removeLines({
    removeComments: false
  }))
  // Indents html
  .pipe(prettify({indent_char: ' ', indent_size: 2}))
  // Output files in src folder
  .pipe(gulp.dest('src'));
});
