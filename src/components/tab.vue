<template>
  <div class="navbody">
    <nav>
      <div class="menu-btn">
        <div class="line line--1"></div>
        <div class="line line--2"></div>
        <div class="line line--3"></div>
      </div>

      <div class="nav-links">
        <el-menu
          style=" padding-top: 50px;"
          default-active="2"
          class="el-menu-vertical-demo"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>GCD logo</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="/begin"
                @click="tabclick"
              >开始LOGO(小猫悬挂)</el-menu-item>
              <el-menu-item
                index="/gcd"
                @click="tabclick"
              >蓝色GCD</el-menu-item>
              <el-menu-item
                index="/cicle"
                @click="tabclick"
              >立体旋转</el-menu-item>
              <el-menu-item
                index="/Introduction/2"
                @click="tabclick"
              >霓虹灯logo</el-menu-item>

              <el-menu-item
                index="/endgcd"
                @click="tabclick"
              >结束GCD</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
          <el-menu-item
            index="/begin"
            @click="tabclick"
          >
            <span slot="title">开始</span>
          </el-menu-item>
          <el-menu-item
            index="/countdown"
            @click="tabclick"
          >
            <span slot="title">倒计时</span>
          </el-menu-item>
          <el-menu-item
            index="/video"
            @click="tabclick"
          >
            <span slot="title">视频</span>
          </el-menu-item>
          <el-menu-item
            index="/Tunnel"
            @click="tabclick"
          >
            <span slot="title">照片隧道</span>
          </el-menu-item>
          <el-menu-item
            index="/imgshow"
            @click="tabclick"
          >
            <span slot="title">图片展示</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>游戏</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="/musiccard"
                @click="tabclick"
              >听歌识曲</el-menu-item>
              <el-menu-item
                index="/play2/2"
                @click="tabclick"
              >心有灵犀</el-menu-item>
              <el-menu-item
                index="/play2/3"
                @click="tabclick"
              >正歌反说</el-menu-item>

            </el-menu-item-group>

          </el-submenu>
          <el-menu-item
            index="/endgcd"
            @click="tabclick"
          >
            <span slot="title">结束展示</span>
          </el-menu-item>
        </el-menu>
      </div>
    </nav>

  </div>

</template>
<script>
export default {
  mounted () {
    this.$nextTick(function () {
      var menuBtn = document.querySelector('.menu-btn');
      var nav = document.querySelector('nav');
      var lineOne = document.querySelector('nav .menu-btn .line--1');
      var lineTwo = document.querySelector('nav .menu-btn .line--2');
      var lineThree = document.querySelector('nav .menu-btn .line--3');
      var link = document.querySelector('nav .nav-links');
      menuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        lineOne.classList.toggle('line-cross');
        lineTwo.classList.toggle('line-fade-out');
        lineThree.classList.toggle('line-cross');
        link.classList.toggle('fade-in');
      })
    });
  },
  methods: {
    tabclick () {
      var nav = document.querySelector('nav');
      var lineOne = document.querySelector('nav .menu-btn .line--1');
      var lineTwo = document.querySelector('nav .menu-btn .line--2');
      var lineThree = document.querySelector('nav .menu-btn .line--3');
      var link = document.querySelector('nav .nav-links');
      nav.classList.toggle('nav-open');
      lineOne.classList.toggle('line-cross');
      lineTwo.classList.toggle('line-fade-out');
      lineThree.classList.toggle('line-cross');
      link.classList.toggle('fade-in');
    }
  },
}
</script>
<style lang="scss" scoped>
/deep/.el-menu {
  width: 100%;
  height: 100%;
}

//
.navbody {
  height: 100%;
  width: 0;
  position: absolute;
  top: 0;
  z-index: 999999999;
}
nav {
  overflow: hidden;
  position: relative;
  transform: translateX(-230px);
  height: 100%;
  width: 300px;
  transition: all 800ms cubic-bezier(0.8, 0, 0.33, 1);
  border-radius: 0% 0% 100% 50%;
  li {
    font-size: 15px;
    font-weight: 700;
  }
}

nav.nav-open {
  transform: translateX(0px);
  border-radius: 0% 0% 0% 0%;
  background: rgba(255, 255, 255, 0.6);
}

nav .menu-btn {
  position: fixed;
  top: 1%;
  right: 3%;
  padding: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 99999;
}

nav .menu-btn .line {
  padding: 0;
  width: 30px;
  background: #fff;
  height: 2px;
  margin: 5px 0;
  transition: all 700ms cubic-bezier(0.9, 0, 0.33, 1);
}

nav .menu-btn .line.line--1 {
  width: 30px;
  transform: rotate(0) translateY(0);
}

nav .menu-btn .line.line--1.line-cross {
  width: 30px;
  transform: rotate(45deg) translateY(10px);
  background: rgba(0, 0, 0, 0.6);
}

nav .menu-btn .line.line--2 {
  width: 28px;
  transform: translateX(0);
}

nav .menu-btn .line.line--2.line-fade-out {
  width: 28px;
  transform: translate(30px);
  opacity: 0;
}

nav .menu-btn .line.line--3 {
  width: 20px;
  transform: rotate(0) translateY(0);
}

nav .menu-btn .line.line--3.line-cross {
  width: 30px;
  transform: rotate(-45deg) translateY(-10px);
  background: rgba(0, 0, 0, 0.6);
}

nav .nav-links {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-100px);
  opacity: 0;
  transition: all 900ms cubic-bezier(0.9, 0, 0.33, 1);
}

nav .nav-links.fade-in {
  opacity: 1;
  transform: translateX(0px);
}

nav .nav-links .link {
  margin: 20px 0;
  text-decoration: none;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  transition: all 300ms cubic-bezier(0.9, 0, 0.33, 1);
}

nav .nav-links .link:hover {
  color: rgba(0, 0, 0, 0.5);
}

.inform {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

a {
  margin: 0 20px;
  color: #fff;
  font-size: 2rem;
  transition: all 400ms ease;
}

a:hover {
  color: #222;
}
</style>