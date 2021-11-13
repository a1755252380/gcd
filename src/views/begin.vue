<template>
  <div style="width:100%;height:100%">
    <div
      class="end"
      id="end"
    >
      <div class="bubbleTail3">
        <div class="wenzi3 ">救命啊！！下面好黑！！</div>
      </div>
    </div>
    <div
      class="all-wrap"
      @click="catclick"
    >
      <div class="all">
        <div class="yarn"></div>
        <div class="cat-wrap">
          <div class="cat">
            <div class="cat-upper">
              <div class="cat-leg"></div>
              <div class="cat-leg"></div>
              <div class="cat-head">
                <div class="cat-ears">
                  <div class="cat-ear"></div>
                  <div class="cat-ear"></div>
                </div>
                <div class="cat-face">
                  <div class="cat-eyes"></div>
                  <div class="cat-mouth"></div>
                  <div class="cat-whiskers">
                    <div class="bubbleTail">
                      <div class="wenzi ">{{this.wenzidata[0]}}</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="cat-lower-wrap">
              <div class="cat-lower">
                <div class="cat-leg">
                  <div class="cat-leg">
                    <div class="cat-leg">
                      <div class="cat-leg">
                        <div class="cat-leg">
                          <div class="cat-leg">
                            <div class="cat-leg">
                              <div class="cat-leg">
                                <div class="cat-leg">
                                  <div class="cat-leg">
                                    <div class="cat-leg">
                                      <div class="cat-leg">
                                        <div class="cat-leg">
                                          <div class="cat-leg">
                                            <div class="cat-leg">
                                              <div class="cat-leg">
                                                <div class="cat-paw"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cat-leg">
                  <div class="cat-leg">
                    <div class="cat-leg">
                      <div class="cat-leg">
                        <div class="cat-leg">
                          <div class="cat-leg">
                            <div class="cat-leg">
                              <div class="cat-leg">
                                <div class="cat-leg">
                                  <div class="cat-leg">
                                    <div class="cat-leg">
                                      <div class="cat-leg">
                                        <div class="cat-leg">
                                          <div class="cat-leg">
                                            <div class="cat-leg">
                                              <div class="cat-leg">
                                                <div class="cat-paw"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cat-tail">
                  <div class="cat-tail">
                    <div class="cat-tail">
                      <div class="cat-tail">
                        <div class="cat-tail">
                          <div class="cat-tail">
                            <div class="cat-tail">
                              <div class="cat-tail">
                                <div class="cat-tail">
                                  <div class="cat-tail">
                                    <div class="cat-tail">
                                      <div class="cat-tail">
                                        <div class="cat-tail">
                                          <div class="cat-tail">
                                            <div class="cat-tail">
                                              <div class="cat-tail -end"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3d字体 -->
    <div class="patterns">
      <svg
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <!-- <circle
              fill="#be9ddf"
              cx="25"
              cy="25"
              r="3"
            ></circle> -->
          </pattern>

        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#polka-dots)"
        > </rect>

        <text
          x="50%"
          y="80%"
          text-anchor="middle"
        >
          GCD歌唱队
        </text>
      </svg>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      wenzidata: ["Hello!!!", 'Excuse me!!', "等不及了！！！？？？", "能不能麻溜点！？", "快把我放下来！？", "开始了！？", "救命救命救命！？", "我不要面子的吗？", "挂着我好玩吗？", "求求你救命，快点开始吧！?", "有人吗？我可以下来了吗？"],


      time: null
    };
  },
  mounted () {
    $("#xkback").css("display", "none")
    $("body").css("background", "radial-gradient(1600px at 70% 120%,rgba(33, 39, 80, 1) 10%, #020409 100%)")


    document.getElementById("end").addEventListener("resize", function () {
      console.log(document.getElementById("end").offsetHeight)
      if (document.getElementById("end").offsetHeight >= 800) {
        $("#end").css("animation-play-state", "paused")
      }
    })
    let old = 0
    this.time = setInterval(() => {
      let ra = parseInt(Math.random() * this.wenzidata.length)
      if (ra === old) {
        return
      } else {
        // console.log(ra)
        old = ra
        $(".wenzi").text(this.wenzidata[ra])
      }

    }, 3000);

  },
  destroyed () {
    $("body").css("background", "")
    $("#xkback").css("display", "block")
    clearInterval(this.time)
  },
  methods: {
    catclick () {
      $("#end").addClass("engheight");
      clearInterval(this.time)
      $(".wenzi").addClass("wenzi2");
      $(".wenzi").parents().addClass("bubbleTail2")
      $(".cat-eyes").addClass("cat-eyes2 ")
      $(".cat-eyes ").removeClass("cat-eyes ");
      $(".wenzi").text("别别别！！！")
      setTimeout(() => {
        $(".wenzi").text("救命救命！！！")
      }, 2000);
      setTimeout(() => {
        console.log("aaa")
        $("#end").removeClass("engheight");


        $(".wenzi").text("Help！！！")

        $("#end").css("height", "50%")
        setTimeout(() => {
          $("#end").addClass("engheight2");

        }, 1000);
        setTimeout(() => {
          $("#end").removeClass("engheight2");
          $(".bubbleTail3").css("display", "block")
          $("#end").css("height", "90%")
          setTimeout(() => {
            $("#end").addClass("engheight3");
            $("#end").css("height", "100%")
            $(".bubbleTail3").css("display", "none")
            setTimeout(() => {
              this.$router.push({ path: "/gcd" })
            }, 1000);
          }, 1000);

        }, 5000);
      }, 5000);

    }
  }
}
</script>
<style lang="scss" scoped>
//文字描边
.patterns {
  height: 100vh;
}

