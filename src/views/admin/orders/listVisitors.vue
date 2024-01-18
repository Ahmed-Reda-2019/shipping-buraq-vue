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
              <h2 class="fw-bolder">{{ $t("list Visitors") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <router-link
                :to="{ name: 'Orders-list' }"
                class="btn btn-light-primary mx-2"
              >
                {{ $t("orders") }}
              </router-link>

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
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                      fill="black"
                    />
                  </svg>
                </span>
                {{ $t("filter") }}
              </button>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->

          <div class="card-body pt-3">
            <div id="kt-toolbar-filter" class="collapse">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-4 text-dark fw-bolder">
                  <span class="svg-icon svg-icon-1 ms-6">
                    <inline-svg src="/media/icons/duotune/general/gen021.svg" />
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
                <div class="mb-10 col-md-6 col-lg-4">
                  <countries-with-key
                    :FormLErrors="[]"
                    :form-data="filters"
                    :word="$t('from')"
                    keyy="sender_country_id"
                    obj="filters"
                  ></countries-with-key>
                </div>
                <div class="mb-10 col-md-6 col-lg-4">
                  <countries-with-key
                    :FormLErrors="[]"
                    :form-data="filters"
                    :word="$t('to')"
                    keyy="receiver_country_id"
                    obj="filters"
                  ></countries-with-key>
                </div>
                <div
                  class="
                    d-flex
                    align-items-center
                    position-relative
                    mb-10
                    col-md-6 col-lg-4
                  "
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                  <span class="svg-icon svg-icon-1 position-absolute ms-6">
                    <inline-svg src="/media/icons/duotune/general/gen021.svg" />
                  </span>
                  <!--end::Svg Icon-->
                  <input
                    v-model="filters.search"
                    :placeholder="$t('Search')"
                    class="form-control form-control-solid ps-15"
                    data-kt-customer-table-filter="search"
                    type="text"
                  />
                </div>

                <div class="mb-10 col-md-6 col-lg-4">
                  <!--begin::Label-->
                  <label class="form-label fs-5 fw-bold mb-3"
                    >{{ $t("status") }}:</label
                  >
                  <!--end::Label-->
                  <!--begin::Input-->
                  <select
                    v-model="filters.status"
                    class="form-select form-select-solid fw-bolder"
                    data-allow-clear="true"
                    data-dropdown-parent="#kt-toolbar-filter"
                    data-kt-customer-table-filter="month"
                    data-kt-select2="true"
                    data-placeholder="Select option"
                  >
                    <option value="">{{ $t("all") }}</option>
                    <option v-for="sta in status" :key="sta.id" :value="sta.id">
                      {{ sta.name }}
                    </option>
                  </select>
                  <!--end::Input-->
                </div>
                <div class="mb-10 col-md-6 col-lg-4">
                  <label class="fs-5 fw-bold mb-2 d-block">
                    {{ $t("from") }}:
                  </label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-date-picker
                    v-model="filters.start_date"
                    class="w-100"
                    format="YYYY/MM/DD"
                    placeholder="Pick a Date"
                    type="date"
                    value-format="YYYY-MM-DD"
                  >
                  </el-date-picker>
                </div>

                <div class="mb-10 col-md-6 col-lg-4">
                  <label class="fs-5 fw-bold mb-2 d-block">
                    {{ $t("to") }}:
                  </label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-date-picker
                    v-model="filters.end_date"
                    class="w-100"
                    format="YYYY/MM/DD"
                    placeholder="Pick a Date"
                    type="date"
                    value-format="YYYY-MM-DD"
                  >
                  </el-date-picker>
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10 d-none">
                  <!--begin::Label-->
                  <label class="form-label fs-5 fw-bold mb-3"
                    >Payment Type:</label
                  >
                  <!--end::Label-->
                  <!--begin::Options-->
                  <div
                    class="d-flex flex-column flex-wrap fw-bold"
                    data-kt-customer-table-filter="payment_type"
                  >
                    <!--begin::Option-->
                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        mb-3
                        me-5
                      "
                    >
                      <input
                        checked="checked"
                        class="form-check-input"
                        name="payment_type"
                        type="radio"
                        value="all"
                      />
                      <span class="form-check-label text-gray-600">All</span>
                    </label>
                    <!--end::Option-->
                    <!--begin::Option-->
                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        mb-3
                        me-5
                      "
                    >
                      <input
                        class="form-check-input"
                        name="payment_type"
                        type="radio"
                        value="visa"
                      />
                      <span class="form-check-label text-gray-600">Visa</span>
                    </label>
                    <!--end::Option-->
                    <!--begin::Option-->
                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                        mb-3
                      "
                    >
                      <input
                        class="form-check-input"
                        name="payment_type"
                        type="radio"
                        value="mastercard"
                      />
                      <span class="form-check-label text-gray-600"
                        >Mastercard</span
                      >
                    </label>
                    <!--end::Option-->
                    <!--begin::Option-->
                    <label
                      class="
                        form-check
                        form-check-sm
                        form-check-custom
                        form-check-solid
                      "
                    >
                      <input
                        class="form-check-input"
                        name="payment_type"
                        type="radio"
                        value="american_express"
                      />
                      <span class="form-check-label text-gray-600"
                        >American Express</span
                      >
                    </label>
                    <!--end::Option-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button
                    class="btn btn-light btn-active-light-primary me-2"
                    data-kt-menu-dismiss="true"
                    @click="
                      filters.search = '';
                      filters.end_date = null;
                      filters.start_date = null;
                      filters.status = null;
                    "
                  >
                    {{ $t("Reset") }}
                  </button>
                  <button
                    class="btn btn-primary"
                    data-kt-menu-dismiss="true"
                    @click="load()"
                  >
                    {{ $t("Apply") }}
                  </button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Content-->
            </div>

            <my-table-ajax
              ref="MyTableAjax"
              :btn="null"
              url="/admin/orders/visitors"
              filters_key="filters"
              :tableHeader="[
                { name: 'service', key: 'service' },
                { name: 'to', key: 'toAdrress' },
                { name: 'from', key: 'fromAdrress' },
                { name: 'senderAddress', key: 'sender_address' },
                { name: 'senderEmail', key: 'sender_email' },
                { name: 'senderName', key: 'sender_name' },
                { name: 'senderPhone', key: 'sender_phone' },
                { name: 'zip', key: 'sender_zip' },
                { name: 'counts', key: 'count' },
              ]"
            >
              <template v-slot:cell-service="{ row: item }">
                <div
                  class="
                    cursor-pointer
                    d-flex
                    justify-content-center
                    align-content-center
                    service-icon
                  "
                  @click="copyCode(item.code)"
                  v-html="item.service.icon"
                ></div>
              </template>
              <template v-slot:cell-fromAdrress="{ row: item }">
                {{ item.fromAdrress }}
              </template>
              <template v-slot:cell-toAdrress="{ row: item }">
                {{ item.toAdrress }}
              </template>
              <template v-slot:cell-sender_address="{ row: item }">
                {{ item.sender_address }}
              </template>
              <template v-slot:cell-sender_email="{ row: item }">
                {{ item.sender_email }}
              </template>
              <template v-slot:cell-sender_name="{ row: item }">
                {{ item.sender_name }}
              </template>
              <template v-slot:cell-sender_phone="{ row: item }">
                {{ item.sender_phone }}
              </template>
              <template v-slot:cell-sender_zip="{ row: item }">
                {{ item.sender_zip }}
              </template>
              <template v-slot:cell-count="{ row: item }">
                {{ item.count }}
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
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import MyTableAjax from "@/views/admin/components/myTableAjax";
import CountriesWithKey from "@/views/admin/locations/countriesWithKey";

export default defineComponent({
  name: "listVisitors",
  components: { MyTableAjax, CountriesWithKey },
  data() {
    return {
      list: [],
      loading: true,
      status: "",
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        filters: [],
        status: "",
      },
    };
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("list Visitors"), [this.$t("cp")]);
  },
  methods: {
    load() {
      this.$refs.MyTableAjax.loadData(1);
    },
    copyCode(code) {
      navigator.clipboard.writeText(code);
      this.$toast.success(this.$t("copied"));
    },
  },
});
</script>
