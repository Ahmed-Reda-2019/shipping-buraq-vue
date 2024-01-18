<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::Navbar-->
      <div v-if="user.id && user.id > 0" class="card mb-6 mb-xl-9">
        <div class="card-body pt-9 pb-0">
          <!--begin::Details-->
          <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
            <!--begin::Image-->
            <div
              class="
                d-flex
                flex-center flex-shrink-0
                bg-light
                rounded
                w-100px
                h-100px
                w-lg-150px
                h-lg-150px
                me-7
                mb-4
              "
            >
              <div class="symbol symbol-100px symbol-lg-160px symbol-fixed">
                <img :src="user.profile" />
              </div>
            </div>
            <!--end::Image-->
            <!--begin::Wrapper-->
            <div class="flex-grow-1">
              <!--begin::Head-->
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-start
                  flex-wrap
                  mb-2
                "
              >
                <!--begin::Details-->
                <div class="d-flex flex-column">
                  <!--begin::Status-->
                  <div class="d-flex align-items-center mb-1">
                    <a
                      class="
                        text-gray-800 text-hover-primary
                        fs-2
                        fw-bolder
                        me-3
                      "
                      href="#"
                      >{{ user.name }}</a
                    >
                    <span
                      v-if="user.status && user.status == 1"
                      class="badge badge-light-success me-auto"
                      >{{ $t("active") }}</span
                    >
                    <span v-else class="badge badge-light-danger me-auto">{{
                      $t("unactive")
                    }}</span>
                  </div>
                  <!--end::Status-->
                  <!--begin::Description-->
                  <div
                    class="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400"
                  ></div>
                  <!--end::Description-->
                </div>
                <!--end::Details-->
                <!--begin::Actions-->
                <div class="d-flex mb-4">
                  <notify-account
                    :url="`/admin/Notification/send/User/${user.id}`"
                    v-if="can('send-notification')"
                  ></notify-account>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Head-->
              <!--begin::Info-->
              <div class="d-flex flex-wrap justify-content-start">
                <!--begin::Stats-->
                <div class="d-flex flex-wrap">
                  <!--begin::Stat-->
                  <div
                    class="
                      border border-gray-300 border-dashed
                      rounded
                      min-w-125px
                      py-3
                      px-4
                      me-6
                      mb-3
                    "
                  >
                    <!--begin::Number-->
                    <div class="d-flex align-items-center">
                      <div class="fs-4 fw-bolder">{{ user.phone }}</div>
                    </div>
                    <!--end::Number-->
                    <!--begin::Label-->
                    <div class="fw-bold fs-6 text-gray-400">
                      {{ $t("phone") }}
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Stat-->
                  <!--begin::Stat-->
                  <div
                    class="
                      border border-gray-300 border-dashed
                      rounded
                      min-w-125px
                      py-3
                      px-4
                      me-6
                      mb-3
                    "
                  >
                    <!--begin::Number-->
                    <div class="d-flex align-items-center">
                      <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg-->
                      <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="black"
                            height="2"
                            opacity="0.5"
                            rx="1"
                            transform="rotate(-90 11 18)"
                            width="13"
                            x="11"
                            y="18"
                          />
                          <path
                            d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                      <div
                        class="fs-4 fw-bolder"
                        data-kt-countup="true"
                        data-kt-countup-value="75"
                      >
                        {{ user.whatsapp }}
                      </div>
                    </div>
                    <!--end::Number-->
                    <!--begin::Label-->
                    <div class="fw-bold fs-6 text-gray-400">
                      {{ $t("whatsapp") }}
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Stat-->
                  <div
                      class="
                      border border-gray-300 border-dashed
                      rounded
                      min-w-125px
                      py-3
                      px-4
                      me-6
                      mb-3
                    "
                  >
                    <!--begin::Number-->
                    <div class="d-flex align-items-center">
                      <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg-->
                      <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                        <svg
                            height="24px"
                            version="1.1"
                            viewBox="0 0 24 24"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                              fill="none"
                              fill-rule="evenodd"
                              stroke="none"
                              stroke-width="1"
                          >
                            <rect height="24" width="24" x="0" y="0" />
                            <polygon
                                fill="#000000"
                                opacity="0.3"
                                points="5 15 3 21.5 9.5 19.5"
                            />
                            <path
                                d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z"
                                fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                      <a
                          class="fs-4 fw-bolder"
                          data-kt-countup="true"
                          data-kt-countup-value="75"
                          target="_blank"
                      >
                        {{ user.role.title }}
                      </a>
                    </div>
                    <!--end::Number-->
                    <!--begin::Label-->
                    <div class="fw-bold fs-6 text-gray-400">
                      {{ $t("role") }}
                    </div>
                    <!--end::Label-->
                  </div>

                </div>
                <!--end::Stats-->
              </div>
              <!--end::Info-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Details-->
          <div class="separator"></div>
          <!--begin::Nav wrapper-->
          <div class="d-flex overflow-auto h-55px">
            <!--begin::Nav links-->
            <ul
              class="
                nav nav-stretch nav-line-tabs nav-line-tabs-2x
                border-transparent
                fs-5
                fw-bolder
                flex-nowrap
              "
            >
              <!--begin::Nav item-->
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary me-6 active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1"
                >
                  {{ $t("Overview") }}
                </a>
              </li>
              <!--end::Nav item-->
              <!--begin::Nav item-->
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2"
                >
                  {{ $t("orders") }}
                </a>
              </li>

              <!--end::Nav item-->

              <li class="nav-item">
                <a
                  v-if="hasRole('salesman')"
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_3"
                >
                  {{ $t("User Counties") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  v-if="hasRole('salesman')"
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_4"
                >
                  {{ $t("customers") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="nav-link text-active-primary me-6"
                    data-bs-toggle="tab"
                    href="#kt_tab_pane_5"
                >
                  {{ $t("images") }}
                </a>
              </li>
            </ul>

            <!--end::Nav links-->
          </div>
          <!--end::Nav wrapper-->
        </div>
      </div>

      <div class="card">
        <div id="myTabContent" class="tab-content">
          <div
            id="kt_tab_pane_1"
            class="tab-pane fade show active"
            role="tabpanel"
          ></div>
          <div id="kt_tab_pane_2" class="tab-pane fade" role="tabpanel">
            <my-table
              :btn="null"
              :list="orders"
              :tableHeader="[
                { name: 'service', key: 'service' },
                { name: 'status', key: 'status' },
                { name: 'from', key: 'from' },
                { name: 'Payment', key: 'Payment' },
                { name: 'created_at', key: 'created_at' },
                { name: 'orderDate', key: 'orderDate' },
                { name: 'actions', key: 'actions' },
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
                  @click="
                    copyCode(item.code + `:1-${this.orsers[i].service_number}`)
                  "
                  v-html="item.service.icon"
                ></div>
              </template>
              <template v-slot:cell-status="{ row: item }">
                <div class="d-flex flex-column align-items-center">
                  <span
                    v-if="item.receipt_from_branch == 1"
                    class="badge badge-warning mb-1"
                  >
                    {{ $t("Receiving_from_branch") }}
                  </span>
                  <span
                    v-if="item.delivery_to_branch == 1"
                    class="badge badge-warning mb-1"
                  >
                    {{ $t("Deliver_to_branch") }}
                  </span>
                  <div class="d-flex">
                    <template v-if="status[item.status]">
                      <span :class="'badge ' + status[item.status].class">
                        {{ status[item.status].name }}
                        <template
                          v-if="item.is_returning == 0 && item.status == 62"
                        >
                          - {{ $t("to_branch") }}</template
                        >
                      </span>
                    </template>
                    <template v-if="item.is_returning == 1">
                      <span class="badge badge-danger ms-1">
                        {{ $t("returning") }}
                      </span>
                    </template>
                  </div>
                </div>
              </template>
              <template v-slot:cell-from="{ row: item }">
                {{ $t("from") }} >>> {{ item.fromAdrress }}<br />
                {{ $t("to") }} >>> {{ item.toAdrress }}
              </template>
              <template v-slot:cell-Payment="{ row: item }">
                <h3>
                  {{ item.payment.name }}
                </h3>
                <span
                  :class="
                    item.shipping_paid == 0 ? 'badge-danger' : 'badge-success'
                  "
                  class="badge"
                  >{{ item.shipping_cost }}</span
                >
              </template>
              <template v-slot:cell-created_at="{ row: item }">
                {{ formatDate(item.created_at) }}
              </template>
              <template v-slot:cell-orderDate="{ row: item }">
                {{ item.date }}
              </template>
              <template v-slot:cell-actions="{ row: item }">
                <template v-if="can('view-order')">
                  <router-link
                    :to="{
                      name: 'order-view',
                      params: { Id: item.code },
                    }"
                    class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                  >
                    <i class="icon-xl fas far fa-eye"></i>
                  </router-link>
                </template>
              </template>
            </my-table>
            <Pagnation
              v-model:pageNumber="filters.page"
              :page="ordersPage"
              @change="loadOrdersData"
            ></Pagnation>
          </div>
          <div
            id="kt_tab_pane_3"
            v-if="hasRole('salesman')"
            class="tab-pane fade"
            role="tabpanel"
          >
            <div v-if="user" class="pt-0">
              <user-counties :userId="user.id"></user-counties>
            </div>
          </div>
          <div
            id="kt_tab_pane_4"
            class="tab-pane fade"
            role="tabpanel"
            v-if="hasRole('salesman')"
          >
            <div v-if="user" class="pt-0">
              <div v-if="customerList.length == 0">
                <KTModalCard
                  :description="$t('noData')"
                  :title="$t('User Customers')"
                  image="/media/illustrations/sigma-1/n18.png"
                ></KTModalCard>
              </div>
              <div v-else class="card">
                <div class="card-header border-0 pt-6">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <!--begin::Search-->
                    {{ $t("User Customers") }}
                    <!--end::Search-->
                  </div>
                  <!--begin::Card title-->
                  <!--begin::Card toolbar-->
                  <div class="card-toolbar"></div>
                  <!--end::Card toolbar-->
                </div>
                <div class="card-body pt-0">
                  <div class="table-responsive">
                    <table
                      id="kt_customers_table"
                      class="
                        table
                        align-middle
                        table-row-dashed
                        fs-6
                        gy-5
                        dataTable
                        no-footer
                      "
                      role="grid"
                    >
                      <div
                        v-if="loading"
                        class="blockui-overlay bg-dark bg-opacity-25"
                      >
                        <span class="spinner-border text-primary"></span>
                      </div>

                      <!--begin::Table head-->
                      <thead>
                        <!--begin::Table row-->
                        <tr
                          class="
                            text-start text-gray-400
                            fw-bolder
                            fs-7
                            text-uppercase
                            gs-0
                          "
                          role="row"
                        >
                          <th>{{ $t("customer") }}</th>
                          <th>{{ $t("county") }}</th>
                          <th>{{ $t("actions") }}</th>
                        </tr>
                      </thead>
                      <tbody v-if="customerList">
                        <tr
                          v-for="(item, i) in customerList"
                          :key="i"
                          :class="i % 2 == 0 ? 'odd' : ''"
                        >
                          <td>
                            {{ item.name }}
                          </td>
                          <td>
                            {{ item.phone }}
                          </td>
                          <td>
                            <router-link
                              :to="{
                                name: 'customers-view',
                                params: { customer: item.id },
                              }"
                              class="
                                btn btn-icon btn-light-success
                                mt-0
                                mb-0
                                m-2
                              "
                            >
                              <i class="icon-xl fas far fa-eye"></i>
                            </router-link>

                            <a
                              class="
                                btn btn-icon btn-light-danger
                                mt-0
                                mb-0
                                m-2
                              "
                              @click="deleteCustomer(i, item)"
                            >
                              <i class="icon-xl fas fa-trash-alt"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
              id="kt_tab_pane_5"
              class="tab-pane fade "
              role="tabpanel"
          >
                <div class="overlay-wrapper w-50 ">
                  <img :src="user.cardFrontSrc" alt="" class="w-100 rounded"/>
                </div>
            <div class="overlay-wrapper w-50">
                  <img :src="user.cardBackSrc" alt="" class="w-100 rounded"/>
                </div>

          </div>
        </div>
      </div>
    </div>
    <!--end::Post-->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import KTModalCard from "@/components/cards/Card.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { can, hasRole } from "@/core/services/JwtService";
import UserCounties from "@/views/admin/users/userCounties";
import NotifyAccount from "@/views/admin/notify/notifyAccount";
import MyTable from "@/views/admin/components/myTable";
import moment from "moment";
import Pagnation from "@/components/pagnation";

export default defineComponent({
  name: "usereView",
  components: {
    Pagnation,
    MyTable,
    NotifyAccount,
    UserCounties,
    KTModalCard,
    // Visites,
    // ClientForm,
    // KTModalCard,
  },
  data() {
    return {
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        page: 1,
        by_user: 0,
      },
      loading: true,
      areaForm: {},
      areaFormErrors: [],
      user: { id: 0, name: "" },
      orders: [],
      services: [],
      payments: [],
      status: [],

      tableuserUsers: new Object(),
      tableuserAreas: [],
      allUsers: [],
      orderErrors: [],

      countries: [],
      counties: [],
      areas: [],
      customerList: [],
      ordersPage: {},
    };
  },
  async created() {
    this.filters.by_user = this.$route.params.id;
    ApiService.query("admin/users/" + this.$route.params.id, this.filters).then(
      (res) => {
        if (res.data.data) {
          this.user = res.data.data;
          this.customerList = res.data.customerList;

          setCurrentPageBreadcrumbs(this.user.name, [
            this.$t("cp"),
            this.$t("users"),
          ]);
        }
      }
    );

    this.loadOrdersData();
  },
  methods: {
    async loadOrdersData() {
      await ApiService.query("admin/orders", this.filters).then((res) => {
        if (res.data.data) {
          this.orders = res.data.data.data;
          this.ordersPage = res.data.data;
          if (res.data.status) this.status = res.data.status;
        }
      });
      this.loading = false;
    },

    async addUserTouser(i) {
      this.loading = true;
      await ApiService.post(
        "admin/useres/" + this.user.id + "/add/user/" + this.allUsers[i].id,
        this.AreaForm
      )
        .then(() => {
          hideModal("kt_modal_view_users");
          this.tableuserUsers[this.allUsers[i].id] = this.allUsers[i];
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          return;
        });
    },

    async removeUserTouser(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableuserUsers[i].name +
          " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
          ApiService.post(
            "admin/useres/" +
              this.user.id +
              "/remove/user/" +
              this.tableuserUsers[i].id,
            []
          )
            .then(() => {
              this.$toast.success(this.$t("messages.success"));

              delete this.tableuserUsers[this.tableuserUsers[i].id];
              // this.tableuserUsers.splice(i, 1)
              Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
              );
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
              return;
            });
        }
      });
    },

    async addAreaTouser() {
      this.loading = true;
      await ApiService.post(
        "admin/useres/" + this.user.id + "/add/area/" + this.areaForm.area_id,
        []
      )
        .then((res) => {
          this.tableuserAreas = res.data.data;
          hideModal("kt_modal_new_Area");
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          return;
        });
    },

    async removeAreaTouser(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableuserAreas[i].name +
          " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
          ApiService.post(
            "admin/useres/" +
              this.user.id +
              "/remove/area/" +
              this.tableuserAreas[i].id,
            []
          )
            .then((res) => {
              this.$toast.success(this.$t("messages.success"));
              if (res.data.data) this.tableuserAreas = res.data.data;
              Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
              );
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
              return;
            });
        }
      });
    },

    copyCode(i) {
      navigator.clipboard.writeText(this.orders[i].code);
      this.$toast.success("message.copied");
    },

    can(p) {
      return can(p);
    },
    hasRole(role) {
      return hasRole(role, this.user);
    },
    async deleteCustomer(i, cu) {
      this.loading = true;
      await ApiService.post("admin/customers/unassien/customer", {
        user_id: this.user.id,
        customer_id: cu.id,
      })
        .then((res) => {
          if (res.status == 200) {
            this.customerList.splice(i, 1);
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
});
</script>
