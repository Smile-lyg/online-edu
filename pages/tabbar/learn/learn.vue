<template>
  <view class=" animate__fadeInRight animate__faster" style="height: 100%;">
    <!-- 未登录组件 -->
    <no-login v-if="!token"></no-login>
    
    <view class="flex flex-column" style="height: 100%;" v-else>
      <!-- 图标列表 -->
      <icons-card :icons="icons"></icons-card>
      
      <tab :tabs="tabs" :current="current" @changeTab="clickTab"></tab>
      <!-- 下方内容使用swiper包裹，可滑动切换 -->
      <swiper :duration="200" :current="current" @change="swiperChange" class="flex-1 flex flex-column">
        <swiper-item class="flex" v-for="(item, index) in tabs" :key="index">
          <!-- @scrolltolower滚动到底部事件 -->
          <scroll-view scroll-y="true" class="flex-1" @scrolltolower="handleLoadMore(item)">
            <!-- 主要内容 -->
            <course-list types="one" :groupList="item.list">
              <text slot="desc">学习进度</text>
              <view slot="progress" class="font-sm">
                <text class=" text-danger mr-1">最近学习</text>
                <text class=" text-muted">已学习 10%</text>
              </view>
            </course-list>
            <!-- 上拉加载更多 -->
            <uni-load-more :status="item.loadstatus"></uni-load-more>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        icons: [{
          icon: "icon-shouye",
          name: "帖子",
          path: ""
        },{
          icon: "icon-shouye",
          name: "考试",
          path: ""
        },{
          icon: "icon-shouye",
          name: "电子书",
          path: ""
        }],
        current: 0,
        // 包含所有的数据
        tabs: [{
          name: '课程',
          loadstatus: 'more',
          list:
          // start
          [{
          id: 10,
          goods_id: 12,
          title: "uni-app实战直播app开发哈哈哈",
          cover: "/static/banner/b1.jpg",
          price: "299.00",
          t_price: "100.00",
          type: "media"
        },{
          id: 12,
          goods_id: 14,
          title: "uni-app实战2",
          cover: "/static/banner/b2.jpg",
          price: "599.00",
          t_price: "99.00",
          type: "audio"
        }],
        //end
          page: 1,
          pageSize: 3
        },
        {
          name: '专栏',
          loadstatus: 'more',
          list: 
          // start
          [
        {
          id: 11,
          goods_id: 13,
          title: "uni-app实战1",
          cover: "/static/banner/b2.jpg",
          price: "599.00",
          t_price: "99.00",
          type: "video"
        },
        ],
        // end
          page: 1,
          pageSize: 2
        }],
        
      };
    },
    computed: {
      ...mapState('user', ['token'])
    },
    // 原生导航搜索栏点击
    onNavigationBarSearchInputClicked() {
      // 返回上一页，搜索页
      uni.navigateBack({
        delta: 1
      })
    },
    onShow() {
      
      if(this.token) {
        this.tabs.forEach(v => {
          v.page = 1
          v.loadstatus = 'more'
        })
        this.getData()
      }
    },
    methods: {
      // tab标签点击
      clickTab(index){
        // 触发swiper切换
        this.swiperChange({
          detail:{
            current: index
          }
        })
      },
      // swiper切换
      swiperChange(e){
        this.current = e.detail.current
        let tab = this.tabs[this.current]
        // 防止重复加载
        if(tab.loadstatus == 'more' && tab.page === 1){
          this.getData()
        }
      },
      // 加载更多
      handleLoadMore(t){
        // console.log(t);
        if(t.loadstatus != 'more') return 
        t.page += 1
        this.getData()
      },
      getData(){
        
        // 当前tab内容
        let currentTab = this.tabs[this.current]
        currentTab.loadstatus = "loading"
        console.log(`获取 ${currentTab.name} 数据。`);
        setTimeout(()=>{
          let res= {
            data:[1,2]
          }
          // currentTab.list 为内容数组
          // currentTab.page 第一页数据
          // 如果不是第一页就合并数组
          // currentTab.list = currentTab.page === 1 ? res.data : [...currentTab.list, ...res.data],
          // 如果获取到的数据条数 小于 每页显示的数据数 就是没有更多了
          currentTab.loadstatus = res.data.length <= currentTab.pageSize ? "noMore" : "more"
    
        }, 500)
        
        
      }
    },
  }
</script>

<style lang="scss">
page{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
