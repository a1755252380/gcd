<template>
  <div
    style=""
    @click="click"
  >
    <!-- <xkbackVue></xkbackVue> -->
    <div class="box">
      <div class="scene">
        <div class=" cicle_div">
          <div
            id="canvasBox"
            style="
          width:100%;height:100%"
          ></div>
        </div>
        <div class=" cicleback">

        </div>
        <div class="banner">
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel"></div>
        </div>
      </div>
      <div class="ring ring1">
        <div class="particle"></div>
      </div>
      <div class="ring ring2">

        <div class="particle"></div>
      </div>

    </div>
  </div>
</template>

<script>

import xkbackVue from './xkback.vue';
import * as THREE from 'three'
import 'three-orbitcontrols'


export default {
  mounted () {
    $("body").css('background', "#333")
    this.$nextTick(function () {
      var scene, renderer, camera, orbitcontrols;
      var earthBall;//地球实体
      var dom, handle;//容器,定时器动画句柄

      //获取地球容器
      var dom = document.getElementById("canvasBox");
      //获取地球容器
      dom.style.width = '100%';
      dom.style.height = '100%';

      dom.style.backgroundColor = "#00000000";

      // 初始化场景
      scene = new THREE.Scene();
      // 初始化相机
      camera = new THREE.PerspectiveCamera(20, dom.clientWidth / dom.clientHeight, 1, 100000);
      // 设置相机位置
      camera.position.set(0, 0, 200);
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.autoClear = false;
      // 设置窗口尺寸
      renderer.setSize(dom.clientWidth, dom.clientHeight);
      // 初始化控制器
      orbitcontrols = new THREE.OrbitControls(camera, renderer.domElement);
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      orbitcontrols.enableDamping = true;
      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      // orbitcontrols.dampingFactor = 0.2;
      dom.appendChild(renderer.domElement);
      // 设置光线
      scene.add(new THREE.HemisphereLight('#ffffff', '#ffffff', 1));
      // 定义地球材质
      var earthTexture = THREE.ImageUtils.loadTexture(require("../assets/img/11.jpg"), {}, function () {
        renderer.render(scene, camera);
      });
      // 创建地球
      earthBall = new THREE.Mesh(new THREE.SphereGeometry(30, 50, 50), new THREE.MeshBasicMaterial({
        map: earthTexture
      }));
      earthBall.layers.set(0);
      scene.add(earthBall);
      // this.renderEarthByRender();
      render();
      // 执行函数
      function render () {
        if (handle) {
          cancelAnimationFrame(handle);
        }
        renderer.clearDepth();
        //自转
        scene.rotation.y -= 0.01;
        renderer.render(scene, camera);
        orbitcontrols.update();
        handle = requestAnimationFrame(render);
      }
      // 窗口resize事件
      window.onresize = function () {
        // 重新初始化尺寸
        camera.aspect = dom.clientWidth / dom.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(dom.clientWidth, dom.clientHeight)
      }

    });


  },
  deactivated () {
    $("body").css('background', "")
  },
  components: {
    // xkbackVue
  },
  methods: {
    click () {
      this.$router.push({ path: "/video" })
    }
  },
}
</script>
<style lang="scss" scoped>
//本体
.scene {
  position: absolute;
  transform-style: preserve-3d;
  top: 200px;
  left: 185px;
  transform: rotate(30deg);
}

.banner {
  display: flex;
  transform-style: preserve-3d;
  -webkit-animation: rotate 8s infinite linear;
  animation: rotate 8s infinite linear;
}

// @-webkit-keyframes rotate {
//   to {
//     transform: rotateY(-360deg);
//   }
// }

@keyframes rotate {
  to {
    transform: rotateY(-360deg);
  }
}
.panel {
  position: absolute;
  transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(190px);
  width: 50px;
  height: 80px;

  overflow: hidden;
}

.panel::before {
  position: absolute;
  left: var(--left);
  content: "G C D \2669\266B\266F\223C";

  // border-bottom: 2px solid #fffb19;
  font-size: 70px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  // color: hsl(var(--hue), 50%, 50%);
  color: #94e3e7;
  text-shadow: 3px 3px 15px #8a53d7;
}

.screen {
  position: absolute;
  width: 400px;
  height: 400px;
  background-image: linear-gradient(90deg, #000a, #0004, #000a);
  transform: translate(-50%, -50%);
}
//环绕
.cicleback {
  top: -125px;
  left: -105px;
  width: 240px;
  height: 240px;
  position: absolute;
  border-radius: 50%;
  background-color: #8899b5;
}
.cicle_div {
  top: -175px;
  left: -150px;
  width: 320px;
  height: 320px;
  position: absolute;
  border-radius: 50%;
  z-index: 9999;
  // background-color: #8899b5;
  // background-image: linear-gradient(
  //   180deg,
  //   #8899b5 3%,
  //   #5b779c 22%,
  //   #28467b 36%,
  //   #092854 62%,
  //   #071c3a 89%
  // );
  background: radial-gradient(circle at 70px 70px);
  // -webkit-animation: rotate 8s infinite linear;
  // animation: rotate 8s infinite linear;
}
.sphere {
  color: #fff;
  position: relative;
  top: 80px;
  left: 80px;
  font-size: 25px;
}
.box {
  position: absolute;
  top: 10%;
  left: 40%;
  transform-style: preserve-3d;
  animation: hovering 1s infinite alternate-reverse ease-in-out;
}

.logo {
  width: 250px;
  height: 250px;
  position: relative;
  top: 80px;
  left: 80px;

  display: flex;
}
.logo:after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";

  width: 250px;
  height: 250px;
  margin-left: -25px;
  transform: scale(0.9);
  transition: 1000ms ease-out;
}
.logo:hover:after {
  transform: scale(1);
}

