import http from "@/api/request.js"

export default {
  // 获取房间类型
  getRoomType(){
    return http.get('/getRoomType')
  },
  // 注册账号
   reg(data={}) {
     return http.post('/register', data)
   }
}