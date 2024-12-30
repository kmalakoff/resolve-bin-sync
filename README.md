## resolve-bin-sync

Resolves the bin path for a module.

```typescript
import resolveBin from 'resolve-bin-sync';

const binPath = resolveBin('package-name'); // bin string or bin entry named same as the module
const namedBinPath = resolveBin('package-name', 'named-bin'); // the named bin
```

### Documentation

[API Docs](https://kmalakoff.github.io/resolve-bin-sync/)
