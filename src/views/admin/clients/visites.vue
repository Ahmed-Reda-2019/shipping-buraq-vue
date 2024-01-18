<template>
  <div v-if="vistesList.data && vistesList.data.length == 0">
    <KTModalCard
      :button-text="$t('Add Visit')"
      :description="$t('noData')"
      :title="$t('noData')"
      image="/media/illustrations/sigma-1/n18.png"
      modal-id="kt_modal_add_visit"
    ></KTModalCard>
  </div>
  <div v-else class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          {{ $t("visites") }}
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Filter-->
          <button
            class="btn btn-light-primary me-3 d-none"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-trigger="click"
            type="button"
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
            <!--end::Svg Icon-->{{ $t("filter") }}
          </button>
          <!--begin::Menu 1-->
          <div
            class="menu menu-sub menu-sub-dropdown w-300px w-md-325px d-none"
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
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fs-5 fw-bold mb-3"
                  >{{ $t("work") }}:</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <el-select v-model="filters.work_id" class="w-100" filterable>
                  <el-option :label="$t('all')" :value="0"></el-option>
                  <el-option
                    v-for="item in worksList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fs-5 fw-bold mb-3"
                  >{{ $t("type") }}:</label
                >
                <!--end::Label-->
                <!--begin::Input-->

                <select
                  v-model="filters.is_bussness"
                  class="form-select form-select-solid fw-bolder"
                  data-allow-clear="true"
                  data-kt-customer-table-filter="month"
                  data-kt-select2="true"
                  data-placeholder="Select option"
                >
                  <option selected></option>
                  <option value="1">{{ $t("Bussness_Account") }}</option>
                  <option value="0">{{ $t("Personal_Account") }}</option>
                </select>
                <!--end::Input-->
              </div>

              <!--end::Input group-->
              <!--begin::Actions-->
              <div class="d-flex justify-content-end">
                <button
                  class="btn btn-light btn-active-light-primary me-2"
                  data-kt-customer-table-filter="reset"
                  data-kt-menu-dismiss="true"
                  type="reset"
                >
                  {{ $t("Reset") }}
                </button>
                <button
                  class="btn btn-primary"
                  data-kt-customer-table-filter="filter"
                  data-kt-menu-dismiss="true"
                  type="submit"
                  @click="loadData"
                >
                  {{ $t("submit") }}
                </button>
              </div>
              <!--end::Actions-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Menu 1-->
          <!--end::Filter-->
        </div>

        <div
          class="d-flex justify-content-end"
          data-kt-custemer-table-toolbar="base"
        >
          <!--begin::Add custemer-->
          <button
            class="btn btn-primary"
            data-bs-target="#kt_modal_add_visit"
            data-bs-toggle="modal"
            type="button"
            @click="FinishForm = {}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="/media/icons/duotone/Navigation/Plus.svg" />
            </span>
            {{ $t("Add visit") }}
          </button>
          <!--end::Add custemer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center"
          data-kt-custemer-table-toolbar="selected"
        ></div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-custemer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-custemer-table-select="selected_count"
            ></span
            >Selected
          </div>
        </div>
        <!--end::Group actions-->
      </div>
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
          <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
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
              <th v-if="customerId == 0">{{ $t("customer") }}</th>
              <th>{{ $t("user") }}</th>
              <th>{{ $t("time") }}</th>
              <th>{{ $t("status") }}</th>
              <th>{{ $t("result") }}</th>
              <th>{{ $t("actions") }}</th>
            </tr>
          </thead>
          <tbody v-if="vistesList.data">
            <tr
              v-for="(visit, i) in vistesList.data"
              :key="i"
              :value="i"
              :class="i % 2 == 0 ? 'odd' : ''"
            >
              <td v-if="customerId == 0">
                {{ visit.customer.name }}
              </td>
              <td>
                {{ visit.user.name }}
              </td>
              <td>
                {{ visit.time }}
              </td>
              <td>
                <label v-if="visit.status == 1">
                  {{ $t("un Finshed") }}
                </label>
                <label v-else>
                  {{ $t("Finshed") }}
                </label>
              </td>

              <td>
                {{ visit.result }}
              </td>
              <td>
                <a
                  v-if="user_id == visit.user_id && visit.status != 1"
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_finish_visit"
                  data-bs-toggle="modal"
                  @click="finishVisitModel(i)"
                >
                  <span class="svg-icon svg-icon-primary svg-icon-2x">
                    <inline-svg src="/media/icons/duotune/art/art005.svg" />
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="vistesList.total" class="d-flex flex-stack flex-wrap pt-10">
        <div class="fs-6 fw-bold text-gray-700">
          Showing {{ vistesList.count }} to {{ vistesList.total }} of
          {{ vistesList.total }} entries
        </div>
        <!--begin::Pages-->
        <div class="">
          <el-pagination
            v-model:currentPage="filters.page"
            :current-page="filters.page"
            :page-size="15"
            :total="vistesList.total"
            background
            layout="prev, pager, next"
            @current-change="loadData()"
          >
          </el-pagination>
        </div>
        <!--end::Pages-->
      </div>
    </div>
  </div>

  <div
    id="kt_modal_add_visit"
    ref="kt_modal_add_visit"
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
          <h2 class="fw-bolder">{{ $t("Add Visit") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_country_item_close"
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
              <div class="d-flex flex-column mb-5 fv-row">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("time") }}
                </label>

                <el-date-picker
                  v-model="ItemForm.time"
                  class="w-100"
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Select date and time"
                  type="datetime"
                >
                </el-date-picker>

                <span v-if="ItemFormError['name']" class="text-danger">{{
                  ItemFormError["name"][0]
                }}</span>
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
            <button class="btn btn-lg btn-primary" type="submit">
              <span v-if="!loading">
                {{ $t("submit") }}
                <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                  ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-else>
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
    id="kt_finish_visit"
    ref="kt_finish_visit"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_finish_visit_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">{{ $t("Finish Visit") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_finish_visit_close"
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
        <el-form @submit.prevent="FinishVisitForm()">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              id="kt_finish_visit_scroll"
              class="scroll-y me-n7 pe-7"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-dependencies="#kt_modal_add_branche_header"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-offset="300px"
              data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
            >
              <div class="d-flex flex-column mb-5 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-bold mb-2">{{
                  $t("result")
                }}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <textarea
                  v-model="FinishForm.result"
                  class="form-control form-control-solid"
                  name="description"
                  rows="3"
                ></textarea>
                <!--end::Input-->
              </div>

              <div class="d-flex flex-column mb-5 fv-row">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("Next Time") }}
                </label>

                <el-date-picker
                  v-model="FinishForm.next_time"
                  class="w-100"
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Select date and time"
                  type="datetime"
                >
                </el-date-picker>
                <span v-if="FinishFormError['next_time']" class="text-danger">{{
                  FinishFormError["next_time"][0]
                }}</span>
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              id="kt_finish_visit_cancel"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              type="reset"
            >
              {{ $t("discard") }}
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button class="btn btn-lg btn-primary" type="submit">
              <span v-if="!loading">
                {{ $t("submit") }}
                <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                  ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
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
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { hideModal } from "@/core/helpers/dom";
import KTModalCard from "@/components/cards/Card.vue";

