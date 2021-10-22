<template>
  <div class="container">
    <div
      class="photo"
      :style="{backgroundImage:'url('+this.imgdata2[0]+')'}"
    ></div>

    <div
      class="shutter"
      style="--flaps: 6"
    >

      <div
        class="flap"
        style="--i: 0"
      ></div>
      <div
        class="flap"
        style="--i: 1"
      ></div>
      <div
        class="flap"
        style="--i: 2"
      ></div>
      <div
        class="flap"
        style="--i: 3"
      ></div>
      <div
        class="flap"
        style="--i: 4"
      ></div>
      <div
        class="flap"
        style="--i: 5"
      ></div>

    </div>

    <ul id="ul">
      <!-- <li
      v-for="(item, index) in imgdata"
      :key="index"
    ><img
        :src="item"
        alt=""
        @click="imgclick($event)"
      ></li> -->

    </ul>
  </div>
</template>
<script>

export default {
  data () {
    return {
      imgdata: [],
      bodyimg: require('../assets/img/a.jpg'),
      imgdata2: [require("../assets/img/img/10.png")]
    };
  },
  mounted () {

    for (var i = 1; i < 25; i++) {
      this.imgdata.push(require("../assets/img/img/" + i + ".png"))
    }
    $("#app").css("position", 'relative')
    $("body").css("background", "url('" + this.bodyimg + "')")
    //获取事件源
    var ul = document.getElementById('ul');
    //获取图片可活动区域
    var windowW = document.documentElement.clientWidth - 320;
    var windowH = document.documentElement.clientHeight - 360;
    //循环遍历
    for (var i = 1; i < 24; i++) {
      //创建li标签
      var li = document.createElement('li');
      //追加到ul的子元素
      ul.appendChild(li);
      //创建img标签
      var img = document.createElement('img');
      li.appendChild(img);
      // 动态插入图片
      img.setAttribute('src', this.imgdata[i]);
    }
    //获取所有的li 
    var allLi = ul.children;
    //遍历
    for (var j = 0; j < allLi.length; j++) {
      //取出单个li
      var li = allLi[j];
      //随机获取位置
      li.style.left = parseInt(Math.random() * windowW) + 'px';
      li.style.top = parseInt(Math.random() * windowH) + 'px';
      //获取随机角度
      li.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      //监听点击事件
      li.addEventListener('click', function () {
        for (var i = 0; i < allLi.length; i++) {
          allLi[i].className = '';
        }
        this.className = 'checked';
      });
      li.addEventListener('dblclick', function () {
        for (var i = 0; i < allLi.length; i++) {
          allLi[i].className = '';
        }

      });
    }


  },
  beforeDestroy () {
    $("#app").css("position", '')
    $("body").css("background", "")
  },
  methods: {
    //     imgclick (e) {
    //       console.log(e)
    //       document.getElementById('ul').children.className = "";
    //       e.className = "checked"
    //     }
  },
}
</script>
<style lang="scss" scoped>
@import url("../assets/css/imgshow.css");
.container {
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.flap {
  width: 150vmax;
  height: 150vmax;
  position: absolute;
  bottom: 50%;
  right: 50%;
  z-index: 9999;
  pointer-events: none;
  will-change: transform;
  background: hsl(calc(1turn * var(--p)), 80%, 80%);
  background: linear-gradient(35deg, #555, black);
  border: solid 4px #999;
  --p: calc(var(--i) / var(--flaps));
  -webkit-animation: click 0.9s cubic-bezier(0.5, 0, 0.5, 1) 0.01s;
  animation: click 0.9s cubic-bezier(0.5, 0, 0.5, 1) 0.01s;
  transform-origin: bottom right;
  transform: rotate(-0.5turn) rotate(calc(1turn * var(--p))) skewX(30deg)
    translateX(-100%) translateY(90%);
}

@keyframes click {
  48%,
  52% {
    transform: rotate(-0.25turn) rotate(calc(1turn * var(--p))) skewX(30deg)
      translateX(0%) translateY(0%);
  }
}
.photo {
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 10px 40px #000;
  margin: -1rem;
  margin-bottom: -5rem;
  border: solid 1rem #fff;
  border-bottom-width: 5rem;
  -webkit-animation: photo 5s cubic-bezier(0.5, 0, 0.5, 1) 1s both;
  animation: photo 5s cubic-bezier(0.5, 0, 0.5, 1) 1s both;
}

@keyframes photo {
  30% {
    // filter: sepia(30%) saturate(140%) contrast(120%);
    // transform: scale(0.5) rotate(-4deg);
    transform: rotate(-4deg);
  }
  61% {
    transform: scale(0.8) rotate(-10deg);
    opacity: 1;
  }
  70% {
    transform: scale(0.6) rotate(-20deg);
  }
  90% {
    filter: none;
    margin-left: 200%;
    transform: none;

    opacity: 0;
  }
  100% {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
}
</style>