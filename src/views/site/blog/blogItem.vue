<template>
  <div class="card-xl-stretch me-md-6 mb-4 bg-white p-3">
    <!--begin::Overlay-->
    <a
      :href="blog.image"
      class="d-block overlay"
      data-fslightbox="lightbox-hot-sales"
    >
      <!--begin::Image-->
      <router-link
        :to="{
          name: 'site-blog-show',
          params: { id: blog.id, title: blog.title.replaceAll(' ', '-') },
        }"
      >
        <div
          :style="`background-image:url('${blog.image}')`"
          class="
            overlay-wrapper
            bgi-no-repeat bgi-position-center bgi-size-cover
            card-rounded
            min-h-175px
          "
        ></div>
      </router-link>
      <!--end::Image-->
    </a>
    <!--end::Overlay-->
    <!--begin::Body-->
    <div class="mt-5">
      <!--begin::Title-->
      <router-link
        :to="{
          name: 'site-blog-show',
          params: { id: blog.id, title: blog.title.replaceAll(' ', '-') },
        }"
        class="
          fs-4
          text-dark
          fw-bolder
          text-hover-primary text-dark
          lh-base
          text-center
        "
      >
        {{ blog.title }}
      </router-link>
      <!--end::Title-->
      <!--begin::Text-->
      <div class="fw-bold fs-5 text-gray-600 text-dark mt-3"></div>
      <!--end::Text-->
      <!--begin::Text-->
      <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
        <!--begin::Label-->
        <span class="badge border-dashed badge-secondary text-dark p-2">
          {{ formatDate(blog.created_at) }}
        </span>
        <!--end::Label-->
        <!--begin::Action-->
        <a class="badge badge-light-primary py-2" href="#">{{ blog.category }}</a>
        <!--end::Action-->
      </div>
      <!--end::Text-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "blogItem",
  props: ["blog"],
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
};
</script>
