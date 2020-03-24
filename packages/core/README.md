# @frigobar/core

[![Build Status](https://travis-ci.org/frigobar/frigobar.svg?branch=master)](https://travis-ci.org/frigobar/frigobar)

@frigobar/core is a simple component library built with
[React](https://reactjs.org/ 'React').

You can check all available components at our
[storybook](https://frigobar.github.io/frigobar/).

## Install

You can install Frigobar using either of the methods below.

For npm users:

```shell
$ npm install @frigobar/core --save
```

For Yarn users:

```shell
$ yarn add @frigobar/core
```

An important note is that the **styled-components** is a peerDependency
[see why](https://styled-components.com/docs/faqs#i-am-a-library-author-should-i-bundle-styledcomponents-with-my-library), if
you dont have styled-components installed you'll
[need to install](https://styled-components.com/docs/basics#installation).

## Usage

To use the `frigobar` components, you'll need to import the
`ThemeProvider` to inject the default `theme`. Then you will be able to import
any of our components.

You just need to wrap your entire application with this `ThemeProvider` and you
be ready to go!

Example:

```javascript
import { ThemeProvider, Button } from '@frigobar/core';

const App = () => (
  <ThemeProvider>
    <Button>Hello World!</Button>
  </ThemeProvider>
);
```
