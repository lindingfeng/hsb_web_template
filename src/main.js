import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VueWechatTitle from 'vue-wechat-title';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import apis from '@/apis';
import InitApp from '@/system/init';
// 全局组件(组件过大的话不建议全局导入)
// import '@/components/global';
// 指令组件
// import '@/components/directive';
// 过滤器
// import '@/common/filter';
// 自定义指令
// import '@/common/directive';
// SDK
// import '@/common/plugins';
// 兼容IE不支持Promise
// import 'promise-polyfill/src/polyfill';

// vconsole调试模式
// import('vconsole/dist/vconsole.min.js').then(module => {
//   const Vconsole = module.default;
//   new Vconsole();
// });

Vue
  .use(VueWechatTitle)
  .use(VueLazyload);

Vue.config.productionTip = false;
Vue.prototype.$apis = apis;

/*
 * @desc: 应用初始化
 */
new InitApp({ router, store, App });
