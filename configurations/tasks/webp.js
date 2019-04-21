'use strict';

const $ = require('gulp-load-plugins')({lazy:true});

const gulp = require('gulp');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.paths.images.source.pictures)
  .pipe($.webp({quality: 80}))
  .pipe(gulp.dest(config.paths.images.build.pictures));
};
