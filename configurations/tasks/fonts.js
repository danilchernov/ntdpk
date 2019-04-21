'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.paths.fonts.source, {since: gulp.lastRun('fonts')})
  .pipe($.newer(config.paths.fonts.build))
  .pipe(gulp.dest(config.paths.fonts.build))
};
