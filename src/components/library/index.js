// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0插件写法：导出一个对象，有Install函数，默认传入了vue构造函数，vue基础之上扩展
// vue3.0插件写法：导出一个对象，有Install函数，默认传入了app应用实例，app基础之上扩展

import XtxSkeleton from './xtx-skeleton.vue'

export default {
  install (app) {
    // 在app上扩展app提供component directive函数
    // 如果要挂载原型，app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
  }
}
