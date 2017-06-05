import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Users} from './data/user.js';

export default {
  mockHttp () {
    const mock = new MockAdapter(axios);
    // 登录页面
    mock.onPost('/login').reply(config => {
      const { username, password } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = Users.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
            return false;
          });

          if (hasUser) {
            resolve([200, {code: 200, msg: '请求成功', user}])
          } else {
            resolve([200, {code: 500, msg: '帐号或密码错误'}])
          }
        }, 1000);
      })
    });
  }
}