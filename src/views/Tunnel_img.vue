<template>
  <div class="main2 ">
    <tunnelbackgroundVue></tunnelbackgroundVue>
    <div class="ct">
      <div
        v-for="(item, index) in imgdata"
        :key="index"
        class="item"
        :data-i=index
      ><img
          :src="item"
          alt=""
        ></div>
    </div>

  </div>
</template>
<script>
import Swiper from "swiper";
import tunnelbackgroundVue from './tunnel_background.vue';

// import '../assets/js/tunnelimg'
export default {
  data () {
    return {

      timers: null,
      time: null,
      time2: null,
      time3: null,
      swiper: null,
    };
  },
  computed: {
    imgdata () {
      return this.$store.getters.gettunnelimg
    }
  },
  components: { tunnelbackgroundVue },
  destroyed () {
    $("#xkback").css("display", "block")
    clearInterval(this.timers)
    if (this.time) {
      console.log("清除")
      console.log(this.time)
      clearTimeout(this.time)
    }
    if (this.time2) {
      clearTimeout(this.time2)
    }
    if (this.time3) {
      clearTimeout(this.time3)
    }
    $(".item").css("transform", " translateZ(-8000px)");

  },

  mounted () {
    let that = this
    $("#xkback").css("display", "none")
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        speed: 1
      });
      $(".text").animate({
        opacity: 0
      });
      $(".ct").show();
      this.move();

      $(".ct").on("click", ".item", function () {
        console.log(Number($(this).index()) + 1);
        swiper.slideTo(Number($(this).index()) + 1);
        // $('.pic-wrapper').show()
        $(".pic-wrapper").css({
          opacity: 1,
          "z-index": 99
        });

      });

      $(".swiper-button-prev").on("click", function () {
        console.log("prev");
        swiper.slidePrev();
      });

      $(".swiper-button-next").on("click", function () {
        console.log("next");
        swiper.slideNext();
      });

      $(".close").on("click", function () {
        $(".ct").show();
        // $('.pic-wrapper').hide()
        $(".pic-wrapper").css({
          opacity: 0,
          "z-index": -1
        });
      });
      that.$forceUpdate();
      that.time = setTimeout(() => {
        $("#pulse").addClass("pulse")
        that.time2 = setTimeout(() => {
          $("#pulse").removeClass("pulse");
          that.$router.push({ path: "/imgshow" })
        }, 5000);
      }, 15000);
    });



  },
  methods: {
    move () {
      let timer;
      let list = $(".item");
      for (let i = 0, len = list.length; i < len; i++) {
        if (i % 4 == 0) {
          $(".item")
            .eq(i)
            .css("top", -Number(Math.floor(Math.random() * 1000) + 300) + "px");
          $(".item")
            .eq(i)
            .css("left", -Number(Math.floor(Math.random() * 2000) - 200) + "px");
        } else if (i % 4 == 1) {
          $(".item")
            .eq(i)
            .css("top", -Number(Math.floor(Math.random() * 1000) + 300) + "px");
          $(".item")
            .eq(i)
            .css("left", Number(Math.floor(Math.random() * 2000) - 200) + "px");
        } else if (i % 4 == 2) {
          $(".item")
            .eq(i)
            .css("top", Number(Math.floor(Math.random() * 1000) + 300) + "px");
          $(".item")
            .eq(i)
            .css("left", -Number(Math.floor(Math.random() * 2000) - 200) + "px");
        } else {
          $(".item")
            .eq(i)
            .css("top", Number(Math.floor(Math.random() * 1000) + 300) + "px");
          $(".item")
            .eq(i)
            .css("left", Number(Math.floor(Math.random() * 2000) - 200) + "px");
        }
        $(".item")
          .eq(i)
          .attr("data-z", -8000);
        let delay = Math.floor(Math.random() * 10000);

        this.time3 = setTimeout(function () {

          let Z = 0
          Z = ~~$(".item")
            .eq(i)
            .attr("data-z");
          this.timers = setInterval(function () {

            if (Z >= -9909) {
              $(".item")
                .eq(i)
                .css("opacity", 1);
            }
            if (Z >= -100) {
              $(".item")
                .eq(i)
                .css("opacity", 0);
            }
            if (Z >= 1000) {
              Z = -8000;
            }
            $(".item")
              .eq(i)
              .css("transform", " translateZ(" + Z + "px)");
            Z += 40;
          }, 10);
        }, delay);
      }

    }
  },

}
</script>
<style lang="scss" scoped>
@import url("../../node_modules/swiper/swiper-bundle.min.css");
.pulse {
  width: 0px !important;
  height: 0px !important;
  border-radius: 50%;
  position: absolute;
  background: #fff;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  z-index: 99;
  opacity: 0;
  -webkit-animation: warn 5s ease-out;
  -moz-animation: warn 5s ease-out;
  animation: warn 5s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
@keyframes warn {
  0% {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: scale(0);
    opacity: 1;
  }
  25% {
    border-radius: 50%;
    opacity: 0.8;
  }
  50% {
    border-radius: 50%;
    opacity: 0.9;
  }
  75% {
    border-radius: 50%;
    opacity: 0.9;
  }
  85% {
    border-radius: 50%;
    opacity: 0.9;
  }
  95% {
    border-radius: 50%;
    opacity: 1;
  }
  100% {
    border-radius: 50%;
    transform: scale(1);
    opacity: 1;
  }
}
//照片墙
.main2 {
  position: absolute;
  width: 100vw;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.ct {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1280px;
  height: 800px;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  perspective-origin: center 30vh;
  perspective: 300px;
}

.ct .item {
  font-size: 0;
  position: absolute;
  transform-origin: center;
  width: 950px;
  transform: translateZ(-10000px);
  background-color: rgba(176, 44, 47, 0.2);
  border: 8px solid #fff;
  opacity: 0;
  /* opacity: 1; */
  transition: opacity 0.5s linear;
  cursor: pointer;
}

.ct .item img {
  font-size: 0;
  width: 100%;
  height: 100%;
  // transform: skew(2deg, 5deg);
}

.text1 {
  position: absolute;
  z-index: 99;
  top: 240px;
  left: -1920px;
}

.text2 {
  position: absolute;
  z-index: 99;
  top: 450px;
  left: -1920px;
}

.text3 {
  position: absolute;
  z-index: 99;
  top: 660px;
  left: -1920px;
}

.slide1 {
  animation: 0.8s slide forwards;
}

.slide2 {
  animation: 1s slide 1.2s forwards;
}

.slide3 {
  animation: 1.2s slide 2.4s forwards;
}

@keyframes slide {
  from {
    left: -1920px;
  }

  to {
    left: 86.5px;
  }
}

.pic-wrapper {
  /* display: none; */
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1650px;
  height: 928px;
  background-color: #fff;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.5);
  transition: opacity 0.1s linear;
}
.pic-wrapper .close {
  position: absolute;
  width: 45px;
  height: 45px;
  background: #fff url("../assets/img/close-ico.png") no-repeat center;
  right: -25px;
  top: -25px;
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-button-prev {
  left: -100px;
}

.swiper-button-next {
  right: -100px;
}

.swiper-slide,
.swiper-slide img {
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  text-align: center;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>