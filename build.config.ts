// build.config.ts
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index'], // Entry point (no extension needed)
  declaration: true,
  sourcemap: true,
  clean: true,
  rollup: {
    emitCJS: false, // Emit both `.mjs` and `.cjs`
  },
});
