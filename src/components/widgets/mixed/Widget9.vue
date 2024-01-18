<template>
  <!--begin::Mixed Widget 9-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <!--begin::Info-->
        <div class="d-flex align-items-center pe-2 mb-5">
          <span class="text-muted fw-bolder fs-5 flex-grow-1">
            {{ time }}
          </span>

          <div class="symbol symbol-50px">
            <span class="symbol-label bg-light">
              <img :src="image" alt="" class="h-50 align-self-center"/>
            </span>
          </div>
        </div>
        <!--end::Info-->

        <!--begin::Link-->
        <a class="text-dark fw-bolder text-hover-primary fs-4" href="#">
          {{ title }}
        </a>
        <!--end::Link-->

        <!--begin::Desc-->
        <p class="py-3">
          <span v-html="description"></span>
        </p>
        <!--end::Desc-->
      </div>

      <!--begin::Team-->
      <div class="d-flex align-items-center">
        <a
            class="symbol symbol-35px me-2"
            data-bs-toggle="tooltip"
            href="#"
            title="Ana Stone"
        >
          <img alt="" src="/media/avatars/150-1.jpg"/>
        </a>

        <a
            class="symbol symbol-35px me-2"
            data-bs-toggle="tooltip"
            href="#"
            title="Mark Larson"
        >
          <img alt="" src="/media/avatars/150-4.jpg"/>
        </a>

        <a
            class="symbol symbol-35px me-2"
            data-bs-toggle="tooltip"
            href="#"
            title="Sam Harris"
        >
          <img alt="" src="/media/avatars/150-8.jpg"/>
        </a>
      </div>
      <!--end::Team-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 9-->
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "widget-1",
  components: {},
  props: {
    widgetClasses: String,
    time: String,
    image: String,
    title: String,
    description: String,
  },
});
</script>
