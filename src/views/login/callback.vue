<template>
  <div class="login-callback">回调</div>
</template>

<script>
// import { ref } from 'vue'
// import LoginHeader from './components/login-header'
// import LoginFooter from './components/login-footer'
// import CallbackBind from './components/callback-bind'
// import CallbackPatch from './components/callback-patch'
export default {
  name: 'LoginCallBack'
//   components: { LoginHeader, LoginFooter, CallbackBind, CallbackPatch },
//   setup () {
//     const hasAccount = ref(true)
//     const nickname = ref(null)
//     const avatar = ref(null)
//     return { hasAccount, nickname, avatar }
//   }
}
</script>

<style scoped lang='less'>
.container {
  padding: 25px 0;
}
.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
  a {
    color: #666;
    display: inline-block;
    width: 350px;
    line-height: 40px;
    border-bottom: 2px solid #e4e4e4;
    i {
      font-size: 22px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
    &.active {
      color: @xtxColor;
      border-color: @xtxColor;
    }
  }
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
</style>
