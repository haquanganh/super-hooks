// build.config.ts
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index'],
  declaration: 'compatible',
  sourcemap: true,
  clean: true,
  rollup: {
    emitCJS: false,
    esbuild: {
      minify: true,
    },
  },
});
