<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->

    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::Home card-->

      <div class="card">
        <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
          <span class="spinner-border text-primary"></span>
        </div>
        <!--begin::Body-->
        <div class="card-body p-lg-20 pb-lg-0">
          <!--begin::Layout-->
          <div class="d-flex flex-column flex-xl-row">
            <!--begin::Content-->
            <div class="flex-lg-row-fluid me-xl-15">
              <!--begin::Post content-->
              <div class="mb-17">
                <!--begin::Wrapper-->
                <div class="mb-8">
                  <!--begin::Info-->
                  <div class="d-flex flex-wrap mb-6">
                    <!--begin::Item-->
                    <div class="me-9 my-1">
                      <!--begin::Icon-->
                      <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                      <span class="svg-icon svg-icon-primary svg-icon-2 me-1">
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="black"
                            height="9"
                            rx="2"
                            width="9"
                            x="2"
                            y="2"
                          />
                          <rect
                            fill="black"
                            height="9"
                            opacity="0.3"
                            rx="2"
                            width="9"
                            x="13"
                            y="2"
                          />
                          <rect
                            fill="black"
                            height="9"
                            opacity="0.3"
                            rx="2"
                            width="9"
                            x="13"
                            y="13"
                          />
                          <rect
                            fill="black"
                            height="9"
                            opacity="0.3"
                            rx="2"
                            width="9"
                            x="2"
                            y="13"
                          />
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                      <!--end::Icon-->
                      <!--begin::Label-->
                      <span class="fw-bolder text-gray-400">
                        {{ formatDate(blog.created_at) }}
                      </span>
                      <!--end::Label-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="me-9 my-1">
                      <!--begin::Icon-->
                      <!--SVG file not found: icons/duotune/finance/fin006.svgFolder.svg-->
                      <!--end::Icon-->
                      <!--begin::Label-->
                      <span class="fw-bolder text-gray-400">{{
                        blog.category
                      }}</span>
                      <!--begin::Label-->
                    </div>
                    <!--end::Item-->
                  </div>
                  <!--end::Info-->
                  <!--begin::Title-->
                  <a class="text-dark text-hover-primary fs-2 fw-bolder">
                    {{ blog.title }}
                  </a>
                  <!--end::Title-->
                  <!--begin::Container-->
                  <div class="overlay mt-8">
                    <!--begin::Image-->
                    <div
                      :style="`background-image:url('${blog.image}')`"
                      class="
                        bgi-no-repeat bgi-position-center bgi-size-cover
                        card-rounded
                        min-h-350px
                      "
                    ></div>
                    <!--end::Image-->
                    <!--begin::Links-->
                    <div
                      class="overlay-layer card-rounded bg-dark bg-opacity-25"
                    ></div>
                    <!--end::Links-->
                  </div>
                  <!--end::Container-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Description-->
                <div
                  class="fs-5 fw-bold text-gray-600"
                  v-html="blog.description"
                ></div>
                <!--end::Description-->
                <!--begin::Icons-->
                <div class="d-flex flex-center" v-if="!loading">
                  <!--begin::Icon-->
                  <a
                    :href="`https://www.facebook.com/sharer/sharer.php?u=https://ahmed.com/ar/blog/${
                      blog.id
                    }/${blog.title.replaceAll(' ', '-')}`"
                    class="mx-4"
                    target="_blank"
                  >
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/facebook-4.svg"
                    />
                  </a>
                  <!--end::Icon-->
                  <!--begin::Icon-->
                  <a class="mx-4 d-none" href="#">
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/instagram-2-1.svg"
                    />
                  </a>
                  <!--end::Icon-->
                  <!--begin::Icon-->
                  <a class="mx-4 d-none" href="#">
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/github.svg"
                    />
                  </a>
                  <!--end::Icon-->
                  <!--begin::Icon-->
                  <a class="mx-4 d-none" href="#">
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/behance.svg"
                    />
                  </a>
                  <!--end::Icon-->
                  <!--begin::Icon-->
                  <a class="mx-4 d-none" href="#">
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/pinterest-p.svg"
                    />
                  </a>
                  <!--end::Icon-->
                  <!--begin::Icon-->
                  <a
                    :href="`https://twitter.com/intent/tweet?url=https://ahmed.com/ar/blog/${
                      blog.id
                    }/${blog.title.replaceAll(' ', '-')}&text=${blog.title}`"
                    class="mx-4"
                    target="_blank"
                  >
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/twitter.svg"
                    />
                  </a>
                  <!--end::Icon-->
                  <!--begin::Icon-->
                  <a class="mx-4 d-none" href="#">
                    <img
                      alt=""
                      class="h-20px my-2"
                      src="/media/svg/brand-logos/dribbble-icon-1.svg"
                    />
                  </a>
                  <!--end::Icon-->
                </div>
                <!--end::Icons-->
              </div>
              <!--end::Post content-->
            </div>
            <!--end::Content-->
            <!--begin::Sidebar-->
            <div class="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">
              <!--begin::Catigories-->
              <div v-if="categories && categories.length > 0" class="mb-16">
                <h4 class="text-black mb-7">{{ $t("crm categories") }}</h4>
                <!--begin::Item-->
                <div
                  v-for="cat in categories"
                  :key="cat.id"
                  class="d-flex flex-stack fw-bold fs-5 text-muted mb-4"
                >
                  <!--begin::Text-->
                  <router-link
                    :to="{ name: 'site-category', params: { id: cat.slug } }"
                    class="text-muted text-hover-primary pe-2"
                    >{{ cat.name }}
                  </router-link>
                  <!--end::Text-->
                  <!--begin::Number-->
                  <div class="m-0"></div>
                  <!--end::Number-->
                </div>
                <!--end::Item-->
              </div>
              <!--end::Catigories-->
              <!--begin::Recent posts-->
              <div class="m-0">
                <h4 class="text-black mb-7">{{ $t("Latest Articles") }}</h4>
                <!--begin::Item-->
                <template v-if="pageData.data">
                  <div
                    v-for="blog in pageData.data"
                    :key="blog.id"
                    class="d-flex flex-stack mb-7"
                  >
                    <!--begin::Symbol-->
                    <div class="symbol symbol-60px symbol-2by3 me-4">
                      <div
                        :style="`background-image: url('${blog.image}')`"
                        class="symbol-label"
                      ></div>
                    </div>
                    <!--end::Symbol-->
                    <!--begin::Title-->
                    <div class="m-0">
                      <router-link
                        :to="{
                          name: 'site-blog-show',
                          params: {
                            id: blog.id,
                            title: blog.title.replaceAll(' ', '-'),
                          },
                        }"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                      >
                        {{ blog.title }}
                      </router-link>
                      <span
                        class="text-gray-600 fw-bold d-block pt-1 fs-7"
                      ></span>
                    </div>
                    <!--end::Title-->
                  </div>
                </template>
                <!--end::Item-->
              </div>
              <!--end::Recent posts-->
            </div>
            <!--end::Sidebar-->
          </div>
          <!--end::Layout-->
        </div>
        <!--end::Body-->
      </div>
    </div>
    <!--end::Post-->
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import moment from "moment";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default {
  name: "site-blog",

  data() {
    return {
      loading: true,
      pageData: {},
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        filters: [],
        page: 1,
      },
      blog: {},
      categories: [],
    };
  },
  async created() {
    try {
      await ApiService.get("site/blog/" + this.$route.params.id).then((res) => {
        this.blog = res.data.data;
        this.categories = res.data.categories;
        setCurrentPageBreadcrumbs(this.blog.meta_title, [this.$t("blogs")]);
        this.loadData();
      });
    } catch (e) {
      this.$router.replace("/404");
    }
  },
  methods: {
    async loadData() {
      await ApiService.query("site/blog", this.filters).then((res) => {
        this.pageData = res.data;
        this.loading = false;
      });
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
};
</script>
