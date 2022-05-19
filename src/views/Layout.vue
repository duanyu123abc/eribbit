<template>
<!-- 顶部通栏 -->
  <AppNavBar></AppNavBar>
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
export default {
  name: 'Layout',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
