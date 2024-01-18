<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::Navbar-->
      <div class="card mb-6 mb-xl-9">
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
              <span class="symbol-label bg-light-danger text-danger fw-bold">{{
                customer.name.charAt(0)
              }}</span>
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
                      >({{ customer.code }} ){{ customer.name }}</a
                    >
                  </div>
                  <div class="d-flex align-items-center mb-1">
                    <a
                      class="
                        text-gray-800 text-hover-primary
                        fs-2
                        fw-bolder
                        me-3
                      "
                      href="#"
                    >{{ customer.name_ar }}</a
                    >
                  </div>
                  <!--end::Status-->
                  <!--begin::Description-->
                  <div
                    class="
                      d-flex
                      flex-wrap
                      fw-bold
                      mb-4
                      fs-5
                      text-gray-400
                      d-none
                    "
                  >
                    #1 Tool to get started with Web Apps any Kind &amp; size
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Details-->
                <!--begin::Actions-->
                <div class="d-flex mb-4">
                    <a class="btn btn-dark mx-2">
                        ( {{ customer.balance}} )
                    </a>
                  <notify-account
                    :url="`/admin/Notification/send/Customer/${customer.id}`"
                  ></notify-account>
                  <button
                    v-if="can('assign-user-customer')"
                    class="btn btn-primary d-none"
                    data-bs-target="#kt_modal_assigin_to_user"
                    data-bs-toggle="modal"
                    type="button"
                  >
                    {{ $t("Assigin To User") }}
                  </button>
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
                      <a
                        :href="'tel:' + customer.phone_1"
                        class="fs-4 fw-bolder"
                        >{{ customer.phone_1 }}</a
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <a
                        :href="'tel:' + customer.phone_2"
                        class="fs-4 fw-bolder"
                      >{{ customer.phone_2 }}</a
                      >
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
                        :href="'https://wa.me/' + customer.phone_1"
                        class="fs-4 fw-bolder"
                        data-kt-countup="true"
                        data-kt-countup-value="75"
                        target="_blank"
                      >
                        {{ customer.phone_1 }}
                      </a>
                    </div>
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
                        :href="'https://wa.me/' + customer.phone_2"
                        class="fs-4 fw-bolder"
                        data-kt-countup="true"
                        data-kt-countup-value="75"
                        target="_blank"
                      >
                        {{ customer.phone_2 }}
                      </a>
                    </div>
                    <!--end::Number-->
                    <!--begin::Label-->
                    <div class="fw-bold fs-6 text-gray-400">
                      {{ $t("whatsapp") }}
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Stat-->
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
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1"
                >
                  {{ $t("Overview") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_4"
                >
                  {{ $t("Client Data") }}
                </a>
              </li>
              <!--begin::Nav item-->
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary me-6 active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2"
                >
                  {{ $t("orders") }}
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_3"
                >
                  {{ $t("balance") }}
                </a>
              </li>

              <!--end::Nav item-->

            </ul>

            <!--end::Nav links-->
          </div>
          <!--end::Nav wrapper-->
        </div>
      </div>

      <div class="card bg-transparent">
        <div id="myTabContent" class="tab-content">
          <div id="kt_tab_pane_1" class="tab-pane fade" role="tabpanel">
            <div class="card-header border-0 pt-6">
              <!--begin::Card title-->
              <div class="card-title">
                {{ $t("Overview") }}
              </div>
              <!--begin::Card title-->
              <!--begin::Card toolbar-->
              <div class="card-toolbar"></div>
              <!--end::Card toolbar-->
            </div>
            <div class="card-body pt-0"></div>
          </div>
          <div id="kt_tab_pane_4" class="tab-pane fade" role="tabpanel">
            <client-form
              :formData="customer"
              :formErrorProp="formDataErroes"
              @submitForm="submitformData"
            ></client-form>
          </div>
          <div
            id="kt_tab_pane_2"
            class="tab-pane fade show active"
            role="tabpanel"
          >
            <div v-if="orders.length == 0">
              <KTModalCard
                :description="$t('noData')"
                :title="$t('Welcome')"
                image="/media/illustrations/sigma-1/n18.png"
              ></KTModalCard>
            </div>
            <div v-else class="card">
              <!--begin::Card header-->
              <div class="card-header border-0 pt-6">
                <!--begin::Card title-->
                <div class="card-title">
                  <!--begin::Search-->
                  <div class="d-flex align-items-center position-relative my-1">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                    <span class="svg-icon svg-icon-1 position-absolute ms-6">
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
                          transform="rotate(45 17.0365 15.1223)"
                          width="8.15546"
                          x="17.0365"
                          y="15.1223"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <input
                      v-model="filters.search"
                      class="form-control form-control-solid w-250px ps-15"
                      data-kt-customer-table-filter="search"
                      placeholder="Search Customers"
                      type="text"
                    />
                  </div>
                  <!--end::Search-->
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <div class="col-12 col-md-4 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <label class="required fs-5 fw-bold mb-2">{{
                      $t("from_day")
                    }}</label>
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
                    <!--end::Input-->
                  </div>
                  <div class="col-12 col-md-4 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <label class="required fs-5 fw-bold mb-2">{{
                      $t("to_day")
                    }}</label>
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
                    <!--end::Input-->
                  </div>
                  <div class="col-12 col-md-4 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <!--end::Label-->
                    <button
                      :disabled="loading"
                      class="btn btn-lg btn-primary"
                      @click="loadOrdersData()"
                    >
                      <span v-if="!loading">
                        {{ $t("submit") }}
                      </span>
                      <span v-if="loading">
                        <span
                          class="
                            spinner-border spinner-border-sm
                            align-middle
                            ms-2
                          "
                        ></span>
                      </span>
                    </button>
                    <!--end::Input-->
                  </div>
                </div>
                <!--end::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-0">
                <my-table
                  :btn="null"
                  v-if="ordersPage.data"
                  :list="ordersPage.data"
                  url="/admin/orders"
                  filters_key="filters"
                  :tableHeader="[
                    { name: 'service', key: 'service' },
                    { name: 'status', key: 'status' },
                    { name: 'from', key: 'from' },
                    { name: 'By', key: 'By' },

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
                        copyCode(
                          item.code + `:1`
                        )
                      "
                    >{{item.code}}</div>
                  </template>
                  <template v-slot:cell-status="{ row: item }">
                    <div class="d-flex flex-column align-items-center">

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
                  <template v-slot:cell-By="{ row: item }">
                    <a v-if="item.by_user">
                    {{
                        item.by_user.name ? item.by_user.name : $t("self_user")
                    }}
                    </a>
                  </template>
                  <template v-slot:cell-Payment="{ row: item }">
                     <span
                       :class="
                        item.total_status == 0
                          ? 'badge-danger'
                          : 'badge-success'
                      "
                       class="badge"
                     >{{ item.total_cost }}</span>

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
                <pagnation
                  v-model:pageNumber="filters.page"
                  :page="ordersPage"
                  @change="loadOrdersData"
                ></pagnation>
              </div>
              <!--end::Card body-->
            </div>
          </div>
          <div
            id="kt_tab_pane_3"
            class="tab-pane fade show active"
            role="tabpanel"
          >

            <div  class="card">
              <!--begin::Card header-->
              <div class="card-header border-0 pt-6">
                <!--begin::Card title-->
                <div class="card-title">
                  {{ $t("balance") }}

                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <a class="btn btn-sm btn-primary"
                     data-bs-target="#kt_modal_balance_to_client"
                     data-bs-toggle="modal"
                     type="button"
                  >
                    {{$t('add Balance')}}
                  </a>

                </div>
                <!--end::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-0">
                <div class="collapse d-none">
                  <div class="col-12 col-md-4 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <label class="required fs-5 fw-bold mb-2">{{
                        $t("from_day")
                      }}</label>
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
                    <!--end::Input-->
                  </div>
                  <div class="col-12 col-md-4 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <label class="required fs-5 fw-bold mb-2">{{
                        $t("to_day")
                      }}</label>
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
                    <!--end::Input-->
                  </div>
                  <div class="col-12 col-md-4 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <!--end::Label-->
                    <button
                      :disabled="loading"
                      class="btn btn-lg btn-primary"
                      @click="loadOrdersData()"
                    >
                      <span v-if="!loading">
                        {{ $t("submit") }}
                      </span>
                      <span v-if="loading">
                        <span
                          class="
                            spinner-border spinner-border-sm
                            align-middle
                            ms-2
                          "
                        ></span>
                      </span>
                    </button>
                    <!--end::Input-->
                  </div>

                </div>
                <my-table
                  :btn="null"
                  v-if="ordersPage.data"
                  :list="ordersPage.data"
                  url="/admin/orders"
                  filters_key="filters"
                  :tableHeader="[
                    { name: 'service', key: 'service' },
                    { name: 'status', key: 'status' },
                    { name: 'from', key: 'from' },
                    { name: 'By', key: 'By' },

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
                        copyCode(
                          item.code + `:1`
                        )
                      "
                    >{{item.code}}</div>
                  </template>
                  <template v-slot:cell-status="{ row: item }">
                    <div class="d-flex flex-column align-items-center">

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
                  <template v-slot:cell-By="{ row: item }">
                    <a v-if="item.by_user">
                    {{
                        item.by_user.name ? item.by_user.name : $t("self_user")
                    }}
                    </a>
                  </template>
                  <template v-slot:cell-Payment="{ row: item }">
                     <span
                       :class="
                        item.total_status == 0
                          ? 'badge-danger'
                          : 'badge-success'
                      "
                       class="badge"
                     >{{ item.total_cost }}</span>

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
                <pagnation
                  v-model:pageNumber="filters.page"
                  :page="ordersPage"
                  @change="loadOrdersData"
                ></pagnation>
              </div>
              <!--end::Card body-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Post-->
  </div>
  <div
    id="kt_modal_assigin_to_user"
    v-if="can('assign-user-customer')"
    class="modal fade"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t("Assigin To User") }}</h5>

          <!--begin::Close-->
          <div
            aria-label="Close"
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-2x"></span>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <select-user-multy></select-user-multy>
        </div>

        <div class="modal-footer">
          <button class="btn btn-light" data-bs-dismiss="modal" type="button">
            {{ $t("close") }}
          </button>
        </div>
      </div>
    </div>
  </div>
