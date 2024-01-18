<template>
  <el-form ref="formRef" @submit.prevent="submitCustomerData()">
    <!--begin::Modal body-->
    <div class="modal-body p-0">
      <!--begin::Scroll-->
      <div
        v-if="formData"
        id="kt_modal_add_customer_scroll"
        class="scroll-y me-n7 pe-7"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-dependencies="#kt_modal_add_customer_header"
        data-kt-scroll-max-height="auto"
        data-kt-scroll-offset="300px"
        data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
      >
        <div class="row">
          <div class="col-12 col-md-6 fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
              $t("Facebook")
            }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input v-model="customer.facebook" placeholder="" type="url" />
            </el-form-item>
            <!--end::Input-->
            <span
              v-if="formErrors && formErrors['facebook']"
              class="text-danger"
              >{{ formErrors["facebook"][0] }}</span
            >
          </div>

          <div class="col-12 col-md-6 fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
              $t("twitter")
            }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input v-model="customer.twitter" placeholder="" type="url" />
            </el-form-item>
            <!--end::Input-->
            <span
              v-if="formErrors && formErrors['twitter']"
              class="text-danger"
              >{{ formErrors["twitter"][0] }}</span
            >
          </div>

          <div class="col-12 col-md-6 fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
              $t("instagram")
            }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input
                v-model="customer.instagram"
                placeholder=""
                type="url"
              />
            </el-form-item>
            <!--end::Input-->
            <span
              v-if="formErrors && formErrors['instagram']"
              class="text-danger"
              >{{ formErrors["instagram"][0] }}</span
            >
          </div>

          <div class="col-12 col-md-6 fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
              $t("whatsapp")
            }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input v-model="customer.whatsapp" placeholder="" type="tel" />
            </el-form-item>
            <span
              v-if="formErrors && formErrors['whatsapp']"
              class="text-danger"
              >{{ formErrors["whatsapp"][0] }}</span
            >
            <!--end::Input-->
          </div>

          <div class="mb-10">
            <label class="required form-label">{{ $t("Car Type") }}</label>
            <div>
              <el-form-item prop="name">
                <el-input v-model="customer.car_type" type="text" />
              </el-form-item>
            </div>
          </div>

          <div class="mb-10">
            <label class="required form-label">{{
              $t("Personal Status")
            }}</label>
            <select v-model="customer.status" class="form-select">
              <option value="Married">{{ $t("Married") }}</option>
              <option value="UnMarried">{{ $t("UnMarried") }}</option>
            </select>
          </div>
          <div class="mb-10">
            <label class="required form-label">{{ $t("lang") }}</label>
            <el-select
              v-model="customer.langs"
              class="w-100"
              filterable
              multiple
            >
              <el-option
                v-for="(item, i) in langs"
                :key="i"
                :label="item.name"
                :value="i"
              ></el-option>
            </el-select>
          </div>

          <div class="col-12 col-md-6 fv-row">
            <!--begin::Label-->
            <label class="fs-6 fw-bold mb-2">{{ $t("born_year") }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <div>
              <el-input-number
                v-model="customer.born_year"
                :max="2050"
                :min="1950"
                :step="1"
                class="w-100"
              />
            </div>

            <span
              v-if="formErrors && formErrors['born_year']"
              class="text-danger"
              >{{ formErrors["born_year"][0] }}</span
            >
            <!--end::Input-->
          </div>

          <div class="col-12 col-md-6 fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
              $t("marriage_feast")
            }}</label>

            <!--end::Label-->

            <!--begin::Input-->
            <div>
              <el-date-picker
                v-model="customer.marriage_feast"
                class="w-100"
                format="YYYY/MM/DD"
                placeholder="Pick a Date"
                type="date"
                value-format="YYYY-MM-DD"
              >
              </el-date-picker>
            </div>

            <span
              v-if="formErrors && formErrors['marriage_feast']"
              class="text-danger"
              >{{ formErrors["marriage_feast"][0] }}</span
            >
            <!--end::Input-->
          </div>

          <div class="col-12 col-md-6 fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
              $t("Interests")
            }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input
                v-model="customer.Interests"
                placeholder=""
                type="text"
              />
            </el-form-item>
            <span
              v-if="formErrors && formErrors['Interests']"
              class="text-danger"
              >{{ formErrors["Interests"][0] }}</span
            >
            <!--end::Input-->
          </div>
        </div>
      </div>
      <!--end::Scroll-->
    </div>
    <!--end::Modal body-->

    <!--begin::Modal footer-->
    <div class="modal-footer border-0 flex-end">
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
</template>

<script>
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Country from "@/views/admin/locations/county";
import Countries from "@/views/admin/locations/countries";
import langs from "@/core/config/langs";

export default {
  name: "ClientFormSocial",
  // components: {Countries, Country },
  props: ["formData", "formErrorProp"],
  data() {
    return {
      formErrors: {},
      customer: this.formData,
      worksList: [],
      langs: langs,
      loading: false,
    };
  },
  created() {
    ApiService.get("admin/works").then((data) => {
      this.worksList = data.data.data;
    });
  },
  methods: {
    async submitCustomerData() {
      this.loading = true;
      this.formErrors = [];
      await ApiService.put(
        "admin/customers/social/" + this.customer.id,
        this.customer
      )
        .then((res) => {
          this.formErrors = ApiService.errors;
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch((error) => {
          this.formErrors = ApiService.errors;
          this.loading = false;
        });
      this.loading = false;
    },

    async submitForm() {
      this.formErrors = {};
      await this.$emit("submitForm", this.customer);
      this.formErrors = ApiService.errors;
      this.loading = false;
    },
  },
  watch: {
    formData: function (newValue, oldValue) {
      this.customer = newValue;
    },
    formErrorProp: function (newValue, oldValue) {
      this.formErrors = newValue;
    },
  },
};
</script>
