# console-json

[![npm package][npm-badge]][npm]

To lazy to type `JSON.stringify(obj, null, indent)` try `console.json(obj)`

<img src="https://raw.githubusercontent.com/chrislaughlin/console-json/master/public/json.png" alt="Console JSON Logo" height="250px"/>

Logo designed by [Liffy Designs](http://www.liffydesigns.co.uk/)

# Usage

## Install

```
npm i console-json -S
```

or

```
yarn add console-json
```

## Use

```
import console-json; // or require('console-json');

const myObj = {
    foo: 'bar'
}
console.json(myObj);

/**
{
    foo: 'bar'
}
**/

```

### Indent
Optional indent can be passed to `console.json`, defaults to 4.

```
console.json(myObj, 2);
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/console-json