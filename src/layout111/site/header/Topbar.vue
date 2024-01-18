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

      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu-->
        <div
          class="btn btn-icon w-30px h-30px w-md-40px h-md-40px"
          data-kt-menu-attach="parent"
          data-kt-menu-flip="bottom"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-trigger="click"
        >
          <span class="svg-icon svg-icon-1 text-white curr-symbol">
            {{ curr_symbol }}
          </span>
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
            <h3 class="text-white fw-bold mb-3">{{ $t("currencies") }}</h3>
            <!--end::Title-->

            <!--begin::Status-->
            <span class="badge bg-success py-2 px-3"></span>
            <!--end::Status-->
          </div>
          <!--end::Heading-->

          <!--begin:Nav-->
          <div class="row g-0">
            <div
              v-for="(item, index) in allCurrencies"
              :key="index"
              class="col-6"
            >
              <a
                class="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                @click="setCurrency(index)"
              >
                <span class="fs-5 fw-bold text-gray-800 mb-2 fs-2x">{{
                  item.symbol
                }}</span>
                <span class="fs-7 text-gray-400">{{ item.iso_code }}</span>
              </a>
            </div>
            <!--end:Item-->
          </div>
          <!--end:Nav-->
        </div>

        <!--end::Menu-->
      </div>

      <template v-if="isAuth">
        <!--begin::Notifications-->
        <KTNotificationsMenu></KTNotificationsMenu>
        <!--end::Notifications-->

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
import KTUserMenu from "@/layout/site/header/partials/UserMenu.vue";
import JwtService from "@/core/services/JwtService";
import { useI18n } from "vue-i18n";
import langs from "@/core/config/langs";
import store from "@/store";
import ApiService from "@/core/services/ApiService";
import KTNotificationsMenu from "@/layout/site/header/partials/NotificationsMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    KTUserMenu,
    KTNotificationsMenu,
  },
  data() {
    return {
      isAuth: false,
      user: {
        email: "",
      },
      langs: langs,
      countries: langs,
      allCurrencies: [],
      curr_iso_code: store.state.currency_iso_code,
      curr_multiplier: store.state.currency_multiplier,
      curr_symbol: store.state.currency_symbol,
    };
  },
  async created() {
    this.allCurrencies = store.state.allCurrencies;
    if (this.allCurrencies.length == 0) {
      await ApiService.get("site/currencies").then((res) => {
        if (res.status == 200) store.state.allCurrencies = res.data.data;
      });
      this.allCurrencies = store.state.allCurrencies;
      if (localStorage.getItem("currency")) {
        let key = localStorage.getItem("currency") || "eur";
        this.setCurrency(key);
      }
    }
    if (JwtService.isCustomer()) {
      this.user = JwtService.getUserData() || { email: "" };
      this.isAuth = true;
    }
  },
  methods: {
    setCurrency(key) {
      if (this.allCurrencies[key]) {
        localStorage.setItem("currency", key);
        store.commit("changeCurrency", key);
        this.curr_iso_code = store.state.currency_iso_code;
        this.curr_multiplier = store.state.currency_multiplier;
        this.curr_symbol = store.state.currency_symbol;
      }
    },
    setLang(lang) {
      // location.pathname
      window.location.href = window.location.origin + location.pathname.replace(this.$i18n.locale, lang);
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
