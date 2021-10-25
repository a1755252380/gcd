<template>

  <div>

    <xkbackVue></xkbackVue>
    <canvas id="countdown"></canvas>
    <!-- <div id="canvas2"></div> -->
  </div>
</template>
<script>

import "../assets/js/countdown"
import xkbackVue from '../components/xkback.vue'

// import "../assets/js/a"
export default {
  mounted () {
    $("body").css("overflow", "hidden")
    this.$nextTick(function () {

    });
  },
  destroyed () {
    $("body").css("overflow", "")
  },
  components: {
    xkbackVue
  },
}
</script>
<style lang="scss" scoped>
canvas {
  // background: linear-gradient(
  //   to bottom,
  //   rgb(6, 9, 43) 0%,
  //   rgb(30, 45, 75) 100%
  // );
  z-index: 999;
  // background: transparent;
}
canvas,
menu {
  position: absolute;
  top: 0;
  color: white;
}
.back {
  position: fixed;
  z-index: 99999;
}
</style>