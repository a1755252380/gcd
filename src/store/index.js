import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    tunnelimg: [
      require("../assets/img/2019/1.jpg"),
      require("../assets/img/2019/2.jpg"),
      require("../assets/img/2019/3.jpg"),
      require("../assets/img/2019/4.jpg"),
      require("../assets/img/2019/5.jpg"),
      require("../assets/img/2019/6.jpg"),
      require("../assets/img/2019/7.jpg"),
      require("../assets/img/2019/8.jpg"),
      require("../assets/img/2019/9.jpg"),
      require("../assets/img/2019/10.jpg"),
      require("../assets/img/2019/11.jpg"),
      require("../assets/img/2019/12.jpg"),
      require("../assets/img/2019/13.jpg"),
      require("../assets/img/2019/14.jpg")
    ],
    imgshowdata: [
      require("../assets/img/img/1.png"),
      require("../assets/img/img/2.png"),
      require("../assets/img/img/3.png"),
      require("../assets/img/img/4.png"),
      require("../assets/img/img/5.png"),
      require("../assets/img/img/6.png"),
      require("../assets/img/img/7.png"),
      require("../assets/img/img/8.png"),
      require("../assets/img/img/9.png"),
      require("../assets/img/img/10.png"),
      require("../assets/img/img/11.png"),
      require("../assets/img/img/12.png"),
      require("../assets/img/img/13.png"),
      require("../assets/img/img/14.png"),
      require("../assets/img/img/15.png"),
      require("../assets/img/img/16.png"),
      require("../assets/img/img/17.png"),
      require("../assets/img/img/18.png"),
      require("../assets/img/img/19.png"),
      require("../assets/img/img/20.png"),
      require("../assets/img/img/21.png"),
      require("../assets/img/img/22.png"),
      require("../assets/img/img/23.png"),
      require("../assets/img/img/24.png")
    ],
    videodata: [require("../assets/img/b.mp4")]
  },
  mutations: {
    setloading(state, value) {
      state.loading = value;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getloading(state) {
      return state.loading;
    },
    gettunnelimg(state) {
      return state.tunnelimg;
    },
    getimgshowdata(state) {
      return state.imgshowdata;
    },
    getvideodata(state) {
      return state.videodata[0];
    }
  }
});
