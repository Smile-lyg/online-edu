import http from "@/api/request.js"

export default {
  http,
  // 获取房间类型
  getRoomType(){
    return http.get('/getRoomType')
  },
  // 注册账号
   reg(data={}) {
     return http.post('/register', data)
   },
   // 账号登录
   login(data={}) {
     return http.post('/login', data)
   },
   // 获取手机验证码
   getCaptcha(data={}) {
     return http.post('/captcha', data)
   },
   // 绑定手机号
   bindPhone(data={}) {
     return http.post('/bind_phone', data)
   },
   // 找回密码
   getForgetPsw(data={}) {
     return http.post('/forget', data)
   },
   // 上传图片
   upload(filePath, onProgress = null){
     return http.upload('/upload', {filePath}, {onProgress})
   }
}