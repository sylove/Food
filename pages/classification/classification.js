// pages/classification/classification.js
const WXAPI = require('../../wxapi/main')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navList:[],
      meat:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    WXAPI.goodsCategory().then((res)=>{  //获取nav所需数据
      console.log(res.data)
      that.setData({
        navList:res.data
      })
    })

    WXAPI.goods({ //获取nav所需数据
      // categoryId: 42196
      categoryId: 41712,

    }).then((res) => {
      console.log(res.data)
      that.setData({
        meat: res.data
      })
    })

    WXAPI.goodsDetail(148229).then((res)=>{
      console.log(res)
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