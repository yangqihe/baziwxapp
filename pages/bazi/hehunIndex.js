// pages/bazi/hehunIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manDate: '1990-06-01',
    manTime: '12:01',
    womenDate: '1993-06-01',
    womenTime: '12:01',
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

  },

  bindManDateChange(e) {
    this.setData({
      manDate: e.detail.value
    })
  },

  bindManTimeChange(e) {
    this.setData({
      manTime: e.detail.value
    })
  },

  bindWomenDateChange(e) {
    this.setData({
      womenDate: e.detail.value
    })
  },

  bindWomenTimeChange(e) {
    this.setData({
      womenTime: e.detail.value
    })
  },

  formSubmit(e) {
    const params = e.detail.value;
    console.log("#######" + params.value + "########");

    if (!params.manDate) {
      wx.showModal({
        content: '请选择男方出生日期',
        showCancel: false,
        success: function (res) {}
      });
      return;
    }
    if (!params.manTime) {
      wx.showModal({
        content: '请选择男方出生时辰',
        showCancel: false,
        success: function (res) { }
      });
      return;
    }
    if (!params.womenDate) {
      wx.showModal({
        content: '请选择女方出生日期',
        showCancel: false,
        success: function (res) { }
      });
      return;
    }
    if (!params.womenTime) {
      wx.showModal({
        content: '请选择女方出生时辰',
        showCancel: false,
        success: function (res) { }
      });
      return;
    }


    const self = this;
    wx.showLoading({
      title: '正在提交，请稍后...',
    });
    wx.request({//
      url: "https://m.yangqihe.com/love-mobile-web/home/getHeHunInfo",
      data: {
        manDate: params.manDate,
        manTime: params.manTime,
        womenDate: params.womenDate,
        womenTime: params.womenTime
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          if (res.data.isSuccess) {
            wx.setStorage({
              key: 'info',
              data: res.data,
            });
            var jsonData = JSON.stringify(res.data.result);
            wx.navigateTo({
              url: 'hehunDetail?jsonData=' + jsonData,
            });
          } else {
            wx.showModal({ content: res.data, showCancel: false });
          }
        } else {
          wx.showModal({ content: "连接服务器失败,请稍后重试", showCancel: false });
          console.log(res);
        }
      },
      fail: function (error) {
        wx.showModal({ content: "连接服务器失败,请稍后重试", showCancel: false });
        console.log(error);
      },
      complete: function () {
        wx.hideLoading();
      }
    });
  }

})