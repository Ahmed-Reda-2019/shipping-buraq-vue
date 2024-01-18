<template>
  <!--begin::Footer-->
  <div id="kt_footer" class="footer py-12 d-flex flex-lg-column mb-15">
    <!--begin::Container-->
    <div
      :class="{
        'container-fluid': footerWidthFluid,
        'container-xxl': !footerWidthFluid,
      }"
      class="
        d-flex
        flex-column flex-md-row
        align-items-center
        justify-content-between
      "
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-bold me-1">2021&copy;</span>
        <a class="text-gray-800 text-hover-primary" href="/">{{
          setting.getTitle("brand")
        }}</a>
      </div>
      <!--end::Copyright-->

      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li class="menu-item">
          <router-link :to="{ name: 'dashboard' }" class="menu-link px-2">
            {{ $t("employee") }}
          </router-link>
        </li>
        <li class="menu-item">
          <a class="menu-link px-2" href="/about" target="_blank">
            {{ $t("About") }}
          </a>
        </li>
        <li class="menu-item">
          <router-link
            :to="{ name: 'site-category', params: { id: 'terms-conditions' } }"
            class="menu-link px-2"
            target="_blank"
          >
            {{ $t("Terms And Conditions") }}
          </router-link>
        </li>
      </ul>
      <!--end::Menu-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid } from "@/core/helpers/config";
import Setting from "@/core/config/Setting";

export default defineComponent({
  name: "KTFooter",
  computed: {
    setting() {
      return Setting;
    },
  },
  setup() {
    return {
      footerWidthFluid,
    };
  },
});
</script>
