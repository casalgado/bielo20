import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollPosition: 0,
    mediaUrl: "",
    lang: "es",
  },
  mutations: {
    setScroll(state, scroll) {
      state.scrollPosition = scroll;
    },
    setMediaUrl(state, url) {
      state.mediaUrl = url;
    },
    toggleLanguage(state) {
      if (state.lang == "es") {
        state.lang = "gb";
      } else {
        state.lang = "es";
      }
    },
  },
  actions: {},
  modules: {},
});
