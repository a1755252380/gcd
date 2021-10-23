<template>
  <div class="videodiv">
    <xkbackVue></xkbackVue>
    <div
      class="container2"
      v-if="videshow"
    >
      <p>G C D is <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
    </div>
    <div
      class="video card videoddivshow"
      v-else
      id="video"
    >
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      />
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
          src: require("../assets/img/b.mp4") // url地址
        }],
        poster: "", // 你的封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  // 全屏按钮
        }
      }
    }
  },
  components: { videoPlayer, xkbackVue },
  mounted () {
    //打字
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    // const textArray = ["欢迎你们的加入！！", "fun", "a journey", "LIFE"];
    const textArray = ["欢"];
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
      } else {
        console.log("打完了");

        that.videshow = !that.videshow

        setTimeout(() => {
          // $("#video").addClass("video");
          // $(".vjs-big-play-button").css("display", "block")
          $(".videoddivshow").removeClass("videoddivshow");
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
}
</script>
<style lang="scss" scoped>
/deep/.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: none;
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
    height: 630px;
  }
  .videoddivshow {
    width: 1120px;
    height: 630px;
    animation: videodivshow 3s linear infinite;
  }
}
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 630px;
  --card-width: 1120px;
}

.card {
  padding: 3px;
  position: relative;
  border-radius: 6px;
  z-index: 9999;
  font-size: 1.5em;
  margin-bottom: 5%;
}

.card::before {
  content: "";
  width: 102%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  position: absolute;
  z-index: -1;
  top: -1%;
  left: -1%;
  animation: spin 2.5s linear infinite;
}
@keyframes videodivshow {
  0% {
    height: 0px;
    width: 0px;
    opacity: 1;
  }
  49% {
    background-color: #fff;
    width: 0px;
    opacity: 1;
  }
  50% {
    background-color: transparent;
    height: 630px;
    width: 0px;

    opacity: 1;
  }

  100% {
    background-color: #fff;
    width: 1120px;
    height: 630px;
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