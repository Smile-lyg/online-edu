<template>
  <view class="animate__animated animate__fadeInDown animate__faster">
   <view class="home-bg">
   </view>
   
   <view class="position-relative">
     <view class="flex p-3">
       <image src="/static/logo.png" mode="" style="width: 120rpx;height: 120rpx;" class="round-circle bg-light"></image>
       
       <view class="flex flex-column pl-3 flex-1 text-white">
         <view class="font-md mb-2">立即登录</view>
         <view class="font-sm">登录解锁更多功能</view>
       </view>
     </view>
   
   
     <view class="p-3">
       <view class="flex bg-white shadow-black round">
         <view class="flex-1 flex flex-column align-center justify-center py-3" v-for="(item, index) in icons" :key="index" hover-class="bg-light">
           <text class="iconfont font-4" :class="item.icon" style=" color: #febd00;"></text>
           <text class="font-sm mt-1">{{item.name}}</text>
         </view>
         
       </view>
     </view>
     
     <!-- 列表 -->
     <view class="px-3">
       <uni-list :border="false">
         <uni-list-item title="我的优惠券" showArrow>
           <text slot="header" class="iconfont icon-shouye font-4 mr-2" style="color: #4396ec;"></text>
         </uni-list-item>
         
         <uni-list-item title="常见问题" showArrow>
           <text slot="header" class="iconfont icon-shouye font-4 mr-2" style="color: #4396ec;"></text>
         </uni-list-item>
         
         <uni-list-item title="设置" showArrow>
           <text slot="header" class="iconfont icon-shouye font-4 mr-2" style="color: #4396ec;"></text>
         </uni-list-item>
         
       </uni-list>
     </view>
     
   </view>
    <!-- <button type="primary" @tap="openLogin">登录页面</button> -->
  </view>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        icons: [{
          icon: "icon-shouye",
          name: "文字"
        },{
          icon: "icon-shouye",
          name: "订单"
        },{
          icon: "icon-shouye",
          name: "订单"
        },{
          icon: "icon-shouye",
          name: "订单"
        }]
      };
    },
    computed:{
      ...mapState('user', ['userInfo', 'token'])
    },
    created() {

    },
    methods: {
      openLogin() {
        uni.navigateTo({
          url: '../../login/login'
        })
      }
    }
  }
</script>

<style lang="scss">
.home-bg {
  background-color: #5CCC84;
  height: 350rpx;
  width: 750rpx;
  border-bottom-left-radius: 100rpx;
  border-bottom-right-radius: 100rpx;
  position: fixed;
  left: 0;
  right: 0;
}
</style>
