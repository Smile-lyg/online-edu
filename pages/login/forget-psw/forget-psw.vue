<template>
  <view class="">
    <view class="login-back" @tap="back">
      <uni-icons type="left" size="20" color="#fff"></uni-icons>
    </view>
    <view class="login-bg"></view>

    <!-- 页面主体 -->
    <view class="login-box">
      <view class="title"><text class="">找回密码</text></view>
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
      <view class="login-form">
        <uni-icons type="locked" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="请输入密码" class="round" v-model="formData.password"/>
      </view>
      
      <view class="login-form" >
        <uni-icons type="locked" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="请输入确认密码" class="round" v-model="formData.repassword"/>
      </view>
      
      <view class="bg-main btn" hover-class="bg-main-hover" @tap="submit">提交</view>

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          phone: '',
          code: '',
          password: '',
          repassword: ''
        },
      }
    },
    created() {

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
        res = await this.$api.getForgetPsw(data)
        console.log(res);
        this.$toast('密码修改成功')
        
        setTimeout(()=>{
          this.back()
        }, 350) 

      }
    }
  }
</script>

<style lang="scss">
  
  
</style>
