<template>
  <div class="cards">
    <h1 style="color:#fff">听 歌 猜 曲</h1>
    <ul class="shadows">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="drive">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div
      class="card"
      v-for="(item, index) in data"
      :id="getid(index)"
      :key="index"
    >
      <div class="card__image-holder">
        <section>
          <div class="wrapper">
            <div class="polka-dot"></div>
            <div class="player-wrapper">
              <div class="player-container">
                <div class="player">
                  <div class="cassete">
                    <div class="rotator-container">
                      <div class="cog left-cog">
                        <div class="chil1"></div>
                        <div class="chil2"></div>
                        <div :class="'cog-img '+getcog(index)"><svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 28"
                          >
                            <path d="M23.9,13l4.1-2.3l-4.1-7.1l-4.1,2.3l-1.6-0.8V0.3H9.9v4.8L8.2,5.9L4.1,3.6L0,10.7L4.1,13V15L0,17.3l4.1,7.1l4.1-2.3l1.6,1
	v4.7h8.2v-4.7l1.6-1l4.1,2.3l4.1-7.1L23.9,15C23.9,15,23.9,13,23.9,13z M14,16.7c-1.5,0-2.6-1.2-2.6-2.6c0-1.5,1.2-2.6,2.6-2.6
	s2.6,1.2,2.6,2.6S15.5,16.7,14,16.7z" />
                          </svg></div>
                      </div>

                      <div class="cog right-cog">
                        <div class="chil1"></div>
                        <div class="chil2"></div>
                        <div :class="'cog-img '+getcog(index)"><svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 28"
                          >
                            <path d="M23.9,13l4.1-2.3l-4.1-7.1l-4.1,2.3l-1.6-0.8V0.3H9.9v4.8L8.2,5.9L4.1,3.6L0,10.7L4.1,13V15L0,17.3l4.1,7.1l4.1-2.3l1.6,1
	v4.7h8.2v-4.7l1.6-1l4.1,2.3l4.1-7.1L23.9,15C23.9,15,23.9,13,23.9,13z M14,16.7c-1.5,0-2.6-1.2-2.6-2.6c0-1.5,1.2-2.6,2.6-2.6
	s2.6,1.2,2.6,2.6S15.5,16.7,14,16.7z" />
                          </svg></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="screws one"></div>
                <div class="screws two"></div>
                <div class="screws three"></div>
                <div class="screws four"></div>
                <div class="base">
                  <div class="bottom-base"></div>
                </div>
              </div>
            </div>
            <div class="controls-container">
              <button
                class="btn play"
                :id="getplay(index)"
                @click="bgmPlay(index)"
              ></button>
              <button class="btn"></button>
              <button
                @click="bgmStop(index)"
                class="btn"
              ></button>
              <button class="btn"></button>
            </div>
          </div>

        </section>
        <audio
          :id='getplayer_audio(index)'
          src='https://www.jq22.com/demo/jqueryaudio201903252328/jq22.mp3'
          type="audio/mp3"
        ></audio>

      </div>
      <div class="card-title">
        <a
          href="#"
          class="toggle-info cardbtn click"
          id="click"
          @click="divclick(index,$event)"
        >
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
          Card title
          <small>Image from unsplash</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a
              href="#"
              class="cardbtn"
            >Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// import "../assets/js/musiccard"
