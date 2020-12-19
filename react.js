module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "./index"
  ],
  "plugins": [
    "react",
    "react-hooks"
  ],
  "settings": {
    "react": {
      "version": "17"
    }
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "default",
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      },
      {
        "selector": "variable",
        // only difference from default is that PascalCase is added here,
        // for functional components
        "format": ["camelCase", "PascalCase", "UPPER_CASE"],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ],
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/unbound-method": "off",
    "react/boolean-prop-naming": "warn",
    "react/button-has-type": "warn",
    "react/destructuring-assignment": "warn",
    "react/forbid-dom-props": [
      "warn",
      {
        "forbid": ["id"]
      }
    ],
    "react/function-component-definition": [
      "warn",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-boolean-value": "warn",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-curly-newline": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-equals-spacing": "warn",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".tsx"]
      }
    ],
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-fragments": "warn",
    "react/jsx-handler-names": "warn",
    "react/jsx-indent": [
      "warn",
      2
    ],
    "react/jsx-key": [
      "warn",
      {
        "checkFragmentShorthand": true
      }
    ],
    "react/jsx-max-depth": [
      "warn",
      {
        "max": 6
      }
    ],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-script-url": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": [
      "warn",
      {
        "allowGlobals": false
      }
    ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-one-expression-per-line": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/jsx-wrap-multilines": [
      "warn",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ],
    "react/no-access-state-in-setstate": "off",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "warn",
    "react/no-danger": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "warn",
    "react/no-find-dom-node": "warn",
    "react/no-this-in-sfc": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unknown-property": "warn",
    "react/no-unsafe": "warn",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/prefer-stateless-function": "warn",
    "react/self-closing-comp": "warn",
    "react/state-in-constructor": "warn",
    "react/style-prop-object": "warn",
    "react/void-dom-elements-no-children": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "max-classes-per-file": "off"
  }
};
