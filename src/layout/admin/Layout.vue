<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid ">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader :title="pageTitle"></KTHeader>

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
        <div class="content flex-row-fluid">
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTUserMenu></KTUserMenu>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import KTHeader from "@/layout/admin/header/Header.vue";
import KTFooter from "@/layout/admin/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTToolbar from "@/layout/admin/toolbar/Toolbar.vue";
import KTUserMenu from "@/layout/admin/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import { Actions } from "@/store/enums/StoreEnums";
import {
  MenuComponent,
  // DrawerComponent,
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

export default defineComponent({
  name: "Layout",
  components: {
    KTHeader,
    KTFooter,
    KTToolbar,
    KTUserMenu,
    KTLoader,
  },
  mounted() {
    MenuComponent.reinitialization();
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    HtmlClass.init();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      // if (!store.getters.isUserAuthenticated) {
      //   router.push({ name: "sign-in" });
      // }

      // DrawerComponent.bootstrap();
      ScrollComponent.bootstrap();
      // DrawerComponent.updateAll();
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

        // DrawerComponent.hideAll();
        // check if current user is authenticated
        if (!store.getters.isUserAuthenticated) {
          router.push({ name: "sign-in" });
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
