<template>
  <el-form ref="formRef" @submit.prevent="submitForm()">
    <!--begin::Modal body-->
    <div v-if="formData" class="d-flex flex-column flex-md-row p-3">
      <div
        id="kt_vtab_pane_4"
        class="tab-pane fade active show"
        role="tabpanel"
      >
        <div class="row row-cols-1 row-cols-md-2">
          <!--begin::Input group-->
          <div class="fv-row mb-7 w-100">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">
              {{$t("code")}}
            </label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input
                v-model="customer.code"
                placeholder=""
                type="text"
              />
            </el-form-item>
            <!--end::Input-->
            <span
                v-if="formErrors && formErrors['code']"
                class="text-danger"
            >{{ formErrors["code"][0] }}</span>
          </div>
          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
                $t("name")
              }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name">
              <el-input
                v-model="customer.name"
                placeholder=""
                type="text"
              />
            </el-form-item>
            <!--end::Input-->
            <span
                v-if="formErrors && formErrors['name']"
                class="text-danger"
            >{{ formErrors["name"][0] }}</span>
          </div>
          <!--begin::Input group-->
          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold mb-2">{{
                $t("name Arabic")
              }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="name_ar">
              <el-input
                v-model="customer.name_ar"
                placeholder=""
                type="text"
              />
            </el-form-item>
            <span
              v-if="formErrors && formErrors['name_ar']"
              class="text-danger"
            >{{ formErrors["name_ar"][0] }}</span>
            <!--end::Input-->
          </div>
          <!--end::Input group-->

          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="fs-6 fw-bold mb-2">
              <span class="required">{{ $t("email") }}</span>
            </label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="email">
              <el-input v-model="customer.email" />
            </el-form-item>
            <span
              v-if="formErrors && formErrors['email']"
              class="text-danger"
            >{{ formErrors["email"][0] }}</span
            >

            <!--end::Input-->
          </div>

          <div class="fv-row">
            <!--begin::Label-->
            <label class="fs-6 fw-bold mb-2">{{ $t("password") }}</label>
            <!--end::Label-->

            <!--begin::Input-->
            <el-form-item prop="description">
              <el-input v-model="customer.password" type="password" />
            </el-form-item>
            <span
              v-if="formErrors && formErrors['password']"
              class="text-danger"
            >{{ formErrors["password"][0] }}</span
            >

            <!--end::Input-->
          </div>


         <div>
           <!--begin::Input group-->
           <div class="fv-row">
             <!--begin::Label-->
             <label class="fs-6 fw-bold mb-2">{{ $t("phone") }} 1</label>
             <!--end::Label-->

             <!--begin::Input-->
             <el-form-item prop="description">
               <el-input v-model="customer.phone_1" type="text" />
             </el-form-item>
             <span
               v-if="formErrors && formErrors['phone_1']"
               class="text-danger"
             >{{ formErrors["phone_1"][0] }}</span
             >

             <!--end::Input-->
           </div>
           <!--begin::Input group-->
           <!--begin::Input group-->
           <div class="fv-row">
             <!--begin::Label-->
             <label class="fs-6 fw-bold mb-2">{{ $t("phone") }} 2</label>
             <!--end::Label-->

             <!--begin::Input-->
             <el-form-item prop="description">
               <el-input v-model="customer.phone_2" type="text" />
             </el-form-item>
             <span
               v-if="formErrors && formErrors['phone_2']"
               class="text-danger"
             >{{ formErrors["phone_2"][0] }}</span
             >

             <!--end::Input-->
           </div>
           <!--begin::Input group-->
         </div>
          <div class="fv-row">
            <country
              :FormData="customer"
              :formErrors="formErrors ? formErrors : []"
              v-model:country_id="customer.country_id"
            ></country>
            <span
              v-if="formErrors && formErrors['country_id']"
              class="text-danger"
            >{{ formErrors["country_id"][0] }}</span>
          </div>

          <div class="w-100 fv-row mb-7">
            <!--begin::Label-->
            <label class="fs-6 fw-bold mb-2">{{
                $t("address")
              }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <el-input v-model="customer.address" type="text" />
            <!--end::Input-->
          </div>



        </div>
        <div class="modal-footer flex-end border-0">
          <!--begin::Button-->
          <button
            :data-kt-indicator="loadingSubmit ? 'on' : null"
            class="btn btn-lg btn-primary"
            type="submit"
          >
              <span v-if="!loadingSubmit" class="indicator-label">
                {{ $t("submit") }}
                <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
            <span v-if="loadingSubmit" class="indicator-progress">
                {{ $t("PleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
          </button>
          <!--end::Button-->
        </div>
      </div>
    </div>
    <!--begin::Modal footer-->
    <!--end::Modal footer-->
  </el-form>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Country from "@/views/admin/locations/county";
import Countries from "@/views/admin/locations/countries";
import ClientFormSocial from "@/views/admin/clients/ClientFormSocial";

export default {
  name: "ClientForm",
  components: {
    // Countries,
      Country
  },
  props: ["formData", "formErrorProp" ,"loadingSubmit"],
  data() {
    return {
      formErrors: {},
      customer: this.formData,
      worksList: [],
      ShipmentTypesList: [],
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      this.formErrors = {};
      this.loading = true;
      try {
        await this.$emit("submitForm", this.customer);
        this.loading = false;
      } catch (e) {
        this.formErrors = ApiService.errors;
        this.loading = false;
      }
    },
  },
  watch: {
    formData: function (newValue) {
      this.customer = newValue;
      this.customer.num_workers = parseInt(this.customer.num_workers);
      this.customer.year_founded = parseInt(this.customer.year_founded);
      this.customer.born_year = parseInt(this.customer.born_year);
    },
    formErrorProp: function (newValue) {
      this.formErrors = newValue;
    },
  },
};
</script>
