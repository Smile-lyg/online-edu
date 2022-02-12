<template>
  <view class="">
    <view class="">
      {{JSON.stringify(userInfo) === '{}' ? '未登录':userInfo.username}}
    </view>
    <button type="primary" @tap="openLogin">登录页面</button>
  </view>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        
      };
    },
    computed:{
      ...mapState('user', ['userInfo', 'token'])
    },
    created() {

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
