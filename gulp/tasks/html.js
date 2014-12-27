'use strict';

var gulp         = require('gulp');
var htmlmin      = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
})
