<template>
  <view class="code-btn bg-main" hover-class="bg-main-hover" @click="sentCode">
    {{time > 0 ? (time+'s') : '发送'}}
  </view>
</template>

<script>
  let timer = null
  export default {
    name:"code-btn",
    data() {
      return {
        time: 0
      };
    },methods: {
      sentCode() {
        if(this.time > 0) return
        this.time = 10
        timer = setInterval(()=>{
          this.time --
          if(this.time<=0){
            clearInterval(timer)
          }
        }, 1000)
      }
    },
  }
</script>

<style>
.code-btn {
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  width: 200rpx;
  /* font-size: 28rpx; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-top-right-radius: 8rpx;
  border-bottom-right-radius: 8rpx;
}
</style>
