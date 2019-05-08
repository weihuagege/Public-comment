import { config } from '../app.js'
var code = wx.getStorageSync("code");
var userInfo = wx.getStorageSync("userInfo");
class Login {
  request(params) {
    if (!params.method) {
      params.method = 'GET' // 如果没传默认为GET
    }
    wx.showToast({
      title: "加载中...",
      icon: "loading"
    })
    wx.request({
      url: params.url,
      method: params.method,
      header: {
        'X-WX-Code': code,
        'X-WX-Encrypted-Data': `${userInfo.encryptedData}; charset=utf - 8`,
        'X-WX-IV': userInfo.iv
      },
      success: res => {
        params.success(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  }
}

export { Login }