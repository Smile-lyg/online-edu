<template>
  <view class="p-2">
    <scroll-view scroll-x="true" class="scroll-row">
      <view  class="coupon mr-3" v-for="i in 3" :key="i">
        <view class="flex flex-column align-center justify-center bg-hover-wraning py-2 px-3" style="">
          <text>￥100</text>
          <text class="font">满￥200可用</text>
        </view>
        <view hover-class="bg-hover-wraning" class="flex align-center justify-center bg-wraning" style="">领取</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name:"coupon-list",
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.coupon {
  width: 310rpx; 
  display: inline-flex; 
  color: #fff;
  
  view:first-child {
    border-right: 4rpx dashed;
  }
  
  view:last-child {
    width: 120rpx;
  }
}
</style>
