<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader :title="pageTitle"></KTHeader>

      <div
        id="kt_content_container"
        class="d-flex flex-column-fluid align-items-start"
      >
        <!--begin::Post-->
        <div id="kt_content" class="content flex-row-fluid">
          <!--begin::Hero-->
          <div
            id="body-trans-height"
            class="
              bgi-no-repeat bgi-position-center bgi-size-cover
              d-flex
              flex-column
              h-400px h-lg-450px
              body-trans body-trans-height
              justify-content-center
            "
          >
            <!--begin::Container-->
            <div
              class="
                container
                z-index-1
                container-logo
                hide
                text-center
                d-print-none
              "
            >
              <img
                :src="setting.getVal('site_main_image')"
                class="w-300px w-md-350px w-lg-400px"
              />
            </div>
            <div
              class="
                container
                z-index-1
                container-landding
                justify-content-center
                align-items-center
                flex-column
              "
              style="display: flex"
            >
              <!-- <p
                class="
                  text-primary
                  fw-bolder
                  mb-1 mb-lg-2
                  d-print-none
                  fs-3
                  w-50
                "
              >
                {{ t("textUp") }}
              </p> -->
              <form
                class="position-relative w-100 mw-900px"
                style="background: rgba(255, 255, 255, 0.05)"
                @submit="serchOrderhOrder()"
              >
                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                <span
                  class="
                    svg-icon svg-icon-2qx svg-icon-white
                    position-absolute
                    top-50
                    translate-middle
                    ms-9
                  "
                  @click="serchOrderhOrder()"
                >
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="black"
                      height="2"
                      opacity="0.5"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      width="8.15546"
                      x="17.0365"
                      y="15.1223"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->

                <input
                  v-model="code"
                  :placeholder="$t('Tracking')"
                  class="
                    form-control
                    bg-transparent
                    fs-2
                    py-6
                    ps-17
                    placeholder-white
                    text-white
                  "
                  @keydown.enter.prevent="serchOrderhOrder()"
                  name="search"
                  style="border: 1px solid rgba(255, 255, 255, 0.24)"
                  type="text"
                />
              </form>
              <h1
                class="
                  fs-5x
                  fw-bolder
                  text-white
                  mt-3
                  mb-3 mb-lg-5
                  d-print-none
                  text-center
                "
              >
                {{ $t("home.title") }}
                <VTypical
                  :loop="Infinity"
                  :steps="[
                    $t('home.word1'),
                    600,
                    $t('home.word2'),
                    600,
                    $t('home.word3'),
                    600,
                  ]"
                  :wrapper="'span'"
                ></VTypical>
              </h1>

              <p
                class="
                  text-white
                  mb-10 mb-lg-13
                  d-print-none
                  fs-2
                  w-50
                  text-center
                "
              >
                {{ setting.getTitle("site_text_down") }}
              </p>

              <a class="btn btn-primary er fs-3 px-8 py-4 app-service">
                {{ $t("home.startYourOrder") }}
              </a>
            </div>
            <video autoplay class="video-overlay" loop muted>
              <source
                src="https://shipment.elprogrammer.net/media/videos/video.mp4"
                type="video/mp4"
              />
            </video>
            <div class="video-overlay"></div>

            <!--end::Container-->
          </div>
          <!--end::Hero-->
          <!--begin::Svg-->
          <div class="mt-n15 text-page-bg">
            <svg
              class=""
              height="56px"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 100 100"
              width="100%"
            >
              <path
                d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <!--end::Svg-->
          <!--begin::Container-->
          <div class="container">
            <!--begin::Card-->

            <div class="card new-service-container">
              <div
                class="position-relative w-100 mx-auto"
                style="background: rgba(255, 255, 255, 0.05)"
              >
                <router-view></router-view>
              </div>
            </div>
            <!--end::Card-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::Post-->
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

const $ = require("jquery");

import VTypical from "vue-typical";
import { useI18n } from "vue-i18n";
import Setting from "@/core/config/Setting";
import Chat from "@/layout/site/extras/chat.vue";

export default defineComponent({
  name: "Layout",
  data() {
    return {
      code: "",
    };
  },
  components: {
    Chat,
    KTHeader,
    KTFooter,
    KTLoader,
    KTScrollTop,
    VTypical,
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
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-bg-image-lg");
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

      $(".app-service").click(function () {
        window.scrollTo({
          top: 150,
          behavior: "smooth",
        });
        $(".new-service-container").fadeIn();
        $(".container-landding").slideUp();
        $(".video-overlay").fadeOut();
        $(".container-logo").fadeIn();
        $(".body-trans").removeClass("body-trans-height");
        $(".new-service-container").addClass("new-service-container-app");
      });
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
