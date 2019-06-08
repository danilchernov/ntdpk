'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.paths.docs.source, {since: gulp.lastRun('docs')})
  .pipe($.newer(config.paths.docs.build))
  .pipe(gulp.dest(config.paths.docs.build));
};
