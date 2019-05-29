'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const config = require('../config');

module.exports = () => {
  gulp.watch(config.paths.watchers.html, gulp.series('html'));
  gulp.watch(config.paths.watchers.css.vendor, gulp.series('styles:vendor'));
  gulp.watch(config.paths.watchers.css.main, gulp.series('styles'));
  gulp.watch(config.paths.watchers.js.vendor, gulp.series('js:vendor'));
  gulp.watch(config.paths.watchers.js.main, gulp.series('js'));
  gulp.watch(config.paths.watchers.images.pictures, gulp.series('images'));
  gulp.watch(config.paths.watchers.images.icons, gulp.series('svg'));
  gulp.watch(config.paths.watchers.fonts, gulp.series('fonts'));
};
