var expect = require('expect');
var Task = require('data.task');
var fork = require('../');


const _ = () => expect(true).toNotBe(false);
const eventuallyEqual = (expected, done) => res => {
  expect(res).toEqual(expected);
  done();
};

describe('#fork-future', () => {

  function time (text, time) {
    time = time || 100;
    return new Task((reject, resolve) =>
      setTimeout(() => resolve(text), time));
  }

  function erroring (text) {
    return new Task((reject, resolve) =>
      setTimeout(() => reject(text), 100));
  }

  it('should fork a Future', done => {
    fork(_, eventuallyEqual('forked', done), time('forked', 100));
  });

  it('should fork a Future', done => {
    fork(eventuallyEqual('Error', done))(_)(erroring('Error'));
  });

});
