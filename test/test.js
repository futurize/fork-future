var expect = require('expect');
var Task = require('data.task');
var fork = require('../');
var forkToPromise = require('../').forkToPromise;


const _ = () => expect(true).toNotBe(false);
const eventuallyEqual = (expected, done) => res => {
  expect(res).toEqual(expected);
  done();
};

function time (text, time) {
  time = time || 100;
  return new Task((reject, resolve) =>
    setTimeout(() => resolve(text), time));
}

function erroring (text) {
  return new Task((reject, resolve) =>
    setTimeout(() => reject(text), 100));
}

describe('#fork-future', () => {

  it('should fork a Future', done => {
    fork(_, eventuallyEqual('forked', done), time('forked', 100));
  });

  it('should fork a Future', done => {
    fork(eventuallyEqual('Error', done))(_)(erroring('Error'));
  });

});

describe('#fork-to-promise', () => {

  it('should return a resolved promise if the future resolves', done => {
    forkToPromise(time('forked', 100))
      .then(eventuallyEqual('forked', done));
  });

  it('should return a rejected promise if the future rejects', done => {
    forkToPromise(erroring('Error'))
      .catch(eventuallyEqual('Error', done));
  });

});
