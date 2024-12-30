const assert = require('assert');
const resolveBin = require('resolve-bin-sync');

describe('exports .cjs', () => {
  it('defaults', () => {
    assert.equal(typeof resolveBin, 'function');
  });
});
