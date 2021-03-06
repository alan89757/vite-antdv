/**
 * @description 导出默认通用配置
 */
const setting = {
  // 开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  //  transpileDependencies: ['vue-echarts', 'resize-detector'],
  // 标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: '星威管车',
  // 标题分隔符
  titleSeparator: ' - ',
  // 标题是否反转 如果为false:"page - title"，如果为ture:"title - page"
  titleReverse: false,
  // 开发环境端口号
  devPort: '8080',
  // 版本号
  version: process.env.VUE_APP_VERSION,
  // 缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  // 不经过token校验的路由
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
  // 加载时显示文字
  loadingText: '正在加载中...',
  // token名称
  tokenName: 'authorization',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'authorization',
  // token存储位置localStorage sessionStorage cookie
  storage: 'localStorage',
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  // 语言类型zh、en
  i18n: 'zh',
  // 在哪些环境下显示高亮错误
  errorLog: ['development', 'production'],
  // 是否开启登录拦截
  loginInterception: true,
  // 是否开启登录RSA加密
  loginRSA: false,
  // intelligence（前端导出路由）和all（后端导出路由）两种方式
  authentication: 'intelligence',
  // 是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
  rolesControl: true,
  // 需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  // 需要自动注入并加载的模块
  providePlugin: {},
  // npm run build时是否自动生成7z压缩包
  build7z: false,
  // 腾讯地图key
  qqMapKey: '2VZBZ-HHIRU-HQ4VS-BSLAQ-LIK5T-A4BLM',
}
module.exports = setting
