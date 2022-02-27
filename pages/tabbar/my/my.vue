<template>
  <view class="animate__animated animate__fadeInDown animate__faster">
   <view class="home-bg">
   </view>
   
   <view class="position-relative">
     <!-- 未登录 -->
     <view class="flex p-3" @click="openLogin()" v-if="!userInfo">
       <image src="/static/logo.png" mode="" style="width: 120rpx;height: 120rpx;" class="round-circle bg-light"></image>
       
       <view class="flex flex-column pl-3 flex-1 text-white">
         <view class="font-md mb-2">立即登录</view>
         <view class="font-sm">登录解锁更多功能</view>
       </view>
     </view>
    <!-- 已登录 -->
     <view class="flex align-center p-3" v-else @click="authJump('/pages/user-info/user-info')">
       <image :src="userInfo.avatar" mode="" style="width: 120rpx;height: 120rpx;" class="round-circle bg-light"></image>
       
       <view class="flex flex-column pl-3 flex-1 text-white">
         <!-- 昵称 - 用户名 - 手机号 -->
         <view class="font-md mb-2">{{ userInfo.nickname || userInfo.username || userInfo.phone}}</view>
         <view class="font-sm">{{ userInfo.desc || "暂无描述"}}</view>
       </view>
       
       <uni-icons type="info" size="26" color="#fff" ></uni-icons>

     </view>
   
   <!-- 图标列表 -->
     <icons-card :icons="icons"></icons-card>
     
     <!-- 列表 -->
     <view class="px-3">
       <uni-list :border="false">
         <uni-list-item title="我的优惠券" clickable showArrow @click="authJump('/pages/my-coupon/my-coupon')">
           <text slot="header" class="iconfont icon-shouye font-4 mr-2" style="color: #4396ec;"></text>
         </uni-list-item>
         
         <uni-list-item title="常见问题" clickable showArrow>
           <text slot="header" class="iconfont icon-shouye font-4 mr-2" style="color: #4396ec;"></text>
         </uni-list-item>
         
         <uni-list-item title="设置" clickable showArrow @click="navigateTo('/pages/setting/setting')">
           <text slot="header" class="iconfont icon-shouye font-4 mr-2" style="color: #4396ec;"></text>
         </uni-list-item>
          
       </uni-list>
     </view>
     
     
   </view>

  </view>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        icons: [{
          icon: "icon-shouye",
          name: "订单"
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
    onNavigationBarButtonTap() {
      this.navigateTo('/pages/setting/setting')
    },
    methods: {
      openLogin() {
        this.navigateTo('/pages/login/login')
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
