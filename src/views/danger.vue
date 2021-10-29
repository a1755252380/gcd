<template>
  <div class="dangediv">
    <div class="danger"></div>
    <div class="bq">
      <div class="img"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {

    $("#xkback").css("display", "none")
    setTimeout(() => {
      let that = this
      $(".img").css("background", "url(" + require('../assets/img/bqb.jpg') + ")  no-repeat  ")
      $(".img").addClass("imgshow");
      setTimeout(() => {
        $(".img").css("opacity", "1")
        setTimeout(() => {
          that.$router.push({ path: "/work" })

        }, 2000);
      }, 4000);
    }, 1000);
  },
  destroyed () {
    $("#xkback").css("display", "block")
  },
}
</script>
<style lang="scss" scoped>
.dangediv {
  width: 100%;
  height: 100%;

  background: #f7f7f7;
  display: flex;
  justify-self: center;
  align-items: center;

  .bq {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      width: 600px;
      height: 600px;
      background-size: 100% !important;
      opacity: 0;
    }
    .imgshow {
      -webkit-animation: imgshow 4s 1 linear;
      animation: imgshow 4s 1 linear;
    }
  }
  @keyframes imgshow {
    to {
      opacity: 1;
    }
  }
  .danger {
    width: 100%;
    height: 100%;
    background: url("../assets/img/404.jpg") no-repeat;
  }
}
</style>