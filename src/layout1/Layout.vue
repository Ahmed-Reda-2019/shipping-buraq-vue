<template>
    <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid">
        <!-- begin:: Aside Left -->
        <KTAside
            v-if="asideEnabled"
            :lightLogo="themeLightLogo"
            :darkLogo="themeDarkLogo"
        ></KTAside>
        <!-- end:: Aside Left -->

        <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
            <KTHeader :title="pageTitle"></KTHeader>

            <!-- begin:: Content -->
            <div id="kt_content" class="content d-flex flex-column flex-column-fluid p-0 px-2 ">
                <!-- begin:: Content Head -->
                <KTToolbar
                    v-if="subheaderDisplay"
                    :breadcrumbs="breadcrumbs"
                    :title="pageTitle"
                />
                <!-- end:: Content Head -->

                <!-- begin:: Content Body -->
                <div class="post d-flex flex-column-fluid">
                    <div
                        id="kt_content_container"
                        class="p-0"
                        :class="{
              'container-fluid': contentWidthFluid,
              'container-xxl': !contentWidthFluid,
            }"
                    >
                        <router-view />
                    </div>
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

<style lang="scss">
  @import "@/assets/demo1/assets/sass/plugins";
  html:not(.rtl) {
    @import "@/assets/demo1/style";
    :root,
    & {
      --bs-font-sans-serif:'Tajawal', sans-serif , Tajawal, Helvetica, "sans-serif" !important;
    }
  }
  html.rtl {
    @import "@/assets/demo1/style.rtl";
    :root,
    & {
      --bs-font-sans-serif: 'Tajawal', sans-serif, Tajawal !important;;
      font-weight: bolder;
      font-size: small;
      //font-weight: 600 !important;
    }
  }

  html {
    font-family: 'Tajawal', sans-serif !important;;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  }
  #kt_toolbar , #kt_header ,#kt_footer{
    //background-image: url(/media/patterns/pattern-1.jpg);
    //background:#aa7b41;
  }
  @import "@/site-assets/css/custem";

  .tox-notifications-container,
  .tox , .tox-silver-sink,.tox-tinymce-aux{
    display: none !important;
  }
</style>
<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import KTAside from "@/layout1/aside/Aside.vue";
import KTHeader from "@/layout1/header/Header.vue";
import KTFooter from "@/layout1/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTToolbar from "@/layout1/toolbar/Toolbar.vue";
import KTScrollTop from "@/layout1/extras/ScrollTop.vue";
import KTUserMenu from "@/layout1/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTCreateApp from "@/components/modals/wizards/CreateAppModal.vue";
import KTExplore from "@/layout/extras/Explore.vue";
import KTDrawerMessenger from "@/layout/extras/DrawerMessenger.vue";
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
} from "@/layout1/config";

export default defineComponent({
    name: "Layout",
    components: {
        KTAside,
        KTHeader,
        KTFooter,
        KTToolbar,
        // KTScrollTop,
        // KTCreateApp,
        KTUserMenu,
        // KTExplore,
        // KTDrawerMessenger,
        KTLoader,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        // show page loading
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

        // initialize html element classes
        HtmlClass.init();

        const pageTitle = computed(() => {
            return store.getters.pageTitle;
        });

        const breadcrumbs = computed(() => {
            return store.getters.pageBreadcrumbPath;
        });

        onMounted(() => {
            //check if current user is authenticated
            // if (!store.getters.isUserAuthenticated) {
            //     router.push({ name: "sign-in" });
            // }

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
                // if (!store.getters.isUserAuthenticated) {
                //     router.push({ name: "sign-in" });
                // }

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
