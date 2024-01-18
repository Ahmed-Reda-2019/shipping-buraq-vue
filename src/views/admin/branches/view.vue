<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::Navbar-->
      <div v-if="branch.id && branch.id > 0" class="card mb-6 mb-xl-9">
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
                branch.name.charAt(0)
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
                      >{{ branch.name }}</a
                    >
                    <span
                      v-if="branch.status && branch.status == 1"
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
                    #1 Tool to get started with Web Apps any Kind &amp; size
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
              <div class="d-flex flex-wrap justify-content-start d-none">
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
                      <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
                      <span class="svg-icon svg-icon-3 svg-icon-success me-2">
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
                            transform="rotate(90 13 6)"
                            width="13"
                            x="13"
                            y="6"
                          />
                          <path
                            d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
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
                  href="#kt_tab_pane_1"
                >
                  {{ $t("branchAreas") }}
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
                  {{ $t("branchUsers") }}
                </a>
              </li>
              <!--end::Nav item-->
            </ul>
            <!--end::Nav links-->
          </div>
          <!--end::Nav wrapper-->
        </div>
      </div>

      <div class="card card-flush mt-6 mt-xl-9">
        <div id="myTabContent" class="tab-content">
          <div
            id="kt_tab_pane_1"
            class="tab-pane fade show active"
            role="tabpanel"
          >
            <div class="card">
              <div class="card-header mt-5">
                <!--begin::Card title-->
                <div class="card-title flex-column">
                  <h3 class="fw-bolder mb-1">{{ $t("branchAreas") }}</h3>
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar my-1">
                  <!--begin::Select-->
                  <a
                    class="btn btn-primary mx-2"
                    data-bs-target="#kt_modal_new_Area"
                    data-bs-toggle="modal"
                    href="#"
                    >{{ $t("Add Area") }}</a
                  >
                  <a
                    class="btn btn-primary"
                    data-bs-target="#kt_modal_new_country"
                    data-bs-toggle="modal"
                    href="#"
                    >{{ $t("Add Country") }}</a
                  >

                  <div class="me-6 my-1"></div>
                  <!--end::Select-->
                  <!--begin::Select-->
                  <div class="me-4 my-1"></div>
                  <!--end::Select-->
                  <!--begin::Search-->
                  <div
                    class="d-flex align-items-center position-relative my-1"
                  ></div>
                  <!--end::Search-->
                </div>
                <!--begin::Card toolbar-->
              </div>

              <div class="card-body pt-0">
                <!--begin::Table container-->
                <div class="table-responsive">
                  <!--begin::Table-->
                  <my-table
                    :list="tableBranchCounties"
                    :modal="null"
                    :tableHeader="[
                      { name: '#', key: 'checkBox' },
                      { name: 'county', key: 'county' },
                      { name: 'country', key: 'country' },
                      { name: 'actions', key: 'actions' },
                    ]"
                  >
                    <template v-slot:cell-checkBox="{ row: item }">
                      <div
                        class="
                          form-check
                          form-check-sm
                          form-check-custom
                          form-check-solid
                          me-3
                        "
                      >
                        <input
                          class="form-check-input"
                          :value="item.id"
                          type="checkbox"
                          data-kt-check="true"
                        />
                      </div>
                    </template>
                    <template v-slot:cell-country="{ row: item }">
                      {{ item.name }}
                    </template>
                    <template v-slot:cell-county="{ row: item }">
                      {{ item.country }}
                    </template>
                    <template v-slot:cell-actions="{ index: i }">
                      <a
                        class="btn btn-light btn-sm"
                        @click="removeAreaToBranch(i)"
                        >{{ $t("remove") }}</a
                      >
                    </template>
                  </my-table>
                  <!--end::Table-->
                </div>
                <!--end::Table container-->
              </div>
            </div>
          </div>

          <div id="kt_tab_pane_2" class="tab-pane fade" role="tabpanel">
            <div v-if="Object.keys(tableBranchUsers).length == 0">
              <KTModalCard
                :button-text="$t('Search Users')"
                :description="$t('noData')"
                :title="$t('Welcome')"
                image="/media/illustrations/sigma-1/n18.png"
                modal-id="kt_modal_view_users"
              ></KTModalCard>
            </div>
            <div v-else class="card">
              <!--begin::Card header-->
              <div class="card-header mt-5">
                <!--begin::Card title-->
                <div class="card-title flex-column">
                  <h3 class="fw-bolder mb-1">{{ $t("branchUsers") }}</h3>
                </div>
                <!--begin::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar my-1">
                  <a
                    class="btn btn-primary"
                    data-bs-target="#kt_modal_view_users"
                    data-bs-toggle="modal"
                    href="#"
                    >{{ $t("addUser") }}</a
                  >
                  <!--begin::Select-->
                  <div class="me-6 my-1"></div>
                  <!--end::Select-->
                  <!--begin::Select-->
                  <div class="me-4 my-1"></div>
                  <!--end::Select-->
                  <!--begin::Search-->
                  <div
                    class="d-flex align-items-center position-relative my-1"
                  ></div>
                  <!--end::Search-->
                </div>
                <!--begin::Card toolbar-->
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body pt-0">
                <!--begin::Table container-->
                <div class="table-responsive">
                  <!--begin::Table-->
                  <table
                    id="kt_areas_table"
                    class="
                      table table-row-bordered table-row-dashed
                      gy-4
                      align-middle
                      fw-bolder
                    "
                  >
                    <!--begin::Head-->
                    <thead class="fs-7 text-gray-400 text-uppercase">
                      <tr>
                        <th class="min-w-150px">{{ $t("name") }}</th>
                        <th class="min-w-90px">{{ $t("email") }}</th>
                        <th class="min-w-90px">{{ $t("role") }}</th>
                        <th class="min-w-50px text-end">{{ $t("actions") }}</th>
                      </tr>
                    </thead>
                    <!--end::Head-->
                    <!--begin::Body-->
                    <tbody class="fs-6">
                      <tr v-for="(user, i) in tableBranchUsers" :key="i">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                          <p v-if="user.roles && user.roles[0]">
                            {{ user.roles[0].title }}
                          </p>
                        </td>
                        <td class="text-end">
                          <a
                            class="btn btn-light btn-sm"
                            @click="removeUserToBranch(i)"
                            >{{ $t("remove") }}</a
                          >
                        </td>
                      </tr>
                    </tbody>
                    <!--end::Body-->
                  </table>
                  <!--end::Table-->
                </div>
                <!--end::Table container-->
              </div>
              <!--end::Card body-->
            </div>
          </div>
        </div>
      </div>

      <!--begin::Modal - New Target-->
      <div
        id="kt_modal_new_Area"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
      >
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
          <!--begin::Modal content-->
          <div class="modal-content rounded">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
              <!--begin::Close-->
              <div
                class="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                <span class="svg-icon svg-icon-1">
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
                      transform="rotate(-45 6 17.3137)"
                      width="16"
                      x="6"
                      y="17.3137"
                    />
                    <rect
                      fill="black"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      width="16"
                      x="7.41422"
                      y="6"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Close-->
            </div>
            <!--begin::Modal header-->
            <!--begin::Modal body-->
            <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
              <!--begin:Form-->
              <form id="kt_modal_new_target_form" action="#" class="form">
                <!--begin::Heading-->
                <div class="mb-13 text-center">
                  <!--begin::Title-->
                  <h1 class="mb-3">{{ $t("Add Area to branch") }}</h1>
                </div>

                <div class="mb-10">
                  <!--begin::Label-->
                  <label
                    class="form-label fw-bolder fs-6 text-gray-700 d-block"
                    >{{ t("country") }}</label
                  >
                  <!--end::Label-->
                  <!--begin::Select-->
                  <el-select
                    v-model="areaForm.country_id"
                    class="w-100"
                    filterable
                    @change="
                      areaForm.county_id = '';
                      areaForm.area_id = '';
                      getCounties();
                    "
                  >
                    <el-option
                      v-for="item in countries"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                  <!--end::Select-->
                </div>
                <div v-if="areaForm.country_id" class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    t("county")
                  }}</label>
                  <!--end::Label-->
                  <!--begin::Select-->
                  <el-select
                    v-model="areaForm.county_id"
                    class="w-100"
                    filterable
                  >
                    <el-option
                      v-for="item in counties"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                  <!--end::Select-->
                </div>

                <div class="text-center">
                  <button
                    id="kt_modal_new_target_cancel"
                    class="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    type="reset"
                  >
                    {{ $t("Cancel") }}
                  </button>
                  <button
                    :data-kt-indicator="loading ? 'on' : null"
                    :disabled="loading"
                    class="btn btn-primary"
                    type="submit"
                    @click="addAreaToBranch"
                  >
                    <span class="indicator-label">{{ $t("submit") }}</span>
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
                </div>
                <!--end::Actions-->
              </form>
              <!--end:Form-->
            </div>
            <!--end::Modal body-->
          </div>
          <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
      </div>
      <div
        id="kt_modal_new_country"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
      >
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
          <!--begin::Modal content-->
          <div class="modal-content rounded">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
              <!--begin::Close-->
              <div
                class="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                <span class="svg-icon svg-icon-1">
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
                      transform="rotate(-45 6 17.3137)"
                      width="16"
                      x="6"
                      y="17.3137"
                    />
                    <rect
                      fill="black"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      width="16"
                      x="7.41422"
                      y="6"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Close-->
            </div>
            <!--begin::Modal header-->
            <!--begin::Modal body-->
            <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
              <!--begin:Form-->
              <form id="kt_modal_new_form" action="#" class="form">
                <!--begin::Heading-->
                <div class="mb-13 text-center">
                  <!--begin::Title-->
                  <h1 class="mb-3">{{ $t("Add Country to branch") }}</h1>
                </div>

                <div class="mb-10">
                  <!--begin::Label-->
                  <label
                    class="form-label fw-bolder fs-6 text-gray-700 d-block"
                    >{{ t("country") }}</label
                  >
                  <!--end::Label-->
                  <!--begin::Select-->
                  <el-select
                    v-model="areaForm.country_id"
                    class="w-100"
                    filterable
                    @change="areaForm.county_id = ''"
                  >
                    <el-option
                      v-for="item in countries"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                  <!--end::Select-->
                </div>

                <div class="text-center">
                  <button
                    id="kt_modal_new__cancel"
                    class="btn btn-light me-3"
                    data-bs-dismiss="modal"
                    type="reset"
                  >
                    {{ $t("Cancel") }}
                  </button>
                  <button
                    :data-kt-indicator="loading ? 'on' : null"
                    :disabled="loading"
                    class="btn btn-primary"
                    type="submit"
                    @click="addCountryToBranch"
                  >
                    <span class="indicator-label">{{ $t("submit") }}</span>
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
                </div>
                <!--end::Actions-->
              </form>
              <!--end:Form-->
            </div>
            <!--end::Modal body-->
          </div>
          <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
      </div>
      <!--end::Modal - New Target-->
      <!--end::Navbar-->
      <div
        id="kt_modal_view_users"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
      >
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
          <!--begin::Modal content-->
          <div class="modal-content">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
              <!--begin::Close-->
              <div
                class="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                <span class="svg-icon svg-icon-1">
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
                      transform="rotate(-45 6 17.3137)"
                      width="16"
                      x="6"
                      y="17.3137"
                    />
                    <rect
                      fill="black"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      width="16"
                      x="7.41422"
                      y="6"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Close-->
            </div>
            <!--begin::Modal header-->
            <!--begin::Modal body-->
            <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              <!--begin::Content-->
              <div class="text-center mb-13">
                <h1 class="mb-3">{{ $t("Search Users") }}</h1>
              </div>
              <!--end::Content-->
              <!--begin::Search-->
              <div
                id="kt_modal_users_search_handler"
                data-kt-search-enter="enter"
                data-kt-search-keypress="true"
                data-kt-search-layout="inline"
                data-kt-search-min-length="2"
              >
                <!--begin::Form-->
                <form
                  autocomplete="off"
                  class="w-100 position-relative mb-5"
                  data-kt-search-element="form"
                >
                  <!--begin::Hidden input(Added to disable form autocomplete)-->
                  <input type="hidden" />
                  <!--end::Hidden input-->
                  <!--begin::Icon-->
                  <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                  <span
                    class="
                      svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                      position-absolute
                      top-50
                      ms-5
                      translate-middle-y
                    "
                  >
                    <inline-svg src="/media/icons/duotune/general/gen021.svg" />
                  </span>
                  <!--end::Svg Icon-->
                  <!--end::Icon-->
                  <!--begin::Input-->
                  <input
                    id="userSerach"
                    :placeholder="$t('Search by username')"
                    class="
                      form-control form-control-lg form-control-solid
                      px-15
                    "
                    data-kt-search-element="input"
                    type="text"
                    value=""
                    @keyup="serchInUsers"
                  />
                  <!--end::Input-->
                  <!--begin::Spinner-->
                  <span
                    class="
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      d-none
                      me-5
                    "
                    data-kt-search-element="spinner"
                  >
                    <span
                      class="
                        spinner-border
                        h-15px
                        w-15px
                        align-middle
                        text-muted
                      "
                    ></span>
                  </span>
                  <!--end::Spinner-->
                  <!--begin::Reset-->
                  <span
                    class="
                      btn btn-flush btn-active-color-primary
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      me-5
                      d-none
                    "
                    data-kt-search-element="clear"
                  >
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                    <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                      <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
                    </span>
                    <!--end::Svg Icon-->
                  </span>
                  <!--end::Reset-->
                </form>
                <!--end::Form-->
                <!--begin::Wrapper-->
                <div class="py-5">
                  <!--begin::Suggestions-->
                  <div data-kt-search-element="suggestions">
                    <!--begin::Users-->
                    <div
                      id="searchContiner"
                      class="mh-375px scroll-y me-n7 pe-7"
                    >
                      <a
                        v-for="(user, i) in allUsers"
                        v-show="!tableBranchUsers[user.id]"
                        :key="i"
                        class="
                          align-items-center
                          p-3
                          rounded
                          bg-state-light bg-state-opacity-50
                          mb-1
                        "
                        style="display: flex"
                        @click="addUserToBranch(i)"
                      >
                        <!--begin::Avatar-->
                        <span v-if="!tableBranchUsers[user.id]" class="d-none"
                          >{{ user.name }} {{ user.email }} {{ user.phone }}
                        </span>
                        <div class="symbol symbol-35px symbol-circle me-5">
                          <span
                            class="
                              symbol-label
                              bg-light-danger
                              text-danger
                              fw-bold
                            "
                            >{{ user.name.charAt(0) }}</span
                          >
                        </div>
                        <!--end::Avatar-->
                        <!--begin::Info-->
                        <div class="fw-bold">
                          <span class="fs-6 text-gray-800 me-2">{{
                            user.name
                          }}</span>
                          <span
                            v-if="
                              user.roles && user.roles[0] && user.roles.name
                            "
                            class="badge badge-secondary"
                            >{{ user.roles[0].name }}</span
                          >
                        </div>
                        <span class="fs-6 text-gray-800 me-2">{{
                          user.email
                        }}</span>
                        <!--end::Info-->
                      </a>
                    </div>
                    <!--end::Users-->
                  </div>
                  <!--end::Suggestions-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Search-->
            </div>
            <!--end::Modal body-->
          </div>
          <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
      </div>
      <!--end::Modal - Users Search-->
    </div>
    <!--end::Post-->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import langs from "@/core/config/langs";
