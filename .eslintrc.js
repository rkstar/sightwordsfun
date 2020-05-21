module.exports = {
  extends: [
    '@react-native-community',
    'plugin:@shopify/typescript',
    'plugin:@shopify/react',
    'plugin:@shopify/jest',
    'plugin:@shopify/prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'eslint-comments/disable-enable-pair': 'off',
    'no-warning-comments': 'off',
    'no-process-env': 'off',
    'import/no-cycle': 'off',
    'react/jsx-no-bind': 'off',
    '@shopify/jest/no-vague-titles': 'off',
    '@shopify/jsx-no-complex-expressions': 'off',
    'import/no-named-as-default': 'off',
    '@shopify/images-no-direct-imports': 'off',
    '@shopify/jest/no-snapshots': 'off',
    '@shopify/jsx-no-hardcoded-content': 'off',
    'react-native/no-inline-styles': 'off',
    'no-console': 'off',
    '@typescript-eslint/camelcase': 'off',
    'require-atomic-updates': 'off',
    'no-extend-native': 'off',
    'max-params': 'off',
    'max-len': [
      'error',
      {
        code: 200,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'error'
  },
};
