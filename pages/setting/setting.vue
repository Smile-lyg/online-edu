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
    
    <view class="p-3">
      <main-button>退出登录</main-button>
      </view>
    </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
