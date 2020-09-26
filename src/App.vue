<template>
  <div id="app">
    <div class="loading">
      <div class="box">
        <img src="@/assets/image/xi.png" class="loading-img"/>
        <div>1%</div>
      </div>
    </div>
    <Swiper />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'

export default {
  name: 'App',
  components: {
    Swiper
  },
  data () {
    return {
      imgList: [
        ''
      ]
    }
  },
  methods: {
    loadingImg () {

    },
    singleImgFinish (src) {
      var img = new Image(src)

      return new Promise((resolve, reject) => {
        img.onload = function () {
          resolve()
        }
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
