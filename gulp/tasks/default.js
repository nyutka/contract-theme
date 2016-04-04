'use strict';
var gulp = require('gulp');

gulp.task('default', ['watch']);
gulp.task('build', ['webpack', 'css:vendor', 'css:custom', 'html']);