<template>
  <div class="d-flex flex-column flex-center flex-column-fluid p-10">
    <!--begin::Illustration-->
    <img
      alt=""
      class="mw-100 mb-10 h-lg-450px"
      src="/media/illustrations/sigma-1/18.png"
    />
    <!--end::Illustration-->

    <!--begin::Message-->
    <h1 class="fw-bold mb-10" style="color: #a3a3c7">
      {{ $t("Seems there is nothing") }}
    </h1>
    <!--end::Message-->

    <!--begin::Link-->
    <router-link class="btn btn-primary" to="/">
      {{ $t("Return Home") }}
    </router-link>
    <!--end::Link-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "error-404",
  components: {},
  setup() {
    Swal.close();
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  },
});
</script>
