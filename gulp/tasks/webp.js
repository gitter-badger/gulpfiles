'use strict';

/**
 * TODO
 * I would like to use parameter to minimize images.
 * $ gulp imagemin webp 100
 */

var gulp         = require('gulp');
var size         = require('gulp-size');
var htmlmin      = require('gulp-webp');

gulp.task('webp', function () {
  return gulp.src('src/*.{png, jpg}')
    .pipe(webp())
    .pipe(gulp.dest('dist'))
    .pipe(size({title: 'image:webp'}));
});
