module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    './node_modules/prettier-stylelint/config.js'
  ],
  rules: {
    'string-quotes': 'single',
    'rule-empty-line-before': [
      'always',
      {
        except: ['inside-block'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin']
      }
    ],
    'at-rule-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'comment-empty-line-before': 'never',
    'declaration-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-after': 'always'
  }
};
