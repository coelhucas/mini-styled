import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/miniStyled.js',
  output: {
    file: 'lib/miniStyled.js',
    format: 'cjs',
    exports: 'default'
  },
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
