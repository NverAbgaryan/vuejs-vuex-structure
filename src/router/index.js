import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/user/userComponent'
import Admin from '@/components/admin/adminComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: User,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
  ],
})
