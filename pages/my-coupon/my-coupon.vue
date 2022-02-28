<template>
  <view>
    <view class="flex text-white mb-3 " :class="item.isget ? 'coupon-used':'' " v-for="(item, index) in list" :key="index">
      <view class="flex flex-column flex-1 bg-hover-wraning p-2 round" style="border-right:4rpx dashed #fff ;">
        <text class="font-4">￥{{item.price}}</text>
        <text>适用课程：课程名称</text>
      </view>
      <view class="flex justify-center align-center bg-wraning round" hover-class="bg-hover-wraning" style="width: 200rpx;">{{item.isget ? '已过期':'立即使用'}}</view>
    </view>
    
    <uni-load-more :status="loadstatus"></uni-load-more>
  </view>
  
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          price: 100,
          desc: 'abc',
          isget: false
        },{
          price: 100,
          desc: 'abc',
          isget: false
        },{
          price: 99,
          desc: 'abc',
          isget: true
        }],
        loadstatus: 'noMore'
      }
    },
    created() {

    },
    onPullDownRefresh() {
      setInterval(()=>{
        uni.stopPullDownRefresh()
      }, 300)
    },
    onReachBottom() {
      console.log("触底了");
    },
    methods: {
      
    }
  }
</script>

<style>
page {
  padding: 30rpx;
  box-sizing: border-box;
}
.coupon-used>view{
  background-color: #ccc ;
}
</style>
