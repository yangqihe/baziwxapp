// pages/index/test/result1.js
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
    
    var info = wx.getStorageSync('info');
    
    if (info.isSuccess){
      let object = JSON.parse(info.result);
      console.log("#########info########\n" + object);
      var self = this;

      self.data.text = 
       "姓名：" + object.name + " \n"
 + "性别：" + (object.isMan ? "男" : "女") + " \n"
 + "公历：" + object.time + " \n"
 + "农历：" + object.lunarTime + " \n"
  //+ "性别：" + (object.isMan ? "男" : "女") + " \n"
  + "生肖：" + object.animals + " \n"
  + "年柱：" + object.yearColumn + "\n"
  + "月柱：" + object.monthColumn + "\n"
  + "日柱：" + object.dayColumn + "\n"
  + "时柱：" + object.timeColumn + "\n"
  + "大运：" + object.dayunArray + "\n"
  + "四柱十神 主星：" + object.sizhushishen + "\n"
  + "年藏干：" + object.niancangGan + "\n"
  + "月藏干：" + object.yuecangGan + "\n"
  + "日藏干：" + object.ricangGan + "\n"
  + "时藏干：" + object.shicangGan + "\n"
  + "年藏干副星：" + object.niancangGanFuXing + "\n"
  + "月藏干副星：" + object.yuecangGanFuXing + "\n"
  + "日藏干副星：" + object.ricangGanFuXing + "\n"
  + "时藏干副星：" + object.shicangGanFuXing + "\n"
  + "纳音：" + object.nayin + "\n"
      + "大运年龄：" + object.dayunAge + "\n"
  + "大运生死旺：" + object.dayunShengSiWangJue + "\n"
      + "大运十神：" + object.dayunShiShen + "\n"
        + "\n"
      + "星座：" + object.xingzuo + "\n"
      + "空亡：" + object.kongwang + "\n"
      + "称骨：" + object.chenggu + "\n"
      + "  " + object.chengguTxt + "\n"
      + "甲子贵人：" + object.jiaziGuiRen + "\n"
      + "\n"
      + "穷通宝鉴：" + object.qiongtongbaojian + "\n"
        + "\n"
        + "1、不要过于相信命运，命虽天定，事在人为。\n"
        + "2、算命能指迷越险，能解祸为祥；其道非轻，其技非小；人定胜天，莫此为最。\n"
        + "3、多做善事，增寿免灾一世无忧。\n"
        + "4、任何周易预测有个概率问题，只当游戏。\n"
        + "5、祝你天天快乐幸福美满。\n"
        + "很多命理相合的却过得不好，很多命理不合的却过得很好。\n"
        + "\n";
;

      self.setData(self.data);
    }
    
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