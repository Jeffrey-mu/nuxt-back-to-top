<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: nuxt-back-to-top
- Description: My new Nuxt module
-->

# nuxt-back-to-top

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> My new Nuxt module

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `nuxt-back-to-top` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-back-to-top

# Using yarn
yarn add --dev nuxt-back-to-top

# Using npm
npm install --save-dev nuxt-back-to-top
```

2. Add `nuxt-back-to-top` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-back-to-top'
  ],
  backToTop: {
    prefix: 'Nuxt',
    autoInsert: true, // If the autoInsert value is false, the component will be imported
  },
})
```
- If you do not need to insert automatically, you can use components
- Layout or app page use
```html
<template>
<NuxtBackToTop />
</template>
```
## props
```ts
props = {
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) { },
    },
    width: {
      type: String,
      default: '30px',
    },
    height: {
      type: String,
      default: '30px',
    },
    color: {
      type: String,
      default: '#257EDF',
    },
  },
```
That's it! You can now use My Module in your Nuxt app ✨
## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-back-to-top/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-back-to-top

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-back-to-top.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-back-to-top

[license-src]: https://img.shields.io/npm/l/nuxt-back-to-top.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-back-to-top
