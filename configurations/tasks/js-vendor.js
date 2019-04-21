'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');
const mainNpmFiles = require('main-npm-files');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
  return gulp.src(mainNpmFiles(config.paths.js.source.vendor))
    .pipe($.plumber({
      errorHandler: $.notify.onError((e) => {
        console.log(e.message);
      })
    }))
    .pipe($.concat('vendor.js'))
    .pipe($.if(!isDevelopment, $.uglify()))
    .pipe(gulp.dest(config.paths.js.build));
};

