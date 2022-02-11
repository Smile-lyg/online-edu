<template>
	<view class="container">
    <!-- 搜索栏 -->
		<my-search-bar></my-search-bar>
    <!-- 轮播图 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" indicator-color="#fff" indicator-active-color="#5ACB84" circular class="my-swiper px-2">
      <swiper-item class="flex justify-center round" v-for="(item, index) in swiper" :key="index">
        <image :src="item.src" mode="aspectFill" class="round" ></image>
      </swiper-item>
    </swiper>
    <!-- 图标菜单 -->
    <icon-nav :list="iconNav"></icon-nav>
    <!-- 横向滚动优惠券 -->
    <coupon-list></coupon-list>
    <!-- 拼团列表 -->
    
    <!-- 分割线 -->
    <view class="divider"></view>
    <view class="px-2 py-3"><text class="font-md font-weight-bold">拼团</text></view>
  
    <scroll-view scroll-x="true" class="scroll-row">
        <course-list v-for="(item, index) in groupList" :key="index" :item="item"></course-list>
    </scroll-view>
    
    <!-- 课程列表 -->
    <!-- 分割线 -->
    <view class="divider"></view>
    <view class="px-2 py-3 flex justify-between">
      <text class="font-md font-weight-bold">最新课程</text>
      <text class="font-sm text-muted">查看更多</text>
    </view>
    <view>
        <course-list  v-for="(item, index) in groupList" :key="index" :item="item" types="one"></course-list>
    </view>
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
				swiper: [{
          src:'/static/banner/b1.jpg'
        },{
          src:'/static/banner/b2.jpg'
        }],
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
        groupList:[{
          id: 10,
          goods_id: 12,
          title: "uni-app实战直播app开发",
          cover: "/static/banner/b1.jpg",
          price: "299.00",
          t_price: "100.00",
          type: "media"
        },{
          id: 11,
          goods_id: 13,
          title: "uni-app实战1",
          cover: "/static/banner/b2.jpg",
          price: "599.00",
          t_price: "99.00",
          type: "video"
        },{
          id: 12,
          goods_id: 14,
          title: "uni-app实战2",
          cover: "/static/banner/b2.jpg",
          price: "599.00",
          t_price: "99.00",
          type: "audio"
        }]
			}
		},
    created() {
      this.getData()
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
