# eslint-plugin-vue

ESLint plugin for Vue projects at Reflektor Digital.

## What's inside this config?

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`@reflektor/eslint-config-vue`](https://www.npmjs.com/package/@reflektor/eslint-config-vue)
  - [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)
  - [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
  - [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)
  - [`eslint-plugin-nuxt`](https://www.npmjs.com/package/eslint-plugin-nuxt)

> The dependencies are listed as `dependencies` in `package.json` instead of just `devDependencies` so that those packages will be installed automatically when we install this plugin. Hence, the only other package we would need to install is `eslint`.

## Installation

```
yarn add eslint @reflektor/eslint-plugin-vue -D
```

## Usage

Once the package and dependencies are installed, we can apply this ESLint plugin into our project.

```js
// .eslintrc.js

module.exports = {
  // ...
  plugins : [
    // ...
    '@reflektor/vue'
  ],
  extends : [
    // ...
    'plugin:@reflektor/vue/nuxt', // For Nuxt projects

    // OR
    'plugin:@reflektor/vue/base', // For regular Vue projects
  ]
};
```

## Guidelines

- [Code of Conduct](./docs/CODE_OF_CONDUCT.md)
- [Contributing](./docs/CONTRIBUTING.md)
- [Code Review](./docs/CODE_REVIEW.md)
- [Git Standards](./docs/GIT_STANDARDS.md)
- [Pull Request Template](./docs/PULL_REQUEST_TEMPLATE.md)

## License

[MIT License](./LICENSE.md)