<!--  v-if="can('add-balance-customer')"-->
  <div
    id="kt_modal_balance_to_client"
    class="modal fade"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t("Add balance To User") }}</h5>

          <!--begin::Close-->
          <div
            aria-label="Close"
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-2x"></span>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">

          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold form-label mb-2">{{
                $t("amount")
              }}($)</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
              v-model="charageForm.amount"
              class="form-control form-control-solid"
              type="text"
            />
            <!--end::Input-->
          </div>
          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold form-label mb-2">{{
                $t("reference")
              }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
              v-model="charageForm.reference"
              class="form-control form-control-solid"
              type="text"
            />
            <!--end::Input-->
          </div>


        </div>

        <div class="modal-footer">

          <button class="btn btn-light" data-bs-dismiss="modal" type="button">
            {{ $t("close") }}
          </button>
          <button
            :data-kt-indicator="loading ? 'on' : null"
            :disabled="loading"
            class="btn btn-primary"
            @click="charageClirnt"
          >
            <span class="indicator-label">{{ $t("submit") }}</span>
            <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    id="kt_modal_notify_order"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header py-7 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>{{ $t("notify Customers") }}</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
        </div>
        <div class="modal-footer">
          <button class="btn btn-light me-3" data-bs-dismiss="modal">
            {{ $t("discard") }}
          </button>
          <button
            :data-kt-indicator="loading ? 'on' : null"
            :disabled="loading"
            class="btn btn-primary"
            type="submit"
          >
            <span class="indicator-label">{{ $t("submit") }}</span>
            <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
          </button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import KTModalCard from "@/components/cards/Card.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { can } from "@/core/services/JwtService";
