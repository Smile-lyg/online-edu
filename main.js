
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'
import api from '@/api/api.js'

Vue.prototype.$api = api

Vue.prototype.$toast = function(title, icon='none') {
  uni.showToast({
    title,
    icon
  });
}
Vue.prototype.navigateTo = function(url) {
  uni.navigateTo({
    url
  })
}
// 前台验证登录状态后跳转
Vue.prototype.authJump = function(url) {
  if(!store.state.user.token) {
    uni.showToast({
      title:'请登录后再访问',
      icon: 'none'
    })
    return setTimeout(()=>{
      uni.navigateTo({
        url: "/pages/login/login"
      })
    }, 1500)
  }
  uni.navigateTo({
    url
  })
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif