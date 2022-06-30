import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 注意 vite 默认是不加载 .env 文件的，因为这些文件需要在执行完 vite 配置后才能确定加载哪一个
  // 使用 vite 导出的 loadEnv 函数来加载指定的 .env 文件
  // 获取 vite 扫描到的环境变量，扫描文件按如下顺序
  // .env.[model].local
  // .env.[model]
  // .env.local
  // .env
  const env = loadEnv(mode, path.resolve(__dirname))

  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      strictPort: true, // 若端口已被占用则会直接退出
      port: env.VITE_APP_PROXY_PORT, // 指定服务器端口，默认为 5173
      proxy: {
        '/api': {
          secure: false, // 关闭 SSL 安全证书检查
          target: env.VITE_APP_PROXY_TARGET, // 代理目标地址
          changeOrigin: true, // 将主机标头的来源更改为目标URL
        },
      },
    },
  }
})
