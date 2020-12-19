module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "prefer-arrow",
    "simple-import-sort"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": [
      "warn",
      {
        "default": "array"
      }
    ],
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/brace-style": "warn",
    "@typescript-eslint/class-literal-property-style": "warn",
    "@typescript-eslint/comma-spacing": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": "warn",
    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/func-call-spacing": "warn",
    "@typescript-eslint/indent": [
      "warn",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/keyword-spacing": "warn",
    "@typescript-eslint/lines-between-class-members": "warn",
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        "default": {
          "memberTypes": [
            // Index signature
            "signature",

            // Fields
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "public-abstract-field",
            "protected-abstract-field",
            "private-abstract-field",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            // Methods
            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "public-abstract-method",
            "protected-abstract-method",
            "private-abstract-method",
            "public-static-method",
            "protected-static-method",
            "private-static-method"
          ]
        }
      }
    ],
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/no-array-constructor": "warn",
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-extra-parens": "warn",
    "@typescript-eslint/no-extra-semi": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "warn",
    "@typescript-eslint/no-implied-eval": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-loss-of-precision": "warn",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-shadow": [
      "warn",
      {
        "hoist": "all"
      }
    ],
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-ts-expect-warn": "warn",
    "@typescript-eslint/quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/return-await": "warn",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/space-before-function-paren": [
      "warn",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/triple-slash-reference": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "prefer-arrow/prefer-arrow-functions": "warn",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "arrow-body-style": "warn",
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "complexity": "warn",
    "constructor-super": "warn",
    "curly": "warn",
    "eol-last": "warn",
    "eqeqeq": "warn",
    "guard-for-in": "warn",
    "max-classes-per-file": "warn",
    "new-parens": "warn",
    "no-bitwise": "warn",
    "no-caller": "warn",
    "no-cond-assign": "warn",
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-eval": "warn",
    "no-multiple-empty-lines": "warn",
    "no-new-wrappers": "warn",
    "no-redeclare": "warn",
    "no-return-await": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": "warn",
    "no-undef-init": "warn",
    "no-unsafe-finally": "warn",
    "no-unused-labels": "warn",
    "no-useless-concat": "warn",
    "no-var": "warn",
    "object-shorthand": "warn",
    "one-var": [
      "warn",
      "never"
    ],
    "prefer-const": "warn",
    "prefer-template": "warn",
    "quote-props": [
      "warn",
      "consistent-as-needed"
    ],
    "radix": "warn",
    "spaced-comment": "warn",
    "template-curly-spacing": "warn",
    "use-isnan": "warn",
    "valid-typeof": "warn"
  }
};
