const assert = require('assert');
const captcha = require('../lib/captcha');

describe('Part one', () => {
  it('should return 3 for 1122', () => {
    assert.equal(3, captcha.partone(1122));
  });

  it('should return 4 for 1111', () => {
    assert.equal(4, captcha.partone(1111));
  });

  it('should return 0 for 1234', () => {
    assert.equal(0, captcha.partone(1234));
  });

  it('should return 9 for 91212129', () => {
    assert.equal(9, captcha.partone(91212129));
  });
});

describe('Part two', () => {
  it('should return 6 for 1212', () => {
    assert.equal(6, captcha.parttwo(1212));
  });

  it('should return 0 for 1221', () => {
    assert.equal(0, captcha.parttwo(1221));
  });

  it('should return 4 for 123425', () => {
    assert.equal(4, captcha.parttwo(123425));
  });

  it('should return 12 for 123123', () => {
    assert.equal(12, captcha.parttwo(123123));
  });

  it('should return 4 for 12131415', () => {
    assert.equal(4, captcha.parttwo(12131415));
  });

});
