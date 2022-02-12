<template>
  <view class="">
    <view class="login-back" @tap="back">
      <uni-icons type="left" size="20" color="#fff"></uni-icons>
    </view>
    <view class="login-bg"></view>

    <!-- 页面主体 -->
    <view class="login-box">
      <view class="title"><text class="">{{ type == 'login'?'登录' : '注册'}}</text></view>
      <view class="login-form">
        <uni-icons type="person" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="请输入用户名" class="round" v-model="formData.username" />
      </view>
      <view class="login-form">
        <uni-icons type="locked" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="请输入密码" class="round" v-model="formData.password"/>
      </view>
      
      <view class="login-form" v-if="type==='reg'">
        <uni-icons type="locked" size="20" color=""></uni-icons>
        <input type="text" value="" placeholder="请输入确认密码" class="round" v-model="formData.repassword"/>
      </view>
      
      <view class="bg-main btn" hover-class="bg-main-hover" @tap="submit">{{ type == 'login'?'登录' : '注册'}}</view>
      
      <view class="flex align-center justify-between my-2">
        <text class="py-3 text-main" @tap="changeType">{{ type == 'login'?'注册账号' : '去登录'}}</text>
        <text class="py-3 text-muted" @tap="openForget">忘记密码？</text>
      </view>
      <!-- 微信登录 -->
      <view v-if="type=='login'" class="flex justify-center align-center wechat-login">
        <uni-icons type="weixin" size="30" color="#5ccc84"></uni-icons>
      </view>
     
     <!-- 同意协议 -->
     <checkbox-group v-if="type=='login'" name="" class="flex justify-center align-center mt-4" @change="handleCBChange">
       <label class="text-muted flex align-center">
         <checkbox color="#5ccc84" style="transform: scale(0.7);" value="1" /><text>已阅读并同意用户协议隐私声明</text>
       </label>
     </checkbox-group>
     
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        type: 'login',
        formData: {
          username: '',
          password: '',
          repassword: ''
        },
        confirm: false,
      }
    },
    methods: {
      // 返回上页
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      openForget(){
        uni.navigateTo({
          url:"./forget-psw/forget-psw"
        })
      },
      // 改变页面类型
      changeType() {
        this.type = this.type == 'login' ? 'reg' : 'login'
      },
      // 重置表单数据
      resetForm(){
        this.formData = {
          username: '',
          password: '',
          repassword: ''
        }
      },
      // 勾选已阅读协议复选框监听
      handleCBChange(e){
        // 0->false 1->true
        // console.log(!!e.detail.value.length);
        this.confirm = !!e.detail.value.length
      },
      // 登录注册按钮提交
      async submit() {
        if(!this.confirm && this.type == 'login'){
          return this.$toast('请先阅读并同意用户协议隐私声明')
        }
        let data = {...this.formData}
        let res = null
        // 注册请求
        if(this.type == 'reg'){          
          res = await this.$api.reg(data)
          
          this.$toast('注册成功！')
          
          this.changeType()
        }else {
          // 登录请求
          res = await this.$api.login(data)
          this.$toast('登录成功！')
          this.$store.commit('user/updateUser', res.data)
          this.$store.commit('user/updateToken', res.data.token)
          // 如果手机号为null，跳转绑定手机页面
          if(!res.data.phone){
            uni.redirectTo({
              url: './bind-phone/bind-phone'
            })
            return
          }
          setTimeout(()=>{
            this.back()
          }, 350)
        }
        // console.log(res);
        this.resetForm()
      }
    }
  }
</script>

<style lang="scss">

  
</style>
