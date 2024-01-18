module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console" : "off",
    "no-debugger":  "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-scope-attribute': 'off',
    "vue/no-side-effects-in-computed-properties": "off",
    '@typescript-eslint/no-var-requires': 0,
    "no-var": 0,
    "no-empty": 'off',
    "eslint-disable-next-next":'off',
    "eslint-disable":'off',


  }
};
