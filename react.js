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
  "rules": {
    "react/boolean-prop-naming": "error",
    "react/button-has-type": "error",
    "react/destructuring-assignment": "error",
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": [
      "error",
      {
        "forbid": ["id"]
      }
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-newline": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".tsx"]
      }
    ],
    "react/jsx-first-prop-new-line": "error",
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": [
      "error",
      2
    ],
    "react/jsx-key": [
      "error",
      {
        "checkFragmentShorthand": true
      }
    ],
    "react/jsx-max-depth": [
      "error",
      {
        "max": 6
      }
    ],
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": [
      "error",
      {
        "allowGlobals": false
      }
    ],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-wrap-multilines": [
      "error",
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
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-find-dom-node": "error",
    "react/no-multi-comp": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": "error",
    "react/state-in-constructor": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "max-classes-per-file": "off"
  }
};