import ApiService from "../../../core/services/ApiService";
import { useRoute } from "vue-router";
import { hideModal } from "../../../core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import KTModalCard from "@/components/cards/Card.vue";
import MyTable from "@/views/admin/components/myTable";

export default defineComponent({
  name: "brancheView",
  components: {
    MyTable,
    KTModalCard,
  },
  data() {
    return {
      loading: false,
      areaForm: {},
      areaFormErrors: [],
      branch: { id: 0, name: "" },
      LocalI18n: useI18n(),
      langs: langs,
      tableDataBranches: [],
      tableBranchUsers: new Object(),
      tableBranchCounties: [],
      allUsers: [],
      orderErrors: [],

      countries: [],
      counties: [],
      areas: [],
    };
  },
  async beforeCreate() {
    await ApiService.get("admin/branches/" + useRoute().params.Id).then(
      (data) => {
        // this.Country = data.data.data;
        this.branch = data.data.data;
        if (data.data.users && Object.keys(data.data.users).length > 0)
          this.tableBranchUsers = data.data.users;
        this.tableBranchCounties = data.data.counties;
        this.allUsers = data.data.allUsers;

        this.countries = data.data.locations.country;
        // this.counties = data.data.locations.county;
        // this.areas = data.data.locations.areas;
      }
    );
  },
  methods: {
    async addUserToBranch(i) {
      this.loading = true;
      await ApiService.post(
        "admin/branches/" + this.branch.id + "/add/user/" + this.allUsers[i].id,
        this.AreaForm
      )
        .then(() => {
          hideModal("kt_modal_view_users");
          this.tableBranchUsers[this.allUsers[i].id] = this.allUsers[i];
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          return;
        });
    },

    async removeUserToBranch(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableBranchUsers[i].name +
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
            "admin/branches/" +
              this.branch.id +
              "/remove/user/" +
              this.tableBranchUsers[i].id,
            []
          )
            .then(() => {
              this.$toast.success(this.$t("messages.success"));

              delete this.tableBranchUsers[this.tableBranchUsers[i].id];
              // this.tableBranchUsers.splice(i, 1)
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

    async addAreaToBranch() {
      this.loading = true;
      await ApiService.post(
        "admin/branches/" +
          this.branch.id +
          "/add/area/" +
          this.areaForm.county_id,
        []
      )
        .then((res) => {
          this.tableBranchCounties = res.data.data;
          hideModal("kt_modal_new_Area");
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          return;
        });
    },
    async addCountryToBranch() {
      this.loading = true;
      await ApiService.post(
        "admin/branches/" +
          this.branch.id +
          "/add/country/" +
          this.areaForm.country_id,
        []
      )
        .then((res) => {
          this.tableBranchCounties = res.data.data;
          hideModal("kt_modal_new_country");
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          return;
        });
    },

    async removeAreaToBranch(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableBranchCounties[i].name +
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
            "admin/branches/" +
              this.branch.id +
              "/remove/area/" +
              this.tableBranchCounties[i].id,
            []
          )
            .then((res) => {
              this.$toast.success(this.$t("messages.success"));
              if (res.data.data) this.tableBranchCounties = res.data.data;
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
      await ApiService.put("admin/Localization/update", data)
        .then(() => {
          hideModal(this.transFormModalRef);
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    t(text) {
      return useI18n().t(text);
    },

    getAreas() {
      ApiService.get("site/locations/areas/" + this.areaForm.county_id).then(
        (res) => {
          if (res.data.areas) {
            this.areas = res.data.areas;
          }
        }
      );
    },
    getCounties() {
      ApiService.get(
        "site/locations/counties/" + this.areaForm.country_id
      ).then((res) => {
        if (res.data.counteis) {
          this.counties = res.data.counteis;
        }
      });
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
  },
});
</script>
