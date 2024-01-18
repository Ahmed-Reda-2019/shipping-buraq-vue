<template>
  <!--begin::Toolbar-->
  <div id="kt_toolbar" class="toolbar py-5 py-lg-15 d-print-none">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="
        d-flex
        flex-stack flex-wrap
        justify-content-sm-between justify-content-center
      "
    >
      <!--begin::Page title-->
      <div
        class="
          page-title
          d-flex
          flex-column
          me-3
          align-items-md-start align-items-center
        "
      >
        <!--begin::Title-->
        <h1 class="d-flex text-white fw-bolder my-1 fs-3">
          {{ title }}
        </h1>
        <!--end::Title-->

        <!--begin::Breadcrumb-->
        <ul
          v-if="breadcrumbs"
          class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
        >
          <li class="breadcrumb-item text-white opacity-75">
            <router-link class="text-white" to="/">
              {{ $t("Home") }}</router-link
            >
          </li>
          <li class="breadcrumb-item text-white opacity-75">
            <span class="bullet bg-gray-200 w-5px h-2px"></span>
          </li>
          <template v-for="(item, index) in breadcrumbs" :key="index">
            <li class="breadcrumb-item text-white opacity-75">
              {{ item }}
            </li>
            <li class="breadcrumb-item text-white opacity-75">
              <span class="bullet bg-gray-200 w-5px h-2px"></span>
            </li>
          </template>
          <li class="breadcrumb-item text-white opacity-75">
            {{ title }}
          </li>
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->

      <!--begin::Actions-->
      <div class="d-flex align-items-center py-3 py-md-1">



           <slot name="toolbar-actions" />
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KToolbar",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  components: {},
  setup() {
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
