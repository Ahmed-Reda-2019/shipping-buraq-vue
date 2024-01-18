<template>
  <div class="d-flex flex-column flex-root">
    <!--begin::Authentication - Sign-up -->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid bg-white">
      <!--begin::Aside-->
      <div
        class="
          d-flex
          flex-column flex-lg-row-auto
          w-xl-600px
          positon-xl-relative
          bg-dark
        "
      >
        <!--begin::Wrapper-->
        <div
          class="
            d-flex
            flex-column
            position-xl-fixed
            top-0
            bottom-0
            w-xl-600px
            scroll-y
          "
        >
          <!--begin::Content-->
          <div
            class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20"
          >
            <!--begin::Logo-->
            <router-link class="mb-12" to="/">
              <img
                :src="setting.getVal('head_logo_white')"
                alt="Logo"
                class="h-60px"
              />
            </router-link>
            <!--end::Logo-->
            <!--begin::Title-->
            <h1 class="fw-bolder fs-2qx pb-5 pb-md-10 text-white">
              {{ $t("Welcome_to" , {name:setting.getTitle('brand')}) }}
            </h1>
            <!--end::Title-->
            <!--begin::Description-->
            <p class="fw-bold fs-2 text-white">
              {{ $t("Welcome_text1") }} <br />{{ $t("Welcome_text2") }}
            </p>
            <!--end::Description-->
          </div>
          <!--end::Content-->
          <!--begin::Illustration-->
          <div
            class="
              d-flex
              flex-row-auto
              bgi-no-repeat
              bgi-position-x-center
              bgi-size-contain
              bgi-position-y-bottom
              min-h-100px min-h-lg-350px
            "
            style="background-image: url(/media/illustrations/sigma-1/n17.png)"
          ></div>
          <!--end::Illustration-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Aside-->
      <!--begin::Body-->
      <div class="d-flex flex-column flex-lg-row-fluid py-10">
        <!--begin::Content-->
        <div class="d-flex flex-center flex-column flex-column-fluid">
          <router-view></router-view>
        </div>
        <!--end::Content-->
        <!--begin::Footer-->
        <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
          <!--begin::Links-->
          <div class="d-flex flex-center fw-bold fs-6">
            <a
              class="text-muted text-hover-primary px-2"
              href="/"
              target="_blank"
              >{{ $t("Home") }}</a
            >
            <a
              class="text-muted text-hover-primary px-2"
              href="/about"
              target="_blank"
              >{{ $t("About") }}</a
            >
            <router-link
              :to="{ name: 'dashboard' }"
              class="text-muted text-hover-primary px-2"
            >
              {{ $t("employee") }}
            </router-link>
          </div>
          <!--end::Links-->
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Body-->
    </div>
    <chat />

    <!--end::Authentication - Sign-up-->
  </div>
</template>
<style lang="scss">
@import "@/assets/demo1/assets/sass/plugins";
html:not(.rtl) {
  @import "@/assets/demo1/style";
  :root,
  & {
    --bs-font-sans-serif:'Tajawal', sans-serif , Tajawal, Helvetica, "sans-serif" !important;
  }
}
html.rtl {
  @import "@/assets/demo1/style.rtl";
  :root,
  & {
    --bs-font-sans-serif: 'Tajawal', sans-serif, Tajawal !important;;
    font-weight: bolder;
    font-size: small;
    //font-weight: 600 !important;
  }
}

html {
  font-family: 'Tajawal', sans-serif !important;;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}


</style>

<script>
import Setting from "@/core/config/Setting";
import Chat from "@/layout/site/extras/chat.vue";

export default {
  name: "authLayout",
  components: { Chat },
  computed: {
    setting() {
      return Setting;
    },
  },
};
</script>
