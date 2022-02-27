<template>
  <view>
    <uni-list :border="false">
      <uni-list-item clickable :border="false" title="头像" @click="changeAvatar">
        <image slot="footer" :src="userInfo.avatar" mode="" style="width: 80rpx;height: 80rpx;" class="round-circle bg-light"></image>
      </uni-list-item>
      <uni-list-item clickable :border="false" title="昵称">
        <input slot="footer" type="text" placeholder="未填写" style="text-align: right;"/>
      </uni-list-item>
      <uni-list-item clickable :border="false" title="性别" @click="changeSex">
        <text slot="footer">{{form.sex}}</text>
      </uni-list-item>
      <uni-list-item clickable :border="false" title="手机" @click="navigateTo('/pages/login/bind-phone/bind-phone')">
        <text slot="footer">{{userInfo.phone || '未绑定'}}</text>
      </uni-list-item>
    </uni-list>
    
    <view class="p-3" >
      <main-button @click="">保存</main-button>
      </view>
    </view>
  </view>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    computed: {
      ...mapState('user', ['userInfo'])
    },
    data() {
      return {
        form: {
          sex: '未知',
          nkname: ''
        }
      }
    },
    methods: {
      changeSex(){
        let sexList =  ['未知', '男', '女']
        // 底部弹出操作菜单
        uni.showActionSheet({
          itemList: sexList,
          success: res => {
            this.form.sex = sexList[res.tapIndex]
          }
        });
      },
      changeAvatar(){
        uni.chooseImage({
          count:1,
          success: (res) => {
            // ["blob:http://localhost:8080/5a688e68-5214-46d1-a762-f783cc2a4fbf"]
            console.log(res.tempFilePaths[0]);
            this.$api.upload(res.tempFilePaths[0], (progress) => {
              console.log('上传进度', progress);
            }).then(res => {console.log(res);})
          }
        })
        
      },
    },
  }
</script>

<style>

</style>
