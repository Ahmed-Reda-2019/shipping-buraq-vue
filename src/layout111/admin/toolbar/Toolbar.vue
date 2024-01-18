<template>
  <!--begin::Toolbar-->
  <div id="kt_toolbar" class="toolbar py-5 py-lg-15">
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
            <router-link class="text-white" to="/dashboard">
              {{ $t("Home") }}
            </router-link>
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
        <!--begin::Wrapper-->
        <div class="me-4">
          <!--begin::Menu-->
          <a
            class="
              btn
              btn-custom
              btn-active-white
              btn-flex
              btn-color-white
              btn-active-color-primary
              fw-bolder
            "
            href="/"
            target="_blank"
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
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="none"
                  stroke-width="1"
                >
                  <rect height="24" width="24" x="0" y="0" />
                  <path
                    d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                  />
                  <circle cx="12" cy="10" fill="#000000" opacity="0.3" r="6" />
                </g></svg
              ><!--end::Svg Icon--></span
            >
            {{ $t("Site_Home") }}
          </a>

          <!--end::Menu-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Button-->
        <a
          id="kt_toolbar_primary_button"
          class="btn btn-bg-white btn-active-color-primary"

            :data-bs-target=" createOrder == true ? `#kt_modal_create_order` : null"
          :data-bs-toggle="createOrder == true ? `modal` : null"
          @click="createOrder = true"
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
        </a>
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
