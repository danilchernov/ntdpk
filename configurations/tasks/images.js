'use strict';

const $ = require('gulp-load-plugins')({lazy:true});
const gulp = require('gulp');
const config = require('../config');

const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
  return gulp.src(config.paths.images.source.pictures, {since: gulp.lastRun('images')})
    .pipe($.newer(config.paths.images.build.pictures))
    .pipe($.if(!isDevelopment,
      $.imagemin([
        imageminPngquant({
          speed: 1,
          quality: 85
        }),
        /* 
            ! without Gifs !
            $.imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3
        }), */
        $.imagemin.jpegtran({
          progressive: true
        }),
        imageminMozjpeg({
          quality: 85
        })
      ])
    ))
  .pipe(gulp.dest(config.paths.images.build.pictures));
};
