import http from './http';
import { apiHost } from '@/config';

export default {
  checkLoginStatus (params) {
    return http.get(`${apiHost}/api/user/checkLoginStatus`, {
      params
    });
  },
  getCommonBannerConfig (body) {
    return http.post(`${apiHost}/api/common/getBannerList`, body);
  }
};
