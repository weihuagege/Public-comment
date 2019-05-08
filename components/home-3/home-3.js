// components/home-3/home-3.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
list:{
  type:Array,
  default:''
}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
detail:function(){
  wx.redirectTo({
    url: '/pages/detail/detail',
  })
}
  }
})
