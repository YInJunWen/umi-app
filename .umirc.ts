import { defineConfig } from 'umi';
import ROUTERS from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: ROUTERS,
  chainWebpack: function (config, { webpack }) {
    // config 这个地方的config 实际上就是一个chainWebpack 链式方式可以传入webpack配置修改并执行
    config
      .output  
        // .filename('[name].bundle.js')
        .filename('Yin.bundle.js')
  }
});
