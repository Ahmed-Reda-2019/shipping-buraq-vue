import { createApp } from "vue";
import App from "./App.vue";
import VueToast from "vue-toast-notification";

import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import VueSignaturePad from "vue-signature-pad";

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
window["missingKeys"] = {
  en:{},
  ar:{},
};

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";
import { initLang } from "./core/helpers/funs";
import Setting from "@/core/config/Setting";
// import VueTelInput from "vue-tel-input";
// import 'vue-tel-input/vue-tel-input.css';

// import VuePhoneNumberInput from 'vue-phone-number-input';
// import 'vue-phone-number-input/dist/vue-phone-number-input.css';


const app = createApp(App);
import VueTelInput from 'vue-tel-input'



app.use(store).use(router)
  .use(ElementPlus)
  .use(VueSignaturePad)
  .use(i18n)
  // .component('vue-phone-number-input', VuePhoneNumberInput);
  // .component(VueTelInput)

;
app.use(VueToast, {
  position: "top-right",
  dismissible: true,
  pauseOnHover: true,
});

Setting.loadFile().then(()=>{
  initApexCharts(app);
  initInlineSvg(app);
  initVeeValidate();
  initLang();

  ApiService.init(app);
  app.mount("#app");

});

