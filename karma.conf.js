module.exports = function(config) {
  config.set({
    frameworks: [
      'mocha',
      'karma-typescript'
    ],

    files: [
      {pattern: 'src/**/*.ts'}
    ],

    preprocessors: {
      'src/**/*.ts': [
        'karma-typescript'
      ]
    },

    karmaTypescriptConfig: {
      compilerOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        module: "commonjs",
        moduleResolution: "node",
        sourceMap: true,
        target: "ES5",
        lib: [
          'DOM',
          'ES6',
          'DOM.Iterable',
          'ScriptHost',
        ],
        typeRoots: [
          "node_modules/@types"
        ]
      }
    },

    reporters: [
      'nyan'
    ],

    nyanReporter: {
      suppressErrorHighlighting: true
    },

    browsers: [
      'PhantomJS'
    ],

    logLevel: config.LOG_ERROR
  })
}
