import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// import ZH from '@/system/locale/zh-CN';
// import EN from '@/system/locale/en-US';

// Vue.use(VueI18n);

export default class App {
  constructor (params) {
    this.init(params);
  }

  init (params) {
    const { router, store, App } = params;
    this.store = store;
    this.router = router;
    this.initStore();
    this.initRouter();
    this.initLocale();
    this.mountApp(App);
  }

  /*
   * @desc: 初始化store
  */
  initStore () {}

  /*
   * @desc: 初始化router
  */
  initRouter () {}

  /*
   * @desc: 初始化多语言
  */
  initLocale () {
    // this.i18n = new VueI18n({
    //   locale: 'zh-CN',
    //   messages: {
    //     'zh-CN': ZH,
    //     'en-US': EN
    //   }
    // });
  }

  /*
   * @desc: 挂载Vue应用
  */
  mountApp (App) {
    const params = {
      router: this.router,
      store: this.store,
      render: h => h(App)
    };
    this.i18n && (params.i18n = this.i18n);
    new Vue(params).$mount('#app');
  }
}