import ClientForm from "@/views/admin/clients/ClientForm";
import Visites from "@/views/admin/clients/visites";
import Pagnation from "@/components/pagnation";
import NotifyAccount from "@/views/admin/notify/notifyAccount";
import moment from "moment";
import MyTable from "@/views/admin/components/myTable";
import SelectUserMulty from "@/views/admin/users/selectUserMulty";
import {hideModal} from "@/core/helpers/dom";

export default defineComponent({
  name: "customereView",
  components: {
    SelectUserMulty,
    MyTable,
    // MyTableAjax,
    NotifyAccount,
    ClientForm,
    Pagnation,
    // Selectuser,
    //ClientFormSocial,
    // Visites,
    // ClientForm,
    KTModalCard,
  },
  data() {
    return {
      formDataErroes: {},
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        page: 1,
        customer_id: 0,
      },
      loading: true,
      customer: { id: 0, name: "" },
      orders: [],
      status: [],
      charageForm:{},
      ordersPage:{}
    };
  },
  async created() {
    this.filters.customer_id = this.$route.params.id;
    ApiService.query(
      "admin/customers/" + this.$route.params.id,
      this.filters
    ).then((res) => {
      if (res.data.customer) {
        // this.services = res.data.services;
        // this.status = res.data.status;
        this.customer = res.data.customer;
        setCurrentPageBreadcrumbs(this.customer.name, [
          this.$t("cp"),
          this.$t("customers"),
        ]);
      }
    });
    this.loadOrdersData();
  },
  methods: {
    async loadOrdersData(page = 0) {
      if (page > 0) this.filters.page = page;
      await ApiService.query("admin/orders", this.filters).then((res) => {
        if (res.data.data) {
          this.orders = res.data.data.data;
          this.ordersPage = res.data.data;
          if (res.data.services) this.services = res.data.services;
          if (res.data.status) this.status = res.data.status;
        }
      });
      this.loading = false;
    },

    copyCode(i) {
      navigator.clipboard.writeText(this.orders[i].code);
      this.$toast.success("message.copied");
    },

    can(p) {
      return can(p);
    },

    async submitformData() {
      this.loading = true;
      await ApiService.put(
        "admin/customers/" + this.customer["id"],
        this.customer
      )
        .then((res) => {
          this.$toast.success(this.$t("messages.success"));
          this.customer = res.data.data;
        })
        .catch((error) => {
          this.formDataErroes = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async charageClirnt() {
      this.loading = true;
      this.loading = true;
      await ApiService.put(
        "admin/customers/" + this.customer["id"]+'/charge/balance',
        this.charageForm
      )
        .then((res) => {
          this.$toast.success(this.$t("messages.success"));
            console.log(res)
            this.customer.balance = res.data.balance;
            hideModal('kt_modal_balance_to_client')
        })
        .catch((error) => {
          this.formDataErroes = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
  },
});
</script>
