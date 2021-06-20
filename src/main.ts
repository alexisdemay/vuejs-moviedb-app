import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from "bootstrap-vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/config/i18n";
import MoviesService from "@/services/MoviesService";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin);

new Vue({
  i18n,
  router,
  store,
  provide: {
    moviesService: () => new MoviesService()
  },
  render: h => h(App)
}).$mount("#app");
