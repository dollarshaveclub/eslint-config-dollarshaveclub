# eslint-config-dollarshaveclub [![Build Status](https://travis-ci.org/dollarshaveclub/eslint-config-dollarshaveclub.svg?branch=master)](https://travis-ci.org/dollarshaveclub/eslint-config-dollarshaveclub) [![Greenkeeper badge](https://badges.greenkeeper.io/dollarshaveclub/eslint-config-dollarshaveclub.svg)](https://greenkeeper.io/)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Dollar Shave Club.


## Installation

```
$ npm install --save-dev eslint@3 eslint-config-dollarshaveclub
```


## Usage

Once the `eslint-config-dollarshaveclub` package is installed, you can use it by specifying `dollarshaveclub`, `dollarshaveclub/ember`, or `dollarshaveclub/react` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

For frameworkless JS modules:

```js
{
  "extends": "dollarshaveclub",
  "rules": {
    // Additional, per-project rules...
  }
}
```

For Ember projects:

```js
{
  "extends": "dollarshaveclub/ember"
}
```

For React projects:

```js
{
  "extends": "dollarshaveclub/react"
}
```

## License

MIT
