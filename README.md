# eslint-config-cc-react

A collection of useful linting rules for [React](https://reactjs.org/)
emphasizing correctness rather than style, as a shareable
[ESLint](https://eslint.org/) configuration.

## Usage / Installation

1) Install this package using `npm`.

```sh
npm install --save-dev eslint-config-cc-react eslint eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

2) Open or create an eslint configuration and add the property `extends: "eslint-config-cc-react`.

```js
// file: .eslintrc.js
module.exports = {
  extends: ["cc-react"]
}
```

## Publishing

Steps to publish a new version of this package to NPM:

```sh
# 1. Increment the version number in `package.json`
git add package.json && git commit -m "bump version to X.X.X"
# 2. Push your updates to `master` branch at https://github.com/couetilc/eslint-config-cc-react
git push origin master
# 3. Create and publish a new release from the `master` branch
hub release create -t origin/master -m "vX.X.X" "vX.X.X"
```

Increment the package version number according to [Semantic Versioning](https://semver.org/).
A Github Action will publish the new version to [NPM](https://www.npmjs.com/package/eslint-config-cc-react).
