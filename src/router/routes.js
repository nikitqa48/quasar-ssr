import { route } from 'quasar/wrappers'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
       component: () => import('pages/homePage.vue'),
       },
      {
        path: '/square',
        name: 'map',
        component: () => import('pages/interactiv_map.vue'),
        children: [
          {
            path: 'square/region/:id',
            name: 'detail_region',
            component: () => import('pages/map/detail_map.vue')
          }
        ],
      },
      {
        path: '/support',
        component: () => import('layouts/SupportLayout.vue'),
        children:[
          {
            path:'', 
            component:() => import('pages/support.vue'), 
            name:'support'
          },
          {
            path: '/support/:id',
            name: 'support_detail',
            component: () => import('pages/support_detail.vue'),
            props:true
          },
        ]
      },
      {
        path: 'region',
        name: 'region',
        component: () => import('pages/region.vue')
      },
      {
        path: '/documents',
        name: 'documents',
        component: () => import('pages/documents.vue')
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('pages/contacts.vue')
      },
      {
        path: '/project',
        component: () => import('pages/project.vue')
      },
      {
        path: '/news/',
        component: () => import('layouts/news.vue'),
        children:[
          {
            path:'',
            name: 'news',
            params:true,
            component:() => import('pages/all_news.vue')
          },
          {
            path:'detail/:id',
            name:'detail',
            component:()=> import('pages/detail_news.vue')
          }

        ]
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
