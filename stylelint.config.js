module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-max-id': 0,
    'selector-combinator-whitelist': [' '],
    'selector-max-specificity': '0,2,0',
    'selector-nested-pattern':
      '^&(:hover|:focus|:last-of-type|::before|::after|(__|--)([a-zA-Z0-9]*))(\\.is\\-[a-zA-Z0-9]*)?$',
    'selector-class-pattern': [
      '^(c|p|l|is)-[a-zA-Z0-9]*(__[a-zA-Z0-9]*){0,1}(--[a-zA-Z0-9]*){0,1}$',
      { resolveNestedSelectors: true },
    ],
  },
}
