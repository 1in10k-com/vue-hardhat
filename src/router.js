import Vue from 'vue'
import Router from 'vue-router'
import aaa from './view/aaa'
import bbb from './view/bbb'



Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'aaa',
        component: aaa
      },
      {
        path: '/bbb',
        name: 'bbb',
        component: bbb
      },
    ]
  })

  export default router
