// pages/main/main.js
const utils = require("../../utils/util.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenListDown:false,
    hideSearchPage:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.search = this.selectComponent("#search")
    //app.globalData.searchHistory = [1, 2,3 ,4]
    this.search.InitHistory(app.globalData.searchHistory)
    this.tooltip = this.selectComponent("#downView")
    var toolTip = this.tooltip
    toolTip.Init({
      title: "Title",
      text: "Text1234567890ABCD",
      integrations: [
        { id: 0, name: "AAA", score: 100 },
        { id: 1, name: "BBB", score: 60 },
        { id: 2, name: "CCC", score: 90 },
        { id: 3, name: "DDD", score: 70 },
        { id: 4, name: "EEE", score: 90 }
      ],
      date:"2019-11-11"
    })
    
    // this.tooltip.SetRows(["X", "Y", "Z"])
    // this.ring = this.selectComponent("#ring")
    // this.ring.drawCircleBg("bg", 30, 5)
    // this.ring.drawCircle('draw', 30, 5, 0.8);  
  },

  onSearchInput:function(e){
    console.info("call in main:", e.detail)
    this.hideSearchTip(false)
  },
  onSearchClickHistoryItem:function(e){
    console.info("call in main:", e.detail)
  },
  onSearchConfirm:function(e){
    console.info("call in main:", e.detail)
    this.hideSearchTip(true)
  },
  onListDownTapItem:function(e){
    console.info("call in main:", e.detail)
    this.search.AddToHistory(e.detail)
    this.hideSearchTip(true)
  },
  hideSearchTip:function(b){
    this.data.hiddenListDown = b
    this.setData({ hiddenListDown: this.data.hiddenListDown })
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