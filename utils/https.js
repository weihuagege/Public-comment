import { config } from '../app.js'
class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET' // 如果没传默认为GET
    }
    // wx.showToast({
    //   title: "加载中...",
    //   icon: "loading"
    // })
    // wx.request({
    //   url: config.api_base_url + params.url,
    //   method: params.method,
    //   data: params.data,
    //   header: {
    //     'content-type': 'application/json',
    //     // 'appkey': config.appKey
    //   },
    //   success: res => {
    //     params.success(res)
    //   },
    //   fail: err => {
    //     console.log(err)
    //   }
    // })
  }
}

export { HTTP }