export default {
  data () {
    return {
      zindex: 10,
      isShowing: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  mounted () {
    $("body").css("background", "#032b39")
  },
  beforeDestroy () {
    $("body").css("background", "")
  },
  methods: {
    bgmPlay (index) {
      var bgm = document.getElementById("player_audio" + index);
      bgm.play();
      $("#play" + index).addClass("active");
      $(".cog-img" + index).addClass("rotating");
      //   $(".stop").removeClass("active");
    },
    bgmStop (index) {
      var bgm = document.getElementById("player_audio" + index);
      bgm.pause();
      bgm.currentTime = 0;
      $("#play" + index).removeClass("active");
      //   $("#stop" + index).addClass("active");
      $(".cog-img" + index).removeClass("rotating");
    },
    divclick (index, e) {
      console.log(index);
      e.preventDefault();



      if ($("#card" + index).hasClass("show")) {
        this.isShowing = true;
      }

      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show").css({ zIndex: 0 })
        $("div.card.show").removeClass("show");

        if (this.isShowing) {
          // this card was showing - reset the grid
          $("div.cards").removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $("#card" + index)
            .css({ zIndex: 10 })
            .addClass("show");
        }

        this.zindex++;
      } else {
        // no cards in view
        $("div.cards").addClass("showing");
        $("#card" + index)
          .css({ zIndex: 10 })
          .addClass("show");

        this.zindex++;
      }

    },
    getplayer_audio (index) {
      return "player_audio" + index
    },
    getstop (index) {
      return "play" + index
    },
    getplay (index) {
      return "play" + index
    },
    getcog (index) {
      return "cog-img" + index
    },
    getid (index) {
      return 'card' + index
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
//背景
.drive,
.shadows {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.drive li {
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 1vw 3vw rgba(0, 0, 0, 0.5) inset;
  width: 100vw;
  height: 100vh;
  animation: drive 10s linear infinite;
  animation-direction: reverse;
}

.shadows li {
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #000;
  width: 100vw;
  height: 100vh;
  animation: shadows 10s linear infinite;
  animation-direction: reverse;
}

.drive li:nth-child(1) {
  animation-delay: 0;
}

.drive li:nth-child(2) {
  animation-delay: -1s;
}

.drive li:nth-child(3) {
  animation-delay: -2s;
}

.drive li:nth-child(4) {
  animation-delay: -3s;
}

.drive li:nth-child(5) {
  animation-delay: -4s;
}

.drive li:nth-child(6) {
  animation-delay: -5s;
}

.drive li:nth-child(7) {
  animation-delay: -6s;
}

.drive li:nth-child(8) {
  animation-delay: -7s;
}

.drive li:nth-child(9) {
  animation-delay: -8s;
}

.drive li:nth-child(10) {
  animation-delay: -9s;
}

.shadows li:nth-child(1) {
  animation-delay: 0;
}

.shadows li:nth-child(2) {
  animation-delay: -1s;
}

.shadows li:nth-child(3) {
  animation-delay: -2s;
}

.shadows li:nth-child(4) {
  animation-delay: -3s;
}

.shadows li:nth-child(5) {
  animation-delay: -4s;
}

.shadows li:nth-child(6) {
  animation-delay: -5s;
}

.shadows li:nth-child(7) {
  animation-delay: -6s;
}

.shadows li:nth-child(8) {
  animation-delay: -7s;
}

.shadows li:nth-child(9) {
  animation-delay: -8s;
}

.shadows li:nth-child(10) {
  animation-delay: -9s;
}

@keyframes drive {
  0% {
    transform: translate(-50%, -50%) scale(1.05) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(0) rotate(-45deg);
  }
}

@keyframes shadows {
  0% {
    transform: translate(-50%, -50%) scale(1.05) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(0) rotate(-45deg);
    opacity: 0.25;
  }
}

//
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdr.ttf)
    format("truetype");
}
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf)
    format("truetype");
}
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7g.ttf)
    format("truetype");
}
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdr.ttf)
    format("truetype");
}
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdr.ttf)
    format("truetype");
}
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdr.ttf)
    format("truetype");
}

