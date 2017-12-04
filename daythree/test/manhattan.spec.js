const assert = require('assert');

const manhattan = require('../lib/manhattan');

describe('Coords', () => {
  it('of 1', () => {
    assert.deepEqual([0,0], manhattan.coords(1));
  });

  it('of 12', () => {
    assert.deepEqual([2, 1], manhattan.coords(12));
  });

  it('of 23', () => {
    assert.deepEqual([0, -2], manhattan.coords(23));
  });

  it('of 21', () => {
    assert.deepEqual([-2, -2], manhattan.coords(21));
  });
});

describe('Part one', () => {
  it('doesn\'t move 1', () => {
    assert.equal(0, manhattan.distance(1));
  });

  it('carries "12" three steps', () => {
    assert.equal(3, manhattan.distance(12));
  });

  it('carries "23" 2 steps', () => {
    assert.equal(2, manhattan.distance(23));
  });

  it('carries "1024" 31 steps', () => {
    assert.equal(31, manhattan.distance(1024));
  });

  it('carries 312051...', () => {
    assert.equal(430, manhattan.distance(312051));
  });
});

