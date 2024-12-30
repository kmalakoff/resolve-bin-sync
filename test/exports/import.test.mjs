import assert from 'assert';
import resolveBin from 'resolve-bin-sync';

describe('exports .mjs', () => {
  it('defaults', () => {
    assert.equal(typeof resolveBin, 'function');
  });
});
