// .eslintrc.js
module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'no-unused-vars': 'warn',
    'no-console': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/**', '**/*.test.js', '**/tests/**/*.js'],
      env: { jest: true }
    }
  ]
}
