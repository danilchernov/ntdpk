'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
  return gulp.src(config.paths.css.source.main)
    .pipe($.plumber({
      errorHandler: $.notify.onError((e) => {
        console.log(e.message);
      })
    }))
    .pipe($.if(isDevelopment, $.sourcemaps.init()))
    .pipe($.sass())
    .pipe($.postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe($.if(isDevelopment, $.sourcemaps.write()))
    .pipe(gulp.dest(config.paths.css.build))
};
