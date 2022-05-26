// 提供复用逻辑的函数（钩子）

import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 *
 * @param {Element} target - Dom对象
 * @param {Function} apiFn -API函数
 */
export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)

  // stop 是停止观察是否进入或移出可视区域的行为
  const { stop } = useIntersectionObserver(
    // target 是观察的目标dom容器，必须是dom容器，而且是vue3.0方式绑定的dom对象
    target,
    // isIntersecting 是否进入可视区域，true是进入 false是移出
    // observerElement 被观察的dom
    ([{ isIntersecting }], observerElement) => {
      // 在此处可根据isIntersecting来判断，然后做业务
      if (isIntersecting) {
        stop()
        //   调取api函数获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    // 配置选项 相交的比例
    {
      threshold: 0
    }
  )
  return { result, target }
}
