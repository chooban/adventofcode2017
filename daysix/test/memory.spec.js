const assert = require('assert');

const memory = require('../lib/memory');

describe('Base case', () => {
  it('returns a 5', () => {
    const banks = [0, 2, 7, 0];

    assert.equal(5, memory.reallocate(banks)[0]);
  });
});
