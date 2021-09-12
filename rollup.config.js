import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
const pkg = require('./package.json');

export default {
  input: 'src/miniStyled.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default'
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'default'
    }
],
  plugins: [
    nodeResolve({
      browser: true,
    }),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: "node_modules/**"
    })
  ],
  external: [
    'react', 'react-dom', /@babel\/runtime/
  ]
};
