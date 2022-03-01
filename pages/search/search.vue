<template>
  <view>
    <view class="" v-if="list.length">
      <view class="px-2 py-3 flex justify-between">
        <text class="font-md font-weight-bold">历史记录</text>
        <text class="font-sm text-muted" @click="clear">清除全部</text>
      </view>
      
      <view class="flex flex-wrap pl-2">
        <view class="history p-0 mr-2 mb-2" @click="handleSearch(item)" v-for="(item, index) in list" :key="index">{{item}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        keyword: ""
      }
    },
    // 监听原生导航栏输入
    onNavigationBarSearchInputChanged(e) {
      this.keyword = e.text
    },
    // 原生导航栏按钮点击
    onNavigationBarButtonTap() {
      this.handleSearch()
    },
    // 手机键盘提交按钮点击
    onNavigationBarSearchInputConfirmed() {
      this.handleSearch()
    },
    onLoad() {
      let list = uni.getStorageSync("historyKeyword")
      if(list){
        this.list = JSON.parse(list)
      }
    },
    methods: {
      handleSearch(value=''){
        // 即点击历史记录搜索项目，传值
        if(value){
          this.keyword = value
        }
        if(this.keyword == '') return this.$toast('请输入关键词')
        // 跳转搜索结果页
        uni.navigateTo({
          url: "/pages/search-result/search-result?keyword=" + this.keyword
        })
        // 加入到历史记录
        this.addHistory()
      },
      addHistory(){
        // 查找数组里是否已经存在该元素
        let index = this.list.findIndex(v => v == this.keyword)
        if(index != -1){
          // 存在则置顶
          this.objToFirst(this.list, index)
        }else {
          this.list.unshift(this.keyword)
        }
        uni.setStorageSync("historyKeyword", JSON.stringify(this.list))
      },
      // 置顶数组某一项
      objToFirst(arr, index){
        // 如果不是第一个
        if(index != 0) {
          let ele = arr.splice(index, 1)[0] // 拿到索引的元素
          arr.unshift(ele) // 插入到头部
        }
      },
      clear(){
          uni.showModal({
            content: '是否要清除搜索记录？',
            success:  (res) => {
              if (res.confirm) {
                this.list = []
                uni.removeStorageSync("historyKeyword")
              } 
            }
          });
      }
    },
  }
</script>

<style>
.history{
  background-color: #F2EFF0;
  border-radius: 10rpx;
}
</style>
