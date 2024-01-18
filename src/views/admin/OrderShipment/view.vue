<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->

    <div class="card ">
      <div class="card-header">
        <div class="card-title">
        <h3>{{ $t("Container Data") }} : {{ continer.name }}</h3>
        </div>
        <div class="card-toolbar">

          <template v-if="ContainerStatus[continer.status]">
            <span :class="'badge ' + ContainerStatus[continer.status].class">
              {{ ContainerStatus[continer.status].name }}
            </span>
          </template>

        </div>

      </div>
      <div class="card-body  row">
        <!--begin::Details-->
        <!--end::Details-->
        <div class="row p-2"
             :class="{
        'col-12 col-md-9 ' :continer.qrcode ,
      }">
          <div class="fv-row col-12 col-md-4 mb-5">
            <label class="required fs-5 fw-bold mb-2">
              {{ $t("container name") }}
            </label>
            <el-input disabled v-model="continer.name" type="text"/>
            <span v-if="errors['name']" class="text-danger">{{
                errors["name"][0]
              }}</span>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <label class="required fs-5 fw-bold mb-2">{{ $t("type") }} </label>

            <select
                v-model="continer.type_id"
                class="form-select form-select-solid fw-bolder"
            >
              <option
                  v-for="type in continerTypes"
                  :key="type.id"
                  :value="type.id"
              >
                {{ type.name }}
              </option>
            </select>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <!--begin::Label-->
            <label class="form-label fs-5 fw-bold mb-2"
            >{{ $t("status") }}:</label
            >
            <!--end::Label-->
            <!--begin::Input-->
            <select
                v-model="continer.status"
                class="form-select form-select-solid fw-bolder"
            >
              <option
                  v-for="item in ContainerStatus"
                  :key="item.id"
                  :value="item.id"
              >
                {{ $t(item.name) }}
              </option>
            </select>
            <!--end::Input-->
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <label class="fs-5 fw-bold mb-2 d-block">
              {{ $t("Send Time") }}:
            </label>
            <!--end::Label-->
            <!--begin::Input-->
            <el-date-picker
                v-model="continer.send_time"
                :disabled="loading"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
            >
            </el-date-picker>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <label class="fs-5 fw-bold mb-2 d-block">
              {{ $t("Receive Time") }}:
            </label>
            <!--end::Label-->
            <!--begin::Input-->
            <el-date-picker
                v-model="continer.receive_time"
                :disabled="loading"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
            >
            </el-date-picker>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <country-with-key
                :FormLErrors="errors"
                obj="continer"
                keyy="from_country"
                :form-data="continer"
                :word="$t('from Country')"
            ></country-with-key>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <country-with-key
                :FormLErrors="errors"
                obj="continer"
                keyy="to_country"
                :form-data="continer"
                :word="$t('To Country')"
            ></country-with-key>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <label class="required fs-5 fw-bold mb-2"
            >{{ $t("Full Size") }}
            </label>
            <el-input v-model="continer.TypeSize" readonly type="text"/>
          </div>
          <div class="fv-row col-12 col-md-4 mb-5">
            <label class="required fs-5 fw-bold mb-2">{{ $t("Size") }} </label>
            <el-input v-model="continer.size" readonly type="text"/>
          </div>
          <div class="col-12 ">
<!--            <template v-if="continer.id">-->
<!--              <label class="fs-5 fw-bold mb-2 text-center w-100"-->
<!--              >{{ continer.percent }} %-->
<!--              </label>-->
<!--              <progressbar :percent="continer.percent"></progressbar>-->
<!--            </template>-->
          </div>

          <div class="d-flex justify-content-end col-12">
            <button :disabled="loading" class="btn btn-primary" @click="save()">
              {{ $t("Save") }}
            </button>
