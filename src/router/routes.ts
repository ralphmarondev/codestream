const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home | CodeStream'
    },
    component: () => import('../views/home/HomeIndex.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About | CodeStream'
    },
    component: () => import('../views/about/AboutIndex.vue')
  }
]

export default routes