<template>
  <view class="">
    <view class="login-back" @tap="back">
      <uni-icons type="left" size="20" color="#fff"></uni-icons>
    </view>
    <view class="login-bg"></view>

    <!-- 页面主体 -->
    <view class="login-box">
      <view class="title"><text class="">绑定手机号</text></view>
      <view class="login-form">
        <uni-icons type="person" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="请输入手机号" class="round" v-model="formData.phone" />
      </view>
      <view class="login-form">
        <uni-icons type="email" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="验证码" class="round" v-model="formData.code"/>
        <!-- 发送验证码按钮 -->
        <code-btn :phone="formData.phone"></code-btn>
      </view>
      
      
      <view class="bg-main btn" hover-class="bg-main-hover" @tap="submit">绑定</view>

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          phone: '',
          code: ''
        },
        uinfo: {}
      }
    },
    created() {
        this.uinfo = this.$store.state.user.userInfo
    },
    methods: {
      // 返回上页
      back() {
        uni.navigateBack({
          delta: 1
        })
      },

      // 登录注册按钮提交
      async submit() {

        let data = {...this.formData}
        let res = null
        // 绑定手机请求
        res = await this.$api.bindPhone(data)
        console.log(res);
        this.$toast('绑定成功')
        // 绑定成功后更新用户信息
        this.uinfo.phone = data.phone
        this.$store.commit('user/updateUser', this.uinfo)
        
        setTimeout(()=>{
          this.back()
        }, 350) 

      }
    }
  }
</script>

<style lang="scss">
  
  
</style>
