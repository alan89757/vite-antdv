import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { prefixhost, prefix } from './qiniu-upload-prefix';

const path = require('path')

export default defineConfig(({ mode }) => {
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
    base: true ? prefixhost + prefix : '/'
  }
})
