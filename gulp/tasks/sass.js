'use strict';

var gulp         = require('gulp');
var csso         = require('gulp-csso');
var sass         = require('gulp-sass');
var csscomb      = require('gulp-csscomb');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');

gulp.task('scss', function(){
  return gulp.src('./src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: 'map',
    }))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version']}))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest('./src/css'));
});
