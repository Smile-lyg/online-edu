<template>
  <view>
    <uni-list :border="false">
      <uni-list-item clickable :border="false" title="账户安全" showArrow @click="authJump('/pages/login/user-safe')"></uni-list-item>
      <uni-list-item clickable :border="false" title="清除缓存" @click="clearSize">
        <text slot="footer">{{currentSize | formatCurSize}}</text>
      </uni-list-item>
      <uni-list-item clickable :border="false" title="检查更新" showArrow></uni-list-item>
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
  import tools from '@/common/tools.js'
  export default {
    computed: {
      ...mapState('user', ['userInfo'])
    },
    data() {
      return {
        currentSize: 0,
        keys: []
      }
    },
    filters: {
      formatCurSize(value) {
        return tools.bytesToSize(value);
      }
    },
    created() {
        this.getSize()
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
      },
      getSize(){
        // 获取本地存储相关信息
        uni.getStorageInfo({
            success: (res) => {
                // console.log(res.keys);
                // console.log(res.currentSize);
                // console.log(res.limitSize);
                this.currentSize = res.currentSize
                this.keys = res.keys
                // 过滤出除了userInfo以外的内容，保存登录态
                // this.keys = res.keys.filter( k => k != 'userInfo')
                // console.log(this.keys);
            }
        });  
      },
      clearSize(){
        uni.showModal({
          content: '是否要清除缓存',
          success: (res) => {
            if (res.cancel) {
              return
            } 
            
            this.keys.forEach(k => {
              uni.removeStorageSync(k)
            })
            this.$toast('清除缓存成功')
            this.getSize()
          }
        });
      },
    }
  }
</script>

<style>

</style>
