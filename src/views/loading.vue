<template>
  <div class="loading">
    <!-- 小屏加载 -->
    <div
      v-if="big"
      style="width:100%;height:100%"
    >
      <div class="arc">
      </div>
      <h1><span>LOADING</span></h1>
    </div>
    <!-- 大屏加载 -->
    <div
      v-else
      class="assembly"
    >
      <div class="comp-3d comp-3d--i">
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
        <div class="cube">
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
          <div class="cube__face"></div>
        </div>
      </div>
      <div class="comp-3d comp-3d--o">
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
        <div class="pos">
          <div class="cube">
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
            <div class="cube__face"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

      //照片隧道
      count: 0,
      //照片墙
      countimg: 0,
      //视频
      video: 0,

      //加载完成的项目数量
      num: 0,
      big: false
    }
  },

  destroyed () {
    $("#xkback").css("display", "block")
  },
  watch: {
    num (val, old) {
      if (val === 2) {
        console.log("加载完成！")
        this.$router.push({ path: "/countdown" })
      }
    },
    count: function (val, old) {

      // 图片全部加载完成后切换页面
      // [从骨架屏切换回正常页面]
      if (val === this.$store.getters.gettunnelimg.length) {
        console.log('所有图片加载完毕(包含加载失败的图片)')

        // 切换为正常视图
        this.num++
      }
    },
    countimg (val, old) {
      if (val === this.$store.getters.getimgshowdata.length) {
        console.log('所有图片加载完毕(包含加载失败的图片)')

        // 切换为正常视图
        this.num++
      }
    },

  },
  mounted () {
    $("#xkback").css("display", "none")
    if (document.documentElement.clientWidth < 768) {
      this.big = true

    } else {
      this.big = false
    }
    // 预加载图片
    this.preLoad()
  },
  methods: {
    preLoad: function () {

      // 将所有图片循环遍历
      for (let url of this.$store.getters.gettunnelimg) {

        // create image DOM
        let image = new Image()
        image.src = url

        // 图片加载完毕事件
        image.onload = () => {
          this.count++
        }

        // 当有图片加载失败事件(即有图片加载出错)
        image.onerror = () => {
          console.error(`有图片加载出错: ${url}`)
          this.count++
        }
      }
      // 将所有图片循环遍历
      for (let url of this.$store.getters.getimgshowdata) {

        // create image DOM
        let image2 = new Image()
        image2.src = url

        // 图片加载完毕事件
        image2.onload = () => {
          this.countimg++
        }

        // 当有图片加载失败事件(即有图片加载出错)
        image2.onerror = () => {
          console.error(`有图片加载出错: ${url}`)
          this.countimg++
        }
      }

    },
  }
}
</script>
<style lang="scss" scoped>
.loading {
  margin: 0;
  height: 100%;
  perspective: 32em;
  background: rgba(0, 0, 0, 0.87);
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 999999999;
  display: flex;
  justify-items: center;
  align-items: center;
  div {
    position: absolute;
    transform-style: preserve-3d;
  }
}
//小屏加载
.arc {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 2px solid #ffea29;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: rt 2s infinite linear;
}
.arc::before {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-top: 2px solid #8d29ff;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: rt 4s infinite linear reverse;
  content: "";
}
.arc::after {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  border-top: initial;
  border-left: initial;
  border-right: initial;
  animation: cw 1s infinite;
  content: "";
  background: snow;
}

h1 {
  position: absolute;
  height: 40px;
  margin: auto;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 14px;
  font-weight: lighter;
  color: white;
}
h1 span {
  display: none;
}
h1::after {
  animation: txt 5s infinite;
  content: "";
}

