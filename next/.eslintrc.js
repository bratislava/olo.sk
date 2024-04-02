module.exports = {
  extends: ["auto", "plugin:@next/next/recommended"],
  rules: {
    /** Named export is easier to refactor automatically */
    "import/prefer-default-export": "off",
    /** Too tedious to type every function return explicitly */
    "@typescript-eslint/explicit-function-return-type": "off",
    /** We prefer arrow functions */
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    /** It's annoying to refactor from one style to another */
    "arrow-body-style": "off",
    /** These are exceptions that we use with "__" */
    "no-underscore-dangle": [
      2,
      { allow: ["__NEXT_DATA__", "__NEXT_LOADED_PAGES__", "__typename"] },
    ],
    /** Links get confused for secrets */
    "no-secrets/no-secrets": ["warn", { ignoreContent: "^http" }],
    /** Too tedious */
    "eslint-comments/disable-enable-pair": "off",
    /** We specify default props in props decomposition */
    "react/require-default-props": "off",
    /** This is no longer needed since React 17 */
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    "lodash/prefer-noop": "off",
    "pii/no-phone-number": "off",
    "xss/no-mixed-html": "off",

    // TODO: Turned off because of some missing setup
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    // Solve warning "Promise-returning function provided to attribute where a void return was expected."
    // '@typescript-eslint/no-misused-promises': [
    //   2,
    //   {
    //     checksVoidReturn: {
    //       attributes: false,
    //     },
    //   },
    // ],
  },
  ignorePatterns: ["*.config.*", ".eslintrc.js"],
};
