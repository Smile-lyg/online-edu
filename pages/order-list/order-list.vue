<template>
  <view>
    <uni-card is-full >
      <view class="">
        <view class="flex font-sm text-muted py-2 justify-between">
          <text>订单时间：2022-2-28 19:00:00</text>
          <text>订单号：123456</text>
        </view>
        <view class="flex font-md">
          内容
        </view>
        <view class="flex font-md justify-end text-danger font-weight-bold">
         ￥100.00 
        </view>
      </view>
      <view class="font-md" slot="actions">等待支付</view>
    </uni-card>
    <view class="divider"></view>
    
    <uni-load-more :status="loadstatus"></uni-load-more>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        loadstatus: 'more'
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
