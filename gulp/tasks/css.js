'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var rebaseUrls = require('gulp-css-url-fix');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var config = require('../config').css;

gulp.task('css:custom', function() {
  return gulp.src(config.main)
    .pipe(concat(config.mainBundle))
    .pipe(
      sass({ includePaths: config.includePaths }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest))
    .pipe(rebaseUrls());
});

gulp.task('css:vendor', function() {
  return gulp.src(config.vendors)
    .pipe(concatCss(config.vendorBundle))
    .pipe(gulp.dest(config.dest));
});
