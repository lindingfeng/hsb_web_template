import axios from 'axios';

// 创建axios实例
const service = axios.create({
  timeout: 60000
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
  }
);

// response拦截器
service.interceptors.response.use(
  response => {
    return [response.data, null];
  },
  error => {
    // 超时
    if (typeof error === 'object' && error.message.indexOf('timeout') !== -1) {
      // console.log('网络有点异常啦~');
    }
    return Promise.resolve([{}, error]);
  }
);

export default service;
