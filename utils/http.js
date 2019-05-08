import { config } from '../app.js'

/////////////////
const apiUrl = config.api_base_url
const http = (params) => {
  //返回promise 对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: apiUrl + params.url,//服务器url+参数中携带的接口具体地址
      data: params.data,//请求参数
      header: params.header || {
        "Content-Type": "application/x-www-form-urlencoded"//设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
      },
      method: params.method || 'POST',//默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
      dataType: params.dataType,//返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数
      responseType: params.responseType,//响应的数据类型
      success: function (res) {
        //接口访问正常返回数据
        if (res.statusCode == 200) {
          resolve(res.data)
         
        } else {
        
          var errMsg = res.data.message
          errorToast();
          console.log(res.data)
        }
      },
      fail: function (e) {
        errorToast();
        reject(e)
      }
    })
  })
}
module.exports = {
  http: http
}
