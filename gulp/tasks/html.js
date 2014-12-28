'use strict';

var gulp         = require('gulp');
var size         = require('gulp-size');
var htmlmin      = require('gulp-htmlmin');
var config        = require('../config.js').html;

gulp.task('htmlmin', function() {
  return gulp.src(config.src)
    .pipe(htmlmin(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'html'}));
});
