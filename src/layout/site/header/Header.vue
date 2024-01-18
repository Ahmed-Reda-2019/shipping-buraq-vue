<template>
  <!--begin::Header-->
  <div
    id="kt_header"
    :data-kt-sticky="isHeaderSticky"
    class="header align-items-stretch d-print-none"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
  >
    <!--begin::Container-->
    <div
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
      class="d-flex align-items-center px-10"
    >
      <!--begin::Aside mobile toggle-->
      <div
        class="d-flex topbar align-items-center d-lg-none ms-n2 me-3"
        title="Show aside menu"
      >
        <div
          id="kt_header_menu_mobile_toggle"
          class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
        >
          <span class="svg-icon svg-icon-2x">
            <inline-svg src="/media/icons/duotune/abstract/abs015.svg" />
          </span>
        </div>
      </div>
      <!--end::Aside mobile toggle-->

      <!--begin::Mobile logo-->
      <div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
        <router-link to="/">
          <img
            :src="setting.getVal('head_logo_white')"
            alt="Logo"
            class="logo-default h-50px"
          />
          <img
            :src="setting.getVal('head_logo_colored')"
            alt="Logo"
            class="logo-sticky h-50px"
          />
        </router-link>
      </div>
      <!--end::Mobile logo-->

      <!--begin::Wrapper-->
      <div
        class="
          d-flex
          align-items-stretch
          justify-content-between
          flex-lg-grow-1
        "
      >
        <!--begin::Navbar-->
        <div id="kt_header_menu_nav" class="d-flex align-items-stretch">
          <KTMenu></KTMenu>
        </div>
        <!--end::Navbar-->

        <!--begin::Topbar-->
        <div class="d-flex align-items-stretch flex-shrink-0">
          <KTTopbar></KTTopbar>
        </div>
        <!--end::Topbar-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import KTTopbar from "@/layout/site/header/Topbar.vue";
import KTMenu from "@/layout/site/header/Menu.vue";
import { StickyComponent } from "@/assets/ts/components";

import {
  headerWidthFluid,
  headerFixed,
  headerFixedOnMobile,
} from "@/core/helpers/config";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";
import Setting from "@/core/config/Setting";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTTopbar,
    KTMenu,
  },
  computed: {
    setting() {
      return Setting;
    },
  },
  setup() {
    useStore().commit(Mutations.GET_USER, "logo");
    onMounted(() => {
      StickyComponent.reInitialization();
    });
    const isHeaderSticky = computed(() => {
      if (window.innerWidth > 768) {
        return headerFixed.value;
      } else {
        return headerFixedOnMobile.value;
      }
    });

    return {
      headerWidthFluid,
      isHeaderSticky,
    };
  },
});
</script>
