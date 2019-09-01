const app = getApp();

Page({
  data: {
    form: {
      gender: '',
      xingming: '',
      riTime: '',
      shiTime: '',
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      code: ''
    },
    items: [{ value: 'M', name: '男', checked: 'true' }, { value: 'W', name: '女' }],
    index: 0,
    date: '1990-06-01',
    time: '12:01',
    code: ''
  },

  onLoad: function () {
    wx.setEnableDebug({
      enableDebug: true
    });

    wx.login({
      success: function (res) {
        //有问题
        // this.setData({
        //   code:res.code
        // });
        console.log("#####res.code#####" + res.code);
        /*
        wx.request({
          url: 'https://www.see-source.com/weixinpay/GetOpenId',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: { 'code': res.code },
          success: function (res) {
            var openId = res.data.openid;
            that.xiadan(openId);
          }
        });
        */

      }
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      });
    }
  },

  bindPickerChange(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
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

  wxopenAction() {
    console.log("####### wxopenAction ########");
  },

  formSubmit(e) {
    const params = e.detail.value;
    console.log("#######" + params + "########");

    if (!params.xingming) {
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
    wx.request({//
      url: "https://m.yangqihe.com/love-mobile-web/home/getBaZiInfo",//?xingming=test&riTime=1978-07-08&shiTime=12:01
      data: {
        xingming: params.xingming,
        gender: params.gender,
        riTime: params.riTime,
        shiTime: params.shiTime,
        code: params.code,
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
              url: 'baziPaipan?jsonData=' + jsonData,
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
