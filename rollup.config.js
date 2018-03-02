import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './index.ts',

  output: {
    name: 'serializable',
    file: './index.bundle.js',
    format: 'es',
  },
  plugins: [
    typescript(),
    uglify()
  ]
}