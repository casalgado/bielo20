import "./firebase";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuePositionSticky from "vue-position-sticky";
import FlagIcon from "vue-flag-icon";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(FlagIcon);

Vue.use(vuePositionSticky);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
