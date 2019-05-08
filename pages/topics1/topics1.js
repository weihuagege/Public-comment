// pages/topics1/topics1.js
import { Base64 }  from "../../utils/base64.js"
import {Login1} from "../models/index"
var index1 = new Login1()
var base = new Base64()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginCode: null,    //登陆凭据code
  },
login:function(){
  
    index1.getDataList(res =>{
      console.log(res)
    });
 
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.login({
      success(res) {
        if (res.code != null) {
          that.setData({
            loginCode: res.code
          })
          wx.setStorageSync("code", res.code);
          console.log('Code: ' + res.code)
        } else {
          wx.showToast({
            title: '登陆失败!',
            icon: 'none',
            duration: 1500
          });
        }
      }
    })
    ///
    wx.getUserInfo({
      success(res) {
        console.log(res);
        var encryptedData = res.encryptedData;
        console.log(encryptedData)
        var str = base.decode(encryptedData)
        console.log(str);
        res.encryptedData=str;
        console.log(res.encryptedData)
        wx.setStorageSync("userInfo",res);
        
        //  var str1 = base.decode(str)
        // console.log(str1);
       
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})