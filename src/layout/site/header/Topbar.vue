<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!--begin::Activities-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu-->
        <div
          class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
          data-kt-menu-attach="parent"
          data-kt-menu-flip="bottom"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-trigger="click"
        >
          <img
            :src="currentLangugeLocale().flag"
            class="h-25px w-25px rounded"
          />
        </div>
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
            <h3 class="text-white fw-bold mb-3">{{ $t("Language") }}</h3>
            <!--end::Title-->
          </div>
          <!--end::Heading-->

          <!--begin:Nav-->
          <div class="row g-0">
            <!--begin:Item-->
            <div v-for="(lang, iLang) in langs" :key="iLang" class="col-6">
              <a
                :class="{ active: currentLanguage(iLang) }"
                class="
                  d-flex
                  flex-column flex-center
                  h-100
                  p-6
                  bg-hover-light
                  border-bottom
                "
                @click="setLang(iLang)"
              >
                <span class="symbol symbol-20px mb-2">
                  <img :src="lang.flag" class="rounded-1" />
                </span>
                <span class="fs-5 fw-bold text-gray-800 mb-0">{{
                  lang.name
                }}</span>
              </a>
            </div>
            <!--end:Item-->

            <!--end:Item-->
          </div>
          <!--end:Nav-->
        </div>
        <!--end::Menu-->
      </div>

      <template v-if="isAuth">
        <div
          id="kt_header_user_menu_toggle"
          class="d-flex align-items-center me-n3 ms-1 ms-lg-3"
        >
          <!--begin::Menu-->
          <div
            class="
              btn btn-icon btn-active-light-primary
              w-30px
              h-30px
              w-md-40px
              h-md-40px
            "
            data-kt-menu-attach="parent"
            data-kt-menu-flip="bottom"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-trigger="click"
          >
            <img
              :src="
                userData.profileUrl ? userData.profileUrl : userData.profile
              "
              alt="profile"
              class="h-25px w-25px rounded"
            />
          </div>
          <KTUserMenu></KTUserMenu>
          <!--end::Menu-->
        </div>
      </template>
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script>
import { defineComponent } from "vue";
import KTUserMenu from "@/layout/admin/header/partials/UserMenu.vue";
import JwtService from "@/core/services/JwtService";
import { useI18n } from "vue-i18n";
import langs from "@/core/config/langs";

export default defineComponent({
  name: "topbar",
  components: {
    KTUserMenu,
    // KTNotificationsMenu,
  },
  data() {
    return {
      isAuth: JwtService.isEmployee(),
      user: {
        email: "",
      },
      langs: langs,
    };
  },
  methods: {
    setLang(lang) {
      window.location.href = location.href.replace('/' + this.$i18n.locale, '/' +lang);
    },
    currentLanguage(lang) {
      return useI18n().locale === lang;
    },
    currentLangugeLocale() {
      return this.langs[useI18n().locale.value];
    },
  },
  computed: {
    userData() {
        return JwtService.getUserData();
    },
  },
});
</script>
