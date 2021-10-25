<template>
  <div class="dangediv">
    <div class="danger"></div>
  </div>
</template>
<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$router.push({ path: "/work" })
    }, 2000);
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
  .danger {
    width: 100%;
    height: 100%;
    background: url("../assets/img/404.jpg") no-repeat;
  }
}
</style>