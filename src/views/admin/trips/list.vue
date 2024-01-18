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
          <h2 class="fw-bolder">{{ $t("Shipment Trips") }}</h2>
          <!--end::Search-->
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <a
              class="btn btn-light-primary"
              data-bs-target="#kt_modal_Blog_item"
              data-bs-toggle="modal"
              @click="API.setEmptyItem()"
          >
            {{ $t("Add New") }}
          </a>

          <div
              class="d-flex justify-content-end d-none"
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
                <inline-svg src="/media/icons/duotune/general/gen031.svg"/>
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
              <inline-svg src="/media/icons/duotune/general/gen031.svg"/>
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
                <inline-svg src="/media/icons/duotune/general/gen021.svg"/>
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
                v-model="API.filters.status_id"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
            >
              <option :value="null">{{ $t("all") }}</option>
              <option v-for="(item ,i) in API.status" :key="i" :value="i">{{ $t(item) }}</option>
            </select>
            <!--end::Input-->
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <!--begin::Label-->
            <label class="form-label fs-5 fw-bold mb-2"
            >{{ $t("from branch") }}:</label
            >
            <!--end::Label-->
            <!--begin::Input-->
            <select
                v-model="API.filters.from_branch_id"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
            >
              <option :value="null">{{ $t("all") }}</option>
              <option v-for="(item ,i) in API.branches" :key="i" :value="item.id">{{ item.name }}</option>
            </select>
            <!--end::Input-->
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <!--begin::Label-->
            <label class="form-label fs-5 fw-bold mb-2"
            >{{ $t("to branch") }}:</label
            >
            <!--end::Label-->
            <!--begin::Input-->
            <select
                v-model="API.filters.to_branch_id"
                class="form-select form-select-solid fw-bolder"
                data-allow-clear="true"
                data-dropdown-parent="#kt-toolbar-filter"
                data-kt-customer-table-filter="month"
                data-kt-select2="true"
                data-placeholder="Select option"
            >
              <option :value="null">{{ $t("all") }}</option>
              <option v-for="(item ,i) in API.branches" :key="i" :value="item.id">{{ item.name }}</option>
            </select>
            <!--end::Input-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <!--end::Input group-->
          <!--begin::Actions-->
          <div class="d-flex justify-content-end">
            <button
                class="btn btn-light btn-active-light-primary me-2"
                data-kt-menu-dismiss="true"
                @click="
                API.filters.search = '';
                API.filters.end_date = null;
                API.filters.start_date = null;
                API.filters.status_id = null;
                API.filters.from_branch_id = null;
                API.filters.to_branch_id = null;
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
          { name: 'from County', key: 'from_county' },
          { name: 'to County', key: 'to_county' },
          { name: 'amount', key: 'amount' },
          { name: 'order', key: 'order' },
          { name: 'payed', key: 'payed' },
          { name: 'status', key: 'status' },
          { name: 'note', key: 'note' },
          { name: 'created_at', key: 'created_at' },
        ]"
          >
            <template v-slot:cell-from_county="{ row: item }">
              {{ item.fromCounty.name }}
            </template>
            <template v-slot:cell-to_county="{ row: item }">
              {{ item.toCounty.name }}
            </template>

            <template v-slot:cell-created_at="{ row: item }">
              {{ formatDate(item.created_at) }}
            </template>
            <template v-slot:cell-actions="{ row: item, index: i }">
              <a
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_Blog_item"
                  data-bs-toggle="modal"
                  @click="API.setCurrentItem(item)"
              >
                  <span class="svg-icon svg-icon-primary svg-icon-2x"
                  ><inline-svg src="/media/icons/duotune/art/art005.svg"/>
                  </span>
              </a>
              <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="API.destroy(item, i)"
              >
                <i class="icon-xl fas fa-trash-alt"></i>
              </a>
            </template>

          </my-table>
          <pagnation
              v-model:pageNumber="API.filters.page"
              :page="API.allData"
              :number="API.filters.page"
              @change="(p)=>{API.filters.page = p; API.getList()}"
          ></pagnation>
        </template>
        <div v-else>
          <h3 class="text-center">
            {{ $t("No Data") }}
          </h3>
        </div>
      </div>
      <!--begin::Card body-->
      <!--end::Card body-->
    </div>
  </div>
  <div
      id="kt_modal_Blog_item"
      ref="my-modal"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-850px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_add_Country_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 v-if="API.currentItem.id" class="fw-bolder">
            {{ $t("edit Company") }}
          </h2>
          <h2 v-else class="fw-bolder">{{ $t("add New Trip") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
              id="kt_modal_Blog_item_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
          >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg"/>
              </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form @submit.prevent="API.save()">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
                id="kt_modal_add_branche_scroll"
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
            >
              <div class="row row-cols-md-2">

                <div class="fv-row mb-7">
                  <label class="FormL-label fw-bolder fs-6 text-gray-700 d-block">
                   {{ $t("from country") }}
                  </label>
                  <el-select
                      v-model="API.currentItem.from_id"
                      class="w-100"
                      filterable
                  >
                    <el-option
                        v-for="item in countries"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    >
                    </el-option>
                  </el-select>
                  <span v-if="API.errors['from_id']" class="text-danger">
                    {{ API.errors['from_id'][0] }}
                  </span>
                </div>
                <div class="fv-row mb-7">
                  <label class="FormL-label fw-bolder fs-6 text-gray-700 d-block">
                   {{ $t("to country") }}
                  </label>
                  <el-select
                      v-model="API.currentItem.to_id"
                      class="w-100"
                      filterable
                  >
                    <el-option
                        v-for="item in countries"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    >
                    </el-option>
                  </el-select>
                  <span v-if="API.errors['from_id']" class="text-danger">
                    {{ API.errors['from_id'][0] }}
                  </span>
                </div>
                <div class="fv-row mb-7" v-for="filed in inputs" :key="filed.key">
                  <div class="d-flex justify-content-between">
                    <label class="required fs-6 fw-bold mb-2">
                      {{ $t(filed.text) }}
                    </label>
                    <span>
                    <el-switch v-model="API.currentItem.site_show[filed.key]"
                               :active-value="1"
                               :inactive-value="0"
                    />
                      {{$t("Show on Site")}}
                  </span>
                  </div>

                  <el-form-item prop="title">
                    <el-input v-model="API.currentItem[filed.key]" type="text"/>
                  </el-form-item>
                  <span v-if="API.errors[filed.key]" class="text-danger">
                    {{ API.errors[filed.key][0] }}
                  </span>
                </div>
                <div class="fv-row mb-7 flex-column" >
                    <label class=" fs-6 fw-bold mb-2">
                      {{ $t("Show on site") }}
                    </label>
                    <el-switch v-model="API.currentItem.active"
                               :active-value="1"
                               :inactive-value="0"
                    />
                  </div>

              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
                id="kt_modal_add_branche_cancel"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                type="reset"
            >
              {{ $t("discard") }}
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
                :data-kt-indiBlogor="API.loading ? 'on' : null"
                :disabled="API.loading"
                class="btn btn-lg btn-primary"
                type="submit"
            >
                <span class="indicator-label">
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                  ><inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
                  </span>
                </span>
              <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent, ref} from "vue";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import moment from "moment";
import {can} from "@/core/services/JwtService";
import Pagnation from "@/components/pagnation";
import MyTable from "@/views/admin/components/myTable.vue";
import useTrip from "@/composables/trip";
import Location from "@/core/data/Location";

export default defineComponent({
  name: "trips-list",
  components: {
    MyTable,
    Pagnation,
  },
  data() {
    return {
      API: useTrip(),
      inputs: [
        {text: "vessel name", key: "vessel_name", type: "text", required: true,},
        {text: "liner", key: "liner", type: "text", required: true,},
        {text: "port of loading", key: "port_of_loading", type: "text", required: true,},
        {text: "port of discharge", key: "port_of_discharge", type: "text", required: true,},
        {text: "volume", key: "volume", type: "text", required: true,},
        {text: "ets", key: "ets", type: "text", required: true,},
        {text: "eta", key: "eta", type: "text", required: true,},
        {text: "t_t", key: "t_t", type: "text", required: true,},
        {text: "free_demure", key: "free_demure", type: "text", required: true,},

        {text: "cost_price", key: "cost_price", type: "text", required: true,},
        {text: "selling_price", key: "selling_price", type: "text", required: true,},
      ],
      countries:[],
    };
  },
  async created() {
    this.API.getList()
    this.countries = await Location.getCountries();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Shipment Trips"), [this.$t("cp")]);
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    can(p) {
      return can(p);
    }
  },
});
</script>
