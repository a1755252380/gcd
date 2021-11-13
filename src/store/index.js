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
      require("../assets/img/img/1.jpg"),
      require("../assets/img/img/2.jpg"),
      require("../assets/img/img/3.jpg"),
      require("../assets/img/img/4.jpg"),
      require("../assets/img/img/5.jpg"),
      require("../assets/img/img/6.jpg"),
      require("../assets/img/img/7.jpg"),
      require("../assets/img/img/8.jpg"),
      require("../assets/img/img/9.jpg"),
      require("../assets/img/img/10.jpg"),
      require("../assets/img/img/11.jpg"),
      require("../assets/img/img/12.jpg"),
      require("../assets/img/img/13.jpg"),
      require("../assets/img/img/14.jpg"),
      require("../assets/img/img/15.jpg"),
      require("../assets/img/img/16.jpg"),
      require("../assets/img/img/17.jpg")
      // require("../assets/img/img/18.jpg"),
      // require("../assets/img/img/19.jpg"),
      // require("../assets/img/img/20.jpg"),
      // require("../assets/img/img/21.jpg"),
      // require("../assets/img/img/22.jpg"),
      // require("../assets/img/img/23.jpg"),
      // require("../assets/img/img/24.jpg")
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
