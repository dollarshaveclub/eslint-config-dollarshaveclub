'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'comma-dangle': [0, 'always-multiline'],
    'camelcase': 0,
    'func-names': 1,
    'no-await-in-loop': 0,
    'no-multi-assign': 0,
    'no-underscore-dangle': 0,
    'quotes': 0,
  },
}
