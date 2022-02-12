import store from '@/store/index.js'
export default {
  config: {
    // 请求根路径
    baseUrl: "https://www.fastmock.site/mock/12a3b588e4cb21b5706eed87c8d3e181/api",
    // 请求头
    header: {token: store.state.user.token},
    // 请求拦截器
    beforeRequest(options = {}) {
      uni.showLoading({
        title: "请求中...",
        mask: true
      })
      return new Promise((resolve, reject) => {
        options.url = this.baseUrl + options.url
        options.method = options.method || "GET"
        options.header = { ...this.header, ...options.header}
        
        resolve(options)
      })
    },
    // 响应拦截器
    handleResponse([err, res]) {
      uni.hideLoading()
      return new Promise((resolve, reject) => {
        // 请求失败或者错误
        if(res.statusCode != 200 || res.data.code != 200) {
          let msg = res.data.desc || "请求失败"
          uni.showToast({
            title: msg,
            icon: 'none'
          })
          return reject(msg)
        }
        // 返回结果
        return resolve(res.data)
      })
    }
  },
  request(options = {}){
    return this.config.beforeRequest(options)
            .then(opt => uni.request(opt))
            .then(this.config.handleResponse)
  },
  // GET请求
  get(url, params = {}, options = {}) {
    options.url = url
    options.method = "GET"
    options.data = params
    return this.request(options)
  },
  // POST请求
  post(url, params = {}, options = {}) {
    options.url = url
    options.method = "POST"
    options.data = params
    return this.request(options)
  }
}