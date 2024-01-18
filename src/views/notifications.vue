<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("All Notifications") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar"></div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <my-table-ajax
              :url="url"
              :tableHeader="[
                { name: 'title', key: 'title' },
                { name: 'Description', key: 'Description' },
                { name: 'type', key: 'type' },
                { name: 'created_at', key: 'created_at' },
                { name: 'read_at', key: 'read_at' },
              ]"
            >
              <template v-slot:cell-title="{ row: item }">
                {{ getText(item, "title") }}
              </template>
              <template v-slot:cell-Description="{ row: item }">
                {{ getText(item, "description") }}
              </template>
              <template v-slot:cell-type="{ row: item }">
                {{ $t(item.data.type) }}
              </template>
              <template v-slot:cell-created_at="{ row: item }">
                {{ formatDate(item.created_at) }}
              </template>
              <template v-slot:cell-read_at="{ row: item }">
                {{ formatDate(item.read_at) }}
              </template>
            </my-table-ajax>
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import ContainerStatus from "@/core/config/ContainerStatus";
import MyTable from "@/views/admin/components/myTable";
import MyTableAjax from "@/views/admin/components/myTableAjax";
import JwtService from "@/core/services/JwtService";
import moment from "moment";

export default defineComponent({
  name: "notifications",
  components: { MyTableAjax },
  data() {
    return {
      ContainerStatus: ContainerStatus,
      list: [],
      loading: true, //ref(useStore().getters.Submitted),
    };
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("All Notifications"), [this.$t("cp")]);
  },
  methods: {
    getText(item, key) {
      if (item.lang && item.lang == true) return this.$t(item.data[key]);
      return item.data[key];
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
  computed: {
    url() {
      if (JwtService.isEmployee()) return "admin/notification/all";
      return "site/customer/notification/all";
    },
  },
});
</script>
