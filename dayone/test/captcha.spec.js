const assert = require('assert');
const captcha = require('../lib/captcha');

describe('Captcha', () => {
  it('should return 3 for 1122', () => {
    assert.equal(3, captcha(1122));
  });

  it('should return 4 for 1111', () => {
    assert.equal(4, captcha(1111));
  });

  it('should return 0 for 1234', () => {
    assert.equal(0, captcha(1234));
  });

  it('should return 9 for 91212129', () => {
    assert.equal(9, captcha(91212129));
  });
});
