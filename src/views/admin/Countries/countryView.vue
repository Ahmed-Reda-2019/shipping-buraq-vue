<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid me-lg-10 order-2 order-lg-1 mb-10 mb-lg-0">
        <div v-if="tableDataCounties.length == 0">
          <KTModalCard
              :button-text="$t('addCounty')"
              :description="$t('noData')"
              :title="$t('Welcome')"
              image="/media/illustrations/sigma-1/n18.png"
              modal-id="kt_modal_add_county"
          ></KTModalCard>
        </div>
        <div v-else class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("countiesDetails") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <div
                  class="d-flex align-items-center position-relative my-1 mx-3"
              >
                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                  <inline-svg src="/media/icons/duotune/general/gen021.svg"/>
                </span>
                <input
                    v-model="search"
                    class="form-control form-control-solid w-250px ps-15"
                    type="text"
                />
              </div>

              <a
                  class="btn btn-light-primary"
                  data-bs-target="#kt_modal_add_county"
                  data-bs-toggle="modal"
                  @click="openModelNewCounty()"
              >
                {{ $t("addCounty") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle table-row-dashed fs-6 gy-4 mb-0">
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
                  <th class="min-w-150px">{{ $t("name") }}</th>
                  <th class="min-w-125px">{{ $t("status") }}</th>
                  <th class="text-end min-w-70px">{{ $t("actions") }}</th>
                </tr>
                <!--end::Table row-->
                </thead>
                <!--end::Table head-->
                <!--begin::Table body-->
                <tbody class="fw-bold text-gray-800">
                <tr
                    v-for="(item, i) in tableDataCounties"
                    v-show="
                      search == '' ||
                      item.name.toLocaleLowerCase().includes(search)
                    "
                    :key="i"
                >
                  <td>
                    <label class="w-150px">{{ item.name }}</label>
                    <div class="fw-normal text-gray-600"></div>
                  </td>
                  <td>
                      <span
                          v-if="item.status == 1"
                          class="badge badge-light-success"
                      >{{ $t("active") }}
                      </span>
                    <span v-else class="badge badge-light-danger">{{
                        $t("unActive")
                      }}</span>
                  </td>
                  <td class="text-end">
                    <!--begin::Action-->
                    <a
                        class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_add_county"
                        data-bs-toggle="modal"
                        @click="openModelEditCounty(i)"
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
                              <rect height="24" width="24" x="0" y="0"/>
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
                        class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                        @click="ShowCountyArea(i)"
                    >
                      <i class="icon-xl fas far fa-eye"></i>
                    </a>
                    <a
                        class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                        @click="deleteCounty(i)"
                    >
                      <i class="icon-xl fas fa-trash-alt"></i>
                    </a>
                    <a
                        class="btn btn-icon btn-light-info mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_trans"
                        data-bs-toggle="modal"
                        @click="openModelTransObject(item)"
                    >
                      <i aria-hidden="true" class="fa fa-language"></i>
                    </a>

                    <!--end::Action-->
                  </td>
                </tr>
                </tbody>
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
          </div>
          <!--end::Card body-->
        </div>
      </div>

      <div
          class="
          flex-column flex--row-auto
          w-lg-250px w-xl-300px
          mb-10
          order-1 order-lg-2
        "
          style="position: sticky; top: 80px; align-self: flex-start"
      >
        <!--begin::Card-->
        <div class="card card-flush mb-0">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2>{{ Country.name }}</h2>
            </div>
            <!--end::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <!--begin::More options-->
              <!--end::More options-->
            </div>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-0 fs-6">
            <!--begin::Section-->
            <div class="mb-7">
              <!--begin::Details-->
              <div class="d-flex align-items-center">
                <!--begin::Avatar-->
                <!--end::Avatar-->
                <!--begin::Info-->
                <div class="d-flex flex-column">
                  <!--begin::Name-->
                  <a
                      class="fs-4 fw-bolder text-gray-900 text-hover-primary me-2"
                  >
                    {{ $t("iso_code") }} : {{ Country.iso_code }}</a
                  >
                  <!--end::Name-->
                  <!--begin::Email-->
                  <a class="fw-bold text-gray-600 text-hover-primary"
                  >{{ $t("phone_code") }} : {{ Country.phone_code }}</a
                  >
                  <!--                  <span class="badge badge-light-success">Active</span>-->

                  <!--end::Email-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Details-->
            </div>
            <!--end::Section-->
            <!--begin::Seperator-->
            <div class="separator separator-dashed mb-7"></div>

            <div class="mb-0">
              <a
                  id="kt_subscriptions_create_button"
                  class="btn btn-primary"
                  data-bs-target="#kt_modal_add_country"
                  data-bs-toggle="modal"
              >{{ $t("edit") }}</a
              >
              <a
                  class="btn btn-icon btn-light-info mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_trans"
                  data-bs-toggle="modal"
                  @click="openModelTransObject(Country)"
              >
                <i aria-hidden="true" class="fa fa-language"></i>
              </a>
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Card-->
      </div>
    </div>

    <div
        v-if="SelectedCounty.name"
        id="div-area"
        class="d-flex flex-column flex-lg-row"
    >
      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div v-if="tableDataArea.length == 0">
          <KTModalCard
              :button-text="$t('addArea')"
              :title="$t('Welcome')"
              image="/media/illustrations/sigma-1/n18.png"
              modal-id="kt_modal_add_area"
          ></KTModalCard>
        </div>
        <div v-else class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">
                {{ $t("areasOf") }} {{ SelectedCounty.name }}
              </h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <div class="d-flex align-items-center position-relative mx-3">
                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                  <inline-svg src="/media/icons/duotune/general/gen021.svg"/>
                </span>
                <input
                    v-model="searchArea"
                    class="form-control form-control-solid w-250px ps-15"
                    type="text"
                />
              </div>
              <a
                  class="btn btn-light-primary"
                  data-bs-target="#kt_modal_add_area"
                  data-bs-toggle="modal"
                  @click="openModelNewArea()"
              >
                {{ $t("addArea") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle table-row-dashed fs-6 gy-4 mb-0">
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
                  <th class="min-w-150px">{{ $t("name") }}</th>
                  <th class="min-w-125px">{{ $t("status") }}</th>
                  <th class="text-end min-w-70px">{{ $t("actions") }}</th>
                </tr>
                <!--end::Table row-->
                </thead>
                <!--end::Table head-->
                <!--begin::Table body-->
                <tbody class="fw-bold text-gray-800">
                <tr
                    v-for="(item, i) in tableDataArea"
                    v-show="
                      search == '' ||
                      item.name.toLocaleLowerCase().includes(searchArea)
                    "
                    :key="i"
                >
                  <td>
                    <label class="w-150px">{{ item.name }}</label>
                    <div class="fw-normal text-gray-600"></div>
                  </td>
                  <td>
                      <span
                          v-if="item.status == 1"
                          class="badge badge-light-success"
                      >
                        {{ $t("active") }}
                      </span>
                    <span v-else class="badge badge-light-danger">{{
                        $t("unActive")
                      }}</span>
                  </td>
                  <td class="text-end">
                    <!--begin::Action-->

                    <a
                        class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_add_area"
                        data-bs-toggle="modal"
                        @click="openModelEditArea(i)"
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
                              <rect height="24" width="24" x="0" y="0"/>
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
                        @click="deleteArea(i)"
                    >
                      <i class="icon-xl fas fa-trash-alt"></i>
                    </a>
                    <a
                        class="btn btn-icon btn-light-info mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_trans"
                        data-bs-toggle="modal"
                        @click="openModelTransObject(item)"
                    >
                      <i aria-hidden="true" class="fa fa-language"></i>
                    </a>

                    <!--end::Action-->
                  </td>
                </tr>
                </tbody>
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>
    <!--end::Layout-->

    <div
        id="kt_modal_add_country"
        ref="addCountryModalRef"
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
            <h2 class="fw-bolder">{{ $t("editCountry") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                id="kt_modal_add_Country_close"
                class="btn btn-icon btn-sm btn-active-icon-primary"
                data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg
                    src="/public/media/icons/duotune/arrows/arr061.svg"
                />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Form-->
          <el-form @submit.prevent="editCountry(Country.id)">
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
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">{{
                    $t("name")
                    }}</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-form-item prop="name">
                    <el-input
                        v-model="Country.name"
                        placeholder=""
                        type="text"
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <span v-if="errors['name']" class="text-danger">{{
                  errors["name"][0]
                }}</span>

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">{{
                    $t("iso_code")
                    }}</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-form-item prop="iso_code">
                    <el-input
                        v-model="Country.iso_code"
                        placeholder=""
                        type="text"
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">{{
                    $t("phone_code")
                    }}</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-form-item prop="iso_code">
                    <el-input
                        v-model="Country.phone_code"
                        placeholder=""
                        type="text"
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>

                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("status") }}</span>
                  </label>
                  <select v-model="Country.status" class="form-select">
                    <option value="1">{{ $t("yes") }}</option>
                    <option value="0">{{ $t("no") }}</option>
                  </select>
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
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow">
                    <inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
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
        id="kt_modal_add_county"
        ref="CountyFormModalRef"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_County_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditCounty > -1" class="fw-bolder">
              {{ $t("editCounty") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addCounty") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                id="kt_modal_add_County_close"
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
          <el-form @submit.prevent="submitCountyForm()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                  id="kt_modal_add_county_scroll"
                  class="scroll-y me-n7 pe-7"
                  data-kt-scroll="true"
                  data-kt-scroll-activate="{default: false, lg: true}"
                  data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                  data-kt-scroll-max-height="auto"
                  data-kt-scroll-offset="300px"
                  data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
              >
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("name") }}</label
                  >
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-form-item prop="name">
                    <el-input
                        v-model="CountyForm.name"
                        placeholder=""
                        type="text"
                    />
                  </el-form-item>
                  <!--end::Input-->
                  <span v-if="errors['name']" class="text-danger">{{
                    errors["name"][0]
                  }}</span>
                </div>
                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("status") }}</span>
                  </label>
                  <select v-model="CountyForm.status" class="form-select">
                    <option value="1">{{ $t("yes") }}</option>
                    <option value="0">{{ $t("no") }}</option>
                  </select>
                </div>
                <div class="d-flex flex-column mb-7 fv-row d-none">
                  <select v-model="CountyForm.country_id">
                    <option :value="Country.id" selected>
                      {{ Country.name }}
                    </option>
                  </select>
                </div>
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <div class="modal-footer flex-center">
              <!--begin::Button-->
              <button
                  id="kt_modal_add_county_cancel"
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
                  ><inline-svg src="/icons/duotune/arrows/arr064.svg"
                  /></span>
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
        id="kt_modal_add_area"
        ref="AreaFormModalRef"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_area_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditArea > -1" class="fw-bolder">
              {{ $t("editArea") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addArea") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                id="kt_modal_add_area_close"
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
          <el-form @submit.prevent="submitAreaForm()">
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                  id="kt_modal_add_area_scroll"
                  class="scroll-y me-n7 pe-7"
                  data-kt-scroll="true"
                  data-kt-scroll-activate="{default: false, lg: true}"
                  data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                  data-kt-scroll-max-height="auto"
                  data-kt-scroll-offset="300px"
                  data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
              >
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">{{
                    $t("name")
                    }}</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <el-form-item prop="name">
                    <el-input
                        v-model="AreaForm.name"
                        placeholder=""
                        type="text"
                    />
                  </el-form-item>
                  <!--end::Input-->
                  <span v-if="errors['name']" class="text-danger">{{
                    errors["name"][0]
                  }}</span>
                </div>
                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("status") }}</span>
                  </label>
                  <select v-model="AreaForm.status" class="form-select">
                    <option value="1">{{ $t("yes") }}</option>
                    <option value="0">{{ $t("no") }}</option>
                  </select>
                </div>
                <div class="d-flex flex-column mb-7 fv-row d-none">
                  <!--                  <select v-model="CountyForm.country_id">-->
                  <!--                    <option :value="County.id" selected>{{ County.name}}</option>-->
                  <!--                  </select>-->
                </div>
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <div class="modal-footer flex-center">
              <!--begin::Button-->
              <button
                  id="kt_modal_add_area_cancel"
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
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow">
                    <inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
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
import {defineComponent, ref} from "vue";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import {useRoute} from "vue-router";
import {hideModal} from "@/core/helpers/dom";

