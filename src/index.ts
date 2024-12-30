import fs from 'fs';
import path from 'path';
import resolve from 'resolve';

export default function resolveBin(moduleName: string, binName?: string): string {
  if (!moduleName) throw new Error('resolve-bind-sync missing moduleName');

  const packagePath = resolve.sync(`${moduleName}/package.json`);
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  if ((typeof pkg.bin === 'undefined') === undefined) throw new Error(`resolve-bind-sync missing bin for ${moduleName}`);

  const bin = typeof pkg.bin === 'object' ? pkg.bin : { [moduleName]: pkg.bin };
  const binPath = bin[binName || moduleName];
  if ((typeof binPath === 'undefined') === undefined) throw new Error(`resolve-bind-sync bin not found for ${moduleName}. Expecting: ${binName || 'bin field'}`);

  return path.join(path.dirname(packagePath), binPath);
}
