<template>
  <div id="app">
    <div class="loading" v-if="!isClose">
      <div class="box">
        <img src="@/assets/image/xi.png" class="loading-img" alt="loading"/>
        <div>{{progress}}%</div>
      </div>
    </div>
    <Swiper v-if="loadingFinish"/>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Axios from 'axios'

import wx from 'weixin-js-sdk'

export default {
  name: 'App',
  components: {
    Swiper
  },
  data () {
    return {
      imgList: [
        '/static/image/bg.jpg',
        '/static/image/border.png',
        '/static/image/p1.png',
        '/static/image/p2.png',
        '/static/image/p3.png',
        '/static/image/p4.png',
        '/static/image/people.png',
        '/static/image/text.png',
        '/static/image/title.png',
        '/static/image/title2.png',
        '/static/image/play.png',
        '/static/image/stop.png',
        '/static/image/page-bottom.png',
        '/static/image/page-top.png',
        '/static/image/text1.png',
        '/static/image/text2.png',
        '/static/image/logo_mini.jpg',
        '/static/music/holy.mp3'
      ],
      loadingFinish: false,
      isClose: false, // 因为首页渲染可能需要时间
      progress: 0
    }
  },
  created () {
    this.loadingImg().then(() => {
      this.loadingFinish = true
      // 加载完成了所有图片
      setTimeout(() => {
        this.isClose = true
      }, 800)
    })
  },
  mounted () {
    Axios.get('/api?url=' + encodeURIComponent(location.href.split('#')[0])).then((res) => {
      console.log('res', res)
      wx.config({
        debug: true, // 开启调试模式
        appId: res.data.appId, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名
        jsApiList: [
          'updateAppMessageShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
          'updateTimelineShareData' // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
          // 'onMenuShareWeibo' // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        ] // 必填，需要使用的JS接口列表
      })
    }).catch((error) => {
      console.log(error)
    })

    // 通过ready接口处理成功验证
    wx.ready(function () {
      wxShareTimeline()
      wxShareAppMessage()
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    })

    wx.error(function (res) {
      console.log('err', res)
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    })

    function wxShareTimeline () { // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      wx.updateAppMessageShareData({
        title: '婚礼邀请函', // 分享标题
        desc: '世界那么大，我想去看看-微信test', // 分享描述
        link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
        success: () => {
        }
      })
    }
    function wxShareAppMessage () { // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      wx.updateTimelineShareData({
        title: '婚礼邀请函', // 分享标题
        desc: '世界那么大，我想去看看-微信test2', // 分享描述
        link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '/static/image/logo_mini.jpg', // 分享图标(不能赋相对路径，一定要是绝对路径)
        success: () => {
        }
      })
    }
  },
  // watch: {
  //   loadingFinish (val) {
  //     if (val) {
  //       // 表示资源已经都加载成功了
  //     }
  //   }
  // },
  methods: {
    async loadingImg () {
      const list = [...this.imgList]
      let count = 0

      // 计算进度
      while (list.length) {
        const src = list.shift()

        const data = await this.singleImgFinish(src)
        console.log('data', data)
        count++

        console.log('grepress', count, count / this.imgList.length)

        this.progress = ((count / this.imgList.length) * 100).toFixed(0)
      }
    },
    singleImgFinish (src) {
      return Axios.get(src).then(res => {
        // console.log('res', res)
        return res
      })
    }
  }
}
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  * { margin: 0; padding: 0; }

  img {
    width: 100%;
  }

  .loading {
    width: 100%;
    height: 100%;
    background-color: #b02126;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }

  .loading-img {
    width: 60px;
    margin: auto;
    margin-bottom: 10px;
  }

  .box {
    position: absolute;
    width: 120px;
    height: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    color: #d7a75e;
    font-size: 16px;
    text-align: center;
    font-weight: 900px;
  }
</style>
