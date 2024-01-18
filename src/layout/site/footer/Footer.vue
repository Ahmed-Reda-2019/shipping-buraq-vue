<template>
  <!--begin::Footer-->
  <footer id="kt_footer" class="pt-18 pb-1 landing-dark-bg">
    <div class="w-100 row row-cols-1 row-cols-md-3 pb-3">
      <div >
        <img
          :src="setting.getVal('head_logo_colored')"
          alt="Logo"
          class="logo h-150px"
        />
        <div class="fw-bold d-flex justify-content-around mt-3">
          <div>
            <a href="https://www.facebook.com/" target="_blank" class="mx-2" >
              <img src="/media/svg/brand-logos/facebook-4.svg" class="h-20px me-2" alt="">
            </a>
            <a href="https://twitter.com/" target="_blank" class="mx-2">
              <img src="/media/svg/brand-logos/twitter.svg" class="h-20px me-2" alt="">
            </a>

            <a href="https://www.instagram.com/" target="_blank" class="mx-6">
              <img src="/media/svg/brand-logos/instagram-2-1.svg" class="h-20px me-2" alt="">
            </a>
          </div>

          <!--end::Link-->
          <!--begin::Link-->

          <!--end::Link-->
          <!--begin::Link-->

          <!--end::Link-->
        </div>

      </div>
      <div class="d-flex fw-bold flex-column text-center">
        <!--begin::Subtitle-->
        <h4 class="fw-bolder text-gray-400 mb-6"></h4>
        <!--end::Subtitle-->
        <!--begin::Link-->
        <router-link :to='{ name: "site-category", params: { id: "about" } }'
          class="text-white text-hover-primary fs-5 mb-6">
          {{$t('About')}}
        </router-link>
        <router-link :to='{ name: "site-contact"}'
                     class="text-white text-hover-primary fs-5 mb-6">
          {{$t('Contact')}}
        </router-link>
        <router-link :to='{ name: "site-blog" }'
                     class="text-white text-hover-primary fs-5 mb-6">
          {{$t('blogs')}}
        </router-link>
        <!--end::Link-->
      </div>
      <div class="d-flex fw-bold flex-column text-center">
        <!--begin::Subtitle-->
        <h4 class="fw-bolder text-gray-400 mb-6"></h4>
        <!--end::Subtitle-->
        <!--begin::Link-->
        <template v-if="isCustomer()">
          <router-link
            :to='{name:"site-custemer"}'
            class="text-white text-hover-primary fs-5 mb-6">
            {{ $t("My Profile") }}
          </router-link>
          <router-link
            :to='{name:"custemer-orders"}'
            class="text-white text-hover-primary fs-5 mb-6">
            {{ $t("myOrders") }}
          </router-link>
        </template>

        <template v-else>
          <router-link
            :to='{name:"site-sign-up"}'
            class="text-white text-hover-primary fs-5 mb-6">
            {{$t("signUp")}}
          </router-link>
          <router-link
            :to='{name:"site-sign-in"}'
            class="text-white text-hover-primary fs-5 mb-6">
            {{$t("signIn")}}
          </router-link>

        </template>

        <!--end::Link-->
      </div>
    </div>
    <div  class="footer py-2 d-flex flex-lg-column text-white">
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
        <div class=" order-2 order-md-1">
          <span class=" fw-bold me-1">2024&copy;</span>
          <a class=" text-hover-primary" href="/">{{
              setting.getTitle("brand")
            }}</a>
        </div>
        <!--end::Copyright-->

        <!--begin::Menu-->
        <ul class="menu menu-hover-primary fw-bold order-1">
          <li class="menu-item">
            <router-link :to="{ name: 'dashboard' }" class="menu-link px-2">
              {{ $t("employee") }}
            </router-link>
          </li>
        </ul>
        <!--end::Menu-->
      </div>
      <!--end::Container-->
    </div>

  </footer>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid } from "@/core/helpers/config";
import Setting from "@/core/config/Setting";
import {isCustomer} from "@/core/services/JwtService";

export default defineComponent({
  name: "KTFooter",
  methods: {isCustomer},
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
<style>
#kt_footer img.logo{
  object-fit: scale-down;
  width: 100%;
}
div.footer.border-top{
  border: #b16200;
}
#kt_footer .footer a{
  color: white;
}
</style>
