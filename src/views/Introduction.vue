<template>
  <div class="Introduction_body">
    <svg viewBox="0 0 1240 300">
      <symbol id="s-text">
        <text
          text-anchor="middle"
          x="50%"
          y="80%"
        >G C D 歌 唱 队</text>
      </symbol>

      <g class="g-ants">
        <use
          xlink:href="#s-text"
          class="text"
        ></use>
        <use
          xlink:href="#s-text"
          class="text"
        ></use>
        <use
          xlink:href="#s-text"
          class="text"
        ></use>
        <use
          xlink:href="#s-text"
          class="text"
        ></use>
        <use
          xlink:href="#s-text"
          class="text"
        ></use>
      </g>
    </svg>
    <div
      class="content"
      v-if="jump==4"
    >
      <h1>表演时间<s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s>ShowTime
      </h1>

      <router-link :to="'/endgcd'">END!!</router-link>
    </div>
    <div
      class="content"
      v-else
    >
      <h1>个人介绍<s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s>ShowTime
      </h1>
      <router-link :to="'/play2/'+jump">Next One</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    jump: {
      get () {
        return this.$route.params.type2
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.Introduction_body {
  margin: auto;
  padding-top: 5%;
}
svg {
  display: block;
  font: 10.5em "Monoton";
  width: 1240px;
  height: 300px;
  margin: 0 auto;
}

.content {
  text-align: center;
}

h1 {
  text-align: center;
  font: 2em "Roboto", sans-serif;
  font-weight: 900;
  color: #42d1b9;
  opacity: 0.6;
}

a {
  display: inline-block;
  text-transform: uppercase;
  font: 1em "Roboto";
  font-weight: 300;
  border: 1px solid #42d1b9;
  border-radius: 4px;
  color: #42d1b9;
  margin-top: 10%;
  padding: 8px 14px;
  text-decoration: none;
  opacity: 0.6;
}

.text {
  fill: none;
  stroke: white;
  stroke-dasharray: 8% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 1%;
  animation: stroke-offset 5.5s infinite linear;
}

.text:nth-child(1) {
  stroke: #3e4faf;
  animation-delay: -1;
}

.text:nth-child(2) {
  stroke: #71cc67;
  animation-delay: -2s;
}

.text:nth-child(3) {
  stroke: #42d1b9;
  animation-delay: -3s;
}

.text:nth-child(4) {
  stroke: #40bda8;
  animation-delay: -4s;
}

.text:nth-child(5) {
  stroke: #ec3726;
  animation-delay: -5s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
}
</style>