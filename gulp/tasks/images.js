'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var config = require('../config').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(config.dest));
});
