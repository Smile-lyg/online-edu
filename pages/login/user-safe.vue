<template>
  <view>
    <uni-list :border="false">
      <uni-list-item :border="false" title="原密码">
        <input type="text" v-model="form.opsw" slot="footer" placeholder="请输入原密码" placeholder-style="color:#bbb" class="" style="text-align: right;"/>
      </uni-list-item>
      
      <uni-list-item :border="false" title="新密码">
        <input type="text" v-model="form.npsw" slot="footer" placeholder="请输入新密码" placeholder-style="color:#bbb" class="" style="text-align: right;"/>
      </uni-list-item>
      
      <uni-list-item :border="false" title="确认密码">
        <input type="text" v-model="form.repsw" slot="footer" placeholder="请输入确认密码" placeholder-style="color:#bbb" class="" style="text-align: right;"/>
      </uni-list-item>
    </uni-list>
    
    <view class="p-3">
      <main-button @click="save">保存</main-button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          opsw: '',
          npsw: '',
          repsw: ''
        }
      }
    },
    methods: {
      save(){        
        let data = Object.assign(this.form, {})
        console.log(data);
        // ...
        this.$toast('修改成功')
        setTimeout(() => {
          // 返回上一页
          uni.navigateBack({
            delta: 1
          })
          // 退出登录
          this.$store.dispatch("user/logout")
        }, 1000)
      }
    }
  }
</script>

<style>

</style>
