<template>
  <div id="hsb-app-page">
    <transition :name="transitionName" mode="out-in">
      <keep-alive :include="$router.options.keepAlive">
        <router-view ref="app" :key="activeDate" v-wechat-title="$route.meta.pageTitle"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'hsb-app',
  data () {
    return {
      activeDate: Date.now().toString().slice(0, 10),
      transitionName: 'fade'
    };
  }
};
</script>

<style lang="less">
@import '@/assets/css/index.less';
.fade-enter-active,
.fade-leave-active {
  transition: all .15s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#hsb-app-page {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>
