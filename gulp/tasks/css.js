'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var rebaseUrls = require('gulp-css-url-fix');
var config = require('../config').css;

gulp.task('css:custom', function() {
  return gulp.src(config.main)
    .pipe(concatCss(config.mainBundle))
    .pipe(gulp.dest(config.dest))
    .pipe(rebaseUrls());
});

gulp.task('css:vendor', function() {
  return gulp.src(config.vendors)
    .pipe(concatCss(config.vendorBundle))
    .pipe(gulp.dest(config.dest));
});
