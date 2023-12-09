
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
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
    path: '/pregaria/:clauOracio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', props: true, component: () => import('pages/pregaria.vue') }
    ]
  },
  {
    path: '/examen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', props: true, component: () => import('src/pages/examen/ExamenConsciencia.vue') }
    ]
  },
  {
    path: '/favorits',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Favorits.vue') }
    ]
  },
  {
    path: '/quiSocEnCrist',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/lliuresEnCrist/quiSocEnCrist.vue') }
    ]
  },
  {
    path: '/elMeuPareDeu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/lliuresEnCrist/elMeuPareDeu.vue') }
    ]
  },
  {
    path: '/vintVeritats',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/lliuresEnCrist/vintVeritatsEspirituals.vue') }
    ]
  },
  {
    path: '/formulari',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/formulari.vue') }
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
