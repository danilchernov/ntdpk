'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.paths.images.source.icons)
  .pipe($.svgstore({
    inlineSvg: true
  }))
  .pipe($.rename("inline-svg.svg"))
  .pipe(gulp.dest(config.paths.images.build.icons));
};
