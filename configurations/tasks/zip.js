'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.paths.zip)
    .pipe($.zip('build.zip'))
    .pipe($.rename(config.name))
    .pipe(gulp.dest(config.paths.project));
};
