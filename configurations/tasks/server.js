'use strict';
  const $ = require('gulp-load-plugins');

  const gulp = require('gulp');
  const config = require('../config');
  const bs = require('browser-sync').create();

  module.exports = () => {
    bs.init({
      server: {
        baseDir: 'build',
        notify: false,
        ui: false
      }
    });
    bs.watch(config.paths.build).on('change', bs.reload);
  };
