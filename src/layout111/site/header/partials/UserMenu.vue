<template>
  <!--begin::Menu-->
  <div
    class="
      menu
      menu-sub
      menu-sub-dropdown
      menu-column
      menu-rounded
      menu-gray-600
      menu-state-bg-light-primary
      fw-bold
      py-4
      fs-6
      w-275px
    "
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div v-show="userData && userData.email" class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <img
            :src="userData.profileUrl ? userData.profileUrl : userData.profile"
            alt="Logo"
          />
        </div>
        <!--end::Avatar-->
        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bolder d-flex align-items-center fs-5">
            {{ userData.name }}
            <span
              v-if="userData.is_bussness == 1"
              class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2"
            >
              {{ $t("bussness") }}
            </span>
          </div>
          <a class="fw-bold text-muted text-hover-primary fs-7">{{
            userData.email
          }}</a>
        </div>
        <!--end::Username-->
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link :to="{ name: 'custemer-address' }" class="menu-link px-5">
        {{ $t("custemerAddress") }}
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div v-if="isBussness" class="menu-item px-5">
      <router-link :to="{ name: 'custemer-resivers' }" class="menu-link px-5">
        {{ $t("custemerResivers") }}
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-5"
      data-kt-menu-flip="center, top"
      data-kt-menu-placement="left-start"
      data-kt-menu-trigger="hover"
    >
      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <div v-for="(lang, iLang) in langs" :key="iLang" class="menu-item px-3">
          <a
            :class="{ active: currentLanguage(iLang) }"
            class="menu-link d-flex px-5"
            href="#"
            @click="setLang(iLang)"
          >
            <span class="symbol symbol-20px me-4">
              <img :src="lang.flag" class="rounded-1" />
            </span>
            {{ lang.name }}
          </a>
        </div>
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5 my-1">
      <router-link :to="{ name: 'custemer-setting' }" class="menu-link px-5">
        {{ $t("accountSettings") }}
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a class="menu-link px-5" @click="SiteSignOut()"> {{ $t("signOut") }} </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";
import langs from "@/core/config/langs";
import store from "@/store";
import { MenuComponent } from "@/assets/ts/components/index";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  data() {
    return {
      user: {},
      langs: langs,
      store: useStore(),
      countries: langs,
      currentLangugeLocale: {},
      isBussness: JwtService.isBusiness(),
    };
  },
  mounted() {
    MenuComponent.reinitialization();
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route.path.indexOf(match) !== -1;
    },

    SiteSignOut() {
      this.store
        .dispatch(Actions.LOGOUT)
        .then(() => this.$router.push({ name: "site-sign-in" }));
    },

    setLang(lang) {
      window.location.href = location.href.replace(this.$i18n.locale, lang);
    },

    currentLanguage(lang) {
      return useI18n().locale.value === lang;
    },
  },
  computed: {
    userData() {
      if (store.state.AuthModule.user) return store.state.AuthModule.user;
      return {};
    },
  },
});
</script>