<!--            && ContainerStatus.status-->
            <button v-if="continer.id && continer.id > 0 "
                    :disabled="loading" class="btn btn-danger" @click="closeContainer()">
              {{ $t("Close Container To Send") }}
            </button>
          </div>
        </div>
        <div class="card mb-6 mb-xl-9 col-3 col-12 col-md-3 my-auto" v-if="continer.qrcode">
          <img :src="continer.qrcode" class="img-fluid">
        </div>
        <div class="separator"></div>
        <!--begin::Nav wrapper-->
        <div v-if="continer.id && continer.id > 0" class="d-flex overflow-auto h-55px">
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
                {{ $t("All Orders") }}
              </a>
            </li>
            <li class="nav-item">
              <a
                  class="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2"
              >
                {{ $t("Continer Orders") }}
              </a>
            </li>
          </ul>

          <!--end::Nav links-->
        </div>
        <!--end::Nav wrapper-->
      </div>
    </div>


    <div id="myTabContent" class="tab-content" v-if="continer.id && continer.id > 0 ">
      <div id="kt_tab_pane_1" class="tab-pane fade show active" role="tabpanel">
        <div class="card">
          <div class="card-header border-0 pt-6">
            <!--begin::Card title-->
            <div class="card-title">
              <!--begin::Search-->
              <div
                  class="d-flex align-items-center position-relative my-1"
              ></div>
              <!--end::Search-->
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->

            <div class="card-toolbar">
              <!--begin::Group actions-->
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

              <!--end::Group actions-->
            </div>
            <!--end::Card toolbar-->
          </div>
          <div class="card-body pt-0">
            <div id="kt-toolbar-filter" class="collapse">
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
              <div class="px-7 py-5 row-cols-sm-auto row-cols-md-auto row">
                <!--begin::Input group-->
                <div class="col-md-6 col-lg-4 mb-5">
                  <countries-with-key
                      :FormLErrors="[]"
                      :form-data="filters"
                      :word="$t('from')"
                      keyy="sender_country_id"
                      obj="filters"
                  ></countries-with-key>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                  <countries-with-key
                      :FormLErrors="[]"
                      :form-data="filters"
                      :word="$t('to')"
                      keyy="receiver_country_id"
                      obj="filters"
                  ></countries-with-key>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                  <label class="fs-5 fw-bold mb-2 d-block">&nbsp;</label>
                  <div class="d-flex align-items-center position-relative">
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

                    <input
                        v-model="filters.search"
                        :placeholder="$t('Search')"
                        class="form-control form-control-solid ps-15"
                        data-kt-customer-table-filter="search"
                        type="text"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                  <!--begin::Label-->
                  <label class="fs-5 fw-bold mb-2 d-block">
                    {{ $t("status") }}:
                  </label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <select
                      v-model="filters.status"
                      class="form-select form-select-solid fw-bolder"
                  >
                    <option value="" :key="0">{{ $t("all") }}</option>
                    <option v-for="sta in status" :key="sta.id" :value="sta.id">
                      {{ sta.name }}
                    </option>
                  </select>
                  <!--end::Input-->
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                  <label class="fs-5 fw-bold mb-2 d-block">
                    {{ $t("from") }}:
                  </label>
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
                <div class="col-md-6 col-lg-4 mb-5">
                  <label class="fs-5 fw-bold mb-2 d-block">
                    {{ $t("to") }}:
                  </label>
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
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="d-none">
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
                <div class="d-flex mt-5 justify-content-end">
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
                      loadOrders();
                    "
                  >
                    {{ $t("Apply") }}
                  </button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Content-->
            </div>
            <my-table
                :list="orders"
                :tableHeader="[
                { name: 'service', key: 'service' },
                { name: 'date', key: 'date' },
                { name: 'from', key: 'senderAddress' },
                { name: 'to', key: 'toAdrress' },
                { name: 'status', key: 'status' },
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
                    @click="copyCode(`${item.code}$1`)"

                >
                  {{item.code}}

                  #1 => #{{item.service_number}}
                </div>
              </template>
              <template v-slot:cell-date="{ row: item }">
                {{ item.date }}
              </template>
              <template v-slot:cell-fromAdrress="{ row: item }">
                {{ item.fromAdrress }}
              </template>
              <template v-slot:cell-toAdrress="{ row: item }">
                {{ item.toAdrress }}
              </template>
              <template v-slot:cell-status="{ row: item }">
                <template v-if="item.StatusOb">
                  <span :class="'badge ' + item.StatusOb.class">
                    {{ item.StatusOb.name }}
                  </span>
                </template>
              </template>
              <template v-slot:cell-actions="{ row: item }">
                <template v-if="can('view-order')">
                  <router-link
                      :to="{ name: 'order-view', params: { Id: item.code } }"
                      class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                  >
                    <i class="icon-xl fas far fa-eye"></i>
                  </router-link>
                </template>

                <a
                    v-if="continer.orders && !continer.orders[item.id]"
                    class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                    data-bs-target="#kt_modal_add_order_to_Container"
                    data-bs-toggle="modal"
                    @click="CurrentOrder = item"
                >
                  <i class="icon-xl fas far fa-tools"></i>
                </a>
              </template>
            </my-table>
          </div>
          <pagnation
              v-model:pageNumber="filters.page"
              :page="ordersPage"
              @change="loadOrders"
          ></pagnation>
        </div>
      </div>
      <div id="kt_tab_pane_2" class="tab-pane fade" role="tabpanel">
        <div class="card">
          <div class="card-header border-0 pt-6">
            <!--begin::Card title-->
            <div class="card-title">
              <!--begin::Search-->
              <div
                  class="d-flex align-items-center position-relative my-1"></div>
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
                    href="#kt-toolbar-Scan"
                    role="button"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
                  <span class="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                       height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <rect fill="#000000" opacity="0.3" x="4" y="4" width="8" height="16"/>
        <path
            d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z"
            fill="#000000" fill-rule="nonzero"/>
    </g>