export default {
  name: "visites",
  props: ["customerId"],
  components: {
    KTModalCard,
  },
  data() {
    return {
      loading: true,
      vistesList: [],
      filters: {
        customer_id: 0,
        search: "",
        page: 1,
        work_id: null,
      },
      worksList: [],
      ItemFormError: [],
      ItemForm: {},
      user_id: 0,
      FinishForm: {},
      FinishFormError: [],
      index: 0,
    };
  },
  created() {
    if (JwtService.getUserData().id) this.user_id = JwtService.getUserData().id;
    this.loadData();
  },
  methods: {
    async loadData() {
      this.filters.customer_id = this.customerId;
      await ApiService.query("admin/visites", this.filters).then((res) => {
        this.vistesList = res.data;
      });
      this.loading = false;
    },

    finishVisitModel(i) {
      this.index = i;
      this.FinishForm = this.vistesList.data[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.ItemFormError = [];
      if (this.customerId != 0) this.ItemForm.customer_id = this.customerId;
      await ApiService.post("admin/visites", this.ItemForm)
        .then((res) => {
          if (res.status == 201) {
            this.$toast.success(this.$t("messages.success"));
            hideModal("kt_modal_add_visit");
            if (!this.vistesList.data) this.vistesList.data = [];
            this.vistesList.data.push(res.data.data);
          }
          this.loading = false;
        })
        .catch(() => {
          this.ItemFormError = ApiService.errors;
          this.loading = false;
        });
    },

    async FinishVisitForm() {
      this.loading = true;
      this.FinishFormError = [];
      await ApiService.put(
        "admin/visites/Finish/" + this.FinishForm.id,
        this.FinishForm
      )
        .then((res) => {
          this.$toast.success(this.$t("messages.success"));
          hideModal("kt_finish_visit");
          this.vistesList.data[this.index] = res.data.data;
          this.vistesList.push(res.data.newVisit);
          this.loading = false;
          // this.FinishForm.status = 1;
        })
        .catch((error) => {
          this.loading = false;
          this.FinishFormError = ApiService.errors;
        });
    },
  },
  watch: {
    customerId(newValue) {
      this.filters.customer_id = newValue;
      this.loadData();
    },
  },
};
</script>
