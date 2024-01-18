<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
            <span class="spinner-border text-primary"></span>
          </div>

          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("myOrders") }}</h2>
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
                  class="btn btn-light-primary me-3"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-trigger="click"
                  type="button"
                >
                  <span class="svg-icon svg-icon-2">
                    <inline-svg src="/media/icons/duotune/general/gen031.svg" />
                  </span>
                  {{ $t("filter") }}
                </button>
                <!--begin::Menu 1-->
                <div
                  id="kt-toolbar-filter"
                  class="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                  data-kt-menu="true"
                >
                  <!--begin::Header-->
                  <div class="px-7 py-5">
                    <div class="fs-4 text-dark fw-bolder">
                      {{ $t("filterOptions") }}
                    </div>
                  </div>
                  <!--end::Header-->
                  <!--begin::Separator-->
                  <div class="separator border-gray-200"></div>
                  <!--end::Separator-->
                  <!--begin::Content-->
                  <div class="px-7 py-5">
                    <!--begin::Input group-->
                    <div
                      class="d-flex align-items-center position-relative my-1"
                    >
                      <span class="svg-icon svg-icon-1 position-absolute ms-6">
                        <inline-svg
                          src="/media/icons/duotune/general/gen021.svg"
                        />
                      </span>
                      <input
                        v-model="filters.search"
                        class="form-control form-control-solid w-250px ps-15"
                        data-kt-customer-table-filter="search"
                        placeholder="Search Customers"
                        type="text"
                      />
                    </div>

                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fs-5 fw-bold mb-3">
                        {{ $t("status") }}:
                      </label>
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
                        <option value=""></option>
                        <option
                          v-for="sta in status"
                          :key="sta.id"
                          :value="sta.id"
                        >
                          {{ sta.name }}
                        </option>
                      </select>
                      <!--end::Input-->
                    </div>
                    <div class="mb-10">
                      <label class="required fs-5 fw-bold mb-2">
                        {{ $t("from_day") }}
                      </label>
                      <!--end::Label-->
                      <!--begin::Input-->
                      <el-date-picker
                        v-model="filters.start_date"
                        :disabled="loading"
                        format="YYYY/MM/DD"
                        placeholder="Pick a Date"
                        type="date"
                        value-format="YYYY-MM-DD"
                      >
                      </el-date-picker>
                    </div>
                    <div class="mb-10">
                      <label class="required fs-5 fw-bold mb-2">
                        {{ $t("to_day") }}
                      </label>
                      <!--end::Label-->
                      <!--begin::Input-->
                      <el-date-picker
                        v-model="filters.end_date"
                        :disabled="loading"
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
                          <span class="form-check-label text-gray-600"
                            >All</span
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
                          <span class="form-check-label text-gray-600"
                            >Visa</span
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
                        @click="loadData(1)"
                      >
                        {{ $t("Apply") }}
                      </button>
                    </div>
                    <!--end::Actions-->
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Menu 1-->
                <!--end::Filter-->
              </div>
            </div>
          </div>

          <KTModalCard
            v-if="orsers.length == 0"
            :description="$t('noData')"
            :title="$t('myOrders')"
            image="/media/illustrations/sigma-1/n18.png"
          ></KTModalCard>
          <div v-else class="card-body">
            <div
              id="kt_permissions_table_wrapper"
              class="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div class="table-responsive">
                <table
                  id="kt_customerss_table"
                  class="table align-middle table-row-dashed fs-6 gy-5"
                >
                  <!--begin::Table head-->
                  <thead>
                    <!--begin::Table row-->
                    <tr
                      class="
                        text-start text-gray-600
                        fw-bolder
                        fs-7
                        text-uppercase
                        gs-0
                      "
                    >
                      <th>{{ $t("service") }}</th>
                      <th>{{ $t("status") }}</th>
                      <th class="min-w-225px">
                        {{ $t("from") }} - {{ $t("to") }}
                      </th>
                      <th class="min-w-150px">{{ $t("Payment") }}</th>
                      <th class="min-w-75px">{{ $t("orderDate") }}</th>
                      <th class="text-end min-w-200px">
                        {{ $t("actions") }}
                      </th>
                    </tr>
                    <!--end::Table row-->
                  </thead>
                  <tbody class="fw-bold text-gray-600">
                    <tr
                      v-for="(order, i) in orsers"
                      :key="i"
                      class="
                        text-start text-gray-400
                        fw-bolder
                        fs-7
                        text-uppercase
                        gs-0
                        text-gray-900
                      "
                    >
                      <td>
                        <div
                          class="
                            cursor-pointer
                            d-flex
                            justify-content-center
                            align-content-center
                            service-icon
                          "
                          @click="copyCode(i)"
                          v-html="services[order.service_id].icon"
                        ></div>
                      </td>
                      <td>
                        <div class="d-flex flex-column align-items-center">
                          <span
                            v-if="order.receipt_from_branch == 1"
                            class="badge badge-warning mb-1"
                          >
                            {{ $t("Receiving_from_branch") }}
                          </span>
                          <span
                            v-if="order.delivery_to_branch == 1"
                            class="badge badge-warning mb-1"
                          >
                            {{ $t("Deliver_to_branch") }}
                          </span>
                          <div class="d-flex">
                            <template v-if="status[order.status]">
                              <span
                                :class="'badge ' + status[order.status].class"
                              >
                                {{ status[order.status].name }}
                                <template
                                  v-if="
                                    order.is_returning == 0 &&
                                    order.status == 62
                                  "
                                >
                                  - {{ $t("to_branch") }}</template
                                >
                              </span>
                            </template>
                            <template v-if="order.is_returning == 1">
                              <span class="badge badge-danger ms-1">
                                {{ $t("returning") }}
                              </span>
                            </template>
                          </div>
                        </div>
                      </td>
                      <td>
                        {{ $t("from") }} >>> {{ order.fromAdrress }}<br />
                        {{ $t("to") }} >>> {{ order.toAdrress }}
                      </td>
                      <td>
                        <template v-if="payments[order.shipping_payment_id]">
                          <h3>
                            {{ payments[order.shipping_payment_id].name }}
                          </h3>
                        </template>
                        <span
                          :class="
                            order.shipping_paid == 0
                              ? 'badge-danger'
                              : 'badge-success'
                          "
                          class="badge"
                          >{{ order.shipping_cost }}</span
                        >
                      </td>
                      <td>{{ order.date }}</td>
                      <td class="text-end">
                        <template
                          v-if="order.canCancel && order.canCancel == 1"
                        >
                          <button
                            class="
                              btn btn-light-primary btn-shadow
                              font-weight-bold
                              me-2
                            "
                            data-bs-target="#kt_modal_edit_Address"
                            data-bs-toggle="modal"
                            @click="currentIndex = i"
                          >
                            <i class="fas fa-user-edit p-0"></i>
                          </button>
                          <button
                            class="
                              btn btn-danger btn-shadow
                              font-weight-bold
                              me-2
                            "
                            @click="cancelOrder(i)"
                          >
                            <i class="fas fa-window-close p-0"></i>
                          </button>
                        </template>
                        <template v-if="order.status != 2">
                          <button
                            class="
                              btn btn-success btn-shadow
                              font-weight-bold
                              me-2
                              print-barCode
                            "
                            @click="printQrcode(i)"
                          >
                            <i class="fas fa-barcode p-0"></i>
                          </button>
                          <button
                            class="
                              btn btn-success btn-shadow
                              font-weight-bold
                              print-barCode
                            "
                            @click="printInvoice(i)"
                          >
                            <i class="fas fa-file-invoice p-0"></i>
                          </button>
                        </template>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <pagnation
              v-model:pageNumber="filters.page"
              :page="ordersPage"
              @change="loadData"
            ></pagnation>
          </div>

          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
      </div>
    </div>
  </div>

  <div
    id="kt_modal_edit_Address"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">{{ $t("edit") }}</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            id="kt_modal_edit_Addressr_close"
            class="btn btn-icon btn-sm btn-active-icon-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Modal body-->

        <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <edit-address-from
            :editUrl="
              'site/customer/orders/edit/address/' +
              (currentIndex > -1 ? orsers[currentIndex].id : 0)
            "
            :orderData="currentIndex > -1 ? orsers[currentIndex] : {}"
            @afterEdit="editOrderAddress"
          ></edit-address-from>

          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <div id="print-bar-code" class="card d-none">
    <template v-if="currentIndex > -1">
      <bar-code v-bind:invoiceData="orsers[currentIndex]"></bar-code>
    </template>
  </div>
  <div id="print-invoice" class="card d-none">
    <template v-if="currentIndex > -1">
      <invoice
        v-bind:invoiceData="orsers[currentIndex]"
        v-bind:orderData="orsers[currentIndex]"
      ></invoice>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import KTModalCard from "@/components/cards/Card.vue";
