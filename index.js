var curry = require('ramda/src/curry');


// fork :: (a -> *) -> (b -> *) -> Future -> *
function forkFuture (onRejected, onResolved, future) {
  return future.fork(onRejected, onResolved, future);
}

module.exports = curry(forkFuture);

function forkToPromise (future) {
  return new Promise(function (resolve, reject) {
    return future.fork(reject, resolve);
  });
}

module.exports.forkToPromise = forkToPromise;
