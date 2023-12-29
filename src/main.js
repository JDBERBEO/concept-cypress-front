/* eslint-disable quotes */
import Vue from "vue";
import "@oasis/system";
import OasisSecurity from "@oasis/security";
import Aqua from "@masiv/aqua";
import OasisLang from "@oasis/language";
import lang from "@/language";
import MasivFilePreview from "@masiv/addon-file-preview";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(OasisSecurity, { store, initialize: true });
Vue.use(Aqua);
Vue.use(OasisLang, {
  language: lang,
  scope: "masivDrive",
  languages: ["es", "en"],
});
Vue.use(MasivFilePreview, { store });
new Vue({
  router,
  store,
  i18n: global.i18n,
  render: (h) => h(App),
}).$mount("#app");
