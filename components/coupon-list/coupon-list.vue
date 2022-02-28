<template>
  <view class="p-2">
    <scroll-view scroll-x="true" class="scroll-row">
      <view  class="coupon mr-3" v-for="(item, i) in list" :key="i">
        <view class="flex flex-column align-center justify-center bg-hover-wraning py-2 px-3" :class="item.isget ? 'isgeted' : '' ">
          <text>￥{{item.price}}</text>
          <text class="font">满￥200可用</text>
        </view>
        <view hover-class="bg-hover-wraning" class="flex align-center justify-center bg-wraning" :class="item.isget ? 'isgeted' : '' " @click="getCoupon(item)">
          {{ item.isget ? '已领取' : '领取'}}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name:"coupon-list",
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
        }]
      };
    },
    methods: {
      getCoupon(item) {
        if(item.isget) return this.$toast('您已经领取过了')
        item.isget = true
        this.$toast('领取成功')
      }
    },
  }
</script>

<style lang="scss">
.coupon {
  min-width: 310rpx; 
  display: inline-flex; 
  color: #fff;
  
  view:first-child {
    border-right: 4rpx dashed;
  }
  
  view:last-child {
    width: 120rpx;
  }
  .isgeted {
    background-color: #dae0e5;
  }
}
</style>
