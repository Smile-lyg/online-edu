<template>
  <view class="p-2">
    <view class="search-box flex justify-center align-center py-2">
      <uni-icons type="search" color="#928e8a" size="20"></uni-icons>
      <text class="ml-2">请输入搜索内容</text>
    </view>
  </view>
</template>

<script>
  export default {
    name:"my-search-bar",
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.search-box{
  background-color: #f5f5f1;
  color: #928e8a;
  border-radius: 10rpx;
}
</style>
