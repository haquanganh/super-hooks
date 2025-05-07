import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.mts'],
  format: ['esm'],
  outExtension: () => ({ js: '.mjs' }),
  dts: {
    entry: 'src/index.mts',
  },
  clean: true,
  external: ['react', 'react-dom'], // ⬅️ Exclude from bundle
});
