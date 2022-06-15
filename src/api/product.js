// 提供商品相关的API函数
import request from '@/utils/request'

/**
 * 获取商品详情
 * @param {String} id - 商品ID
 * @returns
 */
export const findGoods = (id) => {
  return request('./goods', 'get', { id })
}
/**
 *获取推荐商品/猜你喜欢
 * @param {String} id - 商品Id，不传便是猜你喜欢
 * @param {Integer} limit - 商品数量
 */
export const findRelevantGoods = ({ id, limit = 16 }) => {
  return request('/goods/relevant', 'get', { id, limit })
}

/**
 *获取热销榜
 * @param {String} id - 商品Id
 * @param {Integer} limit - 商品数量
 * @param {Integer} type - 热销类型，1为24小时，2为周榜，3为总榜，默认为1
 */
export const findGoodsHot = ({ id, limit = 3, type = 1 }) => {
  return request('/goods/hot', 'get', { id, limit, type })
}

/**
 * 查询商品评价信息
 * @param {String} id - 商品Id
 * @returns
 */
export const findGoodsCommentInfo = (id) => {
  // return request(`/goods/${id}/evaluate`, 'get')
  // axios中遇见http https开头的地址，不会加上基准地址
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get')
}

/**
 * 查询商品评价列表
 * @param {String} id - 商品Id
 * @param {Object} id -
 * @returns
 */
export const findGoodsCommentList = (id, params) => {
  // return request(`/goods/${id}/evaluate`, 'get')
  // axios中遇见http https开头的地址，不会加上基准地址
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page`, 'get', params)
}