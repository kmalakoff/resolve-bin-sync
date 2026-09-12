# resolve-bin-sync

Resolves the bin path for a module.

```bash
npm install resolve-bin-sync
```

```typescript
import resolveBin from 'resolve-bin-sync';

const binPath = resolveBin('package-name'); // bin string or bin entry named same as the module
const namedBinPath = resolveBin('package-name', 'named-bin'); // the named bin
```

The module must be installed and resolvable from the caller. The function returns an absolute path and throws if the package or requested bin entry cannot be resolved.

### Documentation

[API Docs](https://kmalakoff.github.io/resolve-bin-sync/)
