<template>
  <div>
    <div
      class="end"
      id="tunnel_end"
    >
      <div id="pulse"></div>
    </div>
    <div
      v-for="(item, index) in 4"
      :key="index"
      :class="container4(index)"
    >
      <div :class="wrapper4(index)">
        <div :class="hole4(index)">
          <div class="space-bottom">

            <div
              class="star-bottom"
              v-for="(item, index) in number"
              :key="index"
            ></div>

          </div>
          <div class="space-top">

            <div
              class="star-top"
              v-for="(item, index) in number"
              :key="index"
            ></div>

          </div>
          <div class="space-left">

            <div
              class="star-left"
              v-for="(item, index) in number"
              :key="index"
            ></div>

          </div>
          <div class="space-right">

            <div
              class="star-right"
              v-for="(item, index) in number"
              :key="index"
            ></div>

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
      number: 10,

    };
  },
  mounted () {
    let that = this
    // $("body").css("background", "radial-gradient(circle, #390946 0%, #38125b 20%, #14001d 65%, black 100%)");
    $("body").css("background", "radial-gradient(circle, #390946 0%, #38125b 8%, #14001d 36%, black 100%)");



  },
  destroyed () {
    console.log("离开")
    $("body").css("background", "");
    // this.stopTimer();

  },
  methods: {

    container4 (index) {
      let a = "container"
      if (index != 0) {
        a += index
      }
      return a
    },
    wrapper4 (index) {
      let a = "wrapper"
      if (index != 0) {
        a += index
      }
      return a
    },
    hole4 (index) {
      let a = "hole"
      if (index != 0) {
        a += index
      }
      return a
    },
  }
}
</script>
<style lang="scss" scoped>
//结束白屏
.end {
  width: 100%;
  height: 100%;

  text-align: center;
  z-index: 99999;
  border-radius: 50%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pulse {
  width: 3000px;
  height: 3000px;
  border-radius: 50%;
  position: absolute;
  background: #fff;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  z-index: 9999;
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
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

///
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /*rotation can be added for additional affect
    animation: rotation 15s linear infinite;*/
}

.wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  -webkit-perspective: 25px;
  perspective: 25px;
}

.hole {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-150px);
  transform: translateZ(-150px);
  background: transparent;
}

.space-bottom {
  position: absolute;
  width: 500px;
  height: 500px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background: transparent;
  z-index: 2;
  -webkit-transform: rotateX(-80deg) translateZ(250px);
  transform: rotateX(-80deg) translateZ(250px);
}

.space-top {
  position: absolute;
  width: 500px;
  height: 500px;
  background: transparent;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  -webkit-transform: rotateX(80deg) translateZ(250px);
  transform: rotateX(80deg) translateZ(250px);
}

.space-left {
  position: absolute;
  width: 500px;
  height: 500px;
  border: solid 0px;
  border-radius: 50%;
  -webkit-transform: rotateY(-80deg) translateZ(250px);
  transform: rotateY(-80deg) translateZ(250px);
}

.space-right {
  position: absolute;
  width: 500px;
  height: 500px;
  border: solid 0px;
  border-radius: 50%;
  -webkit-transform: rotateY(80deg) translateZ(250px);
  transform: rotateY(80deg) translateZ(250px);
}

