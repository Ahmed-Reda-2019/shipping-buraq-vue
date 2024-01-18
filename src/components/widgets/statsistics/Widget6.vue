<template>
  <!--begin: Statistics Widget 6-->
  <div :class="[widgetClasses, `bg-light-${color}`]" class="card">
    <!--begin::Body-->
    <div class="card-body my-3">
      <a
          :class="`text-${color}`"
          class="card-title fw-bolder fs-5 mb-3 d-block"
          href="#"
      >
        {{ description }}
      </a>

      <div class="py-1">
        <span class="text-dark fs-1 fw-bolder me-2">{{ progress }}</span>

        <span class="fw-bold text-muted fs-7">{{ title }}</span>
      </div>

      <div :class="`bg-${color}`" class="progress h-7px bg-opacity-50 mt-7">
        <div
            :class="`bg-${color}`"
            :style="`width: ${progress}`"
            aria-valuemax="100"
            aria-valuemin="0"
            aria-valuenow="50"
            class="progress-bar"
            role="progressbar"
        ></div>
      </div>
    </div>
    <!--end:: Body-->
  </div>
  <!--end: Statistics Widget 6-->
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "kt-widget-6",
  props: {
    widgetClasses: String,
    color: String,
    description: String,
    progress: String,
    title: String,
  },
  components: {},
});
</script>
