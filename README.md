# umi-plugin-runtime-import-v4
[![NPM version](https://img.shields.io/npm/v/umi-plugin-runtime-import-v4.svg?style=flat)](https://npmjs.org/package/umi-plugin-runtime-import-v4) [![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-runtime-import-v4.svg?style=flat)](https://npmjs.org/package/umi-plugin-runtime-import-v4)


Dynamic import cdn modules when needed for umi.


## Install

```bash
# or yarn add umi-plugin-runtime-import-v4
$ npm install umi-plugin-runtime-import-v4
```

## Usage
Configure in `.umirc.js` or `config/config.ts`,

``` javascript
export default {
  runtimeImport: {
    base: 'https://gw.alipayobjects.com/os/lib/',
    js: {
      react: {
        moduleName: 'React',
        url: 'react/16.14.0/umd/react.development.js',
      },
      antd: {
        moduleName: 'antd',
        url: 'https://gw.alipayobjects.com/os/lib/antd/4.12.2/dist/antd.js',
      },
    },
    css: {
      'video.js/dist/video-js.min.css': 'video.js/7.6.6/dist/alt/video-js-cdn.min.css',
      'antd/dist/antd.css': {
        url: 'https://gw.alipayobjects.com/os/lib/antd/4.12.2/dist/antd.css',
      },
    },
  },
};
```


## Development

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```


## Inspired

https://github.com/fengsx/umi-plugin-runtime-import
