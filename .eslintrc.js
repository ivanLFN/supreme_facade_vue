module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    '@vue/standard',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