.star-top {
  position: absolute;
  left: 0px;
  width: 1px;
  height: 20px;
  opacity: 0;
  border-radius: 50%;
  background: #5729ff;
  box-shadow: 0 0 2px 1px purple;
  -webkit-animation: stars 2s linear infinite;
  animation: stars 2s linear infinite;
}
.star-top:nth-child(1) {
  top: calc(50% - 38px);
  left: calc(80% - 22px);
  -webkit-animation-delay: 4526ms;
  animation-delay: 4526ms;
}
.star-top:nth-child(2) {
  top: calc(50% - 19px);
  left: calc(80% - 93px);
  -webkit-animation-delay: 1292ms;
  animation-delay: 1292ms;
}
.star-top:nth-child(3) {
  top: calc(50% - -94px);
  left: calc(80% - 108px);
  -webkit-animation-delay: 936ms;
  animation-delay: 936ms;
}
.star-top:nth-child(4) {
  top: calc(50% - 186px);
  left: calc(80% - 181px);
  -webkit-animation-delay: 694ms;
  animation-delay: 694ms;
}
.star-top:nth-child(5) {
  top: calc(50% - 27px);
  left: calc(80% - 54px);
  -webkit-animation-delay: 1836ms;
  animation-delay: 1836ms;
}
.star-top:nth-child(6) {
  top: calc(50% - 108px);
  left: calc(80% - 17px);
  -webkit-animation-delay: 2318ms;
  animation-delay: 2318ms;
}
.star-top:nth-child(7) {
  top: calc(50% - -153px);
  left: calc(80% - 139px);
  -webkit-animation-delay: 1473ms;
  animation-delay: 1473ms;
}
.star-top:nth-child(8) {
  top: calc(50% - 187px);
  left: calc(80% - 37px);
  -webkit-animation-delay: 3334ms;
  animation-delay: 3334ms;
}
.star-top:nth-child(9) {
  top: calc(50% - 0px);
  left: calc(80% - 20px);
  -webkit-animation-delay: 2407ms;
  animation-delay: 2407ms;
}
.star-top:nth-child(10) {
  top: calc(50% - -18px);
  left: calc(80% - 60px);
  -webkit-animation-delay: 2051ms;
  animation-delay: 2051ms;
}
.star-top:nth-child(11) {
  top: calc(50% - 62px);
  left: calc(80% - 270px);
  -webkit-animation-delay: 2313ms;
  animation-delay: 2313ms;
}
.star-top:nth-child(12) {
  top: calc(50% - -34px);
  left: calc(80% - 65px);
  -webkit-animation-delay: 155ms;
  animation-delay: 155ms;
}
.star-top:nth-child(13) {
  top: calc(50% - 177px);
  left: calc(80% - 284px);
  -webkit-animation-delay: 1181ms;
  animation-delay: 1181ms;
}
.star-top:nth-child(14) {
  top: calc(50% - -107px);
  left: calc(80% - 271px);
  -webkit-animation-delay: 3919ms;
  animation-delay: 3919ms;
}
.star-top:nth-child(15) {
  top: calc(50% - 76px);
  left: calc(80% - 213px);
  -webkit-animation-delay: 2386ms;
  animation-delay: 2386ms;
}
.star-top:nth-child(16) {
  top: calc(50% - -149px);
  left: calc(80% - 126px);
  -webkit-animation-delay: 378ms;
  animation-delay: 378ms;
}
.star-top:nth-child(17) {
  top: calc(50% - 17px);
  left: calc(80% - 235px);
  -webkit-animation-delay: 4713ms;
  animation-delay: 4713ms;
}
.star-top:nth-child(18) {
  top: calc(50% - -171px);
  left: calc(80% - 137px);
  -webkit-animation-delay: 2749ms;
  animation-delay: 2749ms;
}
.star-top:nth-child(19) {
  top: calc(50% - 164px);
  left: calc(80% - 268px);
  -webkit-animation-delay: 936ms;
  animation-delay: 936ms;
}
.star-top:nth-child(20) {
  top: calc(50% - 53px);
  left: calc(80% - 5px);
  -webkit-animation-delay: 393ms;
  animation-delay: 393ms;
}
.star-top:nth-child(21) {
  top: calc(50% - -150px);
  left: calc(80% - 26px);
  -webkit-animation-delay: 3655ms;
  animation-delay: 3655ms;
}
.star-top:nth-child(22) {
  top: calc(50% - -43px);
  left: calc(80% - 149px);
  -webkit-animation-delay: 2751ms;
  animation-delay: 2751ms;
}
.star-top:nth-child(23) {
  top: calc(50% - -182px);
  left: calc(80% - 44px);
  -webkit-animation-delay: 2228ms;
  animation-delay: 2228ms;
}
.star-top:nth-child(24) {
  top: calc(50% - -112px);
  left: calc(80% - 48px);
  -webkit-animation-delay: 361ms;
  animation-delay: 361ms;
}
.star-top:nth-child(25) {
  top: calc(50% - -48px);
  left: calc(80% - 142px);
  -webkit-animation-delay: 2413ms;
  animation-delay: 2413ms;
}
.star-top:nth-child(26) {
  top: calc(50% - 9px);
  left: calc(80% - 223px);
  -webkit-animation-delay: 2038ms;
  animation-delay: 2038ms;
}
.star-top:nth-child(27) {
  top: calc(50% - -132px);
  left: calc(80% - 249px);
  -webkit-animation-delay: 2291ms;
  animation-delay: 2291ms;
}
.star-top:nth-child(28) {
  top: calc(50% - -100px);
  left: calc(80% - 177px);
  -webkit-animation-delay: 3351ms;
  animation-delay: 3351ms;
}
.star-top:nth-child(29) {
  top: calc(50% - -151px);
  left: calc(80% - 76px);
  -webkit-animation-delay: 3593ms;
  animation-delay: 3593ms;
}
.star-top:nth-child(30) {
  top: calc(50% - -62px);
  left: calc(80% - 195px);
  -webkit-animation-delay: 4005ms;
  animation-delay: 4005ms;
}

