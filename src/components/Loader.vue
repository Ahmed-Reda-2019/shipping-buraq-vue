<template>
  <!--begin::Page loader-->
  <div class="page-loader">
    <span class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </span>
  </div>
  <!--end::Page Loader-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>
