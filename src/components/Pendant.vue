<template>
  <div class="pendant" :style="{height: height + 'px', left: left + '%'}">
    <div class="line" :style="{height: height + 'px'}"></div>
    <img class="img" :src="'/static/image/p' + type + '.png'" />
  </div>
</template>

<script>
export default {
  name: 'Pendant',
  props: {
    height: {
      type: Number,
      default: 100
    },
    type: {
      type: Number,
      default: 1
    },
    left: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.pendant {
  position: absolute;
  width: 20px;
  top: 1px;
}
.line {
  width: 1px;
  background: #f3c555;
  margin: auto;
  transform: scaleX(0.7);
}

.img {
  width: 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(100%);
  bottom: 0;
}
</style>
