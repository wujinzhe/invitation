// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import wx from 'weixin-js-sdk'
import axios from 'axios'
Vue.config.productionTip = false
const desc = '欢迎参加吴晋哲&王璐璐的婚礼'
const title = '婚礼邀请函'

axios.get('/api?url=' + encodeURIComponent(location.href.split('#')[0])).then((res) => {
  console.log('res', res)
  wx.config({
    debug: false, // 开启调试模式
    appId: res.data.appId, // 必填，公众号的唯一标识
    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
    nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
    signature: res.data.signature, // 必填，签名
    jsApiList: [
      'updateAppMessageShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      'updateTimelineShareData', // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      'onMenuShareAppMessage', // 旧的接口，即将废弃
      'onMenuShareTimeline' // 旧的接口，即将废弃
      // 'onMenuShareWeibo' // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
    ] // 必填，需要使用的JS接口列表
  })
}).catch((error) => {
  console.log(error)
})

// 通过ready接口处理成功验证
wx.ready(function () {
  wx.updateAppMessageShareData({
    title, // 分享标题
    desc, // 分享描述
    link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'http://wll.wroadw.com/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
    success: () => {
    }
  })
  wx.updateTimelineShareData({
    title, // 分享标题
    desc, // 分享描述
    link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'http://wll.wroadw.com/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
    success: () => {
    }
  })
  wx.onMenuShareAppMessage({
    title, // 分享标题
    desc, // 分享描述
    link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'http://wll.wroadw.com/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
    success: () => {
    }
  })
  wx.onMenuShareTimeline({
    title, // 分享标题
    desc, // 分享描述
    link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'http://wll.wroadw.com/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
    success: () => {
    }
  })

  // wxShareTimeline()
  // wxShareAppMessage()
// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
})

document.addEventListener('WeixinJSBridgeReady', () => {
  // const audio = document.querySelector('#myaudio')
  // alert(audio)

  // if (audio) {
  //   // clearInterval(time)
  //   audio.play()
  // }
  const time = setInterval(() => {
    const audio = document.querySelector('#myaudio')

    if (audio) {
      audio.play()
      clearInterval(time)
    }
  }, 200)
})

wx.error(function (res) {
  console.log('err', res)
// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
})

// function wxShareTimeline () { // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
//   wx.updateAppMessageShareData({
//     title: '婚礼邀请函', // 分享标题
//     desc, // 分享描述
//     link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//     imgUrl: '/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
//     success: () => {
//     }
//   })
// }
// function wxShareAppMessage () { // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
//   wx.updateTimelineShareData({
//     title: '婚礼邀请函', // 分享标题
//     desc: '世界那么大，我想去看看-微信test2', // 分享描述
//     link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//     imgUrl: '/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
//     success: () => {
//     }
//   })
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
