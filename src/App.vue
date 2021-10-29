<template>
  <div id="app">
    <xkbackVue id="xkback"></xkbackVue>
    <!-- <remote-js src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/three.js/72/three.min.js"></remote-js> -->
    <!-- <remote-js src="https://techbrood.com/threejs/build/three.min.js"></remote-js> -->
    <!-- <remote-js src="https://techbrood.com/threejs/examples/js/controls/OrbitControls.js"></remote-js> -->
    <router-view />
    <tabVue class="tab"></tabVue>
  </div>
</template>
<script>

import tabVue from './components/tab.vue'
import xkbackVue from './components/xkback.vue'
export default {
  components: {
    tabVue, xkbackVue,
    // 'remote-js': {
    //   render (createElement) {
    //     return createElement('script', { attrs: { type: 'text/javascript', src: this.src } });
    //   },
    //   props: {
    //     src: { type: String, required: true },
    //   },
    // },
  },

}
</script>
<style lang="scss">
@import url("./assets/css/html.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.tab {
  position: fixed;
  right: 15px;
  bottom: 15px;
}
</style>
