/* eslint-disable no-undef */
import Vue from 'vue';
import { pid, channelId } from '@/config';
import { createJsCrossOrigin } from '@/utils';

const setReporter = (reporter) => {
  Vue.$reporter = Vue.prototype.$reporter = reporter;
};

// 上报事件映射
const eventMap = {
  'click': 'point_click',
  'enter': 'point_pe'
};

// 所有事件通用属性
const commonParams = {
  pagegroup: '',
  pageId: '',
  pageTitle: ''
};

// 对应事件默认参数
const defaultParams = {
  'click': {
    eventClickmark: '',
    ...commonParams
  },
  'enter': {
    eventId: 'page_entrance',
    eventPagemark: '',
    ...commonParams
  }
};

// 避免sdk加载失败，应用调用异常报错
const reporter = Object.keys(eventMap).reduce((pre, eventName) => {
  pre[eventName] = () => {};
  return pre;
}, {});

setReporter(reporter);

const getUserId = () => {
  return '';
};

// 资源加载成功，覆盖reporter
const initReporter = (getter) => {

  let instance = null;
  return Object.entries(eventMap).reduce((pre, [eventName, sdkName]) => {
    pre[eventName] = (...args) => {

      if (instance == null) { // 兼容sdk异步初始化
        instance = getter();
      }

      if (typeof args[0] === 'string') { // 第一个参数使用默认值
        const eventId = args.shift();
        args[0].eventId = eventId;
      }

      const {
        [eventName]: params = {}
      } = defaultParams;
      const res = Object.assign({}, params, args[0]);
      const { eventId, ...other } = res;
      instance[sdkName](eventId, other);
    };
    return pre;
  }, {});
};

if (process.env.NODE_ENV === 'production') {
  createJsCrossOrigin(
    'https://zheying-sdk.huishoubao.com/v3.1.4/web/??probing.js,plugins/tracking.js',
    function () {
      _probing({
        appid: 'xianyuxiaozhanzR1WN3Se',
        // v2
        api: 'https://bi-sdk.huishoubao.com/report_api/v2/report_list',
        // v1
        // api: 'https://bi-sdk.huishoubao.com/zheying/v1/report_list',
        accessEnv: 'h5',
        user_id: getUserId(),
        openid: '',
        appkey: 'zyb_h5_ufXDdbf65oWL1jbxbBm1',
        user_version: '',
        sdk_version: 'v3.1.4',
        error: true,
        per: true,
        pv: true,
        plugins: [
          [probingTrackingPlugin, {
            pid,                 // pid
            adid: '',               // 广告id
            channel_id: channelId,      // app下载来源
            campaign_id: '',    // 推广活动ID
            campaign_name: '', // 活动名称
          }]
        ]
      }).install();

      setReporter(initReporter(_probing));
    }
  );
}
