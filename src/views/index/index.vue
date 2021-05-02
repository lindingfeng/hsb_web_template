<template>
  <div class="index-page">
    <img src="https://s1.huishoubao.com/hsb_web/dist/hsbh5/img/new_logo.14c63796d2c4437f369bc166790c9d36.png">
    <p>回收宝</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'hsb'
    };
  }
};
</script>

<style lang="less" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 98px;
    height: 98px;
  }
  p {
    margin-top: 12px;
    font-size: 18px;
    color: #2c2c2c;
  }
}
</style>