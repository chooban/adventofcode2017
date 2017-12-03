const assert = require('assert');
const checksum = require('../lib/checksum');

describe('Part one checksum', () => {
  it('checks a single row', () => {
    assert.equal(8, checksum.checkrow([5, 1, 9, 5]));
  });

  it('checks a sheet', () => {
    const sheet = [
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8]
    ];

    assert.equal(18, checksum.checksheet(sheet));
  });
});

describe('Part two checksum', () => {
  it('checks a single row', () => {
    assert.equal(4, checksum.divisorRow([5, 9, 2, 8]));
  });

  it('checks a single row', () => {
    assert.equal(3, checksum.divisorRow([9, 4, 7, 3]));
  });

  it('checks a single row', () => {
    assert.equal(2, checksum.divisorRow([3, 8, 6, 5]);
  });

  it('sheet', () => {
    const sheet = [
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5]
    ];

    assert.equal(9, checksum.divisorSheet(sheet));
  });
});
