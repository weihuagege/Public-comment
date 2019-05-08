import { http } from '../../utils/http.js'
var url = {
  homeUrl: "/article/shoplist"
  
}
class Goods {
  // 商品
  home(code) {
    return http({
      url: url.homeUrl,
      // data: { code: code },
      // header: {
      //   "Content-Type": "application/x-www-form-urlencoded"
      // }
    })
  }
  // goods(loginInfo) {
  //   return _http.request({
  //     type: 'post',
  //     url: 'api/manage/product/list.do',
  //     data: loginInfo
  //   })
  // }
}
export default Goods