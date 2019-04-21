'use strict';

const gulp = require('gulp');
const tasks = require('./configurations/tasks');

gulp.task('html', tasks.html);
gulp.task('styles', tasks.styles);
gulp.task('styles:vendor', tasks['styles-vendor']);
gulp.task('js', tasks.js);
gulp.task('js:vendor', tasks['js-vendor']);
gulp.task('images', tasks.images);
gulp.task('webp', tasks.webp);
gulp.task('svg', tasks.svg);
gulp.task('fonts', tasks.fonts);
gulp.task('del', tasks.del);
gulp.task('server', tasks.server);
gulp.task('watchers', tasks.watchers);
gulp.task('zip', tasks.zip);

gulp.task('build',
  gulp.series('del',
    gulp.parallel('images', 'webp','svg', 'fonts', 'styles:vendor', 'js:vendor','html', 'styles', 'js')
  )
);

/* 🔥 If you want to continue development without rebuilding the source code of the project. */
gulp.task('continue', gulp.parallel('watchers', 'server'));
gulp.task('default', gulp.series('build', gulp.parallel('watchers', 'server')));
