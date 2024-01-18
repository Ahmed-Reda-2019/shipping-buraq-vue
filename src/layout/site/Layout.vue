<template>
  <KTLoader></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid ">
      <!-- begin:: Aside Left -->
      <KTAside
          v-if="asideEnabled"
          :lightLogo="themeLightLogo"
          :darkLogo="themeDarkLogo"
      ></KTAside>
      <!-- end:: Aside Left -->

      <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader></KTHeader>

      <!-- begin:: Content Head -->
      <KTToolbar
        v-if="subheaderDisplay"
        :breadcrumbs="breadcrumbs"
        :title="pageTitle"
      />
      <!-- end:: Content Head -->

      <!-- begin:: Content -->
      <div
        id="kt_content"
        :class="{
          'container-fluid': contentWidthFluid,
          'container-xxl': !contentWidthFluid,
        }"
        class="d-flex flex-column-fluid align-items-start p-0"
      >
        <!-- begin:: Content Body -->
        <div class="content flex-row-fluid px-0">
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import KTHeader from "@/layout/site/header/Header.vue";
import KTFooter from "@/layout/site/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTToolbar from "@/layout/site/toolbar/Toolbar.vue";
import KTScrollTop from "@/layout/site/extras/ScrollTop.vue";
import KTLoader from "@/components/Loader.vue";
import { Actions } from "@/store/enums/StoreEnums";
import KTAside from "@/layout/site/aside/Aside.vue";

import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
} from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import { contentWidthFluid, subheaderDisplay } from "@/core/helpers/config";
import Chat from "@/layout/site/extras/chat.vue";

export default defineComponent({
  name: "Layout",
  components: {
    KTHeader,
    KTFooter,
    KTToolbar,
    KTScrollTop,
    KTLoader,
      KTAside
  },
  mounted() {
    console.log("sssssttttttttttttttttttt")
    MenuComponent.reinitialization();
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
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
        removeModalBackdrop();
      }
    );

    return {
      contentWidthFluid,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
    };
  },
});
</script>
<style lang="scss">
  @import "@/site-assets/sass/plugins";

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
    --bs-primary: #009ef7;
    --bs-primary2: #10367f;
    --bs-secondary: #e4e6ef;
    --bs-success: #50cd89;
    --bs-info: #7239ea;
    --bs-warning: #ffc700;
    --bs-danger: #f1416c;
    --bs-dark: #181c32;
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
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
    //--bg-body:rgb(29 89 135 / 50%);
    //--bs-page-bg:rgb(29 89 135 / 50%);

  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html.ltr {
    @import "@/site-assets/css/style";

    :root,
    & {
      --bs-font-sans-serif: Poppins, Helvetica, "sans-serif";
    }
  }

  html.rtl {
    @import "@/site-assets/css/style.rtl";

    :root,
    & {
      --bs-font-sans-serif: Tajawal, Poppins, Helvetica, "sans-serif";
    }
  }

#kt_toolbar , #kt_header ,#kt_footer{
  //background-image: url(/media/patterns/pattern-1.jpg);
  background:#aa7b41;
}
  @import "@/site-assets/css/custem";
  @import "@/site-assets/css/site-custem";
  a.menu-link span.menu-title span{
    display: none;
  }
</style>
