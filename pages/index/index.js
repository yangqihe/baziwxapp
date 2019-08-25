Page({
  // onShareAppMessage() {
  //   return {
  //     title: 'picker',
  //     path: 'page/component/pages/picker/picker'
  //   }
  // },

  data: {
    form: {
      gender: '',
      xingming: '',
      riTime: '',
      shiTime: ''
    },
    items: [
      { value: 'M', name: '男', checked: 'true' },
      { value: 'W', name: '女' },
    ],
    index: 0,
    date: '1990-06-01',
    time: '12:01'
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  wxopenAction(){
    console.log("####### wxopenAction ########");
  },

  formSubmit(e) {
    const params = e.detail.value;
    console.log("#######"+params+"########");
    
    if(!params.xingming){
      wx.showModal({
        content: '请输入姓名',
        showCancel: false,
        success: function (res) {
          
        }
      });
      return;       
    }


    const self = this;
    wx.showLoading({
      title: '正在提交，请稍后...',
    });
    wx.request({
      url: "https://m.yangqihe.com/love-mobile-web/home/getBaZiInfo",//?xingming=test&riTime=1978-07-08&shiTime=12:01
      data: {
        xingming: params.xingming,
        gender:params.gender,
        riTime: params.riTime,
        shiTime: params.shiTime
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          //console.log(res.data);
          if (res.data.isSuccess) {
            wx.setStorage({
              key: 'info',
              data: res.data,
            });
            var jsonData = JSON.stringify(res.data.result);
            wx.navigateTo({
              url: 'bazi/baziInfo?jsonData=' + jsonData,
            });
          } else {
            wx.showModal({ content: res.data, showCancel: false });
            // wx.navigateTo({
            //   url: 'result',
            // });
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
