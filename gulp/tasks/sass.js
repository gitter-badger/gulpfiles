'use strict';

// TODO: Change the way to require gulp libraries.
var gulp         = require('gulp');
var csso         = require('gulp-csso');
var sass         = require('gulp-sass');
var size         = require('gulp-size');
var csscomb      = require('gulp-csscomb');
var scsslint     = require('gulp-scss-lint');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var config       = require('../config.js').sass;
var handleErrors = require('../util/handleErrors');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles:scss', function(){
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(scsslint(config.settings.scsslint))
    .pipe(sass(config.settings.sass))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'styles:scss'}));
});
