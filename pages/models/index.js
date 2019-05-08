import { Login } from '../../utils/login.js'
// var a = getApp().globalData.nowIndex;

// 通过extends继承父类（也可以实例化后调用）
class Login1 extends Login {
  getDataList(callBack) {
    //  封装后的请求调用
    this.request({
      url: 'https://wx.miaov.com/login',
      method:"post",
      success: res => {
        callBack(res)
      }
    })
  }
}


export { Login1 }