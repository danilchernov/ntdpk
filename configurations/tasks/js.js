'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
  return gulp.src(config.paths.js.source.main)
    .pipe($.plumber({
      errorHandler: $.notify.onError((e) => {
        console.log(e.message);
      })
    }))
    .pipe($.if(isDevelopment, $.sourcemaps.init()))
    .pipe($.concat('main.js'))
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    .pipe($.uglify())
    .pipe($.if(isDevelopment, $.sourcemaps.write()))
    .pipe(gulp.dest(config.paths.js.build));
};
