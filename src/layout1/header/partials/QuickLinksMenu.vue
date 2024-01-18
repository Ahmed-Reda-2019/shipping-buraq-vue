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
      style="background-image: url('/media/misc/pattern-1.jpg')"
    >
      <!--begin::Title-->
      <h3 class="text-white fw-bold mb-3">{{ $t("Quick Links") }}</h3>
      <!--end::Title-->

    </div>
    <!--end::Heading-->

    <!--begin:Nav-->
    <div class="row g-0">
      <!--begin:Item-->
      <div class="col-6" v-for="(item , i) in quickLinks" :key="i"

      >
        <router-link
            :to="item.route"
            v-if="can(item.permission)"
            class="
            d-flex
            flex-column flex-center
            h-100
            p-6
            bg-hover-light
            border-end border-bottom
          "
        >
          <span class="svg-icon svg-icon-3x svg-icon-success mb-2" >
            <inline-svg v-if="item.svgIcon" :src="item.svgIcon"  />
            <i v-else class="" :class="item.fontIcon"> </i>
          </span>
          <span class="fs-5 fw-bold text-gray-900 mb-0">{{$t(item.heading)}}</span>
        </router-link>
      </div>

      <!--end:Item-->
</div>
    <!--end:Nav-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JwtService from "@/core/services/JwtService";
import MenusConfig from "@/core/config/MenusConfig"
export default defineComponent({
  name: "kt-quick-links-menu",
  components: {},
  data(){
    return {
      quickLinks:MenusConfig.QuickLinks
    }
  },
  methods: {
    can(p) {
      return JwtService.can(p);
    },
  },
});
</script>
