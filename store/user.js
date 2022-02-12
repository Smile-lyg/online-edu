export default {
  namespaced: true,
  
  state: () => ({
    userInfo: JSON.parse(uni.getStorageSync('userInfo') || '{}'),
    token: uni.getStorageSync('token') || ''
  }),
  mutations: {
    updateUser(state, u){
      state.userInfo = u
      this.commit('user/saveUser')
    },
    saveUser(state){
      uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
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
    
  }
}