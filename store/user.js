export default {
  namespaced: true,
  
  state: () => ({
    userInfo: uni.getStorageSync('userInfo') || null,
    token: uni.getStorageSync('token') || ''
  }),
  mutations: {
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
      commit('updateToken', '')
    }
  }
}