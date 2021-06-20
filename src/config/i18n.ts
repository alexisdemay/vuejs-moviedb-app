import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "fr",
  fallbackLocale: ["fr", "en"],
  messages: {
    fr: require("@/assets/i18n/fr/global.json"),
    en: require("@/assets/i18n/en/global.json")
  }
});

export default i18n;
