<template>
  <div id="app">
    <div class="loading" v-if="!loadingFinish">
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
        '/static/music/holy.mp3'
      ],
      loadingFinish: false,
      progress: 0
    }
  },
  created () {
    this.loadingImg().then(() => {
      // 加载完成了所有图片
      setTimeout(() => {
        this.loadingFinish = true
      }, 500)
    })
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
