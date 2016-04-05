'use strict';
var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.css.src, ['css:custom']);
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.js.all, ['webpack']);
});
