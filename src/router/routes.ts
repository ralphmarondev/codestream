const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home | CodeStream',
    },
    component: () => import('../views/home/HomeIndex.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About | CodeStream',
    },
    component: () => import('../views/about/AboutIndex.vue'),
  },
  {
    path: '/our-work',
    name: 'our-work',
    meta: {
      title: 'Our Work | CodeStream',
    },
    component: () => import('../views/work/WorkIndex.vue'),
  },
  {
    path: '/services',
    name: 'services',
    meta: {
      title: 'Services | CodeStream',
    },
    component: () => import('../views/services/ServicesIndex.vue'),
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      title: 'News | CodeStream',
    },
    component: () => import('../views/news/NewsIndex.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact | CodeStream',
    },
    component: () => import('../views/contact/ContactIndex.vue'),
  },
  {
    path: '/ralphmaron',
    name: 'ralphmaron',
    meta: {
      title: 'Ralph Maron Eda | CodeStream',
    },
    component: () => import('../views/about/team/RalphIndex.vue'),
  },
  {
    path: '/jack',
    name: 'jack',
    meta: {
      title: 'Jack Cabigayan | CodeStream',
    },
    component: () => import('../views/about/team/JackIndex.vue'),
  },
  {
    path: '/triesha',
    name: 'triesha',
    meta: {
      title: 'Triesha Mae Olunan | CodeStream',
    },
    component: () => import('../views/about/team/TrieshaIndex.vue'),
  },
  {
    path: '/jezlyn',
    name: 'jezlyn',
    meta: {
      title: 'Jezlyn Cabbab | CodeStream',
    },
    component: () => import('../views/about/team/JezlynIndex.vue'),
  },
]

export default routes
