fork-future
===============

[![build status](https://img.shields.io/travis/futurize/fork-future/master.svg?style=flat-square)](https://travis-ci.org/futurize/fork-future)
[![npm version](https://img.shields.io/npm/v/fork-future.svg?style=flat-square)](https://www.npmjs.com/package/fork-future)
[![codecov.io](https://codecov.io/github/futurize/fork-future/coverage.svg?branch=master)](https://codecov.io/github/futurize/fork-future?branch=master)

> Pointfree forking `Futures`


## Example

```js
const Task = require('data.task');
const fork = require('fork-future');


const timeout = (msg, time) => new Task((reject, resolve) => setTimeout(() => resolve(msg), time));

const forkAndLog = fork(onRejected, (result) => {
  console.log('RESULT', result);
});

forkAndLog(timeout('POINTFREE', 3000));
```

## API

### `fork :: (a -> *) -> (b -> *) -> Future -> *`

`fork(onRejected)(onResolved)(future)`


## License

MIT © [stoeffel](https://stoeffel.github.io)
