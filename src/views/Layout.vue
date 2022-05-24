<template>
<!-- 顶部通栏 -->
  <AppNavBar></AppNavBar>
  <!-- 吸顶头部 -->
  <AppHeaderNav></AppHeaderNav>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavBar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderNav from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    AppHeaderNav
  },
  // 获取分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
