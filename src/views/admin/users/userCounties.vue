<template>
  <div v-if="!CountiesList.data || CountiesList.data.length == 0">
    <KTModalCard
      :button-text="$t('addCounty')"
      :description="$t('noData')"
      :title="$t('User Counties')"
      image="/media/illustrations/sigma-1/n18.png"
      modal-id="kt_modal_user_County"
    ></KTModalCard>
  </div>
  <div v-else class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        {{ $t("User Counties") }}
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <button
          class="btn btn-primary"
          data-bs-target="#kt_modal_user_County"
          data-bs-toggle="modal"
          type="button"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="/media/icons/duotone/Navigation/Plus.svg" />
          </span>
          {{ $t("addCounty") }}
        </button>
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
              <th>{{ $t("country") }}</th>
              <th>{{ $t("county") }}</th>
              <th>{{ $t("actions") }}</th>
            </tr>
          </thead>
          <tbody v-if="CountiesList">
            <tr
              v-for="(item, i) in CountiesList"
              :key="i"
              :class="i % 2 == 0 ? 'odd' : ''"
            >
              <td>
                {{ item.country }}
              </td>
              <td>
                {{ item.name }}
              </td>
              <td>
                <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteCounty(i)"
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

  <div
    id="kt_modal_user_County"
    ref="kt_modal_user_County"
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
          <h2 class="fw-bolder">{{ $t("addCounty") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_user_County_header"
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
        <el-form @submit.prevent="AddCounty()">
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
              <div class="row">
                <div class="col-12">
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label
                      class="form-label fw-bolder fs-6 text-gray-700 d-block"
                      >{{ $t("country") }}</label
                    >
                    <!--end::Label-->
                    <!--begin::Select-->
                    <el-select
                      v-model="formCounty.country_id"
                      class="w-100"
                      filterable
                      @change="
                        formCounty.county_id = '';
                        getCounties();
                      "
                    >
                      <el-option
                        v-for="item in countires"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                    <!--end::Select-->
                  </div>
                  <div v-if="formCounty.country_id" class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-bolder fs-6 text-gray-700">{{
                      $t("county")
                    }}</label>
                    <!--end::Label-->
                    <!--begin::Select-->
                    <el-select
                      v-model="formCounty.county_id"
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
                  <span
                    v-if="formCountyErrors['county_id']"
                    class="text-danger"
                    >{{ formCountyErrors["ounty_id"][0] }}</span
                  >
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
</template>

<script>
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import KTModalCard from "@/components/cards/Card.vue";

export default {
  name: "userCounties",
  props: ["userId"],
  components: {
    KTModalCard,
  },
  data() {
    return {
      loading: true,
      CountiesList: [],
      filters: {
        customer_id: 0,
        search: "",
        page: 1,
        work_id: null,
      },
      formCounty: {},
      formCountyErrors: [],
      user_id: 0,
      counties: [],
      countires: [],
    };
  },
  async created() {
    this.user_id = this.$route.params.id;

    this.loadData();

    await ApiService.get("site/General/countries").then((res) => {
      this.countires = res.data;
    });
  },
  methods: {
    async loadData() {
      await ApiService.query(
        "admin/users/counties/" + this.user_id,
        this.filters
      ).then((res) => {
        this.CountiesList = res.data.data;
      });
      this.loading = false;
    },

    finishVisitModel(i) {
      this.index = i;
      this.FinishForm = this.CountiesList.data[i];
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
            if (!this.CountiesList.data) this.CountiesList.data = [];
            this.CountiesList.data.push(res.data.data);
          }
          this.loading = false;
        })
        .catch(() => {
          this.ItemFormError = ApiService.errors;
          this.loading = false;
        });
    },

    async deleteCounty(i) {
      this.loading = true;
      //
      let tempId = this.CountiesList[i].id;
      try {
        await ApiService.get(
          "admin/users/" + this.user_id + "/remove/county/" + tempId
        ).then((res) => {
          this.$toast.success("message.success");
          this.CountiesList = res.data.data;
          hideModal("kt_modal_user_County");
          this.loading = false;
        });
      } catch (e) {
        this.loading = false;
      }
    },

    async AddCounty() {
      this.loading = true;

      let tempId = this.formCounty.county_id;
      await ApiService.get(
        "admin/users/" + this.user_id + "/add/county/" + tempId
      ).then((res) => {
        this.CountiesList = res.data.data;
        this.formCounty.county_id = 0;
        this.loading = false;
      });
    },

    getCounties() {
      let tempId = this.formCounty.country_id;
      ApiService.get("site/locations/counties/" + tempId).then((res) => {
        if (res.data.counteis) {
          this.counties = res.data.counteis;
        }
      });
    },
  },
};
</script>
