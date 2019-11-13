module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript',
    'prettier/@typescript-eslint'
  ],
  rules: {
    // 0 = off, 1 = warn, 2 = error
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['warn', 'single'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      1,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      2,
      {
        allowSingleExtends: true
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
