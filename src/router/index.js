import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);
NProgress.configure({
  showSpinner: false,
});


const Login = () => import('@/pages/login/Login');
const NotFound = () => import('@/pages/404');
const ServerError = () => import('@/pages/500');
const Index = () => import('@/pages/home/Index');

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Home,
    iconCls: 'fa fa-home',
    noChild: true,
    children: [{
      path: '/',
      component: Index,
      menuName: '首页',
      meta: {
        breadcrumb: [{
          url: '/',
          name: '首页',
        }],
      },
    }],
  }, {
    path: '/login',
    component: Login,
    hidden: true,
  }, {
    path: '/404',
    component: NotFound,
    hidden: true,
  }, {
    path: '/500',
    component: ServerError,
    hidden: true,
  },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name || document.title;
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
