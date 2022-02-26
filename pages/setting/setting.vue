<template>
  <view>
    <uni-list :border="false">
      <uni-list-item :border="false" title="账户安全" showArrow></uni-list-item>
      <uni-list-item :border="false" title="清除缓存">
        <text slot="footer">1.2M</text>
      </uni-list-item>
      <uni-list-item :border="false" title="检查更新" showArrow></uni-list-item>
      <uni-list-item :border="false" title="当前版本" >
        <text slot="footer">1.0.0</text>
      </uni-list-item>
    </uni-list>
    
    <view class="p-3" v-if="userInfo">
      <main-button @click="handleLoginOut">退出登录</main-button>
      </view>
    </view>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    computed: {
      ...mapState('user', ['userInfo'])
    },
    data() {
      return {
        
      }
    },
    methods: {
      handleLoginOut(){
        uni.showModal({
          content: '是否退出登录？',
          success: (res) => {
            if (res.cancel) {
              return 
            } 
            this.$store.dispatch('user/logout').then(res => {
              this.$toast('退出登录成功')
            })
          }
        });
      }
    }
  }
</script>

<style>

</style>
