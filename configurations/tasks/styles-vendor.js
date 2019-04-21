'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const mainNpmFiles = require('main-npm-files');
const config = require('../config');

const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = () => {
  return gulp.src(mainNpmFiles(config.paths.css.source.vendor))
  .pipe($.plumber({
    errorHandler: $.notify.onError((e) => {
      console.log(e.message);
    })
  }))
  .pipe($.concat('vendor.css'))
  .pipe($.postcss([
    autoprefixer(),
    cssnano()
  ]))
  .pipe(gulp.dest(config.paths.css.build))
}