.star-bottom {
  position: absolute;
  left: 0px;
  width: 1px;
  height: 20px;
  opacity: 0;
  border-radius: 50%;
  background: #5729ff;
  box-shadow: 0 0 2px 1px purple;
  animation: stars 2s linear infinite reverse;
}
.star-bottom:nth-child(1) {
  top: calc(20% - -16px);
  left: calc(80% - 197px);
  -webkit-animation-delay: 2501ms;
  animation-delay: 2501ms;
}
.star-bottom:nth-child(2) {
  top: calc(20% - 67px);
  left: calc(80% - 287px);
  -webkit-animation-delay: 3716ms;
  animation-delay: 3716ms;
}
.star-bottom:nth-child(3) {
  top: calc(20% - 150px);
  left: calc(80% - 139px);
  -webkit-animation-delay: 2395ms;
  animation-delay: 2395ms;
}
.star-bottom:nth-child(4) {
  top: calc(20% - -161px);
  left: calc(80% - 146px);
  -webkit-animation-delay: 243ms;
  animation-delay: 243ms;
}
.star-bottom:nth-child(5) {
  top: calc(20% - -195px);
  left: calc(80% - 115px);
  -webkit-animation-delay: 1105ms;
  animation-delay: 1105ms;
}
.star-bottom:nth-child(6) {
  top: calc(20% - -37px);
  left: calc(80% - 185px);
  -webkit-animation-delay: 2917ms;
  animation-delay: 2917ms;
}
.star-bottom:nth-child(7) {
  top: calc(20% - -131px);
  left: calc(80% - 79px);
  -webkit-animation-delay: 486ms;
  animation-delay: 486ms;
}
.star-bottom:nth-child(8) {
  top: calc(20% - -164px);
  left: calc(80% - 246px);
  -webkit-animation-delay: 2071ms;
  animation-delay: 2071ms;
}
.star-bottom:nth-child(9) {
  top: calc(20% - -74px);
  left: calc(80% - 262px);
  -webkit-animation-delay: 747ms;
  animation-delay: 747ms;
}
.star-bottom:nth-child(10) {
  top: calc(20% - 188px);
  left: calc(80% - 153px);
  -webkit-animation-delay: 4542ms;
  animation-delay: 4542ms;
}
.star-bottom:nth-child(11) {
  top: calc(20% - -188px);
  left: calc(80% - 120px);
  -webkit-animation-delay: 1573ms;
  animation-delay: 1573ms;
}
.star-bottom:nth-child(12) {
  top: calc(20% - -40px);
  left: calc(80% - 287px);
  -webkit-animation-delay: 585ms;
  animation-delay: 585ms;
}
.star-bottom:nth-child(13) {
  top: calc(20% - -78px);
  left: calc(80% - 172px);
  -webkit-animation-delay: 4844ms;
  animation-delay: 4844ms;
}
.star-bottom:nth-child(14) {
  top: calc(20% - -122px);
  left: calc(80% - 160px);
  -webkit-animation-delay: 68ms;
  animation-delay: 68ms;
}
.star-bottom:nth-child(15) {
  top: calc(20% - 24px);
  left: calc(80% - 109px);
  -webkit-animation-delay: 2037ms;
  animation-delay: 2037ms;
}
.star-bottom:nth-child(16) {
  top: calc(20% - -73px);
  left: calc(80% - 14px);
  -webkit-animation-delay: 4333ms;
  animation-delay: 4333ms;
}
.star-bottom:nth-child(17) {
  top: calc(20% - 143px);
  left: calc(80% - 175px);
  -webkit-animation-delay: 3749ms;
  animation-delay: 3749ms;
}
.star-bottom:nth-child(18) {
  top: calc(20% - 69px);
  left: calc(80% - 242px);
  -webkit-animation-delay: 3747ms;
  animation-delay: 3747ms;
}
.star-bottom:nth-child(19) {
  top: calc(20% - -178px);
  left: calc(80% - 56px);
  -webkit-animation-delay: 1393ms;
  animation-delay: 1393ms;
}
.star-bottom:nth-child(20) {
  top: calc(20% - 54px);
  left: calc(80% - 8px);
  -webkit-animation-delay: 4120ms;
  animation-delay: 4120ms;
}
.star-bottom:nth-child(21) {
  top: calc(20% - -83px);
  left: calc(80% - 279px);
  -webkit-animation-delay: 224ms;
  animation-delay: 224ms;
}
.star-bottom:nth-child(22) {
  top: calc(20% - 12px);
  left: calc(80% - 156px);
  -webkit-animation-delay: 1853ms;
  animation-delay: 1853ms;
}
.star-bottom:nth-child(23) {
  top: calc(20% - -85px);
  left: calc(80% - 248px);
  -webkit-animation-delay: 2185ms;
  animation-delay: 2185ms;
}
.star-bottom:nth-child(24) {
  top: calc(20% - 100px);
  left: calc(80% - 121px);
  -webkit-animation-delay: 931ms;
  animation-delay: 931ms;
}
.star-bottom:nth-child(25) {
  top: calc(20% - 96px);
  left: calc(80% - 290px);
  -webkit-animation-delay: 3848ms;
  animation-delay: 3848ms;
}
.star-bottom:nth-child(26) {
  top: calc(20% - 39px);
  left: calc(80% - 12px);
  -webkit-animation-delay: 4183ms;
  animation-delay: 4183ms;
}
.star-bottom:nth-child(27) {
  top: calc(20% - 170px);
  left: calc(80% - 131px);
  -webkit-animation-delay: 2834ms;
  animation-delay: 2834ms;
}
.star-bottom:nth-child(28) {
  top: calc(20% - 97px);
  left: calc(80% - 217px);
  -webkit-animation-delay: 835ms;
  animation-delay: 835ms;
}
.star-bottom:nth-child(29) {
  top: calc(20% - 155px);
  left: calc(80% - 67px);
  -webkit-animation-delay: 4308ms;
  animation-delay: 4308ms;
}
.star-bottom:nth-child(30) {
  top: calc(20% - 87px);
  left: calc(80% - 169px);
  -webkit-animation-delay: 4557ms;
  animation-delay: 4557ms;
}