svg text {
  font-family: Lora;
  letter-spacing: 10px;
  stroke: #ffa5d8;
  font-size: 150px;
  font-weight: 700;
  stroke-width: 3;

  animation: textAnimate 5s infinite alternate;
  text-shadow: 2px 2px #ffa5d8;
}
@media screen and (max-width: 768px) {
  svg text {
    font-size: 55px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  svg text {
    font-size: 80px;
  }
}
@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
    fill: hsl(189, 71%, 70%);
    text-shadow: 2px 2px hsl(189, 78%, 86%), 3px 3px hsl(189, 78%, 86%),
      4px 4px hsl(189, 78%, 86%);
  }
  // 20% {
  //   stroke: hsl(19, 81%, 65%);
  // }
  // 40% {
  //   stroke: hsl(61, 81%, 65%);
  // }
  // 70% {
  //   stroke: hsl(231, 81%, 65%);
  //   fill: hsla(189, 68%, 75%, 0%);
  //   stroke-dasharray: 25% 0;
  // }
  // 80% {
  //   stroke: hsl(261, 82%, 63%);
  // }
  // 90% {
  //   stroke: #fccee9;
  // }
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: hsla(189, 68%, 75%, 0%);
  }
}

.end {
  width: 100%;
  height: 0px;
  z-index: 9999;
  background: #000;
}
.engheight {
  -webkit-animation: ending 5s infinite ease;
  animation: ending 5s infinite ease;
}
.engheight2 {
  -webkit-animation: ending2 5s infinite ease;
  animation: ending2 5s infinite ease;
}
.engheight3 {
  -webkit-animation: ending3 1s infinite ease;
  animation: ending3 1s infinite ease;
}
@keyframes ending2 {
  0% {
    height: 50%;
  }

  100% {
    height: 90%;
  }
}
@keyframes ending3 {
  0% {
    height: 90%;
  }

  100% {
    height: 100%;
  }
}
@keyframes ending {
  0% {
    height: 0px;
  }

  100% {
    height: 50%;
  }
}
.bubbleTail2 {
  color: #f01414cb !important;
}
.bubbleTail3 {
  position: absolute;
  display: none;
  left: 45%;
  bottom: -70px;
  width: 0;
  height: 0;
  border-width: 21px;
  border-style: solid;
  border-color: transparent;
  margin-bottom: -19px;
  border-top-width: 22px;
  border-top-color: currentColor;
  color: rgb(50, 235, 44);
  .wenzi3 {
    background: rgb(50, 235, 44);
    color: #1f1f3c;
    border-radius: 10px;
    padding: 10px;
    font-size: 25px;
    height: 120px !important;
    width: 250px !important;
    font-weight: 800 !important;
    position: relative;
    top: -140px;
    left: -60px;
  }
}
.bubbleTail {
  position: absolute;
  left: 50px;
  right: 100%;
  bottom: 8px;
  width: 0;
  height: 0;
  border-width: 16px;
  border-style: solid;
  border-color: transparent;
  margin-bottom: 3px;
  border-right-color: currentColor;
  color: #ebe974;
  .wenzi {
    position: relative;
    padding: 10px;
    border-radius: 5px;
    left: 16px;
    top: -62px;
    height: 80px;
    width: 180px;
    font-size: 15px;
    font-weight: 600;
    color: #e97d4b;
    background: #ebe974;
  }
  .wenzi2 {
    height: 120px !important;
    width: 250px !important;
    font-weight: 800 !important;
    font-size: 30px !important;
    color: #d1e425 !important;
    background: #f01414cb !important;
  }
}
.all-wrap {
  z-index: 10;
  -webkit-animation: bob 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  animation: bob 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
}

