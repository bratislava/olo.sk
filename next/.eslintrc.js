module.exports = {
  extends: [
    'auto',
    'plugin:@next/next/recommended',
    'plugin:i18next/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    /** Named export is easier to refactor automatically */
    'import/prefer-default-export': 'off',
    /** Too tedious to type every function return explicitly */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /** We prefer arrow functions */
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    /** It's annoying to refactor from one style to another */
    'arrow-body-style': 'off',
    /** These are exceptions that we use with "__" */
    'no-underscore-dangle': [
      'error',
      { allow: ['__NEXT_DATA__', '__NEXT_LOADED_PAGES__', '__typename'] },
    ],
    /** Links get confused for secrets */
    'no-secrets/no-secrets': ['warn', { ignoreContent: 'http' }],
    /** Too tedious */
    'eslint-comments/disable-enable-pair': 'off',
    /** We specify default props in props decomposition */
    'react/require-default-props': 'off',
    /** This is no longer needed since React 17 */
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    /** Solve warning "Promise-returning function provided to attribute where a void return was expected." */
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/no-floating-promises': 'warn',

    'lodash/prefer-noop': 'off',
    'pii/no-phone-number': 'off',
    'xss/no-mixed-html': 'off',

    'i18next/no-literal-string': ['error', { 'should-validate-template': true }],

    // TODO revisit
    'import/extensions': 'off',

    /* Formatting rules */
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // TODO revisit, prettier should not be run by eslint
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
  },
  ignorePatterns: ['*.config.*', '.eslintrc.js', 'src/services/graphql/api.ts'],
}
