import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
// import Login from '../views/Login.vue';
// import Register from '../views/Register.vue';
// import ForgetPassword from '../views/ForgetPassword.vue';
// import SerialNumber from '../views/SerialNumber.vue';
import Welcome from '../views/welcome/Index.vue';
import TestMenu from '../views/TestMenu.vue';

export const constRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/welcome',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '',
        name: 'Welcome',
        component: Welcome,
        meta: {
          title: '首页',
          icon: 'Calendar',
        },
      },
    ],
  },
  {
    path: '/testMenu',
    component: TestMenu,
    name: 'TestMenu',
    meta: {
      title: '测试menu',
      noSidebarShow: true,
    },
  },

  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login,
  //   meta: {
  //     title: '登录',
  //     noSidebarShow: true,
  //   },
  // },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register,
  //   meta: {
  //     title: '注册',
  //     noSidebarShow: true,
  //   },
  // },
  // {
  //   path: '/forget',
  //   name: 'Forget',
  //   component: ForgetPassword,
  //   meta: {
  //     title: '忘记密码',
  //     noSidebarShow: true,
  //   },
  // },
  // {
  //   path: '/getSerialNumber',
  //   component: SerialNumber,
  //   name: 'SerialNumber',
  //   meta: {
  //     title: '获取序列号',
  //     noSidebarShow: true,
  //   },
  // },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes: constRoutes,
});

export default router;
