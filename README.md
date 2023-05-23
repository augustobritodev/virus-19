# COVIDY

COVIDY is a covidometer that shows the current situation of the pandemic in the world for each country.

## 📋 Table of contents

- [COVIDY](#timesheet)
  - [📋 Table of contents](#-table-of-contents)
  - [📦 Installation](#-installation)
    - [Recommended IDE Setup](#recommended-ide-setup)
    - [Type Support for `.vue` Imports in TS](#type-support-for-vue-imports-in-ts)
  - [🚀 Usage](#-usage)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    - [Lint with ESLint](#lint-with-eslint)
  - [🧪 Testing](#-testing)
    - [Run Unit Tests with Vitest](#run-unit-tests-with-vitest)
    - [Run End-to-End Tests with Cypress](#run-end-to-end-tests-with-cypress)
  - [🏗️ Building](#building_construction-building)
  - [📜 License](#-license)

## 📦 Installation

Follow the steps below to setup your development environment.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 🚀 Usage

Before you start, make sure you have `Node.js` and you are using the version specified in `.node-version` file.

```sh
yarn install
```

### Compile and Hot-Reload for Development

Run the following command to start a development server with hot-reloading.

```sh
yarn dev
```

### Lint with [ESLint](https://eslint.org/)

Use the following command to run ESLint:

```sh
yarn lint
```

## 🧪 Testing

You can run the following commands to test your application.

### Run Unit Tests with [Vitest](https://vitest.dev/)

To run all unit tests using `Vitest`, run the following command:

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

To run all End-toEnd tests using `Cypress`, run the following command:

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

## 🏗️ Building

For Type-Check, Compile and Minify for Production use the following command:

```sh
yarn build
```

> When you push to GitHub, the app will be automatically deployed to [Cloudflare Pages](https://pages.cloudflare.com/) and will be available at [https://covidy.coody.me](https://covidy.coody.me).

## 📜 License
This project has no [license](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#:~:text=You%27re%20under%20no%20obligation%20to%20choose%20a%20license.%20However%2C%20without%20a%20license%2C%20the%20default%20copyright%20laws%20apply%2C%20meaning%20that%20you%20retain%20all%20rights%20to%20your%20source%20code%20and%20no%20one%20may%20reproduce%2C%20distribute%2C%20or%20create%20derivative%20works%20from%20your%20work.).