.all {
  top: 10rem;
  left: calc(50% - 2.5rem);
  position: absolute;
  width: 5rem;
  height: 5rem;
  transform-origin: center -20rem;
  -webkit-animation: swing 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  animation: swing 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
}
.all:before {
  height: 20rem;
  width: 2px;
  background-color: #db242a;
  left: calc(50% - 1px);
  bottom: 20rem;
}

.yarn {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: radial-gradient(
    circle at top left,
    #e97c7f,
    #db242a 50%,
    #af1d22
  );
  z-index: 1;
}
.yarn:before,
.yarn:after {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  top: -1px;
}
.yarn:before {
  left: calc(50% + 7px);
  background-color: #b1bce6;
}
.yarn:after {
  right: calc(50% + 7px);
  background-color: #d5e8f8;
}

.cat-wrap {
  position: absolute;
  top: 0;
  left: calc(50% - 45px);
  width: 90px;
  height: 130px;
  -webkit-animation: reverse-swing 11s cubic-bezier(0.5, 0, 0.5, 1) infinite
    both;
  animation: reverse-swing 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  transform-origin: top center;
}

.cat {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-animation: swing 11s 0.2s infinite both;
  animation: swing 11s 0.2s infinite both;
  transform-origin: top center;
}

.cat-upper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top center;
  z-index: 1;
}
.cat-upper .cat-leg {
  position: absolute;
  width: 20px;
  height: 100%;
  background-color: white;
  z-index: -1;
  background-image: linear-gradient(to right, #d5e8f8, #d5e8f8 20%, #8b9bd9);
}
.cat-upper .cat-leg:nth-child(1) {
  border-top-left-radius: 100px;
  left: 10px;
}
.cat-upper .cat-leg:nth-child(1):after {
  left: 50%;
}
.cat-upper .cat-leg:nth-child(2) {
  border-top-left-radius: 0;
  border-top-right-radius: 100px;
  right: 10px;
}
.cat-upper .cat-leg:nth-child(2):after {
  right: 50%;
}

.cat-lower-wrap {
  height: 90%;
  width: 100%;
  position: absolute;
  top: 100%;
  width: 75px;
  left: calc(50% - 37.5px);
  -webkit-animation: reverse-swing 11s 0.2s infinite both;
  animation: reverse-swing 11s 0.2s infinite both;
  transform-origin: top center;
}

.cat-lower {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-animation: swing 11s 0.5s infinite both;
  animation: swing 11s 0.5s infinite both;
  transform-origin: top center;
}
.cat-lower:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background-image: radial-gradient(
    circle at 10px 50px,
    white,
    white 40%,
    #d5e8f8 65%,
    #8b9bd9
  );
  z-index: 1;
}
.cat-lower .cat-leg,
.cat-lower .cat-paw {
  z-index: -1;
  position: absolute;
  height: 20px;
  width: 20px;
  -webkit-animation: swing-leg 11s 0.3s infinite both;
  animation: swing-leg 11s 0.3s infinite both;
  z-index: 1;
  transform-origin: top center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-image: linear-gradient(to right, white, #d5e8f8, #8b9bd9);
}
.cat-lower > .cat-leg {
  bottom: 20px;
}
.cat-lower > .cat-leg .cat-leg {
  top: 25%;
}
.cat-lower > .cat-leg + .cat-leg {
  right: 0;
}
.cat-lower .cat-paw {
  top: 50%;
  border-radius: 50%;
  background-color: #fff;
}
.cat-lower .cat-tail {
  position: absolute;
  height: 15px;
  width: 10px;
  -webkit-animation: swing-tail 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  animation: swing-tail 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  transform-origin: top center;
  z-index: 0;
  background-image: linear-gradient(to right, white, #d5e8f8, #8b9bd9);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.cat-lower .cat-tail > .cat-tail {
  top: 50%;
}
.cat-lower > .cat-tail {
  left: calc(50% - 5px);
  top: 95%;
}

.cat-head {
  width: 90px;
  height: 90px;
  background-image: radial-gradient(
    circle at 10px 10px,
    white,
    white 40%,
    #d5e8f8 65%,
    #8b9bd9
  );
  border-radius: 50%;
  top: calc(100% - 45px);
}

.cat-face {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-animation: face 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  animation: face 11s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  transform-style: preserve-3d;
  perspective: 100px;
}

.cat-ears {
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  width: 100%;
  z-index: -1;
}

.cat-ear {
  width: 20px;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  top: -10px;
}
.cat-ear:first-child {
  left: 0;
  transform-origin: top left;
  transform: skewY(40deg);
  background-color: white;
}
.cat-ear:first-child:before {
  left: 0;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: #d7ebfb;
}
.cat-ear:last-child {
  right: 0;
  transform-origin: top right;
  transform: skewY(-40deg);
  background-color: #d1e6f7;
}
.cat-ear:last-child:before {
  right: 0;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #e0f0fc;
}
.cat-ear:before {
  width: 60%;
  height: 100%;
  top: 10px;
  position: absolute;
  background-color: #fff;
}

.cat-eyes {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 6px;
  -webkit-animation: blink 11s step-end infinite both;
  animation: blink 11s step-end infinite both;
}
.cat-eyes:before,
.cat-eyes:after {
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #4b4d75;
}
.cat-eyes:before {
  left: 20px;
}
.cat-eyes:after {
  right: 20px;
}

.cat-eyes2 {
  position: absolute;
  top: 40%;
  width: 100%;
  height: 6px;
  -webkit-animation: blink 11s step-end infinite both;
  animation: blink 11s step-end infinite both;
}
.cat-eyes2:before,
.cat-eyes2:after {
  position: absolute;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 1px solid #4b4d75;
}
.cat-eyes2:before {
  left: 20px;
}
.cat-eyes2:after {
  right: 20px;
}

.cat-mouth {
  position: absolute;
  width: 12px;
  height: 8px;
  background-color: #4b4d75;
  top: 60%;
  left: calc(50% - 6px);
  border-top-left-radius: 50% 30%;
  border-top-right-radius: 50% 30%;
  border-bottom-left-radius: 50% 70%;
  border-bottom-right-radius: 50% 70%;
  transform: translateZ(10px);
}
.cat-mouth:before,
.cat-mouth:after {
  position: absolute;
  width: 90%;
  height: 100%;
  border: 2px solid #9fa2cb;
  top: 80%;
  border-radius: 100px;
  border-top-color: transparent;
  z-index: -1;
}
.cat-mouth:before {
  border-left-color: transparent;
  right: calc(50% - 1px);
  transform-origin: top right;
  transform: rotate(10deg);
}
.cat-mouth:after {
  border-right-color: transparent;
  left: calc(50% - 1px);
  transform-origin: top left;
  transform: rotate(-10deg);
}

.cat-whiskers {
  width: 50%;
  height: 8px;
  position: absolute;
  bottom: 25%;
  left: 25%;
  transform-style: preserve-3d;
  perspective: 60px;
}
.cat-whiskers:before,
.cat-whiskers:after {
  position: absolute;
  height: 100%;
  width: 30%;
  border: 2px solid #9fa2cb;
  border-left: none;
  border-right: none;
}
.cat-whiskers:before {
  right: 100%;
  transform-origin: right center;
  transform: rotateY(70deg) rotateZ(-10deg);
}
.cat-whiskers:after {
  left: 100%;
  transform-origin: left center;
  transform: rotateY(-70deg) rotateZ(10deg);
}

@-webkit-keyframes bob {
  0% {
    transform: translateY(0.4rem);
  }
  6.25% {
    transform: translateY(-0.4rem);
  }
  12.5% {
    transform: translateY(0.4rem);
  }
  18.75% {
    transform: translateY(-0.4rem);
  }
  25% {
    transform: translateY(0.4rem);
  }
  31.25% {
    transform: translateY(-0.4rem);
  }
  37.5% {
    transform: translateY(0.4rem);
  }
  43.75% {
    transform: translateY(-0.4rem);
  }
  50% {
    transform: translateY(0.4rem);
  }
  56.25% {
    transform: translateY(-0.4rem);
  }
  62.5% {
    transform: translateY(0.4rem);
  }
  68.75% {
    transform: translateY(-0.4rem);
  }
  75% {
    transform: translateY(0.4rem);
  }
  81.25% {
    transform: translateY(-0.4rem);
  }
  87.5% {
    transform: translateY(0.4rem);
  }
  93.75% {
    transform: translateY(-0.4rem);
  }
  100% {
    transform: translateY(0.4rem);
  }
}

@keyframes bob {
  0% {
    transform: translateY(0.4rem);
  }
  6.25% {
    transform: translateY(-0.4rem);
  }
  12.5% {
    transform: translateY(0.4rem);
  }
  18.75% {
    transform: translateY(-0.4rem);
  }
  25% {
    transform: translateY(0.4rem);
  }
  31.25% {
    transform: translateY(-0.4rem);
  }
  37.5% {
    transform: translateY(0.4rem);
  }
  43.75% {
    transform: translateY(-0.4rem);
  }
  50% {
    transform: translateY(0.4rem);
  }
  56.25% {
    transform: translateY(-0.4rem);
  }
  62.5% {
    transform: translateY(0.4rem);
  }
  68.75% {
    transform: translateY(-0.4rem);
  }
  75% {
    transform: translateY(0.4rem);
  }
  81.25% {
    transform: translateY(-0.4rem);
  }
  87.5% {
    transform: translateY(0.4rem);
  }
  93.75% {
    transform: translateY(-0.4rem);
  }
  100% {
    transform: translateY(0.4rem);
  }
}
@-webkit-keyframes swing {
  0% {
    transform: rotate(5deg);
  }
  12.5% {
    transform: rotate(-10deg);
  }
  25% {
    transform: rotate(10deg);
  }
  37.5% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(23deg);
  }
  62.5% {
    transform: rotate(-23deg);
  }
  75% {
    transform: rotate(15deg);
  }
  87.5% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
@keyframes swing {
  0% {
    transform: rotate(5deg);
  }
  12.5% {
    transform: rotate(-10deg);
  }
  25% {
    transform: rotate(10deg);
  }
  37.5% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(23deg);
  }
  62.5% {
    transform: rotate(-23deg);
  }
  75% {
    transform: rotate(15deg);
  }
  87.5% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
@-webkit-keyframes swing-leg {
  0% {
    transform: rotate(0.5deg);
  }
  12.5% {
    transform: rotate(-1deg);
  }
  25% {
    transform: rotate(1deg);
  }
  37.5% {
    transform: rotate(-1.5deg);
  }
  50% {
    transform: rotate(2.3deg);
  }
  62.5% {
    transform: rotate(-2.3deg);
  }
  75% {
    transform: rotate(1.5deg);
  }
  87.5% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0.5deg);
  }
}
@keyframes swing-leg {
  0% {
    transform: rotate(0.5deg);
  }
  12.5% {
    transform: rotate(-1deg);
  }
  25% {
    transform: rotate(1deg);
  }
  37.5% {
    transform: rotate(-1.5deg);
  }
  50% {
    transform: rotate(2.3deg);
  }
  62.5% {
    transform: rotate(-2.3deg);
  }
  75% {
    transform: rotate(1.5deg);
  }
  87.5% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0.5deg);
  }
}
@-webkit-keyframes swing-tail {
  0% {
    transform: rotate(-2deg);
  }
  12.5% {
    transform: rotate(4deg);
  }
  25% {
    transform: rotate(-4deg);
  }
  37.5% {
    transform: rotate(6deg);
  }
  50% {
    transform: rotate(-9.2deg);
  }
  62.5% {
    transform: rotate(9.2deg);
  }
  75% {
    transform: rotate(-6deg);
  }
  87.5% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(-2deg);
  }
}
@keyframes swing-tail {
  0% {
    transform: rotate(-2deg);
  }
  12.5% {
    transform: rotate(4deg);
  }
  25% {
    transform: rotate(-4deg);
  }
  37.5% {
    transform: rotate(6deg);
  }
  50% {
    transform: rotate(-9.2deg);
  }
  62.5% {
    transform: rotate(9.2deg);
  }
  75% {
    transform: rotate(-6deg);
  }
  87.5% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(-2deg);
  }
}
@-webkit-keyframes reverse-swing {
  0% {
    transform: rotate(-5deg);
  }
  12.5% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  37.5% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-23deg);
  }
  62.5% {
    transform: rotate(23deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  87.5% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@keyframes reverse-swing {
  0% {
    transform: rotate(-5deg);
  }
  12.5% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  37.5% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-23deg);
  }
  62.5% {
    transform: rotate(23deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  87.5% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@-webkit-keyframes face {
  0% {
    transform: translateX(-2.5px);
  }
  12.5% {
    transform: translateX(5px);
  }
  25% {
    transform: translateX(-5px);
  }
  37.5% {
    transform: translateX(7.5px);
  }
  50% {
    transform: translateX(-11.5px);
  }
  62.5% {
    transform: translateX(11.5px);
  }
  75% {
    transform: translateX(-7.5px);
  }
  87.5% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-2.5px);
  }
}
@keyframes face {
  0% {
    transform: translateX(-2.5px);
  }
  12.5% {
    transform: translateX(5px);
  }
  25% {
    transform: translateX(-5px);
  }
  37.5% {
    transform: translateX(7.5px);
  }
  50% {
    transform: translateX(-11.5px);
  }
  62.5% {
    transform: translateX(11.5px);
  }
  75% {
    transform: translateX(-7.5px);
  }
  87.5% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-2.5px);
  }
}
@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes blink {
  from,
  to,
  10%,
  25%,
  80% {
    transform: scaleY(1);
  }
  8%,
  23%,
  78% {
    transform: scaleY(0.1);
  }
}
@keyframes blink {
  from,
  to,
  10%,
  25%,
  80% {
    transform: scaleY(1);
  }
  8%,
  23%,
  78% {
    transform: scaleY(0.1);
  }
}
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #1f1f3c;
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
  -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
  animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

*:before,
*:after {
  content: "";
  display: block;
}
</style>