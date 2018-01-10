'use strict'

module.exports = {
  extends: [
    require.resolve('./'),
  ],
  plugins: [
    'ember',
  ],
  rules: {
    'no-underscore-dangle': [2, { allow: [
      '_super',
      '__container__',
    ]}],
    'consistent-return': 0,
    'no-lonely-if': 2,
    'array-bracket-newline': ['error', { 'multiline': true }],
    'ember/local-modules': 1,
    'ember/closure-actions': 1,
    'ember/no-side-effects': 1,
    'ember/no-observers': 1,
    'ember/use-ember-get-and-set': 1,
  },
}
