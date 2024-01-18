<template>
  <div id="kt_content" class="content flex-row-fluid">
    <div class="card mb-5">
      <div v-if="API.loading" class="blockui-overlay bg-dark bg-opacity-25">
        <span class="spinner-border text-primary"></span>
      </div>
      <!--begin::Card header-->
      <div class="card-header border-0 pt-6">
        <!--begin::Card title-->
        <div class="card-title">
          <!--begin::Search-->
          <h2 class="fw-bolder">{{ $t("all Payments") }}</h2>
          <!--end::Search-->
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <div
              class="d-flex justify-content-end"
              data-kt-customer-table-toolbar="base"
          >

            <!--begin::Filter-->
            <button
                aria-controls="kt-toolbar-filter"
                aria-expanded="false"
                class="btn btn-light-primary me-3"
                data-bs-toggle="collapse"
                href="#kt-toolbar-filter"
                role="button"
            >
              <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
              <span class="svg-icon svg-icon-2">
                <inline-svg src="/media/icons/duotune/general/gen031.svg" />
              </span>
              {{ $t("filter") }}
            </button>

          </div>
        </div>
        <!--end::Card toolbar-->
      </div>
      <!--end::Card header-->

      <div id="kt-toolbar-filter" class="collapse">
        <!--begin::Header-->
        <div class="px-7 py-5">
          <div class="fs-4 text-dark fw-bolder">
            <span class="svg-icon svg-icon-1 ms-6">
              <inline-svg src="/media/icons/duotune/general/gen031.svg" />
            </span>
            {{ $t("filterOptions") }}
          </div>
        </div>
        <!--end::Header-->
        <!--begin::Separator-->
        <div class="separator border-gray-200"></div>
        <!--end::Separator-->
        <!--begin::Content-->
        <div class="px-7 py-5 row-cols-sm-auto row-cols-md-auto row">
          <!--begin::Input group-->

          <div class="mb-5 col-md-6 col-lg-4">
            <label class="form-label fs-5 fw-bold mb-2">&nbsp;</label>
            <div class="d-flex align-items-center position-relative">
              <span class="svg-icon svg-icon-1 position-absolute ms-6">
                <inline-svg src="/media/icons/duotune/general/gen021.svg" />
              </span>
              <!--end::Svg Icon-->
              <input
                  v-model="API.filters.search"
                  :placeholder="$t('Search')"
                  class="form-control form-control-solid ps-15"
                  data-kt-customer-table-filter="search"
                  type="text"
              />
            </div>
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <label class="fs-5 fw-bold mb-2 d-block"> {{ $t("from") }}: </label>
            <!--end::Label-->
            <!--begin::Input-->
            <el-date-picker
                v-model="API.filters.start_date"
                :disabled="API.loading"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
            >
            </el-date-picker>
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <label class="fs-5 fw-bold mb-2 d-block"> {{ $t("to") }}: </label>
            <!--end::Label-->
            <!--begin::Input-->
            <el-date-picker
                v-model="API.filters.end_date"
                :disabled="API.loading"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
            >
            </el-date-picker>
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <!--begin::Label-->
            <label class="form-label fs-5 fw-bold mb-2"
            >{{ $t("status") }}:</label
            >
            <!--end::Label-->
            <!--begin::Input-->
            <select
                v-model="API.filters.is_out"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
            >
              <option :value="null">{{ $t("all") }}</option>
              <option :value="1">{{ $t("Out of Branch") }}</option>
              <option :value="0">{{ $t("Enter Branch") }}</option>

            </select>
            <!--end::Input-->
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <!--begin::Label-->
            <label class="form-label fs-5 fw-bold mb-2"
            >{{ $t("branch") }}:</label
            >
            <!--end::Label-->
            <!--begin::Input-->
            <select
                v-model="API.filters.branch_id"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
            >
              <option :value="null">{{ $t("all") }}</option>
              <option v-for="(item ,i) in API.branches" :key="i" :value="item.id">{{item.name}}</option>
            </select>
            <!--end::Input-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <!--end::Input group-->
          <!--begin::Actions-->
          <div class="d-flex justify-content-end align-items-center">
            <button
                class="btn btn-light btn-active-light-primary me-2"
                data-kt-menu-dismiss="true"
                @click="
                API.filters.search = '';
                API.filters.end_date = null;
                API.filters.start_date = null;
                API.filters.is_out = null;
                API.filters.branch_id = null;
              "
            >
              {{ $t("Reset") }}
            </button>
            <button
                class="btn btn-primary"
                data-kt-menu-dismiss="true"
                @click="
                API.filters.page = 1;
                API.getList();
              "
            >
              {{ $t("Apply") }}
            </button>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Content-->
      </div>
      <div class="card-body">
        <template
            v-if="API.list && API.list.length > 0"
        >
          <my-table
              :list="API.list"
              :tableHeader="[
          { name: 'type', key: 'type' },
          { name: 'branch', key: 'branch' },
          { name: 'amount', key: 'amount' },
          { name: 'order', key: 'order' },
          { name: 'user', key: 'user' },
          { name: 'status', key: 'status' },
          { name: 'note', key: 'note' },
          { name: 'created_at', key: 'created_at' },
        ]"
          >
            <template v-slot:cell-type="{ row: item }">
              <span class="badge badge-danger" v-if="item.is_out == 1">{{ $t('IN') }}</span>
              <span class="badge badge-success" v-else>{{ $t('IN') }}</span>
            </template>
              <template v-slot:cell-status="{ row: item }">
              <span class="badge badge-success" v-if="item.status == 1">{{ $t('Done') }}</span>
              <span class="badge badge-danger" v-else>{{ $t('Fail') }}</span>
            </template>
            <template v-slot:cell-branch="{ row: item }">
              ({{item.branch_id}}) {{ item.branch.name }}
            </template>
            <template v-slot:cell-amount="{ row: item }">
              {{ item.amount }}
            </template>
            <template v-slot:cell-order="{ row: item }">
              {{ item.order ? item.order.code : '' }}
            </template>
            <template v-slot:cell-user="{ row: item }">
              {{ item.user ? item.user.name  :'' }}
            </template>


            <template v-slot:cell-created_at="{ row: item }">
              {{ formatDate(item.created_at) }}
            </template>
          </my-table>
          <pagnation
              v-model:pageNumber="API.filters.page"
              :page="API.allData"
              @change="(p)=>{API.filters.page = p; API.getList()}"
          ></pagnation>
        </template>
        <div v-else>
          <h3 class="text-center">
            {{$t("No Data")}}
          </h3>
        </div>
      </div>

      <!--begin::Card body-->
      <!--end::Card body-->
    </div>
  </div>

</template>

<script>
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import moment from "moment";
import KTModalCard from "@/components/cards/Card.vue";
import BarCode from "@/views/print/barCode";
import Invoice from "../../print/invoice";
import { can } from "@/core/services/JwtService";
import Pagnation from "@/components/pagnation";
import { MenuComponent } from "@/assets/ts/components/index";
import CountriesWithKey from "@/views/admin/locations/countriesWithKey";
import Boxes from "@/views/admin/branches/boxes";
import MyTable from "@/views/admin/components/myTable.vue";
import useIndebtedness from "@/composables/indebtedness";
import usePayments from "@/composables/payments";

export default defineComponent({
  name: "payments-list",
  components: {
    MyTable,
    Pagnation,
  },
  data() {
    return {
      API:usePayments()
    };
  },
  async created() {
    this.API.getList()
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("all Payments"), [this.$t("cp")]);
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    can(p) {
      return can(p);
    },
  },
});
</script>
