<template>
  <view class="">
    我的
    <button type="primary" @tap="openLogin">登录页面</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      openLogin() {
        uni.navigateTo({
          url: '../../login/login'
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
