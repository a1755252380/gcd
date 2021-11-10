<template>
  <div class="play2">
    <div
      class="play2_div"
      v-if="playtype==2"
    >
      <h1 class='deepshadow'>心有灵犀</h1>
      <p class="deepshadow"> 由大一、大二、大三成员分别组成少年组、青年组、老年组参与<br>
        由各组派出四名代表参赛，由一名代表比划、另外三名负责猜题。在规定时间内猜对题数为本轮分数。
      </p>

    </div>
    <div
      class="play2_div"
      v-if="playtype==3"
    >
      <h1 class='deepshadow'>正歌反说</h1>
      <p class="deepshadow"> 由大一、大二、大三成员分别组成少年组、青年组、老年组参与<br>
        由各组派代表参加，迅速反念出主持人给的歌名，念错则进入下一题，每组各十题。答对一题积一分。
      </p>

    </div>
    <!-- 第一个跳转 -->
    <div
      class="item button-pulse next"
      style="--bg-color: #1B2042"
      @click=" jump2"
      v-if="playtype==3"
    >
      <div class="button__wrapper">
        <div class="pulsing"></div>
        <button>下下一个!</button>
      </div>
    </div>
    <!-- 第二个跳转 -->
    <div
      v-else
      class="item button-pulse next"
      style="--bg-color: #1B2042"
      @click=" jump"
    >
      <div class="button__wrapper">
        <div class="pulsing"></div>
        <button>下下一个!</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      path: "/Introduction/3",

    };
  },
  methods: {
    jump () {

      this.$router.push({ path: this.path })


    },
    jump2 () {
      this.$router.push({ path: "/Introduction/4" })
    }
  },
  computed: {
    playtype: function () {
      console.log(this.$route.params.type)

      // `this` 指向 vm 实例
      return this.$route.params.type
    }

  }
}
</script>
<style lang="scss" scoped>
@import url("../assets/css/icon.css");
.play2 {
  color: #fff;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  .play2_div {
    width: 50%;
    text-align: center;
    h1 {
      font-size: 70px;
      padding: 40px 50px;
    }
    p {
      font-size: 30px;
    }
  }
}
.next {
  position: absolute;
  margin: auto;
  bottom: 25%;
}
.deepshadow {
  color: #e0dfdc;
  //   background-color: #333;
  letter-spacing: 0.1em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic,
    "AppleGothic", sans-serif;

  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
}
</style>