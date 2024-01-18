<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->

    <div v-if="service.id && service.id > 0" class="card mb-6 mb-xl-9">
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
            <span
              class="symbol-label bg-light-danger text-danger"
              v-html="service.icon"
            ></span>
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
                    class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3"
                    href="#"
                    >{{ service.name }}</a
                  >
                  <span
                    v-if="service.status && service.status == 1"
                    class="badge badge-light-success me-auto"
                    >{{ $t("active") }}</span
                  >
                  <span v-else class="badge badge-light-danger me-auto">{{
                    $t("unactive")
                  }}</span>
                </div>
                <!--end::Status-->
                <!--begin::Description-->
                <div class="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                  {{ service.text }}
                </div>
                <!--end::Description-->
              </div>
              <!--end::Details-->
              <!--begin::Actions-->
              <div class="d-flex mb-4"></div>
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
                    <div class="fs-4 fw-bolder">29 Jan, 2021</div>
                  </div>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Due Date</div>
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
                    <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                      <inline-svg src="/media/icons/duotune/arrows/arr065.svg" />
                    </span>
                    <div
                      class="fs-4 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                      0
                    </div>
                  </div>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Open Tasks</div>
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
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <inline-svg src="/media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-4 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-prefix="$"
                      data-kt-countup-value="15000"
                    >
                      0
                    </div>
                  </div>
                  <!--end::Number-->
                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Budget Spent</div>
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
                class="nav-link text-active-primary me-6 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2"
              >
                {{ $t("areas") }}
              </a>
            </li>
            <!--end::Nav item-->
            <!--begin::Nav item-->
            <li class="nav-item">
              <a
                class="nav-link text-active-primary me-6"
                data-bs-toggle="tab"
                href="#kt_tab_pane_3"
              >
                {{ $t("customers") }}
              </a>
            </li>
            <!--end::Nav item-->
            <!--begin::Nav item-->
            <li
              v-if="service.require_items && service.require_items == 1"
              class="nav-item"
            >
              <a
                class="nav-link text-active-primary me-6"
                data-bs-toggle="tab"
                href="#kt_tab_pane_4"
              >
                {{ $t("types") }}
              </a>
            </li>
            <!--end::Nav item-->
            <!--begin::Nav item-->
            <li class="nav-item">
              <a
                class="nav-link text-active-primary me-6"
                data-bs-toggle="tab"
                href="#kt_tab_pane_5"
              >
                {{ $t("clac dimensions") }}
              </a>
            </li>
            <!--end::Nav item-->
            <!--begin::Nav item-->
            <li class="nav-item">
              <a
                class="nav-link text-active-primary me-6"
                data-bs-toggle="tab"
                href="#kt_tab_pane_6"
              >
                {{ $t("Service Numbers") }}
              </a>
            </li>
            <!--end::Nav item-->
          </ul>
          <!--end::Nav links-->
        </div>
        <!--end::Nav wrapper-->
      </div>
    </div>

    <div class="d-flex flex-column flex-lg-row">
      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div id="myTabContent" class="tab-content">
          <div
            id="kt_tab_pane_2"
            class="tab-pane fade show active"
            role="tabpanel"
          >
            <div class="card card-flush pt-3 mb-5 mb-xl-10">
              <!--begin::Card header-->
              <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                  <h2 class="fw-bolder">{{ $t("areaservicesPrices") }}</h2>
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <a
                    class="btn btn-light-primary"
                    data-bs-target="#kt_modal_services_prices_item"
                    data-bs-toggle="modal"
                    @click="
                      withcustomer = false;
                      openModelservicesPricesNew();
                    "
                  >
                    {{ $t("addservicesPrices") }}
                  </a>
                </div>

                <!--end::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-3">
                <PricesTable
                  ref="PricesTable"
                  :withCustomer="false"
                  @edit="openModelservicesPricesEdit"
                ></PricesTable>
              </div>
              <!--end::Card body-->
            </div>
          </div>

          <div id="kt_tab_pane_3" class="tab-pane fade" role="tabpanel">
            <div class="card card-flush pt-3 mb-5 mb-xl-10">
              <!--begin::Card header-->
              <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                  <h2 class="fw-bolder">{{ $t("areaservicesPrices") }}</h2>
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <a
                    class="btn btn-light-primary"
                    data-bs-target="#kt_modal_services_prices_item"
                    data-bs-toggle="modal"
                    @click="
                      withcustomer = true;
                      openModelservicesPricesNew();
                    "
                  >
                    {{ $t("addservicesPrices") }}
                  </a>
                </div>

                <!--end::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-3">
                <PricesTableCustomer
                  ref="PricesTableCustomer"
                  :withCustomer="true"
                  @edit="openModelservicesPricesEdit"
                ></PricesTableCustomer>
              </div>
            </div>
          </div>

          <div id="kt_tab_pane_4" class="tab-pane fade" role="tabpanel">
            <div v-if="serviceTypes.length == 0">
              <KTModalCard
                :button-text="$t('addservicestypes')"
                :description="$t('noData')"
                :title="$t('servicestypes')"
                image="/media/illustrations/sigma-1/n18.png"
                modal-id="kt_modal_add_type_to_service"
              ></KTModalCard>
            </div>
            <div v-else class="card card-flush pt-3 mb-5 mb-xl-10">
              <!--begin::Card header-->
              <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                  <h2 class="fw-bolder">{{ $t("servicestypes") }}</h2>
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <a
                    class="btn btn-light-primary"
                    data-bs-target="#kt_modal_add_type_to_service"
                    data-bs-toggle="modal"
                    @click="
                      AddServiceForm = { items: [] };
                      typeEdit = -1;
                    "
                  >
                    {{ $t("addservicestypes") }}
                  </a>
                </div>

                <!--end::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-3">
                <div class="table-responsive">
                  <table
                    class="table align-middle table-row-dashed fs-6 gy-4 mb-0"
                  >
                    <!--begin::Table head-->
                    <thead>
                      <!--begin::Table row-->
                      <tr
                        class="
                          border-bottom border-gray-200
                          text-start text-gray-400
                          fw-bolder
                          fs-7
                          text-uppercase
                          gs-0
                        "
                      >
                        <th>{{ $t("name") }}</th>
                        <th>{{ $t("price") }}</th>
                        <th>{{ $t("from") }}</th>
                        <th>{{ $t("to") }}</th>
                        <th class="text-end min-w-70px">
                          {{ $t("actions") }}
                        </th>
                      </tr>
                      <!--end::Table row-->
                    </thead>
                    <!--end::Table head-->
                    <!--begin::Table body-->
                    <tbody class="fw-bold text-gray-800">
                      <tr v-for="(item, i) in serviceTypes" :key="i">
                        <td>
                          <label>{{ item.name }}</label>
                        </td>
                        <td>
                          <label>{{ item.price }}</label>
                        </td>
                        <td>
                          <label>{{ item.from }}</label>
                        </td>
                        <td>
                          <label>{{ item.to }}</label>
                        </td>

                        <td class="text-end">
                          <a
                            class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                            data-bs-target="#kt_modal_add_type_to_service"
                            data-bs-toggle="modal"
                            @click="
                              typeEdit = i;
                              AddServiceForm = item;
                            "
                          >
                            <span class="svg-icon svg-icon-primary svg-icon-2x"
                              ><svg
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
                                  <path
                                    d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                  />
                                  <rect
                                    fill="#000000"
                                    height="2"
                                    opacity="0.3"
                                    rx="1"
                                    width="15"
                                    x="5"
                                    y="20"
                                  />
                                </g></svg
                              ><!--end::Svg Icon-->
                            </span>
                          </a>
                          <a
                            class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                            @click="deleteServiceType(i)"
                          >
                            <i class="icon-xl fas fa-trash-alt"></i>
                          </a>

                          <!--end::Action-->
                        </td>
                      </tr>
                    </tbody>
                    <!--end::Table body-->
                  </table>
                </div>
              </div>
              <!--end::Card body-->
            </div>
          </div>

          <div id="kt_tab_pane_5" class="tab-pane fade" role="tabpanel">
            <div class="card card-flush pt-3 mb-5 mb-xl-10">
              <!--begin::Card header-->
              <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                  <h2 class="fw-bolder">{{ $t("clac dimensions") }}</h2>
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar"></div>

                <!--end::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-3">
                <!--begin::Section-->
                <div class="form-group row">
                  <div
                    v-if="service.length > -1"
                    class="
                      col-12 col-md-6
                      mb-4
                      form-check form-switch form-check-custom form-check-solid
                    "
                  >
                    <input
                      id="length_mlt"
                      v-model="dimintionPricesForm.length_mlt"
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                    <label class="form-check-label" for="length_mlt">
                      {{ $t("length_mlt") }}
                    </label>
                  </div>
                  <div
                    v-if="service.width > -1"
                    class="
                      col-12 col-md-6
                      mb-4
                      form-check form-switch form-check-custom form-check-solid
                    "
                  >
                    <input
                      id="width_mlt"
                      v-model="dimintionPricesForm.width_mlt"
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                    <label class="form-check-label" for="width_mlt">
                      {{ $t("width_mlt") }}
                    </label>
                  </div>
                  <div
                    v-if="service.height > -1"
                    class="
                      col-12 col-md-6
                      mb-4
                      form-check form-switch form-check-custom form-check-solid
                    "
                  >
                    <input
                      id="height_mlt"
                      v-model="dimintionPricesForm.height_mlt"
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                    <label class="form-check-label" for="height_mlt">
                      {{ $t("height_mlt") }}
                    </label>
                  </div>
                  <div
                    v-if="service.weight > -1"
                    class="
                      col-12 col-md-6
                      mb-4
                      form-check form-switch form-check-custom form-check-solid
                    "
                  >
                    <input
                      id="weight_mlt"
                      v-model="dimintionPricesForm.weight_mlt"
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                    />
                    <label class="form-check-label" for="weight_mlt">
                      {{ $t("weight_mlt") }}
                    </label>
                  </div>
                </div>
                <div
                  v-for="(item, iItem) in dimintionPricesForm.items"
                  :key="iItem"
                  class="form-group"
                >
                  <div class="form-group row mb-5">
                    <div class="col-12 col-md-4">
                      <label class="form-label">{{ $t("start_qty") }} : </label>
                      <input
                        v-model="item.start_qty"
                        class="form-control form-control-solid"
                        min="0"
                        type="number"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <label class="form-label">{{ $t("end_qty") }} : </label>
                      <input
                        v-model="item.end_qty"
                        class="form-control form-control-solid"
                        min="1"
                        type="number"
                      />
                    </div>
                    <div class="col-8 col-md-3">
                      <label class="required form-label">{{
                        $t("extra_price")
                      }}</label>
                      <input
                        v-model="item.extra_price"
                        class="form-control form-control-solid"
                        min="0"
                        step=".01"
                        type="number"
                      />
                    </div>
                    <div class="col-4 col-md-1">
                      <label class="d-block form-label">&nbsp;</label>
                      <a
                        class="btn btn-sm btn-light-danger pt-4 pb-4"
                        @click="dimintionPricesForm.items.splice(iItem, 1)"
                      >
                        <i class="la la-trash-o fs-3 pe-0"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <!--end::Section-->
              </div>
              <div class="card-footer d-flex justify-content-center">
                <div
                  class="btn btn-light-primary start-0 me-3"
                  @click="dimintionPricesForm.items.push({})"
                >
                  <i class="la la-plus"></i>
                  {{ $t("Add New") }}
                </div>
                <div
                  class="btn btn-light-primary end-0"
                  @click="dimintionPricesFormSubmit"
                >
                  <i class="la la-plus"></i>
                  {{ $t("submit") }}
                </div>
              </div>

              <!--end::Card body-->
            </div>
          </div>

          <div id="kt_tab_pane_6" class="tab-pane fade" role="tabpanel">
            <service-numbers :serviceId="ServiceId"></service-numbers>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0"></div>
    </div>

    <div class="d-flex flex-column flex-lg-row"></div>

    <div
      id="kt_modal_services_prices_item"
      ref="servicesPricesformModelRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-950px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Country_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditservicesPrices > -1" class="fw-bolder">
              {{ $t("editservicesPrices") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addservicesPrices") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_services_prices_item_close"
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
          <!--begin::Form-->
          <el-form @submit.prevent="submitModelForm()">
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
                <div v-if="withcustomer" class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("customer")
                  }}</label>
                  <!--end::Label-->
                  <!--begin::Select-->
                  <select-customer @result="getCustomer"></select-customer>
                  <!--end::Select-->
                </div>

                <div class="row">
                  <div class="col-6">
                    <SArea
                      ref="AreaDataSender"
                      :FormData="servicesPricesForm"
                      :FormLErrors="servicesPricesErrors"
                      :mode="1"
                      key_area="from_area_id"
                      key_country="from_country_id"
                      key_county="from_county_id"
                      @change="setLocationDataSender"
                    />
                  </div>
                  <div class="col-6">
                    <RArea
                      ref="AreaDataSender"
                      :FormData="servicesPricesForm"
                      :FormLErrors="servicesPricesErrors"
                      :mode="1"
                      key_area="to_area_id"
                      key_country="to_country_id"
                      key_county="to_county_id"
                      @change="setLocationDataSender"
                    />
                  </div>
                </div>
                <div v-if="!withcustomer" class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("price_customer")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="servicesPricesForm.price_customer"
                      step=".01"
                      type="number"
                    />
                  </el-form-item>
                  <span
                    v-if="servicesPricesErrors['price_customer']"
                    class="text-danger"
                    >{{ servicesPricesErrors["price_customer"][0] }}</span
                  >
                </div>
                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("price_business")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="servicesPricesForm.price_business"
                      step=".01"
                      type="number"
                    />
                  </el-form-item>
                  <span
                    v-if="servicesPricesErrors['price_business']"
                    class="text-danger"
                    >{{ servicesPricesErrors["price_business"][0] }}</span
                  >
                </div>
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <div class="modal-footer flex-center">
              <!--begin::Button-->
              <button
                id="kt_modal_add_branche_reset"
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
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                    ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
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

    <div
      id="kt_modal_services_prices_County_item"
      ref="servicesPricesformModelRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-950px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Countries_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditservicesPrices > -1" class="fw-bolder">
              {{ $t("editservicesPrices") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addservicesPrices") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_services_prices"
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
          <!--begin::Form-->
          <el-form @submit.prevent="submitModelFormCounty()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                id="kt_modal_add_branche"
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
              >
                <div v-if="withcustomer" class="mb-10 d-none">
                  <!--begin::Label-->
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("customer")
                  }}</label>
                  <!--end::Label-->
                  <!--begin::Select-->
                  <select
                    v-model="servicesPricesForm.customer_id"
                    class="form-select form-select-solid"
                    data-control="select2"
                    data-placeholder="Select currency"
                  >
                    <option
                      v-for="customer in customerList"
                      v-show="customerIdsInService.indexOf(customer.id) == -1"
                      :key="customer.id"
                      :value="customer.id"
                    >
                      <b
                        >{{ customer.name }}-{{ customer.phone }} -{{
                          customer.email
                        }}
                      </b>
                    </option>
                  </select>
                  <!--end::Select-->
                </div>

                <div class="row">
                  <div class="col-6">
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label
                        class="form-label fw-bolder fs-6 text-gray-700 d-block"
                        >{{ $t("country") }}</label
                      >
                      <!--end::Label-->
                      <!--begin::Select-->
                      <el-select
                        v-model="fromCountry"
                        class="w-100"
                        filterable
                        @change="
                          countiesPricesFrom.from_county_id = '';
                          getCounties(0);
                        "
                      >
                        <el-option
                          v-for="item in Scountries"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <!--end::Select-->
                    </div>
                    <div v-if="fromCountry" class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-bolder fs-6 text-gray-700">{{
                        $t("county")
                      }}</label>
                      <!--end::Label-->
                      <!--begin::Select-->
                      <el-select
                        v-model="countiesPricesFrom.from_county_id"
                        class="w-100"
                        filterable
                      >
                        <el-option
                          v-for="item in Scounties"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <!--end::Select-->
                    </div>
                    <span
                      v-if="countiesPricesFromErrors['from_county_id']"
                      class="text-danger"
                      >{{ countiesPricesFromErrors["from_county_id"][0] }}</span
                    >
                  </div>
                  <div class="col-6">
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label
                        class="form-label fw-bolder fs-6 text-gray-700 d-block"
                        >{{ $t("country") }}</label
                      >
                      <!--end::Label-->
                      <!--begin::Select-->
                      <el-select
                        v-model="toCountry"
                        class="w-100"
                        filterable
                        @change="
                          countiesPricesFrom.to_county_id = '';
                          getCounties(1);
                        "
                      >
                        <el-option
                          v-for="item in Rcountries"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <!--end::Select-->
                    </div>
                    <div v-if="toCountry" class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-bolder fs-6 text-gray-700">{{
                        $t("county")
                      }}</label>
                      <!--end::Label-->
                      <!--begin::Select-->
                      <el-select
                        v-model="countiesPricesFrom.to_county_id"
                        class="w-100"
                        filterable
                      >
                        <el-option
                          v-for="item in Rcounties"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <!--end::Select-->
                    </div>
                    <span
                      v-if="countiesPricesFromErrors['to_county_id']"
                      class="text-danger"
                      >{{ countiesPricesFromErrors["to_county_id"][0] }}</span
                    >
                  </div>
                </div>

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("price_customer")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="countiesPricesFrom.price_customer"
                      step=".01"
                      type="number"
                    />
                  </el-form-item>
                  <span
                    v-if="countiesPricesFromErrors['price_customer']"
                    class="text-danger"
                    >{{ countiesPricesFromErrors["price_customer"][0] }}</span
                  >
                </div>
                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("price_business")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="countiesPricesFrom.price_business"
                      step=".01"
                      type="number"
                    />
                  </el-form-item>
                  <span
                    v-if="countiesPricesFromErrors['price_business']"
                    class="text-danger"
                    >{{ countiesPricesFromErrors["price_business"][0] }}</span
                  >
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
                :data-kt-indicator="loading ? 'on' : null"
                :disabled="loading"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span class="indicator-label">
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                    ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
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

    <div
      id="kt_modal_add_type_to_service"
      ref="kt_modal_add_type_to_service"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-950px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_type_to_service_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("addservicestypes") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_add_type_to_service_close"
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
          <!--begin::Form-->
          <el-form @submit.prevent="addTypeToService()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
              >
                <div class="row">
                  <div class="col-6 mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-bolder fs-6 text-gray-700">{{
                      $t("type")
                    }}</label>
                    <!--end::Label-->
                    <!--begin::Select-->
                    <el-select
                      v-model="AddServiceForm.order_type_id"
                      class="w-100"
                      filterable
                    >
                      <el-option
                        v-for="item in allTypes"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                    <!--end::Select-->
                  </div>
                  <div class="col-3">
                    <label class="form-label fw-bolder fs-6 text-gray-700">
                      {{ $t("price") }}
                    </label>
                    <input
                      v-model="AddServiceForm.price"
                      class="form-control form-control-solid"
                      min="0"
                      step=".01"
                      type="number"
                    />
                  </div>
                  <div class="col-3">
                    <label class="form-label fw-bolder fs-6 text-gray-700"
                      >&nbsp;</label
                    >
                    <div
                      class="btn btn-light-primary w-100"
                      @click="AddServiceForm.items.push({})"
                    >
                      <i class="la la-plus"></i>
                      {{ $t("Add New") }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <select-country
                      :FormData="AddServiceForm"
                      :FormLErrors="servicesPricesErrors"
                      key_country="sender_country_id"
                      key_county="sender_county_id"
                      @change="fillAddServiceForm"
                    >
                    </select-country>
                  </div>
                  <div class="col-12 col-md-6">
                    <select-country
                      :FormData="AddServiceForm"
                      :FormLErrors="servicesPricesErrors"
                      key_country="receiver_country_id"
                      key_county="receiver_county_id"
                      @change="fillAddServiceForm"
                    >
                    </select-country>
                  </div>
                </div>

                <div
                  v-for="(item, iItem) in AddServiceForm.items"
                  :key="iItem"
                  class="form-group"
                >
                  <div class="form-group row mb-5">
                    <div class="col-12 col-md-4">
                      <label class="form-label">{{ $t("start_qty") }} : </label>
                      <input
                        v-model="item.start_qty"
                        class="form-control form-control-solid"
                        min="0"
                        type="number"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <label class="form-label">{{ $t("end_qty") }} : </label>
                      <input
                        v-model="item.end_qty"
                        class="form-control form-control-solid"
                        min="1"
                        type="number"
                      />
                    </div>
                    <div class="col-8 col-md-3">
                      <label class="required form-label">{{
                        $t("extra_price")
                      }}</label>
                      <input
                        v-model="item.extra_price"
                        class="form-control form-control-solid"
                        min="0"
                        step=".01"
                        type="number"
                      />
                    </div>
                    <div class="col-4 col-md-1">
                      <label class="d-block form-label">&nbsp;</label>
                      <a
                        class="btn btn-sm btn-light-danger pt-4 pb-4"
                        @click="AddServiceForm.items.splice(iItem, 1)"
                      >
                        <i class="la la-trash-o fs-3 pe-0"></i>
                      </a>
                    </div>
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
                id="kt_modal_add_type_to_service_reset"
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
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                    ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
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

    <div
      id="kt_modal_service_dimintion_prices"
      ref="kt_modal_service_dimintion_prices"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-950px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div
            id="kt_modal_service_dimintion_prices_header"
            class="modal-header"
          >
            <!--begin::Modal title-->
            <h2 class="fw-bolder">{{ $t("addservicestypes") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_service_dimintion_prices_close"
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
          <!--begin::Form-->
          <el-form @submit.prevent="addTypeToService()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
              >
                <div class="row">
                  <div class="col-9 mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-bolder fs-6 text-gray-700">{{
                      $t("type")
                    }}</label>
                    <!--end::Label-->
                    <!--begin::Select-->
                    <el-select
                      v-model="AddServiceForm.order_type_id"
                      class="w-100"
                      filterable
                    >
                      <el-option
                        v-for="item in allTypes"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                    <!--end::Select-->
                  </div>
                  <div class="col-3">
                    <label class="form-label fw-bolder fs-6 text-gray-700"
                      >&nbsp;</label
                    >
                    <div
                      class="btn btn-light-primary w-100"
                      @click="AddServiceForm.items.push({})"
                    >
                      <i class="la la-plus"></i>
                      {{ $t("New_Here") }}
                    </div>
                  </div>
                </div>

                <div
                  v-for="(item, iItem) in AddServiceForm.items"
                  :key="iItem"
                  class="form-group"
                >
                  <div class="form-group row mb-5">
                    <div class="col-12 col-md-4">
                      <label class="form-label">{{ $t("start_qty") }} : </label>
                      <input
                        v-model="item.start_qty"
                        class="form-control form-control-solid"
                        min="0"
                        type="number"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <label class="form-label">{{ $t("end_qty") }} : </label>
                      <input
                        v-model="item.end_qty"
                        class="form-control form-control-solid"
                        min="1"
                        type="number"
                      />
                    </div>
                    <div
                      :class="iItem == 0 ? 'col-md-4' : 'col-md-3'"
                      class="col-8"
                    >
                      <label class="required form-label">{{
                        $t("extra_price")
                      }}</label>
                      <input
                        v-model="item.extra_price"
                        class="form-control form-control-solid"
                        min="0"
                        step=".01"
                        type="number"
                      />
                    </div>
                    <div v-if="iItem > 0" class="col-4 col-md-1">
                      <label class="d-block form-label">&nbsp;</label>
                      <a
                        class="btn btn-sm btn-light-danger pt-4 pb-4"
                        @click="AddServiceForm.items.splice(iItem, 1)"
                      >
                        <i class="la la-trash-o fs-3 pe-0"></i>
                      </a>
                    </div>
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
                id="kt_modal_add_type_to_service_cancel"
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
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                    ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
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
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import { hideModal } from "@/core/helpers/dom";

import KTModalCard from "@/components/cards/Card.vue";
import { default as PricesTable } from "@/views/admin/services/pricesTable";
import { default as PricesTableCustomer } from "@/views/admin/services/pricesTable";
import SelectCustomer from "@/views/admin/clients/selectCustomer";
import ServiceNumbers from "@/views/admin/services/serviceNumbers";
import { default as SArea } from "@/views/admin/locations/area.vue";
import { default as RArea } from "@/views/admin/locations/area.vue";
import SelectCountry from "@/views/admin/locations/selectCounty";

export default defineComponent({
  name: "servicesPrices-list",
  components: {
    SelectCountry,
    ServiceNumbers,
    SelectCustomer,
    PricesTable,
    //ServiceCustomer,
    KTModalCard,
    PricesTableCustomer,
    RArea,
    SArea,
  },
  data() {
    return {
      LocalI18n: useI18n(),
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      // tableDataservicesPrices: [],
      filters: {
        page: 1,
      },
      servicesPricesformModelRef: (ref < null) | (HTMLFormElement > null),
      servicesPricesForm: {},
      servicesPricesErrors: [],
      isEditservicesPrices: -1,
      allServices: [],
      allCountries: [],
      allCounties: [],
      allAreas: [],
      toCountry: "",
      ServiceId: useRoute().params.Id,
      fromCountry: "",
      customerServices: [],
      service: {},
      customerList: [],
      serviceTypes: [],
      withcustomer: false,
      customerIdsInService: [],
      tableCustomerServices: [],

      countiesPrices: [],
      countiesPricesFrom: {},
      Rcountries: [],
      Scountries: [],
      Rareas: [],
      Sareas: [],
      countiesPricesFromErrors: [],
      countiesPricesIsEdit: -1,
      ServiceTypeSearch: "",
      typeEdit: -1,
      allTypes: [],
      AddServiceForm: {
        items: [],
      },
      dimintionPricesForm: {
        length_mlt: 0,
        width_mlt: 0,
        height_mlt: 0,
        weight_mlt: 0,
        items: [],
      },
    };
  },
  async created() {
    setCurrentPageBreadcrumbs(this.$t("serviceView"), [this.$t("cp")]);

    // let res = ApiService.get("site/General/countries").then((data) => {
    //   this.Rcountries = data.data;
    //   this.Scountries = data.data;
    // });

    await ApiService.query("admin/service/view/" + this.ServiceId, this.filters)
      .then((data) => {
        if (data.data.service) {
          this.service = data.data.service;

          this.dimintionPricesForm.length_mlt = this.service.length_mlt;
          this.dimintionPricesForm.width_mlt = this.service.width_mlt;
          this.dimintionPricesForm.height_mlt = this.service.height_mlt;
          this.dimintionPricesForm.weight_mlt = this.service.weight_mlt;
          this.dimintionPricesForm.items = data.data.dimensionPrices;

          this.serviceTypes = data.data.serviceTypes;
        }
      })
      .finally(() => {
        this.loading = false;
      });

    // await this.loadData()
    ApiService.get("admin/orderTypes").then((data) => {
      this.allTypes = data.data.data;
    });
  },
  methods: {
    async loadData(page = 0) {
      this.loading = true;
      if (page > 0) this.filters.page = page;
      await ApiService.query(
        "admin/service/prices/" + this.ServiceId,
        this.filters
      )
        .then((data) => {
          this.tableDataservicesPricesPage = data.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    openModelservicesPricesNew() {
      this.isEditservicesPrices = -1;
      this.servicesPricesForm = {};
      this.servicesPricesErrors = [];
    },
    openModelservicesPricesEdit(item, i, withcustomer) {
      this.withcustomer = withcustomer;
      this.isEditservicesPrices = i;
      // if (this.withcustomer)
      this.servicesPricesForm = item;
      // else this.servicesPricesForm = this.tableDataservicesPrices[i];
    },

    openModelservicesPricesNewCounty() {
      this.countiesPricesIsEdit = -1;
      this.countiesPricesFrom = {};
      this.countiesPricesFromErrors = [];
    },
    openModelservicesPricesEditCounty(i) {
      this.countiesPricesIsEdit = i;
      if (this.withcustomer) this.countiesPricesFrom = this.countiesPrices[i];
      else this.countiesPricesFrom = this.countiesPrices[i];
    },

    async submitModelForm() {
      this.loading = true;
      this.servicesPricesErrors = [];
      this.servicesPricesForm.service_id = this.ServiceId;
      if (!this.withcustomer) {
        delete this.servicesPricesForm.customer_id;
        delete this.servicesPricesForm.customer_id;
      } else {
        this.servicesPricesForm.price_customer =
          this.servicesPricesForm.price_business;
      }
      if (this.isEditservicesPrices > -1) {
        await ApiService.put(
          "admin/servicep-prices/" + this.servicesPricesForm.id,
          this.servicesPricesForm
        )
          .then(() => {
            this.servicesPricesErrors = [];
            hideModal("kt_modal_services_prices_item");
            this.$toast.success(this.$t("messages.success"));
            this.reloadPrices();
            this.servicesPricesForm = {};
          })
          .catch(() => {
            this.servicesPricesErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post("admin/servicep-prices", this.servicesPricesForm)
          .then((res) => {
            this.servicesPricesErrors = [];
            if (res.data.data) {
              hideModal("kt_modal_services_prices_item");
              this.servicesPricesForm = {};
              this.$toast.success(this.$t("messages.success"));
            }
            this.reloadPrices();
          })
          .catch(() => {
            this.servicesPricesErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    reloadPrices() {
      if (this.withcustomer) {
        this.PricesTableCustomer.methods.loadData(1);
      } else {
        this.PricesTable.methods.loadData(1);
      }
    },

    // need delete
    async submitModelFormCounty() {
      this.loading = true;
      this.countiesPricesFromErrors = [];
      this.countiesPricesFrom.service_id = this.ServiceId;
      /*
      if (!this.withcustomer){
        delete  this.countiesPricesFrom.customer_id
        delete  this.countiesPricesFrom.customer_id
      }else{
        this.countiesPricesFrom.price_customer = this.countiesPricesFrom.price_business;
      }*/

      if (this.countiesPricesIsEdit > -1) {
        await ApiService.put(
          "admin/servicep-prices/County/" +
            this.countiesPrices[this.isEditservicesPrices].id,
          this.countiesPricesFrom
        )
          .then((res) => {
            this.countiesPricesFromErrors = [];
            hideModal("kt_modal_services_prices_County_item");
            this.$toast.success(this.$t("messages.success"));
            if (this.withcustomer)
              this.countiesPrices[this.isEditservicesPrices] = res.data.data;
            else this.countiesPrices[this.isEditservicesPrices] = res.data.data;
            this.countiesPrices = {};
          })
          .catch(() => {
            this.countiesPricesFromErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post(
          "admin/servicep-prices/County",
          this.countiesPricesFrom
        )
          .then((res) => {
            this.countiesPricesFromErrors = [];
            if (res.data.data) {
              hideModal("kt_modal_services_prices_County_item");
              this.countiesPricesFrom = {};
              this.$toast.success(this.$t("messages.success"));

              if (res.data.data.customer && res.data.data.customer.id) {
                this.countiesPrices.push(res.data.data);
                // this.customerIdsInService.push(res.data.data.customer.id)
              } else this.countiesPrices.push(res.data.data);
            }
          })
          .catch(() => {
            this.countiesPricesFromErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    getCounties(i) {
      let tempId = this.fromCountry;
      if (i > 0) tempId = this.toCountry;

      ApiService.get("site/locations/counties/" + tempId).then((res) => {
        if (res.data.counteis) {
          if (i > 0) this.Rcounties = res.data.counteis;
          else this.Scounties = res.data.counteis;
        }
      });
    },

    async addTypeToService() {
      this.loading = true;
      await ApiService.post(
        "admin/service-prices/type/" + this.ServiceId,
        this.AddServiceForm
      )
        .then((res) => {
          if (res.data.data) {
            hideModal("kt_modal_add_type_to_service");
            this.AddServiceForm = { items: [] };
            if (this.typeEdit == -1) {
              this.serviceTypes.push(res.data.data);
            } else {
              this.serviceTypes[this.typeEdit] = res.data.data;
            }
          }
        })
        .catch(() => {
          this.servicesPricesErrors = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    deleteServiceType(i) {
      Swal.fire({
        title: this.$t("messages.areSureDeleted") + " ? ",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(
            "admin/service-prices/type/" +
              this.ServiceId +
              "/" +
              this.serviceTypes[i].order_type_id
          ).then(() => {
            this.serviceTypes.splice(i, 1);
            Swal.fire(
              this.$t("messages.delteted"),
              this.$t("messages.hasBeenDeleted"),
              "success"
            );
          });
        }
      });
    },
    async dimintionPricesFormSubmit() {
      this.loading = true;
      await ApiService.post(
        "admin/service-prices/saveDimensionPrices/" + this.ServiceId,
        this.dimintionPricesForm
      )
        .then((res) => {
          this.service = res.data.service;
          this.dimintionPricesForm.length_mlt = this.service.length_mlt;
          this.dimintionPricesForm.width_mlt = this.service.width_mlt;
          this.dimintionPricesForm.height_mlt = this.service.height_mlt;
          this.dimintionPricesForm.weight_mlt = this.service.weight_mlt;
          this.dimintionPricesForm.items = res.data.dimensionPrices;

          this.$toast.success(res.data.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    setLocationDataSender(op) {
      Object.keys(op).forEach((value) => {
        this.servicesPricesForm[value] = op[value];
      });
    },
    getCustomer(cu) {
      this.servicesPricesForm.customer_id = cu.id;
    },

    fillAddServiceForm(object) {
      Object.keys(object).forEach((value) => {
        this.AddServiceForm[value] = object[value];
      });
    },
  },
  computed: {
    filterServiceTypes() {
      return this.serviceTypes.filter(
        (data) =>
          !this.ServiceTypeSearch.value ||
          data.name
            .toLowerCase()
            .includes(this.ServiceTypeSearch.value.toLowerCase())
      );
    },
    tableDataservicesPrices() {
      return [];
    },
  },
});
</script>
