'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

gulp.task('css:custom', function() {
  return gulp.src('./app/css/**/*.css')
    .pipe(concatCss("css/main.css"))
    .pipe(gulp.dest('./build'));
});

gulp.task('css:vendor', function() {
  return gulp.src(['./node_modules/mapbox.js/theme/style.css', './node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(concatCss("css/vendor.css"))
    .pipe(gulp.dest('./build'));
});
