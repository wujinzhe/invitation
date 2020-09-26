<template>
  <div class="page-list">
    <div :class="{page: true, one: true, turn: turnObj.one}">
      <div>
        水电费第三方第三方水电费第三方第三方士大夫水电费水电费水电费水电费水电费水电费水电费水电费手机登录看风景时大立科技弗兰克斯的积分删掉了开房记录SDK见风使舵开了房加快速度垃圾分类打开时间放声大哭链接发时空来电副驾驶的熟练度附近时考虑到荆防颗粒时代峻峰莱克斯顿荆防颗粒圣诞节福利看电视剧疯狂老爹数据发莱克斯顿荆防颗粒时代峻峰圣诞快乐副驾驶的离开上课了地方加克鲁赛德荆防颗粒时代峻峰克鲁赛德荆防颗粒圣诞节福利看电视剧反馈了时代峻峰莱克斯顿副教授邓丽君省的浪费精灵盛典会计分录开始搭建发了开始搭建弗兰克斯代发奖励SDK临时冻结弗兰克斯的积分流失的快捷方式独立开发见识到了
      </div>
      <button @click="turn('one', true)">下一篇</button>
    </div>
    <div :class="{page: true, two: true, turn: turnObj.two}">
      <div>Slide 2</div>
      <button @click="turn('one', false)">上一篇</button>
      <button @click="turn('two', true)">下一篇</button>
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
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

export default {
  name: 'CustomeSwiper',
  components: {
    Swiper,
    SwiperSlide
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
      }
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
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    /**
     * 第几页打开还是关闭
     */
    turn (target, isOpen) {
      this.turnObj[target] = isOpen
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
  background: red;
  z-index: 5;
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
}

.turn {
  transform: rotate3d(0, 1, 0, -90deg);
}
</style>
