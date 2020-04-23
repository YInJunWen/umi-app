const ROUTERS = [
  {
    path: '/',
    component: '@/layouts/common',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home/home' },
      { exact: true, path: '/details/:id', component: '@/pages/details/[id]' },
    ],
  },
];

export default ROUTERS;
