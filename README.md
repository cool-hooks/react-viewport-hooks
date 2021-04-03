# [react-viewport-hooks](https://github.com/jb1905/react-viewport-hooks)

[![NPM version](https://img.shields.io/npm/v/react-viewport-hooks?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![NPM downloads](https://img.shields.io/npm/dm/react-viewport-hooks?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![NPM license](https://img.shields.io/npm/l/react-viewport-hooks?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/react-viewport-hooks?style=flat-square)](https://codecov.io/gh/cool-hooks/react-viewport-hooks)
[![Travis](https://img.shields.io/travis/cool-hooks/react-viewport-hooks/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-viewport-hooks)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-viewport-hooks?style=flat-square)](https://bundlephobia.com/result?p=react-viewport-hooks)

## About

Get real viewport width & height

### Demo

**[Playground – play with library in CodeSandbox](https://codesandbox.io/s/react-viewport-hooks-m8qxm)**

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-viewport-hooks
```

Or Yarn:

```sh
$ yarn add react-viewport-hooks
```

## Getting Started

#### Options

| Name               | Type    | Default     | Description                     |
| ------------------ | ------- | ----------- | ------------------------------- |
| **updateOnResize** | boolean | `true`      | Update sizes on window resize   |
| **defaultVW**      | number  | `undefined` | Fallback for default `vw` value |
| **defaultVH**      | number  | `undefined` | Fallback for default `vh` value |

#### Returned Values

| Name   | Type   | Description            |
| ------ | ------ | ---------------------- |
| **vw** | number | Window viewport width  |
| **vh** | number | Window viewport height |

#### Example

**`useViewport` hook:**

```js
import React from 'react';
import { useViewport } from 'react-viewport-hooks';

const App = () => {
  const { vw, vh } = useViewport(/* object with options (if needed) */);

  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return <h1>Hello Viewport!</h1>;
};

export default App;
```

**`withViewport` HOC:**

```js
import React from 'react';
import { withViewport } from 'react-viewport-hooks';

const App = ({ vw, vh }) => {
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return <h1>Hello Viewport!</h1>;
};

export default withViewport(/* object with options (if needed) */)(App);
```

## License

This project is licensed under the MIT License © 2019-present Jakub Biesiada
