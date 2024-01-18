<template>
  <!--begin::Menu-->
  <div
      class="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
      data-kt-menu="true"
  >
    <!--begin::Heading-->
    <div
        class="
        d-flex
        flex-column flex-center
        bgi-no-repeat
        rounded-top
        px-9
        py-10
      "
        style="background-image: url('media/misc/pattern-1.jpg')"
    >
      <!--begin::Title-->
      <h3 class="text-white fw-bold mb-3">Quick Links</h3>
      <!--end::Title-->

      <!--begin::Status-->
      <span class="badge bg-success py-2 px-3">25 pending tasks</span>
      <!--end::Status-->
    </div>
    <!--end::Heading-->

    <!--begin:Nav-->
    <div class="row g-0">
      <!--begin:Item-->
      <div class="col-6">
        <a
            class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-bottom
          "
            href="#"
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <inline-svg src="/media/icons/duotune/communication/com010.svg"/>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">{{
            translate("Administration")
          }}</span>
          <span class="fs-7 text-gray-400">Console</span>
        </a>
      </div>
      <!--end:Item-->

      <!--begin:Item-->
      <div class="col-6">
        <a
            class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end
          "
            href="#"
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <inline-svg src="/media/icons/duotune/abstract/abs042.svg"/>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">Projects</span>
          <span class="fs-7 text-gray-400">Pending Tasks</span>
        </a>
      </div>
      <!--end:Item-->

      <!--begin:Item-->
      <div class="col-6">
        <a
            class="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
            href="#"
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2">
            <inline-svg src="/media/icons/duotune/finance/fin006.svg"/>
          </span>
          <span class="fs-5 fw-bold text-gray-800 mb-0">Customers</span>
          <span class="fs-7 text-gray-400">Latest cases</span>
        </a>
      </div>
      <!--end:Item-->
    </div>
    <!--end:Nav-->

    <!--begin::View more-->
    <div class="py-2 text-center border-top">
      <a class="btn btn-color-gray-600 btn-active-color-primary" href="#">
        View All
        <span class="svg-icon svg-icon-5 arrow"
        ><inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
        </span>
      </a>
    </div>
    <!--end::View more-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "kt-quick-links-menu",
  components: {},
  setup() {
    const {t, te} = useI18n();
    const list = [
      {
        name: "currencies",
        route: "Currencies-list",
        svg: "/media/icons/duotune/finance/fin009.svg",
      },
      {
        name: "currencies",
        route: "Currencies-list",
        svg: "/media/icons/duotune/finance/fin009.svg",
      },
    ];
    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const LocalI18n = useI18n();

    return {
      translate,
      // LocalI18n
    };
  },
});
</script>
