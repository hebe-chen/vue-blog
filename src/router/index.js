import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/chapter/:id',
      name: 'List',
      component: List
    },
    {
      path: '/article/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
