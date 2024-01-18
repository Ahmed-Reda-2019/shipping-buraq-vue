<template>
  <KTLoader></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid ">
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
        class="d-flex flex-column-fluid align-items-start"
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
import KTToolbar from "@/layout/site/toolbar/Toolbar.vue";
import KTScrollTop from "@/layout/site/extras/ScrollTop.vue";
import KTLoader from "@/components/Loader.vue";
import { Actions } from "@/store/enums/StoreEnums";

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
    Chat,
    KTHeader,
    KTFooter,
    KTToolbar,
    KTScrollTop,
    KTLoader,
  },
  mounted() {
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
