<template>
  <view>
    <uni-card is-full v-for="(item, index) in list" :key="index">
      <view class="">
        <view class="flex font-sm text-muted py-2 justify-between">
          <text>订单时间：2022-2-28 19:00:00</text>
          <text>订单号：123456</text>
        </view>
        <view class="flex font-md">
          内容{{index}}
        </view>
        <view class="flex font-md justify-end text-danger font-weight-bold">
         ￥100.00 
        </view>
      </view>
      <view class="font-md pb-2" slot="actions">等待支付</view>
    </uni-card>
    <view class="divider"></view>
    
    <uni-load-more :status="loadstatus"></uni-load-more>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        loadstatus: 'more', // 控制底部加载更多状态
        pageSize: 5,
        pageIndex: 1,
        list: []
      }
    },
    created() {
      this.getData()
    },
    // 下拉刷新
    onPullDownRefresh() {
      this.pageIndex = 1
      this.getData(()=>{uni.stopPullDownRefresh()})
    },
    // 触底
    onReachBottom() {
      console.log("触底了");
      this.handleLoadMore()
    },
    methods: {
      async getData(cb) {
        let res = await this.$api.getList({pageSize:this.pageSize, pageIndex:this.pageIndex})
        console.log(res);
        // 如果不是第一页就合并数组
        this.list = this.pageIndex === 1 ? res.data : [...this.list, ...res.data],
        // 如果获取到的数据条数 小于 每页显示的数据数 就是没有更多了
        this.loadstatus = res.data.length <= this.pageSize ? "noMore" : "more"
        cb && cb()
      },
      // 上拉加载更多
      handleLoadMore(){
        if(this.loadstatus != 'more'){
          return 
        }
        this.pageIndex += 1
        this.getData(()=>{
          
        })
      }
    },
  }
</script>

<style>

</style>
