# [react-viewport-hooks](https://github.com/jb1905/react-viewport-hooks)

[![NPM version](http://img.shields.io/npm/v/react-viewport-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![NPM downloads](http://img.shields.io/npm/dm/react-viewport-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)

## About
Get real viewport width & height

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
**• Import hook in React application file:**
```js
import { useViewport } from 'react-viewport-hooks';
```

#### Options
Name | Type | Default | Description
-|-|-|-
**updateOnResize** | boolean | `true` | Update sizes on window resize

#### Returned Values
Name | Type | Description
-|-|-
**vw** | number | Window viewport width
**vh** | number | Window viewport height

## Example
```js
import React, { useEffect } from 'react';
import { useViewport } from 'react-viewport-hooks';

const App = () => {
  const { vw, vh } = useViewport();

  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <h1>Hello Viewport!</h1>
  );
}

export default App;
```

## License
This project is licensed under the MIT License © 2019-present Jakub Biesiada
