module.exports = function (config) {

  config.set({
    singleRun: false,

    browsers: ['PhantomJS', 'Chrome'],

    frameworks: [
      'jasmine'
    ],

    files: [
      './src/index.spec.js'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      './src/index.spec.js': ['webpack', 'sourcemap'],
    },

    webpack: require('./webpack-test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    coverageReporter: {
      type: 'json',
      subdir: '.',
      dir: 'coverage/',
      file: 'coverage.json'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ]
  });
};