# rollup-plugin-ts-treeshaking

Improve TypeScript tree-shaking with Rollup and UglifyJS/Terser.

Uses `rollup-plugin-replace` to replace `/** @class */` annotations generated by TypeScript with `/*@__PURE__*/` that can be used by `uglifyjs`, `uglify-es` and `terser` for dead code elimination.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Installation

### NPM

```
npm i -D rollup-plugin-ts-treeshaking
```

### Yarn

```
yarn add -D rollup-plugin-ts-treeshaking
```

## Usage

```js
import typescript from 'rollup-plugin-typescript2';
import tsTreeshaking from 'rollup-plugin-ts-treeshaking';

export default {
  plugins: [
    typescript(),
    tsTreeshaking(),
    /* ... */
  ],
  /* ... */
};
```

### Options

#### js

Enables processing of .js and .jsx files in addition to .ts and .tsx.

type: `boolean`  
default: `true`

## License

[MIT](LICENSE)
