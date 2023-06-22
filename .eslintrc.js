module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
  }
}