module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@stylistic'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'withTwin.js',
    '.eslintrc.js',
    'release.config.js'
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
  },
};