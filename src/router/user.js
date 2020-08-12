export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Home'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Home'),
    meta: {
      title: '注册'
    }
  }
]
