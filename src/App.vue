<template>
  <div id="app">
    <Swiper />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'

export default {
  name: 'App',
  components: {
    Swiper
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
</style>
