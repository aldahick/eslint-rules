const config = require("./index");

module.exports = {
  ...config,
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb"
  ],
  "rules": {
    ...config.rules,
    "@typescript-eslint/indent": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/media-has-caption": "off",
    "max-classes-per-file": "off",
    "no-undef": "off",
    "quotes": ["error", "double", { "avoidEscape": true }],
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": "off"
  }
};
