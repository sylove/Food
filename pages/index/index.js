//index.js
const WXAPI = require('../../wxapi/main')
//获取应用实例
const app = getApp()

Page({
  data: {
    banners:[],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    goods:[]
  },

  onLoad: function () {
    const that=this
    /**
     * 示例：
     * 调用接口封装方法
     */
    WXAPI.banners({
      type:'new'
    }).then((res)=>{
      that.setData({
        banners:res.data
      })
    })
    WXAPI.goods({
      categoryId: 42114
    }).then((res)=>{
      console.log(res.data)
      that.setData({
        goods: res.data
      })
    })
  },
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber:'17323979652'
    })
  }
})
