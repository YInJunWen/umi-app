import { defineConfig } from 'umi';
import ROUTERS from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: ROUTERS
});
