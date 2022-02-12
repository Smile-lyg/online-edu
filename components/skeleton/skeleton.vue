<template>
  <!-- 宽、高、是否圆形、传入类名-->
  <view class="my-skeleton" :style="getStyle" :class="getClass">
    
  </view>
</template>

<script>
  export default {
    name:"skeleton",
    props: {
      width: {
        type: String,
        default: 0
      },
      height: {
        type: String,
        default: 0
      },
      circle: {
        type: Boolean,
        default: false
      },
      oClass: {
        type: String,
        default: ''
      }
    },
    computed: {
      getStyle(){
        return `width:${this.width};height:${this.height};`
      },
      getClass(){
        let c = ''
        if(this.circle) {
          c += 'round-circle'
        }
        return `${c} ${this.oClass}`
      }
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.my-skeleton {
  // box-sizing: border-box;
  background-color: #f5f5f1;
}
</style>
