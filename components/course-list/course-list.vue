<template>
  <view class="scroll-row-item course" :class="'course-'+this.types">
    
    <view class="position-relative imgbox">
      <image :src="item.cover" mode=""></image>
      <view class="text-white font-sm">{{item.type | formatType}}</view>
    </view>
    
    <view class="flex flex-column flex-shrink-0 font-md">
      <text class="text-ellipsis course-title">{{item.title}}</text>
      <view class="font-sm text-muted py-1">10人已抢</view>
      <view class="flex align-end">
        <text class=" text-danger">￥{{item.t_price}}</text>
        <text class="font-sm text-muted" style="text-decoration: line-through; line-height: 40rpx;">
          ￥{{item.price}}
        </text>
      </view>
    </view>
  </view>
</template>

<script>
  let opt = {
    media: "图文",
    audio: "音频",
    video: "视频"
  }
  export default {
    name:"course-list",
    props: {
      item: Object,
      types: {
        type: String,
        default: "two"
      },
    },
    filters: {
      formatType(k) {
        return opt[k]
      }
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.course {
  // width: 340rpx;
  // height: 180rpx;
  
}
// 单列样式
.course-one {
  display: flex;
  padding: 20rpx;
  
  image, .imgbox{
    width: 300rpx;
    height: 170rpx;
    // flex-shrink: 0;
  }
  .imgbox {
    margin-right: 20rpx;
  }
}
.course-one>view:nth-child(2) {
  justify-content: space-between;
}
// 两列样式
.course-two {
  width: 340rpx;
  margin-left: 20rpx;
  margin-bottom: 20rpx;
  image, .imgbox{
    width: 340rpx;
    height: 180rpx;
  }
  .course-title {
    margin-top: 10rpx;
  }
}
.course>view:first-child>view {
  position: absolute;
  right: 10rpx;
  bottom: 10rpx;
  background-color: rgba(0,0,0,0.4);
  padding: 0 10rpx;
}
</style>
