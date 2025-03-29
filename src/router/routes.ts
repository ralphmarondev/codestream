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
  },
  {
    path: '/our-work',
    name: 'our-work',
    meta: {
      title: 'Our Work | CodeStream'
    },
    component: () => import('../views/work/WorkIndex.vue')
  },
  {
    path: '/services',
    name: 'services',
    meta: {
      title: 'Services | CodeStream'
    },
    component: () => import('../views/services/ServicesIndex.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      title: 'News | CodeStream'
    },
    component: () => import('../views/news/NewsIndex.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact | CodeStream'
    },
    component: () => import('../views/contact/ContactIndex.vue')
  }
]

export default routes