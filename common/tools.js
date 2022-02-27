export default {
  // 格式化数据大小
  bytesToSize(bytes) {
    if(bytes === 0) return '0 KB'
    let k = 1000, // or 1024
    sizes = ['KB', 'MB', 'GB'],
    i = Math.floor(Math.log(bytes)/ Math.log(k))
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]    
  }
}