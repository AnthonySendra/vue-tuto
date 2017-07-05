import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import DocumentPage from '@/components/DocumentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/documents',
      name: 'List',
      component: List
    },
    {
      path: '/documents/:id',
      name: 'DocumentPage',
      component: DocumentPage
    }
  ]
})