import Swal from "sweetalert2/dist/sweetalert2.min.js";
import KTModalCard from "@/components/cards/Card.vue";

export default defineComponent({
  name: "countryView",
  components: {
    KTModalCard,
  },
  data() {
    return {
      Country: {
        id: 0,
        name: "",
      },
      errors: [],
      tableDataCounties: [],
      tableDataArea: [],
      initCountries: [],
      editFormCountry: {},
      loading: false, //ref(useStore().getters.Submitted),
      formCountryRef: (ref < null) | (HTMLFormElement > null),
      addCountryModalRef: (ref < null) | (HTMLElement > null),

      CountyForm: {},
      CountyFormModalRef: (ref < null) | (HTMLElement > null),
      isEditCounty: -1,

      SelectedCounty: {},

      AreaForm: {},
      AreaFormModalRef: (ref < null) | (HTMLElement > null),
      isEditArea: -1,
      CountyAreas: [],

      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),

      searchArea: "",
      search: "",
    };
  },
  created() {
    ApiService.get("admin/Countries/" + useRoute().params.Id).then((data) => {
      this.Country = data.data.data;
      this.tableDataCounties = data.data.counteis;

    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.Country.name, [
      this.$t("cp"),
      this.$t("Countries"),
    ]);
  },
  methods: {
    async editCountry(id) {
      this.loading = true;
      await ApiService.put("admin/Countries/" + id, this.Country).then(() => {
        this.$toast.success(this.$t("messages.success"));
        hideModal("kt_modal_add_country");
        this.loading = false;
      });
    },

    openModelNewCounty() {
      this.isEditCounty = -1;
      this.CountyForm = {};
    },
    openModelEditCounty(i) {
      this.isEditCounty = i;
      this.CountyForm = this.tableDataCounties[i];
    },
    async submitCountyForm() {
      this.loading = true;
      this.CountyForm.country_id = this.Country.id;
      if (this.isEditCounty > -1) {
        await ApiService.put(
            "admin/Counties/" + this.tableDataCounties[this.isEditCounty].id,
            this.CountyForm
        ).then(() => {
          this.$toast.success(this.$t("messages.success"));
          hideModal("kt_modal_add_county");
        });
        this.loading = false;
      } else {
        await ApiService.post("admin/Counties", this.CountyForm).then((res) => {
          if (res.data.data) {
            this.$toast.success(this.$t("messages.success"));
            this.tableDataCounties.push(res.data.data);
            hideModal("kt_modal_add_county");
          }
          this.loading = false;
        });
      }
    },
    async ShowCountyArea(i) {
      this.SelectedCounty = this.tableDataCounties[i];
      await ApiService.get("admin/Counties/" + this.SelectedCounty.id)
          .then((data) => {
            this.SelectedCounty = data.data.data;
            this.$toast.success(this.$t("messages.loaded"));
            this.tableDataArea = data.data.areas;
          })
          .catch(() => {
            this.tableDataArea = [];
          });
      document
          .getElementById("div-area")
          .scrollIntoView({behavior: "smooth"});
    },

    openModelNewArea() {
      this.isEditArea = -1;
      this.AreaForm = {};
    },
    openModelEditArea(i) {
      this.isEditArea = i;
      this.AreaForm = this.tableDataArea[i];
    },

    async submitAreaForm() {
      this.loading = true;
      this.AreaForm.county_id = this.SelectedCounty.id;
      if (this.isEditArea > -1) {
        await ApiService.put(
            "admin/Areas/" + this.AreaForm.id,
            this.AreaForm
        ).then(() => {
          this.$toast.success(this.$t("messages.success"));
          hideModal("kt_modal_add_area");
          this.AreaForm = {};
        });
        this.loading = false;
      } else {
        await ApiService.post("admin/Areas", this.AreaForm).then((res) => {
          this.tableDataArea.push(res.data.data);
          this.$toast.success(this.$t("messages.success"));
          hideModal("kt_modal_add_area");
          this.AreaForm = {};
        });
        this.loading = false;
      }
    },

    async deleteCounty(i) {
      Swal.fire({
        title:
            this.$t("messages.areSureDeleted") +
            " ? ( " +
            this.tableDataCounties[i].name +
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
          ApiService.delete(
              "admin/Counties/" + this.tableDataCounties[i].id
          ).then(() => {
            this.tableDataCounties.splice(i, 1);
            Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
            );
          });
        }
      });
    },

    async deleteArea(i) {
      Swal.fire({
        title:
            this.$t("messages.areSureDeleted") +
            " ? ( " +
            this.tableDataArea[i].name +
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
          ApiService.delete("admin/Areas/" + this.tableDataArea[i].id).then(
              () => {
                this.tableDataArea.splice(i, 1);
                Swal.fire(
                    this.$t("messages.delteted"),
                    this.$t("messages.hasBeenDeleted"),
                    "success"
                );
              }
          );
        }
      });
    },

    openModelTransObject(item) {
      this.transObject = item;
    },
    async submitTrans() {
      this.loading = true;
      let data = {
        id: this.transObject.id,
        trans: this.transObject.trans,
        class: this.transObject.class,
      };
      await ApiService.put("admin/Localization/update", data).then(() => {
        hideModal("kt_modal_trans");
      });
      this.loading = false;
    },
  },
});
</script>
