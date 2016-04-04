'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var config = require('../config').css;

gulp.task('css:custom', function() {
  return gulp.src(config.src)
    .pipe(concatCss(config.mainBundle))
    .pipe(gulp.dest(config.dest));
});

gulp.task('css:vendor', function() {
  return gulp.src(config.vendors)
    .pipe(concatCss(config.vendorBundle))
    .pipe(gulp.dest(config.dest));
});
