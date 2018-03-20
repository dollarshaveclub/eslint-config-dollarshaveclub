'use strict'

module.exports = {
  extends: [
    require.resolve('eslint-config-standard-react'),
    require.resolve('./'),
  ],
  plugins: [
   'jsx-a11y'
  ],
  rules: {
    'jsx-a11y/label-has-for': [ 2, {
      'components': [ 'Label' ],
      'required': {
          'every': [ 'id' ]
      },
      'allowChildren': false,
    }],
  },
}
