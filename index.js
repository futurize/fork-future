var curry = require('ramda/src/curry');


// fork :: (a -> *) -> (b -> *) -> Future -> *
function forkFuture (onRejected, onResolved, future) {
  return future.fork(onRejected, onResolved, future);
}

module.exports = curry(forkFuture);
