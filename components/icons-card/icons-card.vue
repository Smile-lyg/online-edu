<template>
  <view>
    <view class="p-3">
      <view class="flex bg-white shadow-black round">
        <view class="flex-1 flex flex-column align-center justify-center py-3" v-for="(item, index) in icons" :key="index" hover-class="bg-light" @click="open(item)">
          <text class="iconfont font-4" :class="item.icon" style=" color: #febd00;"></text>
          <text class="font-sm mt-1">{{item.name}}</text>
        </view>
        
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"icons-card",
    props: {
      icons: {
        type: Array,
        default: [],
        required: true
      },
    },
    data() {
      return {
        
      };
    },
    methods: {
      open(item) {
        if(!item.path) {
          return
        }
        this.authJump(item.path)
      }
    },
  }
</script>

<style>

</style>
