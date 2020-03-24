# Contributing to Frigobar

We would love for you to contribute to Frigobar and help make it even better. By
contributing to Frigobar, you agree to abide by the
[code of conduct](https://github.com/frigobar/frigobar/blob/master/CODE_OF_CONDUCT.md)

## How to start contributing?

You can contribute with any kind of idea, it can be a suggetion of a new feature
, fix grammar and writting errors, new components, etc...

If it is a bug fix, firstly open an issue to describe the current and
desired behavior.

## Contributing with code

This repository is a monorepo managed by [Lerna](https://github.com/lerna/lerna)
and makes use of
[yarn workspaces](https://classic.yarnpkg.com/en/docs/cli/workspaces/)

If you haven't already done so,
[install yarn](https://classic.yarnpkg.com/en/docs/install) and run these
commands:

```shell
git clone git@github.com:frigobar/frigobar.git
cd frigobar
yarn
yarn dev
```

The releases are created based on every commit message, so, when you commit,
make sure to use `yarn commitizen` to format your commit, this way the release
will be created with the correct semantic version.

### Scripts

- `yarn dev` starts storybook
- `yarn test` runs test for every package
- `yarn lint` runs eslint for every package
- `yarn commitizen` opens the commitizen CLI to format your commit message

### Git hooks

This project have a few hooks that runs on `commit` and `push`.

#### Commit

On every `commit` the `eslint` will check if you are following all the
[airbnb code style guide](https://github.com/airbnb/javascript).

#### Push

On every `push` all the tests will run to make sure that they are passing.
