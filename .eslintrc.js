module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off'
    // 'vue/multi-word-component-names': ['error', {
    //   ignores: ['index', 'Layout'] // 需要忽略的组件名
    // }]
  }
}
