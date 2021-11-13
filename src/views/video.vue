<template>
  <div class="videodiv">
    <div
      id="over"
      class="overdiv"
    >

    </div>

    <!-- <xkbackVue></xkbackVue> -->
    <div
      class="container2"
      v-if="videshow"
    >
      <p><span id="gcd">G C D </span><span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
    </div>
    <div
      v-else
      style="width：100%:height:100%"
    >
      <div
        v-if="!small"
        class="video card videoddivshow"
        id="video"
      >
        <video-player
          class="video-player vjs-custom-skin  "
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        />
        <div
          class="cont"
          @click="overbtn"
        >
          <a class="element">
            →
          </a>
        </div>

      </div>
      <!-- 小屏幕适配 -->
      <div
        class="small"
        v-else
      >
        由于屏幕分辨率太小，视频展示模块无法显示，请点击按钮跳转，谢谢！！<br>
        <div
          class="item button-pulse next"
          style="--bg-color: #1B2042"
          @click=" overbtn"
        >
          <div class="button__wrapper">
            <div class="pulsing"></div>
            <button>下下一个!</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import xkbackVue from '../components/xkback.vue'


export default {


  data () {
    return {
      videshow: true,
      // 配置信息
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",// 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: this.$store.getters.getvideodata // url地址
        }],
        poster: "", // 你的封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  // 全屏按钮
        }
      },
      small: false
    }
  },
  components: {
    videoPlayer,
    // xkbackVue 
  },
  mounted () {
    if (document.documentElement.clientWidth < 1130) {
      this.small = true
    } else {
      this.small = false
    }
    //打字
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    // const textArray = ["欢"];
    const textArray = ["我们，彼此相伴相随，在志同道合的音乐路上，一往无前", "从来都不是简单的唱歌爱好组织", "是可以共享欢乐美好，分担泪汗苦痛，彼此亲同手足般贴心的音乐梦之队", "他更像另一个家"
      , ",时光不老，我们永不散！",
      "一声歌唱队，一生歌唱队"];
    const typingSpeed = 200;
    const erasingSpeed = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0; // textArray index
    let charIndex = 0; // character index
    let end = 0;
    let that = this
    function type () {
      // console.log("aaa");

      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        end++;
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase () {
      if (end < textArray.length) {
        console.log(end);

      }

      else {
        console.log("打完了");

        // that.videshow = !that.videshow

        setTimeout(() => {
          that.$router.push({ path: "/Tunnel" })
          // $("#video").addClass("video");
          // $(".vjs-big-play-button").css("display", "block")
          // $(".videoddivshow").removeClass("videoddivshow");
          // $(".cont").addClass("contshow");
          // setTimeout(() => {
          //   $(".cont").css("opacity", "1")
          // }, 3000);
        }, 3000);
        return;
      }
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        if (end == textArray.length - 1 && charIndex == 0) {
          $("#gcd").hide()
          $(".typed-text").css("font-size", "95px")
        }
        setTimeout(erase, erasingSpeed);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
          textArrayIndex = 0;
        }
        setTimeout(type, typingSpeed + 1100);
      }
    }

    // 调用打字
    setTimeout(type, newTextDelay + 250);
  },
  methods: {
    overbtn () {
      $("#over").addClass("over");
      let that = this
      setTimeout(() => {
        this.$router.push({ path: "/Tunnel" })
      }, 5000);
    }
  },
}
</script>
<style lang="scss" scoped>
@import url("../assets/css/icon.css");
.small {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  padding: 10px;
  .next {
    position: absolute;
    bottom: 25%;
  }
}
/deep/.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: none;
}
//切换蒙版
.overdiv {
  height: 100%;

  z-index: 99999;
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
}
.over {
  height: 100%;

  -webkit-animation: identifier 5s infinite ease;
  animation: identifier 5s infinite ease;
}
@keyframes identifier {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

//按钮
.cont {
  text-align: center;
  // background-color: rgba(255, 255, 255, 0.3);
  padding: 0;
  margin: 0;
  position: absolute;
  right: -10%;
  bottom: 45%;
  opacity: 0;
}
.contshow {
  animation: contshow 3s 1 linear;
}
@keyframes contshow {
  to {
    opacity: 1;
  }
}

.element {
  padding: 1rem 2rem;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8rem;
  transition: box-shadow 600ms cubic-bezier(0.33, 0.11, 0.02, 0.99);
}
.element:hover {
  background: rgb(250, 223, 223);
  color: #000;
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.1),
    0 1px 6px rgba(255, 255, 255, 0.05), 0 8px 8px rgba(255, 255, 255, 0.1),
    0 12px 12px rgba(255, 255, 255, 0.1),
    5px 18px 18px rgba(255, 255, 255, 0.15),
    5px 22px 22px rgba(255, 255, 255, 0.15);
}

.info {
  min-height: 20vh;
  background-color: #2c6597;
  font-family: "Josefin Sans", sans-serif;
  color: #aaaaee;
  text-align: center;
  padding: 2rem;
  margin: 0;
}
.info a {
  color: #ddd;
  text-decoration: none;
  border-bottom: solid #ddd 1px;
}

.zuo {
}
//打字
.container2 {
  z-index: 9999;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container2 p {
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
}
.container2 p span.typed-text {
  font-weight: 800;
  color: #dd7732;
}
.container2 p span.cursor {
  display: inline-block;
  background-color: #fff;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
  z-index: 99999;
}
.container2 p span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0% {
    background-color: #fff;
    opacity: 1;
  }
  49% {
    background-color: #fff;
    opacity: 1;
  }
  50% {
    background-color: transparent;
    opacity: 1;
  }
  99% {
    background-color: transparent;
    opacity: 1;
  }
  100% {
    background-color: #fff;
    opacity: 1;
  }
}

//
.videodiv {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .video {
    width: 1120px;
    height: 628px;
  }
  .videoddivshow {
    width: 1120px;
    height: 628px;
    animation: videodivshow 3s linear infinite;
  }
}

.card {
  padding: 3px;
  position: relative;
  border-radius: 6px;
  z-index: 9999;
  font-size: 1.5em;
  margin-bottom: 5%;
  box-shadow: 1px 1px 15px 2px rgba(255, 255, 255, 0.4);
}

@keyframes videodivshow {
  0% {
    height: 0px;
    width: 0px;
    opacity: 1;
  }
  49% {
    background-color: rgba(255, 255, 255, 0.4);
    width: 0px;
    opacity: 1;
  }
  50% {
    background-color: transparent;
    height: 628px;
    width: 0px;

    opacity: 1;
  }

  100% {
    background-color: rgba(255, 255, 255, 0.4);
    width: 1120px;
    height: 628px;
    opacity: 1;
  }
}
// .card::after {
//   position: absolute;
//   content: "";
//   top: calc(var(--card-height) / 6);
//   left: 0;
//   right: 0;
//   z-index: -1;
//   height: 100%;
//   width: 100%;
//   margin: 0 auto;
//   transform: scale(0.8);
//   filter: blur(calc(var(--card-height) / 6));
//   background-image: linear-gradient(
//     var(--rotate),
//     #5ddcff,
//     #3c67e3 43%,
//     #4e00c2
//   );
//   opacity: 1;
//   transition: opacity 0.5s;
//   animation: spin 2.5s linear infinite;
// }

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>