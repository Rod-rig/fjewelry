# Markuper start

## Features
* configure your project by webpack
* bundling and minification using webpack
* support of ES6 syntax which transpile by Babel
* support of PostCSS syntax
* lint your CSS and JS by stylelint and ESLint
* sprite generation

## Getting started

* Install [node.js](https://nodejs.org/).
    To check if node is installed type in command line
```bash
node -v
```
* Install Webpack globally
```bash
npm i webpack -g
```
* Install all node packages (execute in project directory):
```bash
npm i
```
* Start working on project (execute in project directory):
```bash
webpack
```
or type this:
```bash
npm run build
```
Last two commands will create all css and js bundles + create sprite image 
(if directory `img/sprite` contains images).

To start watching for changes in `*.css` and `*.js` files type this command
```bash
npm start
```
or type this:
```bash
webpack --watch
```
After all these actions you should get message in CLI like this:
```bash
webpack is watching the files…

Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.
Hash: e61c552d9bb68f4ae690
Version: webpack 4.44.1
Time: 3620ms
Built at: 2020-08-15 11:22:46 PM
              Asset      Size  Chunks                   Chunk Names
    ../css/main.css  3.02 KiB    main  [emitted]        main
../css/main.css.map  4.42 KiB    main  [emitted] [dev]  main
            main.js  4.37 KiB    main  [emitted]        main
        main.js.map   3.7 KiB    main  [emitted] [dev]  main
Entrypoint main = ../css/main.css main.js ../css/main.css.map main.js.map
[./js/index.js] 27 bytes {main} [built]
[./scss/main.scss] 39 bytes {main} [built]
    + 1 hidden module
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js!node_modules/sass-loader/dist/cjs.js!scss/main.scss:
    Entrypoint mini-css-extract-plugin = *
    [./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss 7.8
1 KiB {mini-css-extract-plugin} [built]
        + 1 hidden module

```

## General principles

### Components

Component consist of:
* markup template (located in `markup/components`)
* [optional] data (located in `markup/data`)
* [optional] default parameters (located in `markup/default-parameters`)

To include component call function includeComponent(string $name, string $dataFilePath = '', array $arParams = array())

In template will be available two php variables:
* `$arParams` - composed of default parameters and parameters passed during function call
* `$arResult` - populated with data from `markup/data/{$dataFilePath}.php`

#### Default parameters

Default parameters for component could be set in two places `markup/default-parameters/.global.php`
 and `markup/default-parameters/[component's name].php`

Component's specific default parameters file is optional.
 
#### Example

`<?php includeComponent('nav/menu', 'menu/simple', ['MODIFIER' => 'green']);?>`

This call means that will be included `markup/components/nav/menu.php` file
with passed into it
* `$arParams` composed of `markup/default-parameters/.global.php`,
`markup/default-parameters/nav/menu.php` _(if exists)_ and `['MODIFIER' => 'green']` _(array passed into function call)_
* `$arResult` populated with data from `markup/data/menu/simple.php`

### Images

Images used in styles should go into `img` directory.