.ring {
  pointer-events: none;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
}
.ring .particle {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 10px solid;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border-top: 0;
  border-left: 0;
  border-bottom: 0;
  box-shadow: 0 0 1px 0px currentColor;
  transform-style: preserve-3d;
}
.ring .particle:after {
  position: absolute;
  top: 100%;
  left: 50%;
  display: block;
  content: "";
  width: 5px;
  height: 5px;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 5px 0px white;
}

.ring1 {
  color: #fffb19;
  animation: rotateAnimate1 16s infinite reverse linear;
}
.ring1 .particle {
  -webkit-animation: rotateAnimate1 2s infinite linear;
  animation: rotateAnimate1 2s infinite linear;
}

.ring2 {
  color: #fffb19;
  animation: rotateAnimate1 16s infinite reverse linear;
}
.ring2 .particle {
  margin-top: 15px;
  margin-left: 15px;
  width: 370px;
  height: 370px;
  -webkit-animation: rotateAnimate2 2s infinite linear;
  animation: rotateAnimate2 2s infinite linear;
}
.ring2 .particle:after {
  top: 0%;
}

.ring3 {
  color: #fffb19;
  animation: rotateAnimate1 16s infinite reverse linear;
}
.ring3 .particle {
  margin-top: 30px;
  margin-left: 30px;
  width: 340px;
  height: 340px;
  -webkit-animation: rotateAnimate3 2s infinite linear;
  animation: rotateAnimate3 2s infinite linear;
}

@-webkit-keyframes rotateAnimate1 {
  0% {
    transform: rotateX(45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(45deg) rotateZ(360deg);
  }
}

@keyframes rotateAnimate1 {
  0% {
    transform: rotateX(45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(45deg) rotateZ(360deg);
  }
}
@-webkit-keyframes rotateAnimate2 {
  0% {
    transform: rotateY(45deg) rotateX(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(45deg) rotateX(-45deg) rotateZ(-360deg);
  }
}
@keyframes rotateAnimate2 {
  0% {
    transform: rotateY(45deg) rotateX(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(45deg) rotateX(-45deg) rotateZ(-360deg);
  }
}
@-webkit-keyframes rotateAnimate3 {
  0% {
    transform: rotateY(-45deg) rotateX(-45deg) rotateZ(180deg);
  }
  100% {
    transform: rotateY(-45deg) rotateX(-45deg) rotateZ(540deg);
  }
}
@keyframes rotateAnimate3 {
  0% {
    transform: rotateY(-45deg) rotateX(-45deg) rotateZ(180deg);
  }
  100% {
    transform: rotateY(-45deg) rotateX(-45deg) rotateZ(540deg);
  }
}
@-webkit-keyframes hovering {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -10px, 0);
  }
}
@keyframes hovering {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -10px, 0);
  }
}
.panel:nth-child(1) {
  --left: 0px;
  --hue: 0;
  --angle: 0deg;
}

.panel:nth-child(2) {
  --left: -50px;
  --hue: 15;
  --angle: 15deg;
}

.panel:nth-child(3) {
  --left: -100px;
  --hue: 30;
  --angle: 30deg;
}

.panel:nth-child(4) {
  --left: -150px;
  --hue: 45;
  --angle: 45deg;
}

.panel:nth-child(5) {
  --left: -200px;
  --hue: 60;
  --angle: 60deg;
}

.panel:nth-child(6) {
  --left: -250px;
  --hue: 75;
  --angle: 75deg;
}

.panel:nth-child(7) {
  --left: -300px;
  --hue: 90;
  --angle: 90deg;
}

.panel:nth-child(8) {
  --left: -350px;
  --hue: 105;
  --angle: 105deg;
}

.panel:nth-child(9) {
  --left: -400px;
  --hue: 120;
  --angle: 120deg;
}

.panel:nth-child(10) {
  --left: -450px;
  --hue: 135;
  --angle: 135deg;
}

.panel:nth-child(11) {
  --left: -500px;
  --hue: 150;
  --angle: 150deg;
}

.panel:nth-child(12) {
  --left: -550px;
  --hue: 165;
  --angle: 165deg;
}

.panel:nth-child(13) {
  --left: -600px;
  --hue: 180;
  --angle: 180deg;
}

.panel:nth-child(14) {
  --left: -650px;
  --hue: 195;
  --angle: 195deg;
}

.panel:nth-child(15) {
  --left: -700px;
  --hue: 210;
  --angle: 210deg;
}

.panel:nth-child(16) {
  --left: -750px;
  --hue: 225;
  --angle: 225deg;
}

.panel:nth-child(17) {
  --left: -800px;
  --hue: 240;
  --angle: 240deg;
}

.panel:nth-child(18) {
  --left: -850px;
  --hue: 255;
  --angle: 255deg;
}

.panel:nth-child(19) {
  --left: -900px;
  --hue: 270;
  --angle: 270deg;
}

.panel:nth-child(20) {
  --left: -950px;
  --hue: 285;
  --angle: 285deg;
}

.panel:nth-child(21) {
  --left: -1000px;
  --hue: 300;
  --angle: 300deg;
}

.panel:nth-child(22) {
  --left: -1050px;
  --hue: 315;
  --angle: 315deg;
}

.panel:nth-child(23) {
  --left: -1100px;
  --hue: 330;
  --angle: 330deg;
}

.panel:nth-child(24) {
  --left: -1150px;
  --hue: 345;
  --angle: 345deg;
}
</style>