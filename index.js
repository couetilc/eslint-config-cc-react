module.exports = {
  extends: [
    "cc-lint",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
};
