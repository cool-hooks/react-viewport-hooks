# [react-viewport-hooks](https://github.com/cool-hooks/react-viewport-hooks)

[![NPM version](https://img.shields.io/npm/v/react-viewport-hooks?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![NPM downloads](https://img.shields.io/npm/dm/react-viewport-hooks?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![NPM license](https://img.shields.io/npm/l/react-viewport-hooks?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-viewport-hooks?style=flat-square)](https://codecov.io/gh/cool-hooks/react-viewport-hooks)
[![Travis](https://img.shields.io/travis/com/cool-hooks/react-viewport-hooks/main?style=flat-square)](https://app.travis-ci.com/github/cool-hooks/react-viewport-hooks)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-viewport-hooks?style=flat-square)](https://bundlephobia.com/result?p=react-viewport-hooks)

## About

Get the real width and height of the window

### Demo

Play with the library in CodeSandbox

- [hooks](https://codesandbox.io/s/hooks-demo-m8qxm)
- [HOC](https://codesandbox.io/s/hoc-demo-9998s)

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

### Options

| Name               | Type    | Default     | Description                               |
| ------------------ | ------- | ----------- | ----------------------------------------- |
| **updateOnResize** | boolean | `true`      | Update the sizes when resizing the window |
| **defaultVw**      | number  | `undefined` | Fallback for the default `vw` value       |
| **defaultVh**      | number  | `undefined` | Fallback for the default `vh` value       |

### Returned Values

| Name   | Type   | Description                   |
| ------ | ------ | ----------------------------- |
| **vw** | number | Width of the window viewport  |
| **vh** | number | Height of the window viewport |

### Example

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