a.cardbtn {
  background: #0096a0;
  border-radius: 4px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
  transition: all 0.1s 0s ease-out;
}
.no-touch a.cardbtn:hover {
  background: #00a2ad;
  box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-2px);
  transition: all 0.25s 0s ease-out;
}
.no-touch a.cardbtn:active,
a.cardbtn:active {
  background: #008a93;
  box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.25);
  transform: translate3d(0, 1px, 0);
  transition: all 0.025s 0s ease-out;
}
div.cards {
  margin: 80px auto;
  max-width: 1660px;
  text-align: center;
}
div.card {
  background: #ffffff;
  display: inline-block;
  margin: 8px;
  max-width: 300px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  width: 300px;
  z-index: 1;
  border-radius: 20px;
}
// div.card img {
//   max-width: 300px;
// }
div.card .card__image-holder {
  background: rgba(0, 0, 0, 0.1);
  height: 0;
  padding-bottom: 83%;
}
div.card div.card-title {
  background: #ffffff;
  padding: 6px 15px 10px;
  position: relative;
  z-index: 0;
}
div.card div.card-title a.toggle-info {
  border-radius: 32px;
  height: 32px;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 10px;
  width: 32px;
}
div.card div.card-title a.toggle-info span {
  background: #ffffff;
  display: block;
  height: 2px;
  position: absolute;
  top: 16px;
  transition: all 0.15s 0s ease-out;
  width: 12px;
}
div.card div.card-title a.toggle-info span.left {
  right: 14px;
  transform: rotate(45deg);
}
div.card div.card-title a.toggle-info span.right {
  left: 14px;
  transform: rotate(-45deg);
}
div.card div.card-title h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
}
div.card div.card-title h2 small {
  display: block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.025em;
}
div.card div.card-description {
  padding: 0 15px 10px;
  position: relative;
  font-size: 14px;
}
div.card div.card-actions {
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.075);
  padding: 10px 15px 20px;
  text-align: center;
}
div.card div.card-flap {
  background: #d9d9d9;
  position: absolute;
  width: 100%;
  transform-origin: top;
  transform: rotateX(-90deg);
}
div.card div.flap1 {
  transition: all 0.3s 0.3s ease-out;
  z-index: -1;
}
div.card div.flap2 {
  transition: all 0.3s 0s ease-out;
  z-index: -2;
}
div.cards.showing div.card {
  cursor: pointer;
  opacity: 0.6;
  transform: scale(0.88);
}
.no-touch div.cards.showing div.card:hover {
  opacity: 0.94;
  transform: scale(0.92);
}
div.card.show {
  opacity: 1 !important;
  transform: scale(1) !important;
}
div.card.show div.card-title a.toggle-info {
  background: #ff6666 !important;
}
div.card.show div.card-title a.toggle-info span {
  top: 15px;
}
div.card.show div.card-title a.toggle-info span.left {
  right: 10px;
}
div.card.show div.card-title a.toggle-info span.right {
  left: 10px;
}
div.card.show div.card-flap {
  background: #ffffff;
  transform: rotateX(0deg);
}
div.card.show div.flap1 {
  transition: all 0.3s 0s ease-out;
}
div.card.show div.flap2 {
  transition: all 0.3s 0.2s ease-out;
}

//播放器
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

button {
  border: none;
}

