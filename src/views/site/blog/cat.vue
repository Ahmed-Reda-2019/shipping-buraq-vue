<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::About card-->
      <div class="card">
        <!--begin::Body-->
        <div class="card-body p-lg-17">
          <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
            <span class="spinner-border text-primary"></span>
          </div>
          <!--begin::About-->
          <div class="mb-18">
            <!--begin::Wrapper-->
            <div class="mb-10">
              <!--begin::Top-->
              <div class="text-center mb-15">
                <!--begin::Title-->
                <h3 class="fs-2hx text-dark mb-5">{{ category.name }}</h3>
                <!--end::Title-->
                <!--begin::Text-->
                <!--end::Text-->
              </div>
              <!--end::Top-->
              <!--begin::Overlay-->
              <div class="overlay">
                <!--begin::Image-->
                <img :src="category.image" alt="" class="w-100 card-rounded" />
                <!--end::Image-->
              </div>
              <!--end::Container-->
            </div>
            <!--end::Wrapper-->
            <!--begin::Description-->
            <div
              class="fs-5 fw-bold text-gray-600"
              v-html="category.description"
            ></div>
            <!--end::Description-->
          </div>
          <!--end::About-->
          <!--begin::Section-->
          <div class="mb-16">
            <!--begin::Top-->
            <div class="text-center mb-12">
              <!--begin::Title-->
              <h3 class="fs-2hx text-dark mb-5">{{ $t("Latest Articles") }}</h3>
              <!--end::Title-->
            </div>
            <!--end::Top-->
            <!--begin::Row-->
            <div class="row g-10">
              <!--begin::Col-->
              <template v-if="blogs.length > 0">
                <div v-for="blog in blogs" :key="blog.id" class="col-md-4">
                  <!--begin::Hot sales post-->
                  <blog-item :blog="blog"></blog-item>
                  <!--end::Hot sales post-->
                </div>
              </template>
              <div v-else class="col-md-col text-center">
                <h3>{{ $t("noData") }}</h3>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
          </div>
          <!--end::Section-->
          <!--begin::Card-->
          <div class="card mb-4 bg-light text-center">
            <!--begin::Body-->
            <div class="card-body py-12">
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/facebook-4.svg"
                />
              </a>
              <!--end::Icon-->
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/instagram-2-1.svg"
                />
              </a>
              <!--end::Icon-->
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/github.svg"
                />
              </a>
              <!--end::Icon-->
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/behance.svg"
                />
              </a>
              <!--end::Icon-->
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/pinterest-p.svg"
                />
              </a>
              <!--end::Icon-->
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/twitter.svg"
                />
              </a>
              <!--end::Icon-->
              <!--begin::Icon-->
              <a class="mx-4">
                <img
                  alt=""
                  class="h-30px my-2"
                  src="/media/svg/brand-logos/dribbble-icon-1.svg"
                />
              </a>
              <!--end::Icon-->
            </div>
            <!--end::Body-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::About card-->
    </div>
    <!--end::Post-->
  </div>
</template>

<script>
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import ApiService from "@/core/services/ApiService";
import { useI18n } from "vue-i18n";
import moment from "moment";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import BlogItem from "@/views/site/blog/blogItem";

export default {
  name: "site-blog",
  components: { BlogItem },
  data() {
    return {
      order: {},
      status: [],
      useI18n: useI18n(),
      currentStatus: {},
      loading: true,
      blogs: [],
      category: [],
    };
  },
  beforeCreate() {
    useStore().dispatch(Actions.ADD_BODY_CLASSNAME, "page-bg-image-lg");
  },
  async created() {
    try {
      await ApiService.get("site/cat/" + this.$route.params.id).then((res) => {
        this.category = res.data.category;
        this.blogs = res.data.blogs;
        this.loading = false;
        setCurrentPageBreadcrumbs(this.category.name, []);
      });
    } catch (e) {
      this.$router.replace("/404");
    }
  },

  methods: {
    // async loadData() {
    //   await ApiService.query("site/blog", this.filters).then((res) => {
    //     this.pageData = res.data;
    //   });
    //   this.loading = false;
    // },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
};
</script>