.star-left {
  position: absolute;
  width: 20px;
  height: 1px;
  opacity: 0;
  border-radius: 50%;
  background: #5729ff;
  box-shadow: 0 0 2px 1px purple;
  animation: stars2 2s linear infinite reverse;
}
.star-left:nth-child(1) {
  top: calc(50% - -53px);
  left: calc(100% - 67px);
  -webkit-animation-delay: 3822ms;
  animation-delay: 3822ms;
}
.star-left:nth-child(2) {
  top: calc(50% - 106px);
  left: calc(100% - 50px);
  -webkit-animation-delay: 629ms;
  animation-delay: 629ms;
}
.star-left:nth-child(3) {
  top: calc(50% - 178px);
  left: calc(100% - 146px);
  -webkit-animation-delay: 4855ms;
  animation-delay: 4855ms;
}
.star-left:nth-child(4) {
  top: calc(50% - -95px);
  left: calc(100% - 169px);
  -webkit-animation-delay: 1410ms;
  animation-delay: 1410ms;
}
.star-left:nth-child(5) {
  top: calc(50% - 79px);
  left: calc(100% - 112px);
  -webkit-animation-delay: 323ms;
  animation-delay: 323ms;
}
.star-left:nth-child(6) {
  top: calc(50% - 6px);
  left: calc(100% - 51px);
  -webkit-animation-delay: 2549ms;
  animation-delay: 2549ms;
}
.star-left:nth-child(7) {
  top: calc(50% - -95px);
  left: calc(100% - 122px);
  -webkit-animation-delay: 4268ms;
  animation-delay: 4268ms;
}
.star-left:nth-child(8) {
  top: calc(50% - 31px);
  left: calc(100% - 140px);
  -webkit-animation-delay: 525ms;
  animation-delay: 525ms;
}
.star-left:nth-child(9) {
  top: calc(50% - -180px);
  left: calc(100% - 128px);
  -webkit-animation-delay: 928ms;
  animation-delay: 928ms;
}
.star-left:nth-child(10) {
  top: calc(50% - -106px);
  left: calc(100% - 1px);
  -webkit-animation-delay: 3722ms;
  animation-delay: 3722ms;
}
.star-left:nth-child(11) {
  top: calc(50% - -143px);
  left: calc(100% - 37px);
  -webkit-animation-delay: 4556ms;
  animation-delay: 4556ms;
}
.star-left:nth-child(12) {
  top: calc(50% - 143px);
  left: calc(100% - 82px);
  -webkit-animation-delay: 570ms;
  animation-delay: 570ms;
}
.star-left:nth-child(13) {
  top: calc(50% - 147px);
  left: calc(100% - 77px);
  -webkit-animation-delay: 4232ms;
  animation-delay: 4232ms;
}
.star-left:nth-child(14) {
  top: calc(50% - -79px);
  left: calc(100% - 81px);
  -webkit-animation-delay: 4615ms;
  animation-delay: 4615ms;
}
.star-left:nth-child(15) {
  top: calc(50% - 200px);
  left: calc(100% - 22px);
  -webkit-animation-delay: 1860ms;
  animation-delay: 1860ms;
}
.star-left:nth-child(16) {
  top: calc(50% - 183px);
  left: calc(100% - 84px);
  -webkit-animation-delay: 319ms;
  animation-delay: 319ms;
}
.star-left:nth-child(17) {
  top: calc(50% - -108px);
  left: calc(100% - 120px);
  -webkit-animation-delay: 2738ms;
  animation-delay: 2738ms;
}
.star-left:nth-child(18) {
  top: calc(50% - 54px);
  left: calc(100% - 111px);
  -webkit-animation-delay: 4019ms;
  animation-delay: 4019ms;
}
.star-left:nth-child(19) {
  top: calc(50% - 146px);
  left: calc(100% - 91px);
  -webkit-animation-delay: 1065ms;
  animation-delay: 1065ms;
}
.star-left:nth-child(20) {
  top: calc(50% - 168px);
  left: calc(100% - 54px);
  -webkit-animation-delay: 1306ms;
  animation-delay: 1306ms;
}
.star-left:nth-child(21) {
  top: calc(50% - 200px);
  left: calc(100% - 76px);
  -webkit-animation-delay: 629ms;
  animation-delay: 629ms;
}
.star-left:nth-child(22) {
  top: calc(50% - 39px);
  left: calc(100% - 59px);
  -webkit-animation-delay: 2486ms;
  animation-delay: 2486ms;
}
.star-left:nth-child(23) {
  top: calc(50% - 170px);
  left: calc(100% - 120px);
  -webkit-animation-delay: 4640ms;
  animation-delay: 4640ms;
}
.star-left:nth-child(24) {
  top: calc(50% - 146px);
  left: calc(100% - 83px);
  -webkit-animation-delay: 1710ms;
  animation-delay: 1710ms;
}
.star-left:nth-child(25) {
  top: calc(50% - 135px);
  left: calc(100% - 192px);
  -webkit-animation-delay: 1307ms;
  animation-delay: 1307ms;
}
.star-left:nth-child(26) {
  top: calc(50% - -22px);
  left: calc(100% - 35px);
  -webkit-animation-delay: 4959ms;
  animation-delay: 4959ms;
}
.star-left:nth-child(27) {
  top: calc(50% - -168px);
  left: calc(100% - 145px);
  -webkit-animation-delay: 3443ms;
  animation-delay: 3443ms;
}
.star-left:nth-child(28) {
  top: calc(50% - -24px);
  left: calc(100% - 8px);
  -webkit-animation-delay: 3020ms;
  animation-delay: 3020ms;
}
.star-left:nth-child(29) {
  top: calc(50% - 146px);
  left: calc(100% - 30px);
  -webkit-animation-delay: 1643ms;
  animation-delay: 1643ms;
}
.star-left:nth-child(30) {
  top: calc(50% - 43px);
  left: calc(100% - 115px);
  -webkit-animation-delay: 707ms;
  animation-delay: 707ms;
}

