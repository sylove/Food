//app.js
App({
  onLaunch: function () {
    //检测新版本
    const updateManager = wx.getUpdateManager()
    updateManager.onUpdateReady(()=>{
      wx.showModal({
        title:'更新提示',
        content:'新版本已经准备好，是否重启应用？',
        success:(res)=>{
          if(res.confirm){
            updateManger.applyUpdae()
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    isConnected:true
  }
})