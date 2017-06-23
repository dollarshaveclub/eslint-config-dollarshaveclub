# eslint-config-dollarshaveclub [![Build Status](https://travis-ci.org/dollarshaveclub/eslint-config-dollarshaveclub.svg?branch=master)](https://travis-ci.org/dollarshaveclub/eslint-config-dollarshaveclub)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Dollar Shave Club.


## Installation

```
$ npm install --save-dev eslint eslint-config-dollarshaveclub
```


## Usage

Once the `eslint-config-dollarshaveclub` package is installed, you can use it by specifying `dollarshaveclub` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "dollarshaveclub",
  "rules": {
    // Additional, per-project rules...
  }
}
```


## License

MIT
