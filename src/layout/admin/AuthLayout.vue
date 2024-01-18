<template>
  <div
    class="
      d-flex
      flex-column flex-column-fluid
      bgi-position-y-bottom
      position-x-center
      bgi-no-repeat bgi-size-contain bgi-attachment-fixed
    "
    style="background-image: url('/media/illustrations/sketchy-1/14.png');background: transparent;"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <!--begin::Logo-->
      <router-link class="mb-12" to="/">
        <img
          :src="setting.getVal('site_main_image')"
          alt="Logo"
          class="h-75px"
        />
      </router-link>
      <!--end::Logo-->

      <router-view></router-view>
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <a class="text-muted text-hover-primary px-2" href="/">{{
          $t("Home")
        }}</a>

        <a class="text-muted text-hover-primary px-2" href="/about">{{
          $t("About")
        }}</a>

        <a class="text-muted text-hover-primary px-2" href="/contact">{{
          $t("Contact")
        }}</a>
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
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

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import Setting from "@/core/config/Setting";

export default defineComponent({
  name: "auth",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  },
  computed: {
    setting() {
      return Setting;
    },
  },
});
</script>
