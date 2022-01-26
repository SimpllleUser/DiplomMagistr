const routes = [
  {
    path: '/',
    name: 'landing-page',
    meta: {
      layout: 'base',
    },
    component: require('@/views/Main').default,
  },
  {
    path: '*',
    redirect: '/',
  },
];
export default routes;