section {
  z-index: 9999;
  width: 100%;
  // overflow: hidden;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
}
p {
  font-size: 14px;
  margin-top: 30px;
  color: #612700;
  font-weight: bold;
}
a {
  color: #c80312;
  text-decoration: none;
}
.wrapper {
  // min-width: 290px;
  // height: 320px;
  background: rgba(19, 19, 27, 1);
  background: linear-gradient(
    0deg,
    rgba(19, 19, 27, 1) 0%,
    rgba(40, 41, 46, 1) 100%
  );
  border-radius: 17px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 5px 15px;
}
.polka-dot {
  width: 180px;
  height: 23px;
  background-image: radial-gradient(circle, #161616 35%, transparent 9%),
    radial-gradient(circle, #161616 35%, transparent 9%);
  background-size: 10px 8px;
  background-position: 0 0, 0px 16px;
}
.player-wrapper {
  margin-top: 10px;
  width: 260px;
  height: 195px;
  background-color: #1d1e22;
  border-radius: 12px;
  padding: 5px;
}
.player-container {
  background: rgba(36, 39, 43, 1);
  background: linear-gradient(
    128deg,
    rgba(36, 39, 43, 1) 0%,
    rgba(49, 50, 58, 1) 100%
  );
  height: 184px;
  height: 100%;
  border-radius: 8px;
  padding: 12px;
  position: relative;
}
.screws {
  width: 9px;
  height: 9px;
  position: absolute;
  top: 4px;
  left: 4px;
  border: 1px solid #1a1b1f;
  border-radius: 50%;
}
.screws:before {
  content: "";
  position: absolute;
  left: 1px;
  top: 3px;
  width: 5px;
  height: 1px;
  background-color: #1a1b1f;
}
.screws:after {
  content: "";
  position: absolute;
  left: 3px;
  top: 1px;
  width: 1px;
  height: 5px;
  background-color: #1a1b1f;
}
.player-container .screws.two {
  right: 4px;
  left: inherit;
}
.player-container .screws.three {
  bottom: 4px;
  top: inherit;
}
.player-container .screws.four {
  right: 4px;
  left: inherit;
  bottom: 4px;
  top: inherit;
}
.base {
  width: 167px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 38px;
  clip-path: polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%);
  box-shadow: inset 0px 2px 4px #000;
  overflow: hidden;
}
.base:before {
  content: "";
  position: absolute;
  left: -2px;
  bottom: 0;
  background-color: #000;
  width: 10px;
  height: 40px;
  transform: rotate(17deg);
  filter: blur(2px);
}
.base:after {
  content: "";
  position: absolute;
  right: -6px;
  bottom: -1px;
  background-color: #ffffff70;
  width: 11px;
  height: 39px;
  transform: rotate(343deg);
  filter: blur(1px);
}
.bottom-base {
  position: absolute;
  height: 13px;
  width: 47px;
  box-shadow: inset 1px 2px 3px #0f0f13;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.player {
  background-color: #1b1b20;
  padding: 5px;
  height: 127px;
  position: relative;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.28);
}
.player:before {
  content: "";
  position: absolute;
  left: -11px;
  top: -5px;
  width: 20px;
  height: 10px;
  background-color: #25282c;
  transform: rotate(-45deg);
}
.player:after {
  content: "";
  position: absolute;
  right: -11px;
  top: -5px;
  width: 20px;
  height: 10px;
  background-color: #2d2e35;
  transform: rotate(227deg);
}
.cassete {
  height: 63px;
  background-color: #333338;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.18);
  border-radius: 2px;
  transform: translateY(38px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.rotator-container {
  background-color: #0f1010;
  width: 103px;
  height: 43px;
  position: relative;
}
.rotator-container:before {
  content: "";
  position: absolute;
  top: -6px;
  left: -26px;
  background-color: rgba(187, 89, 85, 0.25);
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.left-cog {
  width: 32px;
  height: 32px;
  transform: translate(-14px, 6px);
  position: absolute;
  top: 0;
  left: -5px;
}
.right-cog {
  width: 32px;
  height: 32px;
  transform: translate(-14px, 6px);
  position: absolute;
  top: 0;
  right: -25px;
}
.right-cog:before {
  content: "";
  position: absolute;
  top: -30px;
  left: -24px;
  width: 92px !important;
  height: 92px !important;
  background-color: rgba(187, 89, 85, 0.25);
  border-radius: 50%;
}
.chil1 {
  background-color: #a8a8a8;
  width: 42px;
  height: 42px;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
  border-radius: 50%;
}
.chil1:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 37px;
  height: 37px;
  background-color: #000;
  z-index: 1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.chil2 {
  background-color: #a8a8a8;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 6px;
  z-index: 1;
  transform: translateY(-50%);
  border-radius: 50%;
}

.cog-img {
  position: absolute;
  top: 2px;
  left: 7px;
  z-index: 2;
  width: 28px;
  height: 28px;
}
.controls-container {
  width: 260px;
  height: 71px;
  background: rgba(28, 28, 33, 1);
  background: linear-gradient(
    270deg,
    rgba(16, 16, 21, 1) 0%,
    rgba(21, 22, 27, 1) 100%
  );
  position: absolute;
  bottom: 0;
  left: 50%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transform: translateX(-50%);
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.btn {
  height: 64px;
  width: 62px;
  background: rgb(27, 28, 31);
  background: linear-gradient(
    0deg,
    rgba(27, 28, 31, 1) 0%,
    rgba(55, 56, 62, 1) 100%
  );
  border-right: 1px solid #1c1d20;
  cursor: pointer;
  position: relative;
}
.btn:first-child {
  border-top-left-radius: 8px;
}
.btn:last-child {
  border-top-right-radius: 7px;
}
.btn:active,
.btn.active {
  background: #191a1f;
  box-shadow: inset 4px 4px 5px rgba(0, 0, 0, 0.62);
}
.btn:active:before,
.btn:active:after {
  opacity: 0.3;
}
.btn:before,
.btn:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
.btn:nth-child(1):before {
  width: 0px;
  height: 0px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 12px solid #fff;
}

.btn:nth-child(2):before {
  width: 0px;
  height: 0px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 12px solid #fff;
  transform: rotate(180deg) translate(13px, 9px);
}

.btn:nth-child(2):after {
  width: 0px;
  height: 0px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 12px solid #fff;
  transform: rotate(180deg) translate(1px, 9px);
}

.btn:nth-child(3):before {
  width: 15px;
  height: 15px;
  background: #fff;
}

.btn:nth-child(4):before {
  width: 0px;
  height: 0px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 12px solid #fff;
  transform: rotate(0deg) translate(-1px, -9px);
}

.btn:nth-child(4):after {
  width: 0px;
  height: 0px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 12px solid #fff;
  transform: rotate(0deg) translate(-13px, -9px);
}
@keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.rotating {
  animation: rotating 3s linear infinite;
}
</style>