.star-right {
  position: absolute;
  top: 0px;
  width: 20px;
  height: 1px;
  opacity: 0;
  border-radius: 50%;
  background: #5729ff;
  box-shadow: 0 0 2px 1px purple;
  -webkit-animation: stars2 2s linear infinite;
  animation: stars2 2s linear infinite;
}
.star-right:nth-child(1) {
  top: calc(50% - 66px);
  left: calc(90% - 42px);
  -webkit-animation-delay: 4494ms;
  animation-delay: 4494ms;
}
.star-right:nth-child(2) {
  top: calc(50% - -63px);
  left: calc(90% - 263px);
  -webkit-animation-delay: 1660ms;
  animation-delay: 1660ms;
}
.star-right:nth-child(3) {
  top: calc(50% - -185px);
  left: calc(90% - 228px);
  -webkit-animation-delay: 1841ms;
  animation-delay: 1841ms;
}
.star-right:nth-child(4) {
  top: calc(50% - 27px);
  left: calc(90% - 39px);
  -webkit-animation-delay: 931ms;
  animation-delay: 931ms;
}
.star-right:nth-child(5) {
  top: calc(50% - -125px);
  left: calc(90% - 263px);
  -webkit-animation-delay: 3304ms;
  animation-delay: 3304ms;
}
.star-right:nth-child(6) {
  top: calc(50% - -59px);
  left: calc(90% - 70px);
  -webkit-animation-delay: 4626ms;
  animation-delay: 4626ms;
}
.star-right:nth-child(7) {
  top: calc(50% - 42px);
  left: calc(90% - 99px);
  -webkit-animation-delay: 4972ms;
  animation-delay: 4972ms;
}
.star-right:nth-child(8) {
  top: calc(50% - -187px);
  left: calc(90% - 254px);
  -webkit-animation-delay: 3112ms;
  animation-delay: 3112ms;
}
.star-right:nth-child(9) {
  top: calc(50% - 20px);
  left: calc(90% - 46px);
  -webkit-animation-delay: 2019ms;
  animation-delay: 2019ms;
}
.star-right:nth-child(10) {
  top: calc(50% - 79px);
  left: calc(90% - 75px);
  -webkit-animation-delay: 3043ms;
  animation-delay: 3043ms;
}
.star-right:nth-child(11) {
  top: calc(50% - 5px);
  left: calc(90% - 179px);
  -webkit-animation-delay: 2625ms;
  animation-delay: 2625ms;
}
.star-right:nth-child(12) {
  top: calc(50% - -176px);
  left: calc(90% - 39px);
  -webkit-animation-delay: 2768ms;
  animation-delay: 2768ms;
}
.star-right:nth-child(13) {
  top: calc(50% - 47px);
  left: calc(90% - 187px);
  -webkit-animation-delay: 4554ms;
  animation-delay: 4554ms;
}
.star-right:nth-child(14) {
  top: calc(50% - 187px);
  left: calc(90% - 123px);
  -webkit-animation-delay: 4779ms;
  animation-delay: 4779ms;
}
.star-right:nth-child(15) {
  top: calc(50% - -97px);
  left: calc(90% - 98px);
  -webkit-animation-delay: 512ms;
  animation-delay: 512ms;
}
.star-right:nth-child(16) {
  top: calc(50% - -12px);
  left: calc(90% - 10px);
  -webkit-animation-delay: 2857ms;
  animation-delay: 2857ms;
}
.star-right:nth-child(17) {
  top: calc(50% - 140px);
  left: calc(90% - 60px);
  -webkit-animation-delay: 37ms;
  animation-delay: 37ms;
}
.star-right:nth-child(18) {
  top: calc(50% - 154px);
  left: calc(90% - 192px);
  -webkit-animation-delay: 2800ms;
  animation-delay: 2800ms;
}
.star-right:nth-child(19) {
  top: calc(50% - 116px);
  left: calc(90% - 282px);
  -webkit-animation-delay: 310ms;
  animation-delay: 310ms;
}
.star-right:nth-child(20) {
  top: calc(50% - -81px);
  left: calc(90% - 86px);
  -webkit-animation-delay: 3752ms;
  animation-delay: 3752ms;
}
.star-right:nth-child(21) {
  top: calc(50% - 25px);
  left: calc(90% - 131px);
  -webkit-animation-delay: 1974ms;
  animation-delay: 1974ms;
}
.star-right:nth-child(22) {
  top: calc(50% - 151px);
  left: calc(90% - 219px);
  -webkit-animation-delay: 3304ms;
  animation-delay: 3304ms;
}
.star-right:nth-child(23) {
  top: calc(50% - -77px);
  left: calc(90% - 109px);
  -webkit-animation-delay: 694ms;
  animation-delay: 694ms;
}
.star-right:nth-child(24) {
  top: calc(50% - 185px);
  left: calc(90% - 108px);
  -webkit-animation-delay: 3934ms;
  animation-delay: 3934ms;
}
.star-right:nth-child(25) {
  top: calc(50% - 45px);
  left: calc(90% - 159px);
  -webkit-animation-delay: 126ms;
  animation-delay: 126ms;
}
.star-right:nth-child(26) {
  top: calc(50% - -82px);
  left: calc(90% - 277px);
  -webkit-animation-delay: 2610ms;
  animation-delay: 2610ms;
}
.star-right:nth-child(27) {
  top: calc(50% - -20px);
  left: calc(90% - 51px);
  -webkit-animation-delay: 146ms;
  animation-delay: 146ms;
}
.star-right:nth-child(28) {
  top: calc(50% - -162px);
  left: calc(90% - 138px);
  -webkit-animation-delay: 2415ms;
  animation-delay: 2415ms;
}
.star-right:nth-child(29) {
  top: calc(50% - -179px);
  left: calc(90% - 154px);
  -webkit-animation-delay: 2601ms;
  animation-delay: 2601ms;
}
.star-right:nth-child(30) {
  top: calc(50% - 95px);
  left: calc(90% - 74px);
  -webkit-animation-delay: 4398ms;
  animation-delay: 4398ms;
}

