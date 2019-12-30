Page({

  /**
   * 页面的初始数据
   */
  data: {
    animals: '',

    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //var info = wx.getStorageSync('info');
    //let object = JSON.parse(info.result);

    /**
     * 方法二
      */

    var jsonStr = options.jsonData;
    if (typeof jsonStr != 'object') {
      jsonStr = jsonStr.replace(/\ufeff/g, "");//重点
      var jobj = JSON.parse(jsonStr);// 转对象
      options.jsonData = jobj;
    }
    var object = JSON.parse(options.jsonData);//options.jsonData;


    //console.log(object);
    var self = this;

    self.data.text =
      "男方农历出生日期：" + object.manLunarDayTime + " \n"
    + "女方农历出生日期：" + object.womenLunarDayTime + " \n"
    + "星宿匹配：" + object.xingxiuMatch + " \n"
    + "命卦匹配：" + object.mingguaMatch + " \n"
    + "生肖匹配：" + object.animalMatch + " \n"
    + "五行匹配：" + object.wuxingMatch + "\n"
    + "星座匹配：" + object.constellationMatch + "\n"
  
      + "\n"
    + "" + object.summary + "\n";

    self.setData(self.data);

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