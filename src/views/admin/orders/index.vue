<template>
  <div id="kt_content" class="content flex-row-fluid">
    <boxes :list="branch_sizes" />

    <div class="card mb-5">
      <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
        <span class="spinner-border text-primary"></span>
      </div>
      <!--begin::Card header-->
      <div class="card-header border-0 pt-6">
        <!--begin::Card title-->
        <div class="card-title">
          <!--begin::Search-->
          <h2 class="fw-bolder">{{ $t("orders") }}</h2>
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

            <button
              class="btn me-3"
              :class="{
                'btn-light-danger': !filters.archive,
                'btn-danger active': filters.archive,
              }"
              v-if="can('order-archive')"
              @click="
                filters.archive = !filters.archive;
                loadData(1);
              "
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg src="/media/icons/duotune/abstract/abs027.svg" />
              </span>
              {{ $t("archieve") }}
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
            <countries-with-key
              :FormLErrors="[]"
              :form-data="filters"
              :word="$t('from')"
              keyy="sender_country_id"
              obj="filters"
            ></countries-with-key>
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <countries-with-key
              :FormLErrors="[]"
              :form-data="filters"
              :word="$t('to')"
              keyy="receiver_country_id"
              obj="filters"
            ></countries-with-key>
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <label class="form-label fs-5 fw-bold mb-2">&nbsp;</label>
            <div class="d-flex align-items-center position-relative">
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
          </div>
          <div class="mb-5 col-md-6 col-lg-4">
            <label class="fs-5 fw-bold mb-2 d-block"> {{ $t("from") }}: </label>
            <!--end::Label-->
            <!--begin::Input-->
            <el-date-picker
              v-model="filters.start_date"
              :disabled="loading"
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
              v-model="filters.end_date"
              :disabled="loading"
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
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="mb-5 d-none">
            <!--begin::Label-->
            <label class="form-label fs-5 fw-bold mb-3">Payment Type:</label>
            <!--end::Label-->
            <!--begin::Options-->
            <div
              class="d-flex flex-column flex-wrap fw-bold"
              data-kt-customer-table-filter="payment_type"
            >
              <!--begin::Option-->
              <label
                class="
                  form-check form-check-sm form-check-custom form-check-solid
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
                  form-check form-check-sm form-check-custom form-check-solid
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
                  form-check form-check-sm form-check-custom form-check-solid
                  mb-3
                "
              >
                <input
                  class="form-check-input"
                  name="payment_type"
                  type="radio"
                  value="mastercard"
                />
                <span class="form-check-label text-gray-600">Mastercard</span>
              </label>
              <!--end::Option-->
              <!--begin::Option-->
              <label
                class="
                  form-check form-check-sm form-check-custom form-check-solid
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
              @click="
                filters.page = 1;
                loadData();
              "
            >
              {{ $t("Apply") }}
            </button>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Content-->
      </div>

      <!--begin::Card body-->
      <div v-if="Object.keys(orsers).length == 0">
        <KTModalCard
          :description="$t('noData')"
          :title="$t('Welcome')"
          image="/media/illustrations/sigma-1/n18.png"
        ></KTModalCard>
      </div>
      <div v-else class="card-body pt-0">
        <!--begin::Table-->
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
                <tr class="text-start text-gray-600 fw-bolder fs-7 gs-0">
                  <th>{{ $t("service") }}</th>
                  <th>{{ $t("customer") }}</th>
                  <th>{{ $t("status") }}</th>
                  <th class="min-w-225px">{{ $t("from") }} - {{ $t("to") }}</th>
                  <th class="min-w-150px">{{ $t("Payment") }}</th>
                  <th class="min-w-75px">{{ $t("created_at") }}</th>
                  <th class="min-w-75px">{{ $t("orderDate") }}</th>
                  <th>{{ $t("By") }}</th>
                  <th>{{ $t("Size") }}</th>
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
                    >
                      {{order.code}}
                    </div>
                  </td>
                  <td>
                    <template v-if="order.customer">
                      <a class="btn btn-sm btn-dark">{{order.customer.code}}</a>
                    </template>
                  </td>
                  <td>
                    <div class="d-flex flex-column align-items-center">
                      <div class="d-flex">
                        <template v-if="status[order.status]">
                          <span :class="'badge ' + status[order.status].class">
                            {{ status[order.status].name }}
                            <template
                              v-if="
                                order.is_returning == 0 && order.status == 62
                              "
                            >
                              - {{ $t("to_branch") }}</template
                            >
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
                    <span
                      class="badge badge-dark"
                      >{{ order.total_cost }}</span>
                    <span
                      v-if="order.total_payed >= order.total_cost"
                      class="badge badge-success">
                      {{ $t("Paid") }}
                    </span>
                    <span
                      v-else-if="order.total_status == 0"
                      class="badge badge-danger">
                      {{ $t("Not Paid") }}
                    </span>
                    <span
                      v-else
                      class="badge badge-info">
                      {{ $t("Not Paid") }}
                    </span>

                  </td>
                  <td>{{ formatDate(order.created_at) }}</td>
                  <td>{{ order.date }}</td>
                  <td>
                    {{
                      order.by_user.name ? order.by_user.name : $t("self_user")
                    }}
                  </td>
                  <td>{{ order.size }}</td>

                  <td class="text-end min-w-70px">
                    <template v-if="can('view-order')">
                      <router-link
                        :to="{ name: 'order-view', params: { Id: order.code } }"
                        class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                      >
                        <i class="icon-xl fas far fa-eye"></i>
                      </router-link>
                    </template>

                    <button
                      class="
                        btn btn-success btn-shadow
                        font-weight-bold
                        me-2
                        print-barCode
                      "
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      :title="$t('Print Label')"
                      @click="printQrcode(i)"
                    >
                      <i class="fas fa-barcode p-0"></i>
                    </button>
                    <template v-if="can('invoice-order')">
                      <button
                        class="
                          btn btn-success btn-shadow
                          font-weight-bold
                          print-barCode
                        "
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        :title="$t('Print Invoice')"
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

        <!--end::Table-->
      </div>
      <!--end::Card body-->
    </div>
  </div>

  <div id="print-bar-code" class="card d-none">
    <slot>
      <template v-if="currentIndex > -1">
        <bar-code v-bind:invoiceData="orsers[currentIndex]"></bar-code>
      </template>
    </slot>
  </div>

  <div id="print-invoice" class="card d-none">
    <template v-if="can('invoice-order') && currentIndex > -1">
      <invoice v-bind:invoiceData="orsers[currentIndex]"></invoice>
    </template>
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