</svg>
                  </span>
                  {{ $t("Scan Code") }}
                </button>
              </div>
            </div>
            <!--end::Card toolbar-->
          </div>

          <div class="card-body pt-0">

            <div id="kt-toolbar-Scan" class="collapse row pt-5 bg-dark ">
              <div class="col-12 col-md-6 ">
                <qrcode-scanner
                    :fps="10"
                    :qrbox="250"
                    class="position-relative w-100 mw-600px mx-auto"
                    @result="onScan"
                />
              </div>
              <div class="col-12 col-md-6 ">
                <div
                    class="position-relative w-100 mw-600px mx-auto mb-5"
                    style="background: rgba(255, 255, 255, 0.05)"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                  <span
                      v-if="!loading"
                      class="
                svg-icon svg-icon-2qx svg-icon-white
                position-absolute
                top-50
                translate-middle
                ms-9
              "
                      @click="serchOrder()"
                  >
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
                  <span
                      v-if="loading"
                      class="text-white position-absolute mt-7 ms-5 spinner-border"
                  ></span>
                  <!--end::Svg Icon-->
                  <input
                      v-model="tracking.code"
                      :disabled="loading"
                      :placeholder="$t('Order_Nr')"
                      class="
                form-control
                bg-transparent
                fs-2
                py-6
                ps-17
                placeholder-white
                opacity-75
                text-white
              "
                      @keydown.enter="serchOrder()"
                      style="border: 1px solid rgb(225 172 109)"
                      type="text"
                      @change="serchOrder()"
                  />
                </div>
                <div class="card" v-if="boxes && boxes.length > 0">
                  <div class="card-body d-flex flex-column ">
                    <!--begin::Item-->
                    <div class="d-flex align-items-center mb-5" v-for="(item,i) in boxes" :key="i">
                      <!--begin::Avatar-->
                      <div class="me-5 position-relative">
                        <!--begin::Image-->
                        <div class="symbol symbol-35px symbol-circle">
                          <span class="symbol-label bg-light-danger text-danger fw-bold">{{ item.number }}</span>
                        </div>
                        <!--end::Image-->
                      </div>
                      <!--end::Avatar-->
                      <!--begin::Details-->
                      <div class="fw-bold">
                        <a class="fs-5 fw-bolder text-gray-900 text-hover-primary">{{
                            `${tracking.qrcode}:${item.number}`
                          }}</a>
                      </div>
                      <!--end::Details-->
                      <!--begin::Badge-->
                      <div class="badge badge-success ms-auto" v-if="item.status_id == 65">
                        <i class="fa fa-check text-dark" aria-hidden="true"></i>
                      </div>
                      <template v-else>
                        <div class="badge badge-danger ms-auto" >
                          <i class="icon-xl far fa-window-close text-dark"></i>
                        </div>
                        <span v-if="item.status_ob" class="mx-2 badge " :class="item.status_ob.class">
                          {{item.status_ob.name}}
                        </span>
                      </template>

                      <!--end::Badge-->
                    </div>
                    <!--end::Item-->
                  </div>
                </div>

              </div>
            </div>
            <my-table
                :list="continer.orders"
                :tableHeader="[
                { name: 'service', key: 'service' },
                { name: 'date', key: 'date' },
                { name: 'fromAdrress', key: 'fromAdrress' },
                { name: 'toAdrress', key: 'toAdrress'  },
                { name: 'sender', key: 'sender' , class:'d-print-none' },
                { name: 'status', key: 'status' },
                { name: 'size', key: 'size' },
                  //{ name: 'dimensions', key: 'dimensions' , class:'d-none' },
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
                    @click="copyCode(`${item.code}:1-${item.service_number}`)"
                ></div>
