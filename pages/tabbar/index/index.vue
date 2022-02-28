<template>
	<view class="container animate__animated animate__fadeIn animate__faster">
    
    <!-- 搜索栏 -->
		<my-search-bar></my-search-bar>
    <!-- 轮播图 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" indicator-color="#fff" indicator-active-color="#5ACB84" circular class="my-swiper px-2 animate__animated animate__fadeIn" v-if="this.swiper.length != 0">
      <swiper-item class="flex justify-center round" v-for="(item, index) in swiper" :key="index">
        <image :src="item.src" mode="aspectFill" class="round" ></image>
      </swiper-item>
    </swiper>
    
    <skeleton v-else width="710rpx" height="330rpx" oClass="mx-2 round"></skeleton>
    
    <!-- 图标菜单 -->
    <icon-nav :list="iconNav"></icon-nav>
    <!-- 横向滚动优惠券 -->
    <coupon-list></coupon-list>
    
    <!-- 分割线 -->
    <view class="divider"></view>
    <view class="px-2 py-3"><text class="font-md font-weight-bold">拼团</text></view>
  <!-- 拼团列表 -->
    <scroll-view scroll-x="true" class="scroll-row">
        <course-list></course-list>
    </scroll-view>
    
    
    <!-- 分割线 -->
    <view class="divider"></view>
    <view class="px-2 py-3 flex justify-between">
      <text class="font-md font-weight-bold">最新课程</text>
      <text class="font-sm text-muted">查看更多</text>
    </view>
<!-- 课程列表 -->
        <course-list types="one"></course-list>

    <!-- 广告区 -->
    <view class="divider"></view>
    <view class="p-2">
      <image src="@/static/banner/b1.jpg" mode="" style="width: 100%; height: 360rpx;"></image>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [],
        iconNav: [{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        },{
          name: "活动",
          src: "/static/uni.png"
        }],
        
			}
		},
    created() {
      // this.getData()
      setTimeout(() => {
        this.swiper = [{
          src:'/static/banner/b1.jpg'
        },{
          src:'/static/banner/b2.jpg'
        }]
      }, 2000)
      
      uni.$on('userLogin', (u)=>{
        console.log('用户登录', u);
      })
      uni.$on('userLogout', ()=>{
        console.log('用户退出登录');
      })
    },
    destroyed() {
      // 注销全局事件
      uni.$off('userLogin')
      uni.$off('userLogout')
    },
		methods: {
       getData(){
        // // 请求拦截器
        // let beforeRequest = function(options = {}) {
        //   return new Promise((resolve, reject) => {
        //     options.url = 'https://www.fastmock.site/mock/12a3b588e4cb21b5706eed87c8d3e181/api' + options.url
        //     options.header = {token: 'abc'}
        //     options.methods = 'GET'
        //     resolve(options)
        //   })
        // }
        
        // beforeRequest({
        //   url:'/getRoomType'          
        // })
        // .then(opt => uni.request(opt))
        // .then((res) => console.log(res))
        
        // this.$api.request({url:'/getRoomType'}).then(res => console.log(res))
        
        // this.$api.get('/Subject/GetSubject', {id: 123}).then(res => console.log(res))
        // this.$api.post('/Add/Subject', {id: 123}).then(res => console.log(res))
        
        this.$api.getRoomType().then(res => console.log(res))

      }
		}
	}
</script>

<style lang="scss">
	.container {
    .my-swiper {
      height: 330rpx;
      swiper-item,image {
        width: 100%;
        height: 100%;
      }
    }
	}
</style>