export default defineComponent({
  name: "orders-list",
  components: {
    Boxes,
    CountriesWithKey,
    Pagnation,
    Invoice,
    BarCode,
    KTModalCard,
  },
  data() {
    return {
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      tableDataorders: [],
      OrdersformModelRef: (ref < null) | (HTMLFormElement > null),
      OrdersForm: {},
      OrdersErrors: [],
      isEditOrders: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),

      filters: {
        search: "",
        start_date: null,
        end_date: null,
        filters: [],
        status: "",
        page: 1,
        archive: false,
      },

      orsers: [],
      status: [],
      countries: [],
      counties: [],
      areas: [],
      paymetForm: {},
      paymetFormError: [],

      lockedStatus: [],
      canChange: [],
      changeOrderStatusValue: 0,

      // order nots
      OrderNoteFormErrors: [],
      OrderNoteForm: {},
      filterForm: {},
      currentIndex: -1,
      ordersPage: {},
      branch_sizes: {},
    };
  },
  async created() {
    await this.loadData();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("orders"), [this.$t("cp")]);
  },
  methods: {
    async loadData(page = 0) {
      this.loading = true;
      if (page > 0) this.filters.page = page;
      await ApiService.query("admin/orders", this.filters).then((data) => {
        this.orsers = data.data.data.data;
        this.ordersPage = data.data.data;
        if (this.filters.page == 1) {
          this.status = data.data.status;
          this.lockedStatus = data.data.lockedStatus;
          this.canChange = data.data.canChange;
          this.branch_sizes = data.data.branch_sizes;
        }
      });
      MenuComponent.reinitialization();
      this.loading = false;
    },

    changeOrderStatus(i) {
      Swal.fire({
        title:
          this.$t("areuSureToChangeOrderStateTo") +
          this.status[this.changeOrderStatusValue].name,
        text: this.orsers[i].code,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("yes"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.get(
            "admin/order/" +
              this.orsers[i].id +
              "/change/status/" +
              this.changeOrderStatusValue
          ).then(() => {
            this.$toast.success(this.$t("messages.success"));
            this.orsers[i].status = this.changeOrderStatusValue;
            Swal.fire(
              this.$t("orderStatusChangedSuccessfly"),
              this.orsers[i].code,
              "success"
            );
          });
        } else {
          this.changeOrderStatusValue = this.orsers[i].status;
        }
      });
    },

    async loadMoreDataOrder(i) {
      this.loading = true;
      await ApiService.get(
        "admin/order/" + this.orsers[i].id + "/moreData"
      ).then((res) => {
        this.orsers[i].history = res.data.history;
        this.orsers[i].notes = res.data.notes;
      });
      this.loading = false;
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },

    AddNoteToOrder(i) {
      this.loading = true;
      ApiService.post(
        "admin/order/" + this.orsers[i].id + "/add/note",
        this.OrderNoteForm
      ).then((res) => {
        this.orsers[i].notes = res.data.data;
      });
      this.loading = false;
    },
    copyCode(i) {
      navigator.clipboard.writeText(
        this.orsers[i].code// + `:1-${this.orsers[i].service_number}`
      );
      this.$toast.success(this.$t("copied"));
    },
    checkData(i) {
      this.currentIndex = i;
    },

    async printQrcode(i) {
      this.checkData(i);
      BarCode.methods.printCurrentInvoice();
    },
    async printInvoice(i) {
      this.checkData(i);
      Invoice.methods.printCurrentInvoice();
    },

    serchInUsers() {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("userSerach");
      filter = input.value.toUpperCase();
      ul = document.getElementById("searchContiner");
      li = ul.getElementsByTagName("a");

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (a.classList.contains("d-none") === true) {
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    },
    can(p) {
      return can(p);
    },
  },
});
</script>
