'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const vendorFiles = require('main-yarn-files');
const config = require('../config');

const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = () => {
  return gulp.src(vendorFiles(config.paths.css.source.vendor,{
    paths: {
      modulesFolder: './node_modules',
      jsonFile: './package.json'
    }
  }))
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