<!--                v-html="item.service.icon"-->

                {{ item.code }}
              </template>
              <template v-slot:cell-date="{ row: item }">
                {{ item.date }}
              </template>
              <template v-slot:cell-fromAdrress="{ row: item }">
                {{ item.fromAdrress }}
              </template>
              <template v-slot:cell-toAdrress="{ row: item }">
                {{ item.toAdrress }}
              </template>
              <template v-slot:cell-size="{ row: item }">
                {{ item.size }}
              </template>
              <template v-slot:cell-dimensions="{ row: item }">
                {{ $t('height') + ' : ' + item.height }}
                {{ $t('width') + ' : ' + item.width }}
                <br/>
                {{ $t('height') + ' : ' + item.length }}
                {{ $t('width') + ' : ' + item.weight }}
              </template>
              <template v-slot:cell-status="{ row: item }">
                <template v-if="item.StatusOb">
                  <span :class="'badge ' + item.StatusOb.class">
                    {{ item.StatusOb.name }}
                  </span>
                </template>
              </template>
              <template v-slot:cell-actions="{ row: item, index: index }">
                <template v-if="can('view-order')">
                  <router-link
                      :to="{ name: 'order-view', params: { Id: item.code } }"
                      class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                  >
                    <i class="icon-xl fas far fa-eye"></i>
                  </router-link>
                </template>

                <a
                    class="btn btn-icon  mt-0 mb-0 m-2 "
                    @click="deleteOrderFromContiner(index)"
                    :class="{
                    'btn-light-danger':item.pivot.status == 1,
                    'btn-light-warning':item.pivot.status == 2,
                  }"
                    :disabled="item.status == 2"
                >
                  <i class="icon-xl fas far fa-tools"></i>
                </a>
              </template>
            </my-table>
          </div>
        </div>
      </div>
    </div>

    <div
        id="kt_modal_add_order_to_Container"
        ref="my-modal"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Country_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">
              {{ $t("assien order To continer") }}
            </h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                id="kt_modal_Shipment_Container__close"
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
          <el-form @submit.prevent="addOrderToContiner()">
            <!--begin::Modal body-->
            <div v-if="CurrentOrder.id" class="modal-body py-10 px-lg-17">
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

                <div class="fv-row mb-7">
                  <label class="required fs-5 fw-bold mb-2"
                  >{{ $t("Order Actual Size") }}
                  </label>
                  <el-input
                      v-model="CurrentOrder.size"
                      min=".0001"
                      step=".0001"
                      type="number"
                  />
                </div>

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
                      :data-kt-indicator="loading ? 'on' : null"
                      :disabled="loading"
                      class="btn btn-lg btn-primary"
                      type="submit"
                  >
                    <span class="indicator-label">
                      {{ $t("Add To this Countiner") }}
                      <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                      ><inline-svg
                          src="/media/icons/duotune/arrows/arr064.svg"
                      />
                      </span>
                    </span>
                    <span class="indicator-progress">
                      {{ $t("PleaseWait") }}
                      <span
                          class="
                          spinner-border spinner-border-sm
                          align-middle
                          ms-2
                        "
                      ></span>
                    </span>
                  </button>
                  <!--end::Button-->
                </div>


                <div class="modal-header">
                  <!--begin::Modal title-->
                  <h2 class="fw-bolder">
                      {{CurrentOrder.code}}  {{ `   ${CurrentOrder.service_number}` + $t("Boxes")  }}
                  </h2>
                  <!--end::Modal title-->
                </div>

                <table
                    class="
                    table
                    align-middle
                    table-row-dashed
                    fs-6
                    gy-5
                    mb-0
                    table-responsive
                  "
                >
                  <tr class="w-100">
                    <td>
                      {{ $t("height") }}
                    </td>
                    <td>{{ CurrentOrder.height }} Cm</td>
                    <td>
                      {{ $t("width") }}
                    </td>
                    <td>{{ CurrentOrder.width }} Cm</td>
                  </tr>
                  <tr class="w-100">
                    <td>
                      {{ $t("length") }}
                    </td>
                    <td>{{ CurrentOrder.length }} Cm</td>
                    <td>
                      {{ $t("weight") }}
                    </td>
                    <td>{{ CurrentOrder.weight }} Kg</td>
                  </tr>
                </table>

                <table
                    v-if="CurrentOrder.items && CurrentOrder.items.length > 0"
                    id="kt_table_customers_payment"
                    class="table align-middle table-row-dashed gy-5"
                >
                  <!--begin::Table head-->
                  <thead class="border-bottom border-gray-200 fs-7 fw-bolder">
                  <tr class="text-start text-muted text-uppercase gs-0">
                    <th>#</th>
                    <th>{{ $t("type") }}</th>
                    <th>{{ $t("content") }}</th>
                    <th>{{ $t("quantity") }}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item, i) in CurrentOrder.items" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>
                      <template v-if="item.type && item.type.id">
                        {{ item.type.name }}
                      </template>
                    </td>
                    <td>{{ item.other_content }}</td>
                    <td>{{ item.quantity }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <!--end::Modal footer-->
          </el-form>
          <!--end::Form-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import {hideModal} from "@/core/helpers/dom";
import MyTable from "@/views/admin/components/myTable";
import {MenuComponent} from "@/assets/ts/components";
import CountriesWithKey from "@/views/admin/locations/countriesWithKey";
import Pagnation from "@/components/pagnation";
import {can} from "@/core/services/JwtService";
import CountryWithKey from "@/views/admin/locations/countryWithKey";
import Progressbar from "@/components/progressbar";
import ContainerStatus from "@/core/config/ContainerStatus";
import QrcodeScanner from "@/components/qrcode-scanner";

export default defineComponent({
  name: "view-continer",
  components: {
    QrcodeScanner,
    // Progressbar,
    CountryWithKey,
    Pagnation,
    CountriesWithKey,
    MyTable,
  },
  data() {
    return {
      ContainerStatus: ContainerStatus,
      loading: false, //ref(useStore().getters.Submitted),
      id: null,
      TypeForm: {},
      TypeErrors: [],
      isEditType: -1,
      status: "",
      CurrentOrder: {},
      continerTypes: [],
      errors: [],
      continer: {},
      ordersPage: {},
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        status: "",
        page: 1,
      },
      tracking: {},
      boxes:[]
    };
  },
  created() {
    ApiService.get("admin/shipments/types/ShipmentContainer").then((data) => {
      this.continerTypes = data.data.data;
    });

    if (this.$route.params.id && this.$route.params.id > 0)
      ApiService.get(
          "admin/shipments/orders/Container/" + this.$route.params.id
      ).then((res) => {
        if (res.status == 200) {
          this.continer = res.data;
        } else this.$router.push({name: "404"});
      });
    this.loadOrders();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Shipment Containers"), [this.$t("cp")]);
  },
  methods: {
    async loadOrders(page = 0) {
      this.loading = true;
      if (page > 0) this.filters.page = page;
      await ApiService.query(
          "admin/shipments/OrderContainer/orders",
          this.filters
      ).then((data) => {
        this.ordersPage = data.data.data;
        if (this.filters.page == 1) {
          this.status = data.data.status;
        }
      });
      MenuComponent.reinitialization();
      this.loading = false;
    },

    async save() {
      this.loading = true;
      this.TypeErrors = [];
      if (this.continer.id && this.continer.id > 0) {
        await ApiService.put(
            "admin/shipments/orders/Container/" + this.continer.id,
            this.continer
        )
            .then((res) => {
              this.$toast.success(this.$t("messages.success"));
              this.continer = res.data.data;
            })
            .catch((error) => {
              this.errors = ApiService.errors;
            });
      } else {
        await ApiService.post("admin/shipments/orders/Container", this.continer)
            .then((res) => {
              if (res.data.data) {
                this.$toast.success(this.$t("messages.success"));
                this.continer = res.data.data;
              }
            })
            .catch(() => {
              this.errors = ApiService.errors;
            });
      }
      this.loading = false;
    },

    async addOrderToContiner() {
      this.loading = true;
      let data = {};
      data["size"] = this.CurrentOrder.size;
      await ApiService.post(
          "admin/shipments/orders/OrderContainer/" +
          this.continer.id +
          "/add/order/" +
          this.CurrentOrder.id,
          data
      )
          .then((res) => {
            if (res.status == 200) {
              hideModal("kt_modal_add_order_to_Container");
              this.continer.size = res.data.shipment_size;
              this.continer.percent = res.data.shipment_percent;
              this.CurrentOrder.pivot = {
                status: 1
              }
              if (
                  this.continer.orders.length == 0 ||
                  Object.keys(this.continer.orders).length == 0
              ) {
                this.continer.orders = {};
              }
              this.continer.orders[this.CurrentOrder.id] = this.CurrentOrder;

              this.$toast.success(this.$t("messages.success"));
            } else {
              this.$toast.error(this.$t("messages.fail"));
            }
          })
          .catch(() => {
            this.loading = false;
          });
      this.loading = false;
    },
    moveOrderToContainer(code) {
      this.loading = true;
      ApiService.get(`admin/shipments/orders/OrderContainer/addOrderToContainer/${this.continer.id}/${code}`).then((res) => {
        if (res.status == 200) {
          this.$toast(res.data.message)
          this.continer.orders[res.data.order.id] = res.data.order;
        }
      }).finally(() => {
        this.loading = false;
      })
    },
    async deleteOrderFromContiner(i) {
      if (this.continer.orders[i].pivot.status == 2) {
        this.$toast.error(this.$t('this Order cant removed'))
        return;
      }
      Swal.fire({
        title:
            this.$t("messages.are to drop this Order From Container") +
            " ? ( " +
            this.continer.orders[i].code +
            " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.Yes"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(
              "admin/shipments/orders/OrderContainer/" +
              this.continer.id +
              "/remove/order/" +
              this.continer.orders[i].id
          ).then((res) => {
            delete this.continer.orders[i];

            this.continer.size = res.data.shipment_size;
            this.continer.percent = res.data.shipment_percent;

            Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
            );
          });
        }
      });
    },
    can(p) {
      return can(p);
    },
    copyCode(code) {
      navigator.clipboard.writeText(code);
      this.$toast.success(this.$t("copied"));
    },
    onScan(decodedText, decodedResult) {
      // this.tracking.code = decodedText.substr(decodedText.indexOf('tracking')  +'tracking'.length + 1 );
      let startIndex = decodedText.indexOf("tracking/");
      if (startIndex == -1 )
        startIndex = 0;
      else startIndex +=9;
      this.tracking.code = decodedText.substr(startIndex)
      this.serchOrder();
    },
    async serchOrder() {
      console.log(this.tracking.code)
      if (this.tracking.code.length < 3) return;
      this.loading = true;
      this.status = [];
      // code like XXXX-000000#1
      var code = this.tracking.code.split('$');
      if (code.length != 2 ) {
        this.$toast.error('this not Box')
        this.loading = false;
      }

      this.tracking.p1Code = code[0];
      this.tracking.p2CodeNumber = code[1];

      this.tracking.numbers = [];
      // Array.from(
      //     Array(parseInt(this.tracking.p2CodeArray[1])).keys()
      // );
      if (this.tracking.qrcode == this.tracking.p1Code) {
        ;
      } else {
        // this.tracking.qrcode = this.tracking.p1Code;
        this.tracking.items = {};

      }
      // this.tracking.items[this.tracking.p2CodeArray[0]] = this.tracking.code;

      this.loading = false;
      this.sendCode();
    },
    async sendCode() {
      console.log("tracking.code " + this.tracking.code);
      // this.tracking.code = this.tracking.code.replace('#',":");
      if (this.loading) {
        this.$toast.warning(this.$t('PleaseWait'));
        return;
      }
      this.loading = true;
      this.boxes = [];
      await ApiService.get(`admin/shipments/orders/OrderContainer/moveOrderInContainer/${this.continer.id}/${this.tracking.code}`).then(
          (res) => {
            console.log(res);
            // this.$toast.success(this.$t(res.data.messages));
            if (res.status != 200) {
              this.$toast.error(this.$t("messages.failed"));
            }
            this.boxes = res.data.boxes;

            console.log(this.boxes);
            console.log(this.continer.order[this.tracking.qr]);

            if (this.continer.order[this.tracking.qr])
              this.continer.order[this.tracking.qr].pivot.status = res.data.status
            this.loading = false;
          }
      ).catch(() => {
        this.tracking.items = {};
        this.tracking.items = {};
        this.tracking.numbers = [];
        // this.boxes = [];
        console.log(this.boxes);
        this.loading = false;

      });
    },

     closeContainer(){
      this.loading = true;
       ApiService.get(`admin/shipments/orders/Container/close/${this.continer.id}`).then(
          (res) => {
            if (res.status != 200) {
              this.$toast.error(res.data.message);
            }
            this.$toast.success(res.data.message);
            this.continer = res.data.data;
          }
      ).catch(() => {
         this.$toast.error(this.$t("messages.failed"));
         this.tracking.items = {};
        this.tracking.numbers = [];
      }).finally(()=>{
         this.loading = false;
       });
    }

  },
  computed: {
    tableDataTypesFilter() {
      return this.tableDataTypes;
    },
    orders() {
      if (this.ordersPage && this.ordersPage.data) return this.ordersPage.data;
      else return [];
    },
  },
});
</script>
