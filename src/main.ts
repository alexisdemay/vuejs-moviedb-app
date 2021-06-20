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

const sleep = () => new Promise<void>((resolve) => setTimeout(() => resolve(), 100));
const init = async () => {
  performance.mark("One");
  await sleep();

  performance.mark("Two");
  await sleep();

  performance.mark("Three");
  await sleep();

  performance.mark("Four");
};

function renderApp() {
  new Vue({
    i18n,
    router,
    store,
    provide: {
      moviesService: () => new MoviesService()
    },
    render: h => h(App)
  }).$mount("#app");
}

function main() {
  renderApp();
}

init().then(() => {
  performance.measure("🐪 Outer 🐪", "One", "Four");
  performance.measure("🐪 Inner 🐪", "Two", "Three");

  main();
});
