/**
 * @description 导出自定义配置
 **/
const config = {
  routesWhiteList: [
    '/login',
    '/home', // TODO 首页暂无内容，直接放行
    '/version/index',
    '/401',
    '/403',
    '/404',
    '/snapshot-details',
    '/print',
  ],
}
module.exports = config
