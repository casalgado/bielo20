import "./firebase";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuePositionSticky from "vue-position-sticky";
import FlagIcon from "vue-flag-icon";
Vue.use(FlagIcon);

Vue.use(vuePositionSticky);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
