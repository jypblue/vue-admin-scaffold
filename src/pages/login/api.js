import axios from 'axios';

const base = '';

// 登录
export const reqLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
}
