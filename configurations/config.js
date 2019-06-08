module.exports = {
  paths: {
    name: 'ntdpk',
    project: './',
    build: './build',
    zip: './build/**/*.*',
    favicon: {
      source: 'source/favicon/**/*.*',
      build: 'build/favicon'
    },
    html: {
      source: 'source/templates/*.twig',
      build: './build'
    },
    css: {
      source: {
        vendor: '**/*.css',
        main: 'source/scss/main.scss',
      },
      build: './build/css'
    },
    js: {
      source: {
        vendor: '**/*.js',
        main: 'source/js/**/*.js'
      },
      build: './build/js'
    },
    images: {
      source: {
        pictures: 'source/images/**/*.*',
        icons: 'source/svg/*.svg'
      },
      build: {
        pictures: './build/images',
        icons: './build/images'
      }
    },
    fonts: {
      source: 'source/fonts/*.*',
      build: './build/fonts'
    },
    docs: {
      source: 'source/docs/**/*.*',
      build: './build/docs'
    },
    watchers: {
      html: 'source/templates/**/*.twig',
      css: {
        main: 'source/scss/**/*.scss',
        vendor: './node_modules/**/*.css'
      },
      js: {
        main: 'source/js/**/*.js',
        vendor: './node_modules/**/*.js'
      },
      images: {
        pictures: 'source/images/**/*.*',
        icons: 'source/svg/*.svg'
      },
      fonts:'source/fonts/*.*',
      docs: 'source/docs/**/*.*'
    }
  }
};
