'use strict';

const $ = require('gulp-load-plugins')({lazy: true});

const gulp = require('gulp');
const vendorFiles = require('main-yarn-files');
const config = require('../config');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
  return gulp.src(vendorFiles(config.paths.js.source.vendor,{
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
    .pipe($.concat('vendor.js'))
    .pipe($.if(!isDevelopment, $.uglify()))
    .pipe(gulp.dest(config.paths.js.build));
};

/* nodeModules - Location of your modules, defaults to ./node_modules;
pkgJson - Location of your package.json, defaults to ./package.json;
onlySpecified - Decides if you only want to retrieve the files specified by the package.json or just all files from the package, ah yeah both still have the glob applied of course, defaults to true;
onlyMain - If true, it will search only for the main and style while ignoring the files property, defaults to false */