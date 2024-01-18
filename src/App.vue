<template>
  <router-view />
</template>

<style lang="scss">
// import "vue-toast-notification/dist/theme-default.css";
@import "~vue-toast-notification/dist/theme-sugar.css";
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~apexcharts/dist/apexcharts.css";
@import "~quill/dist/quill.snow.css";
@import "~animate.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~nouislider/distribute/nouislider.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~socicon/css/socicon.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "~@yaireo/tagify/src/tagify.scss";
@import "~dropzone/dist/dropzone.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~element-plus/lib/theme-chalk/index.css";
// @import "~vue-select/dist/vue-select.css";
// @import "~vue-select/src/scss/vue-select.scss";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500&display=swap");

// Main demo style scss

:root {
  --bs-blue: #009ef6;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-gray: #7e8299;
  --bs-gray-dark: #3f4254;
  --bs-white: #ffffff;

  --bs-light: #f5f8fa;
  --bs-primary: #3f729a;
  --bs-primary2: #10367f;
  --bs-secondary: #e4e6ef;
  --bs-success: #50cd89;
  --bs-info: #7239ea;
  --bs-warning: #ffc700;
  --bs-danger: #f1416c;
  --bs-dark: #181c32;
  --bs-font-monospace: 'Tajawal', sans-serif , SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.15),
          rgba(255, 255, 255, 0)
  );
  --bs-light-primary: #f1faff;
  --bs-active-primary: #0095e8;
  --bs-light-success: #e8fff3;
  --bs-active-success: #47be7d;
  --bs-light-info: #f8f5ff;
  --bs-active-info: #5014d0;
  --bs-light-warning: #fff8dd;
  --bs-active-warning: #f1bc00;
  --bs-light-danger: #fff5f8;
  --bs-active-danger: #d9214e;
  --bs-light-dark: #eff2f5;
  --bs-active-dark: #131628;
  --bs-gray-100: #f5f8fa;
  --bs-gray-200: #eff2f5;
  --bs-gray-300: #e4e6ef;
  --bs-gray-400: #b5b5c3;
  --bs-gray-500: #a1a5b7;
  --bs-gray-600: #7e8299;
  --bs-gray-700: #5e6278;
  --bs-gray-800: #3f4254;
  --bs-gray-900: #181c32;
  --bs-xs: 0;
  --bs-sm: 576px;
  --bs-md: 768px;
  --bs-lg: 992px;
  --bs-xl: 1200px;
  --bs-xxl: 1400px;
  --bs-white-rgb: 255, 255, 255;
  --bs-light-rgb: 245, 248, 250;
  --bs-primary-rgb: 0, 158, 247;
  --bs-secondary-rgb: 228, 230, 239;
  --bs-success-rgb: 80, 205, 137;
  --bs-info-rgb: 114, 57, 234;
  --bs-warning-rgb: 255, 199, 0;
  --bs-danger-rgb: 241, 65, 108;
  --bs-dark-rgb: 46, 104 ,147;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 24, 28, 50;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: 'Tajawal', sans-serif , Helvetica;
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: .9rem;
  --bs-body-font-weight: 900;
  --bs-body-line-height: 1.5;
  --bs-body-color: #181C32;
  --bs-body-bg: #ffffff;

}

body{
  background-color: #e4e6ef;
}


html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family:'Tajawal', sans-serif, Helvetica, "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 991.98px) {
  html,
  body {
    font-size: 13px !important;
  }
}

@media (max-width: 767.98px) {
  html,
  body {
    font-size: 12px !important;
  }
}

html a:hover,
html a:active,
html a:focus,
body a:hover,
body a:active,
body a:focus {
  text-decoration: none !important;
}

body {
  display: flex;
  flex-direction: column;
  color: #181c32;
}

// Dark mode demo style scss
//@import "assets/sass/plugins.dark";
//@import "assets/sass/style.dark";
</style>

<script>
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { setLocale } from "yup";
const $ = require("jquery");

export default defineComponent({
  name: "app",

  async beforeCreate() {
    if (!localStorage.getItem("currency")) {
      $.get("https://ipapi.co/currency/", function (data) {
        localStorage.setItem("currency", data.toLowerCase());
      });
    }
    // await Location.getCountries();
  },

  setup() {
    if (localStorage.getItem("lang")) {
      useI18n().locale.value = localStorage.getItem("lang");
    }

    if (localStorage.getItem("lang") == "ar")
      useStore().dispatch(Actions.SET_RTL, "");
    else useStore().dispatch(Actions.SET_LTR, "");

    onMounted(() => {
      try {
        setLocale({
          mixed: require(`@/core/plugins/locales/validation/${
            useI18n().locale.value
          }.json`),
        });
      } catch (e) {
        setLocale({
          mixed: require(`@/core/plugins/locales/validation/en.json`),
        });
      }
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      // store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
    });
  },
});
</script>
