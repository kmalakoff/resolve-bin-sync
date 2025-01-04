import assert from 'assert';
import path from 'path';
import url from 'url';

// @ts-ignore
import resolveBin from 'resolve-bin-sync';

const __dirname = path.dirname(typeof __filename !== 'undefined' ? __filename : url.fileURLToPath(import.meta.url));
const NODE_MODULES = path.join(__dirname, '..', '..', 'node_modules');

describe('resolve-bin-sync', () => {
  it('Finds resolve without a name', () => {
    const binPath = resolveBin('resolve');
    assert.equal(binPath, path.join(NODE_MODULES, 'resolve', 'bin', 'resolve'));
  });

  it('Finds resolve by name: resolve', () => {
    const binPath = resolveBin('resolve', 'resolve');
    assert.equal(binPath, path.join(NODE_MODULES, 'resolve', 'bin', 'resolve'));
  });

  it('Finds @biomejs/biome by name: biome', () => {
    const binPath = resolveBin('@biomejs/biome', 'biome');
    assert.equal(binPath, path.join(NODE_MODULES, '@biomejs/biome', 'bin', 'biome'));
  });

  describe('errors', () => {
    it('Fails for self', () => {
      try {
        resolveBin('resolve-bin-sync');
        assert.ok(false);
      } catch (_err) {
        assert.ok(true);
      }
    });
    it('Fails for @biomejs/biome without a name', () => {
      try {
        resolveBin('@biomejs/biome');
        assert.ok(false);
      } catch (_err) {
        assert.ok(true);
      }
    });
  });
});
