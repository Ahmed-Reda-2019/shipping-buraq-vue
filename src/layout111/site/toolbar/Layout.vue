<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
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
          class="d-flex flex-column-fluid align-items-start"
      >
        <!-- begin:: Aside Left -->
        <KTAside
            v-if="asideEnabled"
            :darkLogo="themeDarkLogo"
            :lightLogo="themeLightLogo"
        ></KTAside>
        <!-- end:: Aside Left -->
        <!-- begin:: Content Body -->
        <div class="content flex-row-fluid">
          <router-view/>
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <KTExplore></KTExplore>
  <KTDrawerMessenger></KTDrawerMessenger>
  <KTUserMenu></KTUserMenu>
  <KTCreateApp></KTCreateApp>
</template>

<script lang="ts">
import {defineComponent, computed, onMounted, watch} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTToolbar from "@/layout/toolbar/Toolbar.vue";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTCreateApp from "@/components/modals/wizards/CreateAppModal.vue";
import KTExplore from "@/layout/extras/Explore.vue";
import KTDrawerMessenger from "@/layout/extras/DrawerMessenger.vue";
import {Actions} from "@/store/enums/StoreEnums";
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
} from "@/assets/ts/components/index";
import {removeModalBackdrop} from "@/core/helpers/dom";
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
    KTAside,
    KTHeader,
    KTFooter,
    KTToolbar,
    KTScrollTop,
    KTCreateApp,
    KTUserMenu,
    KTExplore,
    KTDrawerMessenger,
    KTLoader,
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

      if (!store.getters.isUserAuthenticated) {
        //router.push({ name: "sign-in" });
      }

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
          // MenuComponent.hideDropdowns(undefined);

          DrawerComponent.hideAll();
          // check if current user is authenticated
          if (!store.getters.isUserAuthenticated) {
            // router.push({ name: "sign-in" });
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
