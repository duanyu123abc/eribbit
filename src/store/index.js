import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    // 存状态
  },
  getters: {
    // 写计算属性
  },
  mutations: {
    // 修改方法
  },
  actions: {
    // 拿数据
  },
  modules: {
    // 分模块
    user,
    cart,
    category
  },
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储名字
      key: 'erabbit-client-pc-124-store',
      // 指定需要存储的模块
      path: ['user', 'cart']
    })
  ]
})
