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
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <img :src="userData.profile" alt="Logo" />
        </div>
        <!--end::Avatar-->
        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bolder d-flex align-items-center fs-5">
            {{ user.name }}
            <span
              v-if="user.role && user.role.title"
              class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2"
              >{{ user.role.title }}</span
            >
          </div>
          <a class="fw-bold text-muted text-hover-primary fs-7" href="#">{{
            user.email
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
      <router-link :to="{ name: 'emp-setting' }" class="menu-link px-5">
        {{ $t("My Profile") }}
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
      <router-link class="menu-link px-5" to="">
        <span class="menu-title position-relative">
          {{ $t("Language") }}
          <span
            class="
              fs-8
              rounded
              bg-light
              px-3
              py-2
              position-absolute
              translate-middle-y
              top-50
              end-0
            "
          >
            <img
              :src="currentLangugeLocale().flag"
              alt="profile"
              class="w-15px h-15px rounded-1 ms-2"
            />
          </span>
        </span>
      </router-link>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
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
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a class="menu-link px-5" @click="logOut"> {{ $t("signOut") }} </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";
import langs from "@/core/config/langs";
import store from "@/store";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  data() {
    return {
      user: JwtService.getUserData(),
      i18n: useI18n(),
      store: useStore(),
      langs: langs,
      countries: langs,
    };
  },
  beforeCreate() {
    useI18n().locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    if (useI18n().locale.value == "ar")
      useStore().dispatch(Actions.SET_RTL, "");
    else useStore().dispatch(Actions.SET_LTR, "");
  },
  methods: {
    logOut() {
      this.store
        .dispatch(Actions.LOGOUT)
        .then(() => this.$router.push({ name: "sign-in" }));
      this.$router.push({ name: "sign-in" });
    },

    setLang(lang) {
      window.location.href = location.href.replace(this.$i18n.locale, lang);
    },

    currentLanguage(lang) {
      return useI18n().locale === lang;
    },

    currentLangugeLocale() {
      return this.countries[useI18n().locale.value];
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
