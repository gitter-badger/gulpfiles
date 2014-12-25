'use strict'
var gulp = require('gulp');

moduel.exports = function(tasks) {
  tasks.forEach(function(name) {
    gulp.task(name, require('./tasks/' + name));
  });

  return gulp;
}
