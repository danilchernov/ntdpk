'use strict';

const gulp = require('gulp');
const config = require('../config');
const del = require('del');

module.exports = () => {
  return del(config.paths.build);
};
