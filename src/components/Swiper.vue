<template>
  <div class="page-list" id="page-list">
    <audio src="/static/music/holy.mp3" ref="audio" id="myaudio" controls="controls" loop="true" hidden="true"></audio>

    <div :class="{page: true, one: true, turn: turnObj.one}">
      <div class="border">
        <div class="decoration">
          <template v-for="item in pendantList">
            <pendant :left="item.left" :type="item.type" :height="item.height" :key="item.left"/>
          </template>
        </div>

        <div class="title">
          <img :src="'/static/image/title.png'" />
        </div>
        <div class="people">
          <img :src="'/static/image/people.png'" />
        </div>
        <div class="title2">
          <img :src="'/static/image/title2.png'" />
        </div>
        <div class="text">
          <img :src="'/static/image/text.png'" />
        </div>
      </div>

      <div :class="{music: true, 'music-animate': playStatus === 'play'}" @click="play">
        <img v-if="playStatus === 'play'" :src="'/static/image/play.png'" />
        <img v-else :src="'/static/image/stop.png'" />
      </div>
    </div>
    <div :class="{page: true, two: true }" v-if="delay">
      <div :class="{music: true, 'music-animate': playStatus === 'play'}" @click="play">
        <img v-if="playStatus === 'play'" :src="'/static/image/play.png'" />
        <img v-else :src="'/static/image/stop.png'" />
      </div>
      <img :src="'/static/image/page-top.png'" class="page-top"/>
      <img :src="'/static/image/text2.png'" class="text2"/>
      <img :src="'/static/image/text1.png'" class="text1"/>
      <img :src="'/static/image/page-bottom.png'" class="page-bottom"/>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Hammer from 'hammerjs'
import 'swiper/swiper-bundle.css'
import Pendant from './Pendant'

export default {
  name: 'CustomeSwiper',
  components: {
    Swiper,
    SwiperSlide,
    Pendant
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      turnObj: {
        one: false
      },
      delay: false,
      animating: false, // 是否在动画执行中
      pendantList: [
        {
          type: 1,
          left: 10,
          height: 100
        },
        {
          type: 2,
          left: 15,
          height: 50
        },
        {
          type: 3,
          left: 17,
          height: 100
        },
        {
          type: 4,
          left: 27,
          height: 40
        },
        {
          type: 1,
          left: 34,
          height: 50
        },
        {
          type: 2,
          left: 40,
          height: 70
        },
        {
          type: 3,
          left: 42,
          height: 80
        },
        {
          type: 4,
          left: 49,
          height: 30
        },
        {
          type: 1,
          left: 58,
          height: 50
        },
        {
          type: 2,
          left: 62,
          height: 100
        },
        {
          type: 3,
          left: 70,
          height: 80
        },
        {
          type: 4,
          left: 78,
          height: 60
        },
        {
          type: 1,
          left: 85,
          height: 100
        },
        {
          type: 2,
          left: 90,
          height: 70
        }
      ],
      hammer: null, // 手势库
      playStatus: 'play' // pause
    }
  },
  mounted () {
    // 初始化手势库
    this.initHammer()

    document.addEventListener('WeixinJSBridgeReady', () => { // 暂时还不知道Yixin是什么东西...
      this.$refs.audio.play()
    }, false)

    setTimeout(() => {
      this.delay = true // 解决页面一加载会闪一下
    }, 500)
  },
  methods: {
    /** 播放，停止 */
    play () {
      if (this.playStatus === 'play') {
        this.$refs.audio.pause()
        this.playStatus = 'pause'
      } else {
        this.$refs.audio.play()
        this.playStatus = 'play'
      }
    },

    /** 初始化手势库 */
    initHammer () {
      var hammer = new Hammer(document.getElementById('page-list'))
      this.hammer = hammer

      // 翻下一页
      hammer.on('swipeleft', (ev) => {
        // 动画执行中 不做任何操作
        if (this.animating) return

        // 说明在第一页，则需要打开第一页
        if (!this.turnObj.one) {
          this.turnObj.one = true
        }
      })

      // 翻上一页面
      hammer.on('swiperight', (ev) => {
        if (this.animating) return

        console.log('right', ev.type)
        /**
         * 说明当前页面也在第二页，
         */
        if (this.turnObj.one) {
          // 说明已经再第二页
          this.turnObj.one = false
        }
      })
    }
  }
}
</script>

<style scoped>

@keyframes music {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.page-list {
  height: 100%;
  position: relative;
  perspective: 500px;
  -webkit-perspective: 500px;
}

.page-bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.page-top {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.music {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 13%;
  right: 10%;
}

.music-animate {
  animation-name: music;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}

.text2 {
  margin: 40% auto;
  display: block;
  width: 80%;
}

.text1 {
  width: 70%;
  bottom: 27%;
  position: absolute;
  right: 10%;
}

.one {
  z-index: 5;
  background-image: url('/static/image/bg.jpg');
  padding: 10px;
  box-sizing: border-box;
}

.one .border {
  width: 100%;
  height: 100%;
  background-image: url('/static/image/border.png');
  background-size: 100% 100%;
  position: relative;
  display: inline-block;
}

.one .title {
  width: 50%;
  margin: 50% auto 0;
}

.one .people {
  width: 60%;
  margin: 5% auto 0;
}

.one .title2 {
  width: 40%;
  margin: 5% auto;
}

.one .text {
  width: 70%;
  margin: 9% auto;
}

.two {
  z-index: 4;
  background-image: url('/static/image/bg.jpg');
  box-sizing: border-box;
}
.three {
  background: blue;
  z-index: 3;
}
.four {
  background: green;
  z-index: 2;
}
.five {
  background: rgb(235, 19, 181);
  z-index: 1;
}

.page {
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: rotate3d(0, 0, 0, 0deg);
  transform-origin: left;
  transition: 1s;
  background-size: cover;
}

.turn {
  transform: rotate3d(0, 1, 0, -90deg);
}
</style>
