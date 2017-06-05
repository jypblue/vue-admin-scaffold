import axios from 'axios';
import store from './store';
import types from './store/mutation-types';
import router from './router';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// http request 拦截器
axios.interceptors.request.use(
    (config) => {
      if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`;
      }
      return config;
    },
    err => Promise.reject(err));

// http response 拦截器
axios.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
                    // 返回 401 清除token信息并跳转到登录页面
            store.commit(types.LOGOUT);
            router.replace({
              path: 'login',
              query: { redirect: router.currentRoute.fullPath },
            });
            break;
          case 403:
            // 返回403 做点什么
            break;
          default:
            break;
        }
      }
      return Promise.reject(error);   // 返回接口返回的错误信息
    });
export default axios;
