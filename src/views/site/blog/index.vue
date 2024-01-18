<template>
  <div
      id="kt_content_container"
      class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid position-relative">
      <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
        <span class="spinner-border text-primary"></span>
      </div>
      <!--begin::Home card-->
      <template v-if="pageData.total">
        <div class="card mb-3">
          <div class="card-header">
            <h3 class="card-title">{{ $t("Latest Articles") }}</h3>
          </div>
        </div>

        <div class="row row-cols-md-2 row-cols-lg-3 justify-content-center">
          <!--begin::Col-->
          <!--begin::Col-->
          <div v-for="blog in pageData.data" :key="blog.id">
            <!--begin::Hot sales post-->
            <blog-item :blog="blog"></blog-item>
            <!--end::Hot sales post-->
          </div>
          <!--end::Col-->
        </div>
        <div class="bg-white p-2">
          <pagnation
              v-model:pageNumber="filters.page"
              :page="pageData"
              @change="loadData"
          ></pagnation>
        </div>
      </template>
      <KTModalCard
          v-else
          :title="pageData.total == 0 ?  $t('noData') : $t('PleaseWait')"
          image="/media/illustrations/sigma-1/n18.png"
      ></KTModalCard>
      <!--end::Home card-->
    </div>
    <!--end::Post-->
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import moment from "moment";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import BlogItem from "@/views/site/blog/blogItem";
import Pagnation from "@/components/pagnation";
import KTModalCard from "@/components/cards/Card.vue";

export default {
  name: "site-blog",
  components: {Pagnation, BlogItem, KTModalCard},
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
    };
  },
  created() {
    this.loadData();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Latest Articles"), []);
  },
  methods: {
    async loadData(page = 0) {
      this.loading = true;
      if (page > 0) this.filters.page = page;
      await ApiService.query("site/blog", this.filters)
          .then((res) => {
            this.pageData = res.data;
          })
          .finally(() => {
            this.loading = false;
          });
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
};
</script>
