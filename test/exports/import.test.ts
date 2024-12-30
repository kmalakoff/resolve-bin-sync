import assert from 'assert';

// @ts-ignore
import resolveBin from 'resolve-bin-sync';

describe('exports .ts', () => {
  it('defaults', () => {
    assert.equal(typeof resolveBin, 'function');
  });
});
