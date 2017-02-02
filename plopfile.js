module.exports = function (plop) {
  plop.setGenerator('Module', {
    description: 'a new module of your application',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please create a descriptive name for this module'
    }],
    actions: [{
      type: 'add',
      path: 'src/{{name}}/index.ts',
      templateFile: 'generators/index.hbs'
    }, {
      type: 'add',
      path: 'src/{{name}}/spec.ts',
      templateFile: 'generators/spec.hbs'
    }, {
      type: 'modify',
      path: 'src/index.ts',
      pattern: /^$/m,
      template: "import {{name}} from './{{name}}'\n"
    }]
  })
}
