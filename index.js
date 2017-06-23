'use strict'

module.exports = {
  plugins: [
    'dollarshaveclub',
  ],
  extends: [
    'standard',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'comma-dangle': [2, 'always-multiline'],
  },
  configs: {
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        modules: true,
      },
    },
    ember: {
      rules: {
        'dollarshaveclub/spread-mixins': 2,
        'no-underscore-dangle': [2, { allow: ['_super'] }],
        'consistent-return': 0,
      },
    },
  },
}