/*second container for 50px perspective*/
.container1 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}

.wrapper1 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  -webkit-perspective: 50px;
  perspective: 50px;
}

.hole1 {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-150px);
  transform: translateZ(-150px);
  background: transparent;
}
.container2 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}

.wrapper2 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  -webkit-perspective: 50px;
  perspective: 50px;
}

.hole2 {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-150px);
  transform: translateZ(-150px);
  background: transparent;
}

/*third container for 100px perspective*/
.container3 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(90deg);
  transform: translate(-50%, -50%) rotate(90deg);
}

.wrapper3 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  -webkit-perspective: 100px;
  perspective: 100px;
}

.hole3 {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-150px);
  transform: translateZ(-150px);
  background: transparent;
}

/*fourth container for 125px perspective*/
.container4 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(225deg);
  transform: translate(-50%, -50%) rotate(225deg);
}

.wrapper4 {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  -webkit-perspective: 125px;
  perspective: 125px;
}

.hole4 {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-150px);
  transform: translateZ(-150px);
  background: transparent;
}

@-webkit-keyframes stars {
  0% {
    opacity: 1;
    -webkit-transform: translatex(0px) translatey(0xp) translatez(0px);
    transform: translatex(0px) translatey(0xp) translatez(0px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translatex(25px) translatey(250px) translatez(-1000px);
    transform: translatex(25px) translatey(250px) translatez(-1000px);
  }
}

@keyframes stars {
  0% {
    opacity: 1;
    -webkit-transform: translatex(0px) translatey(0xp) translatez(0px);
    transform: translatex(0px) translatey(0xp) translatez(0px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translatex(25px) translatey(250px) translatez(-1000px);
    transform: translatex(25px) translatey(250px) translatez(-1000px);
  }
}
@-webkit-keyframes stars2 {
  0% {
    opacity: 1;
    -webkit-transform: translatex(0px) translatey(0xp) translatez(0px);
    transform: translatex(0px) translatey(0xp) translatez(0px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translatex(-250px) translatey(25px) translatez(-1000px);
    transform: translatex(-250px) translatey(25px) translatez(-1000px);
  }
}
@keyframes stars2 {
  0% {
    opacity: 1;
    -webkit-transform: translatex(0px) translatey(0xp) translatez(0px);
    transform: translatex(0px) translatey(0xp) translatez(0px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translatex(-250px) translatey(25px) translatez(-1000px);
    transform: translatex(-250px) translatey(25px) translatez(-1000px);
  }
}
@-webkit-keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>