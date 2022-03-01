<template>
  <view>
    <view class="flex" style="border: 1rpx solid #f4f4f4;">
      <!-- 点击事件传递索引出去 -->
      <view class="tab-item" :class="current === index ? 'tab-item-active' : '' " v-for="(item, index) in tabs" :key="index" @click="$emit('changeTab', index)">
        <text class="font-md ">{{item.name}}</text>
        <view class="tab-line animate__animated animate__fadeIn animate__fast" v-if="index === current"></view>
      </view>
    </view>
    
    
  </view>
</template>

<script>
  export default {
    name:"tab",
    props: {
      // 当前页码
      current: {
        type: Number,
        default: 0
      },
      // 标签名字数组
      tabs: {
        type:Array,
        default: [{name:"标签1"}]
      }
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style>
  .tab-item{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 20rpx;
    color: #888;
  }
.tab-line{
  width: 50rpx;
  height: 10rpx;
  background-color: #00cf8a;
  border-radius: 10rpx;
  position: absolute;
  bottom: 0;
  
}
.tab-item-active{
  color: #00cf8a;
  font-weight: bold;
}
</style>
