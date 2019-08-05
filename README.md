# [react-viewport-hooks](https://github.com/jb1905/react-wordpress-hooks)

[![NPM version](http://img.shields.io/npm/v/react-viewport-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)
[![NPM downloads](http://img.shields.io/npm/dm/react-viewport-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-viewport-hooks)

## About


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
