const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProduct(options.id)
    console.log(options.id)
    // 这里options.id返回的类型是str，后边查询需要强转Number
    // let a = typeof (optios.id)
    // console.log(a)
    // console.log(typeof(Number(a)))
  },

  getProduct(id) {
    wx.showLoading({
      title: '商品信息加载中。。。',
    })
    db.collection('product').where({
      id: Number(id)
    }).get({
      success: res => {
        wx.hideLoading()
        console.log("res")
        console.log(res)
        this.setData({
          product: res.data[0]
        })
      },
      fail: err => {
        wx.hideLoading()
        wx.showToast({
          title: '请检查网络连接！',
        })
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