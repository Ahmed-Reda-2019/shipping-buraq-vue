<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader :title="pageTitle"></KTHeader>

      <div
        id="kt_content_container"
        class="d-flex flex-column-fluid align-items-start p-0"
      >
        <router-view></router-view>

      </div>

      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <chat />
  <KTScrollTop></KTScrollTop>
</template>


<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import KTHeader from "@/layout/site/header/Header.vue";
import KTFooter from "@/layout/site/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layout/site/extras/ScrollTop.vue";
import KTLoader from "@/components/Loader.vue";
import { Actions } from "@/store/enums/StoreEnums";

import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
} from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo,
} from "@/core/helpers/config";


import VTypical from "vue-typical";
import { useI18n } from "vue-i18n";
import Setting from "@/core/config/Setting";
import Chat from "@/layout/site/extras/chat.vue";
import TrapCard from "@/views/site/components/trapCard.vue";

export default defineComponent({
  name: "Layout",
  data() {
    return {
      code: "",
    };
  },
  components: {
    // TrapCard,
    Chat,
    KTHeader,
    KTFooter,
    KTLoader,
    KTScrollTop,
    // VTypical,
  },
  computed: {
    setting() {
      return Setting;
    },
  },
  methods: {
    t(text) {
      return useI18n().t(text);
    },
    arrayWorrds: function (arr) {
      return arr;
    },
    serchOrderhOrder() {
      this.$router.push({ name: "site-tracking", params: { code: this.code } });
    },
  },
  mounted() {
    MenuComponent.reinitialization();
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-bg-image-sm");
    HtmlClass.init();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      DrawerComponent.bootstrap();
      ScrollComponent.bootstrap();
      DrawerComponent.updateAll();
      ScrollComponent.updateAll();

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);

    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        DrawerComponent.hideAll();
        // check if current user is authenticated
        if (!store.getters.isUserAuthenticated) {
          //router.push({ name: "sign-in" });
        }

        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>


<style lang="scss">
@import "@/site-assets/sass/plugins";
html:not(.rtl) {
  @import "@/site-assets/css/style";
  :root,
  & {
    --bs-font-sans-serif:'Tajawal', sans-serif , Tajawal, Helvetica, "sans-serif" !important;
  }
}
html.rtl {
  @import "@/site-assets/css/style.rtl";
  :root,
  & {
    --bs-font-sans-serif: 'Tajawal', sans-serif, Tajawal !important;;
    font-weight: bolder;
    font-size: small;
    //font-weight: 600 !important;
  }
}
:root {
  --logo-primary: #db9847;
  --logo-secondary: #1b5a89;
}
.text-logo-primary{
  color: var(--logo-primary);
}
.text-logo-secondary{
  color: var(--logo-secondary);
}
.landing-white-bg{
  background: white;
}
html {
  font-family: 'Tajawal', sans-serif !important;;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}
@import "@/site-assets/css/custem";
@import "@/site-assets/css/site-custem";

.slider-box img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption{
  background: rgb(220 153 71 / 44%);
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__container {
  height: 80vh;
}
.carousel-caption{
  bottom: 10%;
}
.video-overlay{
  //background: url(/media/logos/logo.png) no-repeat #f0f8ff52;
}

</style>
