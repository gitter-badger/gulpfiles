'use strict';

var gulp         = require('gulp');
var size         = require('gulp-size');
var htmlmin      = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({
        // TODO: Replace config
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(size({title: 'html'}));
});