import Invoice from "../../../print/invoice";
import BarCode from "../../../print/barCode";
import moment from "moment";
import EditAddressFrom from "@/views/admin/orders/editAddressFrom";
import Pagnation from "@/components/pagnation";
import { MenuComponent } from "@/assets/ts/components/index";

export default defineComponent({
  name: "MyOrder-list",
  components: {
    Pagnation,
    EditAddressFrom,
    BarCode,
    Invoice,
    KTModalCard,
  },
  data() {
    return {
      loading: true,
      orsers: [],
      payments: [],
      services: [],
      status: [],
      types: [],
      countries: [],
      counties: [],
      areas: [],
      currentIndex: -1,
      filters: {
        filters: [],
        search: "",
        start_date:
          moment().format("YYYY-MM-") +
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1
          ).getDate(),
        end_date:
          moment().format("YYYY-MM-") +
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          ).getDate(),
        page: 1,
      },

      ordersPage: {},
    };
  },
  created() {
    this.loadData();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("MyOrder"), []);
  },
  methods: {
    async loadData(page = 0) {
      this.loading = true;
      if (page > 0) this.filters.page = page;
      await ApiService.query("site/customer/orders", this.filters)
        .then((data) => {
          this.orsers = data.data.data.data;
          this.ordersPage = data.data.data.data;
          if (data.data.payments) {
            this.payments = data.data.payments;
            this.services = data.data.services;
            this.status = data.data.status;

            this.types = data.data.types;
            this.countries = data.data.country;
            this.counties = data.data.county;
            this.areas = data.data.areas;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    checkData(i) {
      this.currentIndex = i;
      let order = this.orsers[i];
      if (!this.orsers[i].toAdrress) {
        this.orsers[i].toAdrress = this.areas[order.receiver_area_id].name;
        if (
          this.areas[order.receiver_area_id] &&
          this.counties[this.areas[order.receiver_area_id].county_id]
        )
          this.orsers[i].toAdrress +=
            " - " +
            this.counties[this.areas[order.receiver_area_id].county_id].name;

        this.orsers[i].fromAdrress = this.areas[order.sender_area_id].name;
        if (
          this.areas[order.sender_area_id] &&
          this.counties[this.areas[order.sender_area_id].county_id]
        )
          this.orsers[i].fromAdrress +=
            " - " +
            this.counties[this.areas[order.sender_area_id].county_id].name;
      }
    },
    printQrcode(i) {
      this.checkData(i);
      BarCode.methods.printCurrentInvoice();
    },
    printInvoice(i) {
      this.checkData(i);
      Invoice.methods.printCurrentInvoice();
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    copyCode(i) {
      navigator.clipboard.writeText(this.orsers[i].code);
      this.$toast.success(this.$t("copied"));
    },
    cancelOrder(i) {
      this.loading = true;
      Swal.fire({
        title: this.$t("Are You Sure To Cancel Order ?"),
        text: this.orsers[i].code,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("yes"),
      })
        .then((result) => {
          if (result.isConfirmed) {
            ApiService.put(
              "site/customer/orders/cancel/" + this.orsers[i].id,
              []
            ).then((res) => {
              this.orsers[i] = res.data.data;
              Swal.fire(
                this.$t("Order has been Canceled"),
                this.order.code,
                "success"
              );
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    editOrderAddress() {
      hideModal("kt_modal_edit_Address");
      Swal.fire(this.$t("Successfly"), this.order.code, "success");
    },
  },
});
</script>
