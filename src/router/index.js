import Vue from 'vue';
import Router from 'vue-router';
import User from '../components/user/userComponent';
import Admin from '../components/admin/adminComponent';
import Login from '../components/auth/loginComponent';
import helper from '../helpers';

Vue.use(Router);

const VueRouter = new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: helper.auth.beforeEnter,
    },
    {
      path: '/',
      name: 'user',
      component: User,
      beforeEnter: helper.auth.beforeEnter,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

export default VueRouter;
