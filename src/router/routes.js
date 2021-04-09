import { route } from 'quasar/wrappers'
import { Platform } from 'quasar'


const routes = (ssrContext) => {
  const platform = process.env.SERVER ? Platform.parseSSR(ssrContext) : Platform 

  return [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    beforeEach:(to,from,next) => {
    },
    children: [
      { path: '',
        name:'home',
        component: () =>  {
          if(platform.is.desktop){
            return import('pages/homePage.vue')
          }
          else{
            return import('pages/mobile/mobileHomePage.vue')
          }
   } 
      },
      {
        path: '/square',
        name: 'map',
        // component: () => import('pages/' + (platform.is.mobile ? 'whitemap.vue' : 'mainLayout.vue')),
        component:() => {
          if(platform.is.desktop){
            return import ('pages/whitemap.vue')
          }
          else{
            return import ('pages/mobile/mobile_map.vue')
          }
        },
        // beforeEnter:(to, from, next) => {
        
  
        //   if(platform.is.desktop){
        //     next()
            
        //   }
        // }
        // children: [
        //   {
        //     path: 'square/region/:id',
        //     name: 'detail_region',
        //     component: () => import('pages/map/detail_map.vue')
        //   }
        // ],
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
      // {
        // path: '/documents',
        // name: 'documents',
        // component: () => import('pages/documents.vue'),
        // children:[
        // {
        //   path:':tab',
        //   component:() => import('pages/documentsroute.vue')
        // }
        // ]
      // },
      {
        path:'/documents/:slug?',
        name:'doc',
        component:() => import('layouts/docs.vue'),

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

    ],
  },
  // {
  //   path:'/event',
  //   name:'event',
  //   component:()=> import('pages/event.vue')
  // },
  // {
  //   path:'/event'
  // },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    name: 'Error',
    component: () => import('pages/Error404.vue')
  }
]
}
export default routes
