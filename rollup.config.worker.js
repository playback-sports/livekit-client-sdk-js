import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { commonPlugins, kebabCaseToPascalCase } from './rollup.config';

export default {
  input: 'src/e2ee/worker/e2ee.worker.ts',
  output: [
    {
      file: `dist/livekit-client.e2ee.worker.mjs`,
      format: 'es',
      strict: true,
      sourcemap: true,
    },
    {
      file: `dist/livekit-client.e2ee.worker.js`,
      format: 'umd',
      strict: true,
      sourcemap: true,
      name: kebabCaseToPascalCase('livekit-client') + '.e2ee.worker',
      plugins: [terser()],
    },
  ],
  plugins: [typescript({ tsconfig: './src/e2ee/worker/tsconfig.json' }), ...commonPlugins],
};
