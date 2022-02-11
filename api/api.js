import http from "@/api/request.js"

export default {
  // 获取房间类型
  getRoomType(){
    return http.get('/getRoomType')
  }
}