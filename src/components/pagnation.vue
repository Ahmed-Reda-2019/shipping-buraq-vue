<template>
  <div v-if="pageData.total" class="d-flex flex-stack flex-wrap p-4">
    <div class="fs-6 fw-bold text-gray-700">
      {{ $t("Showing") }}
      {{ (pageData.current_page - 1) * pageData.per_page + 1 }}
      {{ $t("to") }}
      {{ (pageData.current_page - 1) * pageData.per_page + pageData.count }}
      {{ $t("of") }} {{ pageData.total }} {{ $t("entries") }}
    </div>
    <!--begin::Pages-->
    <div
        class="overflow-auto justify-content-sm-between justify-content-center d-flex align-items-center"
    >
      {{pageNumber}}
      <el-pagination
          v-model:currentPage="pageNumber"
          :current-page="pageNumber"
          :page-size="pageData.per_page"
          :total="pageData.total"
          background
          layout="prev, pager, next"
          @current-change="loadData(pageNumber)"
      >
      </el-pagination>
    </div>
    <!--end::Pages-->
  </div>
</template>

<script>
export default {
  name: "pagnation",
  props: ["page", "number"],
  data() {
    return {
      pageData: this.page,
      pageNumber: this.number,
    };
  },
  methods: {
    loadData() {
      this.$emit("change", this.pageNumber);
    },
  },
  watch: {
    page(newval, oldval) {
      this.pageData = newval;
    },
    number(newval) {
      this.pageNumber = newval;
    },
  },
};
</script>
