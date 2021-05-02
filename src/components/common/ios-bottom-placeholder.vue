<template>
  <div class="ios-bottom-placeholder-component"></div>
</template>

<script>

export default {
};
</script>

<style lang="less" scoped>
.ios-bottom-placeholder-component {
  width: 100%;
}
@supports (bottom: env(safe-area-inset-bottom)) {
  .ios-bottom-placeholder-component {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>