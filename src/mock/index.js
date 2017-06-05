import mock from '../pages/login/mock';
// mock数据接口
if (process.env.NODE_ENV !== 'production') {
    /**
     * 本地开发时使用，上线时请注释
     */

    // 公共mock
  mock.mockHttp();
}
