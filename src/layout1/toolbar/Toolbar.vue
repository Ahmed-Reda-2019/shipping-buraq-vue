<template>
  <!--begin::Toolbar-->
  <div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack"
    >
      <!--begin::Page title-->
      <div
        data-kt-swapper="true"
        data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
        class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
      >
        <!--begin::Title-->
        <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
          {{ title }}
        </h1>
        <!--end::Title-->

        <span
          v-if="breadcrumbs"
          class="h-20px border-gray-200 border-start mx-4"
        ></span>

        <!--begin::Breadcrumb-->
        <ul
          v-if="breadcrumbs"
          class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
        >
          <li class="breadcrumb-item pe-3">
            <router-link :to="{name:'dashboard'}" class="text-muted text-hover-primary">
              {{$t('dashboard')}}
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <span class="bullet bg-gray-200 w-5px h-2px"></span>
          </li>
          <template v-for="(item, index) in breadcrumbs" :key="index">
            <li class="breadcrumb-item text-muted">
              {{ item }}
            </li>
            <li class="breadcrumb-item">
              <span class="bullet bg-gray-200 w-5px h-2px"></span>
            </li>
          </template>
          <li class="breadcrumb-item pe-3 text-dark">
            {{ title }}
          </li>
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->

      <!--begin::Actions-->
      <div class="d-flex align-items-center py-1">


        <!--begin::Button-->
        <router-link
          class="btn btn-bg-white btn-primary btn-sm"
          :to="{name:'order-create'}"
        >
          <span class="svg-icon svg-icon-primary svg-icon-2x"
            ><svg
              height="24px"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <rect
                  fill="#000000"
                  height="2"
                  rx="1"
                  width="16"
                  x="4"
                  y="11"
                />
                <rect
                  fill="#000000"
                  height="2"
                  opacity="0.3"
                  rx="1"
                  transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                  width="16"
                  x="4"
                  y="11"
                />
              </g></svg
            ><!--end::Svg Icon--></span
          >
          {{ $t("Create") }}
        </router-link>
        <!--end::Button-->

      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
  <template v-if="createOrder == true">
    <CreateOrderModal></CreateOrderModal>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";
import { default as CreateOrderModal } from "@/views/admin/orders/CreateOrderModal.vue";

export default defineComponent({
  name: "KToolbar",
  data() {
    return {
      createOrder: false,
    };
  },
  components: {
    CreateOrderModal,
  },
  props: {
    breadcrumbs: Array,
    title: String,
  },
  setup() {
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