@keyframes rt {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes cw {
  0% {
    width: 0;
    height: 0;
  }
  75% {
    width: 40px;
    height: 40px;
  }
  100% {
    width: 0;
    height: 0;
  }
}
@keyframes txt {
  0% {
    content: "LOADING.";
  }
  50% {
    content: "LOADING..";
  }
  100% {
    content: "LOADING...";
  }
}

//大屏加载
.assembly {
  top: 50%;
  left: 50%;
  transform: rotateX(-45deg) rotateY(-45deg);
}

.comp-3d {
  animation: r 2s ease-in-out infinite;
}
.comp-3d--i {
  animation-name: ri;
}
.comp-3d--o {
  animation-name: ro;
}

@keyframes ri {
  0%,
  20% {
    transform: rotateY(-0.5turn);
  }
  50% {
    transform: none;
  }
  100%,
  80% {
    transform: rotateX(-0.5turn);
  }
}
@keyframes ro {
  0%,
  35% {
    transform: rotate(-0.5turn);
  }
  65%,
  100% {
    transform: none;
  }
}
.pos:nth-child(1) {
  transform: scale3d(1, 1, 1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(1) {
  transform: translate3d(-4em, -4em, 0em);
}

.pos:nth-child(2) {
  transform: scale3d(1, 1, -1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(2) {
  transform: translate3d(-4em, 0em, -4em);
}

:not(.pos) > .cube:nth-child(3) {
  transform: translate3d(-4em, 0em, 0em);
}

:not(.pos) > .cube:nth-child(4) {
  transform: translate3d(-4em, 0em, 4em);
}

.pos:nth-child(3) {
  transform: scale3d(1, -1, 1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(5) {
  transform: translate3d(-4em, 4em, 0em);
}

.pos:nth-child(4) {
  transform: scale3d(1, -1, -1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(6) {
  transform: translate3d(0em, -4em, -4em);
}

:not(.pos) > .cube:nth-child(7) {
  transform: translate3d(0em, -4em, 0em);
}

:not(.pos) > .cube:nth-child(8) {
  transform: translate3d(0em, -4em, 4em);
}

:not(.pos) > .cube:nth-child(9) {
  transform: translate3d(0em, 0em, -4em);
}

:not(.pos) > .cube:nth-child(10) {
  transform: translate3d(0em, 0em, 0em);
}

:not(.pos) > .cube:nth-child(11) {
  transform: translate3d(0em, 0em, 4em);
}

:not(.pos) > .cube:nth-child(12) {
  transform: translate3d(0em, 4em, -4em);
}

:not(.pos) > .cube:nth-child(13) {
  transform: translate3d(0em, 4em, 0em);
}

:not(.pos) > .cube:nth-child(14) {
  transform: translate3d(0em, 4em, 4em);
}

.pos:nth-child(5) {
  transform: scale3d(-1, 1, 1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(15) {
  transform: translate3d(4em, -4em, 0em);
}

.pos:nth-child(6) {
  transform: scale3d(-1, 1, -1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(16) {
  transform: translate3d(4em, 0em, -4em);
}

:not(.pos) > .cube:nth-child(17) {
  transform: translate3d(4em, 0em, 0em);
}

:not(.pos) > .cube:nth-child(18) {
  transform: translate3d(4em, 0em, 4em);
}

.pos:nth-child(7) {
  transform: scale3d(-1, -1, 1) translate3d(4em, 4em, 4em);
}

:not(.pos) > .cube:nth-child(19) {
  transform: translate3d(4em, 4em, 0em);
}

.pos:nth-child(8) {
  transform: scale3d(-1, -1, -1) translate3d(4em, 4em, 4em);
}

.pos .cube {
  animation: m 2s ease-out infinite;
}
.cube__face {
  margin: -2em;
  width: 4em;
  height: 4em;
  box-shadow: 0 0 2em rgba(220, 220, 220, 0.5) inset;
  background: whitesmoke;
  border: 1px solid rgba(204, 203, 203, 0.74);
}
.cube__face:nth-child(2n) {
  filter: brightness(0.97);
}
.cube__face:nth-child(n + 5) {
  filter: brightness(1.03);
}
.cube__face:nth-child(1) {
  transform: rotateY(0deg) translateZ(2em);
}
.cube__face:nth-child(2) {
  transform: rotateY(90deg) translateZ(2em);
}
.cube__face:nth-child(3) {
  transform: rotateY(180deg) translateZ(2em);
}
.cube__face:nth-child(4) {
  transform: rotateY(270deg) translateZ(2em);
}
.cube__face:nth-child(5) {
  transform: rotateX(90deg) translateZ(2em);
}
.cube__face:nth-child(6) {
  transform: rotateX(-90deg) translateZ(2em);
}

@keyframes m {
  0%,
  5%,
  95%,
  100% {
    transform: none;
  }
  15% {
    transform: translate3d(0, 4em, 0);
  }
  25% {
    transform: translate3d(0, 4em, 4em);
  }
  35%,
  65% {
    transform: translate3d(4em, 4em, 4em);
  }
  75% {
    transform: translate3d(4em, 0, 4em);
  }
  85% {
    transform: translate3d(4em, 0, 0);
  }
}
</style>