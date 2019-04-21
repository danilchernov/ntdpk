'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
  return gulp.src(config.paths.html.source)
    .pipe($.plumber({
      errorHandler: $.notify.onError((e) => {
        console.log(e.message);
      })
    }))
    .pipe($.twig())
    .pipe($.htmlBeautify({indentSize: 2}))
    .pipe($.if(!isDevelopment, $.htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest(config.paths.html.build));
};
