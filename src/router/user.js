export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/Register'),
    meta: {
      title: '注册'
    }
  }
]
