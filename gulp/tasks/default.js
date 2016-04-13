'use strict';
var gulp = require('gulp');

gulp.task('default', ['watch']);
gulp.task('build', ['webpack', 'images', 'css:vendor', 'css:custom', 'html']);