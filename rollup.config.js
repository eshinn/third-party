// import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    plugins: [
      // babel(),
      buble(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    plugins: [
      // babel(),
      // buble(),
    ],
  }
]
