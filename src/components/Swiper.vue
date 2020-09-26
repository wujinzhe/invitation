<template>
  <div class="page-list" id="page-list">
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
      <!-- <button @click="turn('one', true)">下一篇</button> -->
    </div>
    <div :class="{page: true, two: true, turn: turnObj.two}">
      <!-- TODO 这里添加第二页的东西 -->
    </div>
    <div :class="{page: true, three: true, turn: turnObj.three}">
      <div>Slide 3</div>
      <button @click="turn('two', false)">上一篇</button>
      <button @click="turn('three', true)">下一篇</button>
    </div>
    <div :class="{page: true, four: true, turn: turnObj.four}">
      <div>Slide 4</div>
      <button @click="turn('three', false)">上一篇</button>
      <button @click="turn('four', true)">下一篇</button>
    </div>
    <div :class="{page: true, five: true}">
      <div>Slide 5</div>
      <button @click="turn('four', false)">上一篇</button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Hammer from 'hammerjs'
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
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
        one: false,
        two: false,
        three: false,
        four: false
      },
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
      hammer: null // 手势库
      // swiperOptions: {
      //   pagination: {
      //     el: '.swiper-pagination'
      //   },
      //   direction: 'vertical'
      //   // effect : 'cube',
      //   // Some Swiper option/callback...
      // }
    }
  },
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.$swiper
  //   }
  // },
  mounted () {
    // 初始化手势库
    var hammer = new Hammer(document.getElementById('page-list'))
    this.hammer = hammer

    // hammerTest.on('pan panmove swipe swipeup press pressup', function (ev) {
    //   console.log(ev.type)
    // })
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    /**
     * 第几页打开还是关闭
     */
    turn (target, isOpen) {
      this.turnObj[target] = isOpen
    },

    initHammer () {

    }
  }
}
</script>

<style scoped>
.page-list {
  height: 100%;
  position: relative;
  perspective: 500px;
  -webkit-perspective: 500px;
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
  margin: 15% auto;
}

.two {
  background: yellow;
  z-index: 4;
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
