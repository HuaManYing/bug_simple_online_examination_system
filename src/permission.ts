import NotFound from './views/NotFound.vue';
import router, { constRoutes } from './router';
import { userRoute, teacherRoutes } from './router/router-config';
import { useStore } from './store/index';
// 添加路由前置守卫，实现没有登录无法进入系统并强制进入登录页面
// 这些页面不需要登录也能进去

const notFound = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: {
    title: '404 not found',
    noSidebarShow: true,
  },
};
router.beforeEach((to, from, next) => {
  const store = useStore();
  // 测试：直接放开权限
  // const dynamicRoutes = asyncRoutes[role as number];
  const dynamicRoutes = teacherRoutes;
  const newDynamicRoutes = [...dynamicRoutes, userRoute, notFound];
  newDynamicRoutes.forEach((item) => {
    if (!router.hasRoute(item.name as string)) {
      router.addRoute(item);
      router.replace(to.path);
    }
  });
  store.setRoutes([...constRoutes, ...dynamicRoutes, userRoute, notFound]);
  next();
});

// 添加全局后置钩子，用于更改页面标题
router.afterEach((to) => {
  const { title } = to.meta;
  document.title = (title as string) || '在线考试系统';
});
