<template>
  <div class="wrap">
    <div class="pointer">
      <img :src="'/static/image/pointer.png'" />
    </div>
    <div class="tip">
      向左/右轻滑进行翻页
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
.wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000070;
  z-index: 1000;
}

@keyframes pointer {
  0% {
    transform: translateX(30vw);
  }
  100% {
    transform: translateX(70vw);
  }
}

.pointer {
  width: 40px;
  transform: translateX(30vw);
  margin-top: 100%;
  animation-name: pointer;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  /* position: absolute; */
  /* left: 10%;
  top: 40%; */
}

.tip {
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
}
</style>
