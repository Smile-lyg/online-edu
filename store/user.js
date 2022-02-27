export default {
  namespaced: true,
  
  state: () => ({
    userInfo: uni.getStorageSync('userInfo') || null,
    token: uni.getStorageSync('token') || null
  }),
  mutations: {
    // 更新用户信息，有相同键名更新值，
    updateInfo(state, data){
      Object.keys(data).forEach(k => state.userInfo[k] = data[k])
      this.commit('user/saveUser')
    },
    // 整个替换
    updateUser(state, u){
      state.userInfo = u
      this.commit('user/saveUser')
    },
    saveUser(state){
      uni.setStorageSync('userInfo', state.userInfo)
    },
    updateToken(state, tk){
      state.token = tk
      this.commit('user/saveToken')
    },
    saveToken(state){
      uni.setStorageSync('token', state.token)
    }
  },
  actions: {
    logout({ state, commit }){
      commit('updateUser', null)
      commit('updateToken', null)
    }
  }
}