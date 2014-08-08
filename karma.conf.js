module.exports = function (config) {
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '30'
    },
    sl_ios_safari: {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }
  };

  config.set({
    basePath: '',

    frameworks: [
      'mocha',
      'chai',
    ],

    files: [
      'test/option.test.js',
      'test/combobox.test.js'
    ],

    exclude: [],

    webpack: {
      loaders: [
        {test: /.js$/, loader: 'jsx-loader'}
      ]
    },

    preprocessors: {
      'test/*': [
        'jsx-loader',
        'webpack'
      ]
    },


    reporters: ['spec'],

    logLevel: config.LOG_INFO,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: (process.env.NODE_ENV === 'ci'),

    //npm auto-loads plugins
  });
};
