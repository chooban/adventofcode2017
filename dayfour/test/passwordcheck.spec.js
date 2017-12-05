const assert = require('assert');

const passwordcheck = require('../lib/passwordcheck');

describe('Base cases', () => {
  it('aa bb cc dd ee', () => {
    assert.equal(true, passwordcheck.check('aa bb cc dd ee'));
  });

  it('aa bb cc dd aa', () => {
    assert.equal(false, passwordcheck.check('aa bb cc dd aa'));
  });

  it('aa bb cc dd aaa', () => {
    assert.equal(true, passwordcheck.check('aa bb cc dd aaa'));
  });
});

describe('Anagram check', () => {
  it('abcde fghij', () => {
    assert.equal(true, passwordcheck.check('abcde fghij'));
  });

  it('abcde xyz ecdab', () => {
    assert.equal(true, passwordcheck.check('abcde xyz ecdab'));
  });

  it('a ab abc abd abf abj', () => {
    assert.equal(true, passwordcheck.check('a ab abc abd abf abj'));
  });

  it('iiii oiii ooii oooi oooo', () => {
    assert.equal(true, passwordcheck.check('iiii oiii ooii oooi oooo'));
  });

  it('oiii ioii iioi iiio', () => {
    assert.equal(true, passwordcheck.check('oiii ioii iioi iiio'));
  });

});
