/**
 * @description 导出默认网路配置
 **/
const network = {
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  // 消息框消失时间(以秒为单位)
  messageDuration: 3,
  // 最长请求时间
  requestTimeout: 60000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: ['OK', 1],
}
module.exports = network
