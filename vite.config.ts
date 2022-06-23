import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 配置 element-plus 自动导入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/serverApi': {
        target: ' http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/serverApi/, ''),
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 配置 alias 别名，通过 @ 符号来表示路径
      '@': resolve(__dirname, 'src'),
      // '@utils': resolve(__dirname, 'src/utils'),
      // '@types': resolve(__dirname, 'src/types'),
      // '@enum': resolve(__dirname, 'src/enum'),
    },
  },
  // alias: {
  //   '/@/': resolve(__dirname, './src'),
  // },
});
