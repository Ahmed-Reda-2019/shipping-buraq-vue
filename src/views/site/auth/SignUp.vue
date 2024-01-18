<template>
  <!--begin::Wrapper-->
  <div class="p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
      id="kt_sign_up_form"
      :validation-schema="registration"
      class="form w-100"
      novalidate="novalidate"
      @submit="onSubmitRegister"
    >
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">{{ $t("Create_an_Account") }}</h1>
        <!--end::Title-->
        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">
          {{ $t("Already_have_an_account") }}
          <router-link
            :to="{ name: 'site-sign-in' }"
            class="link-primary fw-bolder"
          >
            {{ $t("signin") }}
          </router-link>
        </div>
        <!--end::Link-->
      </div>
      <!--end::Heading-->

      <!--begin::Input group-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">{{
            $t("name")
          }}</label>
          <Field
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="name"
            placeholder=""
            type="text"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="name" />
            </div>
            <div v-if="errors && errors['name']" class="text-danger">
              {{ errors["name"][0] }}
            </div>
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">{{
            $t("username")
          }}</label>
          <Field
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="username"
            placeholder=""
            type="text"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="username" />
            </div>
            <div v-if="errors && errors['username']" class="text-danger">
              {{ errors["username"][0] }}
            </div>
          </div>
        </div>
        <!--end::Col-->

        <div class="col-xl-6">
          <!--begin::Label-->
          <label class="form-label fw-bolder fs-6 text-gray-700">{{
            $t("country")
          }}</label>
          <!--end::Label-->
          <!--begin::Select-->
          <select
            v-model="country_id"
            class="form-select form-select-solid"
            name="country_id"
            @change="
              getCounties();
              county_id = 0;
            "
          >
            <option value=""></option>
            <option
              v-for="country in countries"
              :key="country.id"
              :value="country.id"
            >
              <b>{{ country.name }}</b>
            </option>
          </select>
          <!--end::Select-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="country_id" />
            </div>
            <div v-if="errors && errors['country_id']" class="text-danger">
              {{ errors["country_id"][0] }}
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <!--begin::Label-->
          <label class="form-label fw-bolder fs-6 text-gray-700">{{
            $t("county")
          }}</label>
          <!--end::Label-->
          <!--begin::Select-->
          <select
            v-model="county_id"
            class="form-select form-select-solid"
            name="county_id"
          >
            <option selected value="0"></option>
            <option
              v-for="county in counties"
              v-show="country_id == county.country_id"
              :key="county.id"
              :value="county.id"
            >
              <b>{{ county.name }}</b>
            </option>
          </select>
          <!--end::Select-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="county_id" />
            </div>
            <div v-if="errors && errors['county_id']" class="text-danger">
              {{ errors["county_id"][0] }}
            </div>
          </div>
        </div>

        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">{{
            $t("phone")
          }}</label>

          <div class="input-group mb-5">
            <span
              v-if="country_id > 0 && countries[country_id]"
              class="input-group-text"
              >{{ countries[country_id].phone_code }}</span
            >
            <Field
              autocomplete="off"
              class="form-control form-control-lg form-control-solid"
              name="phone"
              placeholder=""
              type="tel"
            />
          </div>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="phone" />
            </div>
            <div v-if="errors && errors['phone']" class="text-danger">
              {{ errors["phone"][0] }}
            </div>
          </div>
        </div>
        <!--end::Col-->

        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">{{
            $t("email")
          }}</label>
          <Field
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="email"
            placeholder=""
            type="email"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="email" />
            </div>
            <div v-if="errors && errors['email']" class="text-danger">
              {{ errors["email"][0] }}
            </div>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Label-->
          <label class="form-label fw-bolder text-dark fs-6">
            {{ $t("password") }}
          </label>
          <!--end::Label-->

          <!--begin::Input wrapper-->
          <div class="position-relative mb-3">
            <Field
              autocomplete="off"
              class="form-control form-control-lg form-control-solid"
              name="password"
              placeholder=""
              type="password"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
              <div v-if="errors && errors['password']" class="text-danger">
                {{ errors["password"][0] }}
              </div>
            </div>
          </div>
          <!--end::Input wrapper-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Input group--->

      <!--begin::Input group-->
      <div class="fv-row mb-5">
        <label class="form-label fw-bolder text-dark fs-6">{{
          $t("Confirm_Password")
        }}</label>
        <Field
          autocomplete="off"
          class="form-control form-control-lg form-control-solid"
          name="cpassword"
          placeholder=""
          type="password"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="cpassword" />
          </div>
        </div>
      </div>
      <!--end::Input group-->
      <div class="row">
        <!--begin::Col-->
        <div class="col-lg-6">
          <!--begin::Option-->
          <Field
            id="kt_create_account_form_account_type_personal"
            v-model="is_bussness"
            class="btn-check"
            name="is_bussness"
            type="radio"
            value="0"
          />
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              d-flex
              align-items-center
              mb-10
            "
            for="kt_create_account_form_account_type_personal"
          >
            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
            <span class="svg-icon svg-icon-3x me-5">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                  fill="black"
                />
                <path
                  d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                  fill="black"
                  opacity="0.3"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                $t("Personal_Account")
              }}</span>
              <span class="text-muted fw-bold fs-6">{{
                $t("Personal_Account_text")
              }}</span>
            </span>
            <!--end::Info-->
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-lg-6">
          <!--begin::Option-->
          <Field
            id="kt_create_account_form_account_type_corporate"
            v-model="is_bussness"
            class="btn-check"
            name="is_bussness"
            type="radio"
            value="1"
          />

          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              d-flex
              align-items-center
            "
            for="kt_create_account_form_account_type_corporate"
          >
            <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
            <span class="svg-icon svg-icon-3x me-5">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                  fill="black"
                  opacity="0.3"
                />
                <path
                  d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                  fill="black"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                $t("Bussness_Account")
              }}</span>
              <span class="text-muted fw-bold fs-6">{{
                $t("Bussness_Account_text")
              }}</span>
            </span>
            <!--end::Info-->
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->
        <div v-if="errors && errors['is_bussness']" class="text-danger">
          {{ errors["is_bussness"][0] }}
        </div>
      </div>
      <!--begin::Input group-->
      <div class="col-12 mb-10">
        <label class="form-label fw-bolder text-dark fs-6">{{
          $t("company_name")
        }}</label>
        <Field
          autocomplete="off"
          class="form-control form-control-lg form-control-solid"
          name="campany_name"
          placeholder=""
          type="text"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="campany_name" />
          </div>
          <div v-if="errors && errors['campany_name']" class="text-danger">
            {{ errors["campany_name"][0] }}
          </div>
        </div>
      </div>

      <div v-if="is_bussness && is_bussness == '1'" class="row fv-row mb-7">
        <!--begin::Col-->
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">{{
            $t("tax_number")
          }}</label>
          <Field
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="tax_number"
            placeholder=""
            type="text"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="tax_number" />
            </div>
            <div v-if="errors && errors['tax_number']" class="text-danger">
              {{ errors["tax_number"][0] }}
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">{{
            $t("company_address")
          }}</label>
          <Field
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="campany_address"
            placeholder=""
            type="text"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="campany_address" />
            </div>
            <div v-if="errors && errors['campany_address']" class="text-danger">
              {{ errors["campany_address"][0] }}
            </div>
          </div>
        </div>
        <!--end::Col-->
      </div>
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-check form-check-custom form-check-solid">
          <Field
            class="form-check-input"
            name="toc"
            type="checkbox"
            value="1"
          />
          <span class="form-check-label fw-bold text-gray-700 fs-6">
            {{ $t("I_Agree") }} &
            <a class="ms-1 link-primary" href="#">{{
              $t("Terms_and_conditions")
            }}</a
            >.
          </span>
        </label>
        <div class="fv-help-block text-danger">
          <ErrorMessage name="toc" />
        </div>
      </div>

      <!--end::Input group-->

      <!--end::Input group-->
      <!--begin::Actions-->
      <div class="text-center">
        <button
          id="kt_sign_up_submit"
          :data-kt-indicator="loading ? 'on' : null"
          :disabled="loading"
          class="btn btn-lg btn-primary"
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
      <!--end::Actions-->
    </Form>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { useI18n } from "vue-i18n";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      errors: [],
      Lo: useI18n(),
      submitButton: ref<HTMLElement | null>(null),
      registration: Yup.object().shape({
        name: Yup.string().required().label("Full Name"),
        username: Yup.string().required().label("username Name"),
        phone: Yup.string().required().label("phone"),
        campany_address: Yup.string().label("campany_address"),
        tax_number: Yup.string().label("tax_number"),
        country_id: Yup.string().label("country"),
        county_id: Yup.number().label("county"),
        campany_name: Yup.string().label("campany_name"),
        is_bussness: Yup.boolean().label("is_bussness"),
        email: Yup.string().min(4).required().email().label("Email"),
        toc: Yup.string().required().label("toc"),
        password: Yup.string().min(4).required().label("Password"),
        cpassword: Yup.string()
          .min(4)
          .required()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .label("Password Confirmation"),
      }),
      loading: false,
      is_bussness: false,
      countries: [],
      counties: [],
      county_id: 0,
      country_id: 0,
    };
  },
  created() {
    setCurrentPageBreadcrumbs(this.$t("signUp"));

    ApiService.get("site/mainlocations").then((res) => {
      if (res.data.country) this.countries = res.data.country;
      if (res.data.country) this.counties = res.data.county;
    });
  },
  methods: {
    getCounties() {
      let tempId = this.country_id;
      if (tempId)
        ApiService.get("site/locations/counties/" + tempId).then((res) => {
          if (res.data.counteis) {
            this.counties = res.data.counteis;
          }
        });
    },

    async onSubmitRegister(values) {
      this.loading = true;
      this.errors = [];
      values.county_id = this.county_id;
      values.country_id = this.country_id;
      await ApiService.post("site/auth/register", values)
        .then((rea) => {
          if (rea.status == 201) {
            Swal.fire(
              this.$t("message.registerSuccess"),
              this.$t("message.registerSuccess"),
              "success"
            ).then(() => {
              this.$router.push({ name: "site-sign-in" });
            });
          }
          this.loading = false;
        })
        .catch(() => {
          this.errors = ApiService.errors;
          this.loading = false;
        });

      // if (Object.keys())
    },
  },
});
</script>
