<div align="center">
  <img src="/static/frigobar.svg" width="300" />

[![Build Status](https://travis-ci.org/frigobar/frigobar.svg?branch=master)](https://travis-ci.org/frigobar/frigobar)
[![Commitizen Friendly](https://camo.githubusercontent.com/6080f52144977b8b2b20e42408379ce68371aafd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6d6d6974697a656e2d667269656e646c792d627269676874677265656e2e737667)](https://github.com/commitizen/cz-cli)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END --> [![StyledComponents](https://camo.githubusercontent.com/83915eaa262cfa89f70f2d4eb2ec55c0cbe7c615/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c652d2546302539462539322538352532307374796c65642d2d636f6d706f6e656e74732d6f72616e67652e7376673f636f6c6f72423d64616133353726636f6c6f72413d646237343865)](https://github.com/styled-components/styled-components)

</div>

## Install

You can install Frigobar using either of the methods below.

For npm users:

```shell
npm install @frigobar/core styled-components --save
```

For Yarn users:

```shell
yarn add @frigobar/core styled-components
```

## Usage

It's very easy to start using frigobar in your react application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Button } from '@frigobar/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
