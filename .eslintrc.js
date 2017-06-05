// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'global-require': 0,
    'no-console': 0,
    'dot-notation': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-mixed-operators': 0,
    'max-len': 0,
    'no-eval': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0, //
    'no-continue': 0, // 禁止使用continue
    'no-prototype-builtins': 0, //
    'prefer-rest-params': 0,  // 在ES2015(ES6)中推荐使用剩余参数(...rest)代替arguments变量
    'no-restricted-syntax': 0, // 禁止使用某些特定的JavaScript语法，例如FunctionDeclaration 和 WithStatement
  },
  'globals': {
    "window": true,
    "document": true
  }
}
