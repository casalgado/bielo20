import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollPosition: 0,
    mediaUrl: "",
  },
  mutations: {
    setScroll(state, scroll) {
      state.scrollPosition = scroll;
    },
    setMediaUrl(state, url) {
      state.mediaUrl = url;
    },
  },
  actions: {},
  modules: {},
});
