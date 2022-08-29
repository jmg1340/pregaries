
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/rosari',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Rosari.vue') }
    ]
  },
  {
    path: '/coroneta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Coroneta.vue') }
    ]
  },
  {
    path: '/pregaries',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pregaries.vue') }
    ]
  },
  {
    path: '/pregaria/:oracio',
    component: () => import('layouts/pregariaLayout.vue'),
    children: [
      { path: '', props: true, component: () => import('pages/pregaria.vue') }
    ]
  },
  {
    path: '/novenes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Novenes.vue') }
    ]
  },
  {
    path: '/favorits',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Favorits.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
