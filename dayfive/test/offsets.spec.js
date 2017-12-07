const assert = require('assert');
const offsets = require('../lib/offsets');

describe('Base cases', () => {
  it('returns a 10', () => {
    const input = [0, 3, 0, 1, -3];

    assert.equal(10, offsets.countUntilExit(input));
  });
});
