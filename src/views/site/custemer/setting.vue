<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
        aria-controls="kt_account_profile_details"
        aria-expanded="true"
        class="card-header border-0 cursor-pointer"
        data-bs-target="#kt_account_profile_details"
        data-bs-toggle="collapse"
        role="button"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">{{ $t("profileDetails") }}</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <Form
          id="kt_account_profile_details_form"
          class="form"
          novalidate="novalidate"
          @submit="saveChanges1()"
      >
        <div class="card-body border-top p-9">
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">{{
              $t("Avatar")
              }}</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-4">
              <!--begin::Image input-->
              <div
                  class="image-input image-input-outline"
                  data-kt-image-input="true"
                  style="background-image: url(/media/profiles/blank.png)"
              >
                <!--begin::Preview existing profile-->
                <div
                    :style="`background-image: url(${profileDetails.profileUrl})`"
                    class="image-input-wrapper w-125px h-125px"
                ></div>
                <!--end::Preview existing profile-->

                <!--begin::Label-->
                <label
                    class="
                    btn btn-icon btn-circle btn-active-color-primary
                    w-25px
                    h-25px
                    bg-white
                    shadow
                  "
                    data-bs-toggle="tooltip"
                    data-kt-image-input-action="change"
                    title="Change profile"
                >
                  <i class="bi bi-pencil-fill fs-7"></i>

                  <!--begin::Inputs-->
                  <input
                      ref="profile"
                      accept=".png, .jpg, .jpeg"
                      type="file"
                      @change="handleFileUpload($event, 'profile')"
                  />
                  <input name="profile_remove" type="hidden"/>
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->
              </div>
              <!--end::Image input-->

              <!--begin::Hint-->
              <div class="form-text">
                {{ $t("Allowed file types") }}: png, jpg, jpeg.
              </div>
              <!--end::Hint-->
            </div>
            <div class="col-lg-4">
              <!--begin::Image input-->
              <div
                  v-if="profileDetails.is_bussness"
                  class="image-input image-input-outline"
                  data-kt-image-input="true"
                  style="background-image: url(/media/profiles/blank.png)"
              >
                <!--begin::Preview existing profile-->
                <div
                    :style="`background-image: url(${profileDetails.logoUrl})`"
                    class="image-input-wrapper w-125px h-125px"
                ></div>
                <!--end::Preview existing profile-->

                <!--begin::Label-->
                <label
                    class="
                    btn btn-icon btn-circle btn-active-color-primary
                    w-25px
                    h-25px
                    bg-white
                    shadow
                  "
                    data-bs-toggle="tooltip"
                    data-kt-image-input-action="change"
                    title="Change profile"
                >
                  <i class="bi bi-pencil-fill fs-7"></i>

                  <!--begin::Inputs-->
                  <input
                      ref="logo"
                      accept=".png, .jpg, .jpeg"
                      type="file"
                      @change="handleFileUpload($event, 'logo')"
                  />
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->

                <!--end::Remove-->
              </div>
              <!--end::Image input-->

              <!--begin::Hint-->
              <div class="form-text">
                {{ $t("Allowed file types") }}: png, jpg, jpeg.
              </div>
              <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>

          <div class="row fv-row mb-7">
            <!--begin::Col-->
            <div class="col-xl-6">
              <label class="form-label fw-bolder text-dark fs-6">{{
                $t("Full Name")
                }}</label>
              <input
                  v-model="profileDetails.name"
                  autocomplete="off"
                  class="form-control form-control-lg form-control-solid"
                  name="name"
                  type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name"/>
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
              <input
                  v-model="profileDetails.username"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="username"/>
                </div>
                <div v-if="errors && errors['username']" class="text-danger">
                  {{ errors["username"][0] }}
                </div>
              </div>
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-xl-6">
              <label class="form-label fw-bolder text-dark fs-6">{{
                $t("phone")
                }}</label>
              <input
                  v-model="profileDetails.phone"
                  autocomplete="off"
                  class="form-control form-control-lg form-control-solid"
                  type="phone"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone"/>
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
              <input
                  v-model="profileDetails.email"
                  autocomplete="off"
                  class="form-control form-control-lg form-control-solid"
                  type="email"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email"/>
                </div>
                <div v-if="errors && errors['email']" class="text-danger">
                  {{ errors["email"][0] }}
                </div>
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <div class="row">
            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Option-->
              <input
                  id="kt_create_account_form_account_type_personal"
                  v-model="profileDetails.is_bussness"
                  class="btn-check"
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
              <input
                  id="kt_create_account_form_account_type_corporate"
                  v-model="profileDetails.is_bussness"
                  class="btn-check"
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

          <div class="text-center">
            <button
                ref="submitButton1"
                :data-kt-indicator="submitButton1 ? 'on' : null"
                :disabled="submitButton1"
                class="btn btn-lg btn-primary"
                type="submit"
            >
              <span class="indicator-label"> {{ $t("submit") }} </span>
              <span class="indicator-progress">
                {{ $t("PleaseWait") }}
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                >
                </span>
              </span>
            </button>
          </div>
          <!--end::Actions-->
        </div>
      </Form>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->

  <!--begin::Sign-in Method-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
        class="card-header border-0 cursor-pointer"
        data-bs-target="#kt_account_signin_method"
        data-bs-toggle="collapse"
        role="button"
    >
      <div class="card-title m-0">
        <h3 class="fw-boldest m-0">{{ $t("password_and_security") }}</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_signin_method" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <!--begin::Email Address-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div id="kt_signin_email" :class="{ 'd-none': emailFormDisplay }">
            <div class="fs-4 fw-boldest mb-1">{{ $t("email") }}</div>
            <div class="fs-6 fw-bold text-gray-600">
              {{ profileDetails.email }}
            </div>
          </div>

          <div
              id="kt_signin_email_edit"
              :class="{ 'd-none': !emailFormDisplay }"
              class="flex-row-fluid"
          >
            <!--begin::Form-->
            <Form
                id="kt_signin_change_email"
                :validation-schema="changeEmail"
                class="form"
                novalidate="novalidate"
                @submit="updateEmail()"
            >
              <div class="row mb-6">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bolder mb-3"
                        for="emailaddress"
                    >{{ $t("Enter New Email Address") }}</label
                    >
                    <Field
                        id="emailaddress"
                        v-model="changeEmailForm.emailaddress"
                        class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                        name="emailaddress"
                        type="email"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="emailaddress"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bolder mb-3"
                        for="confirmemailpassword"
                    >{{ $t("Confirm Password") }}</label
                    >
                    <Field
                        id="confirmemailpassword"
                        v-model="changeEmailForm.confirmemailpassword"
                        class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                        name="confirmemailpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmemailpassword"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button
                    id="kt_signin_submit"
                    ref="updateEmailButton"
                    class="btn btn-primary me-2 px-6"
                    type="submit"
                >
                  <span class="indicator-label">
                    {{ $t("Change Email") }}
                  </span>
                  <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                        class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                    id="kt_signin_cancel"
                    class="btn btn-color-gray-400 btn-active-light-primary px-6"
                    type="button"
                    @click="emailFormDisplay = !emailFormDisplay"
                >
                  {{ $t("Cancel") }}
                </button>
              </div>
            </Form>
            <!--end::Form-->
          </div>
          <div
              id="kt_signin_email_button"
              :class="{ 'd-none': emailFormDisplay }"
              class="ms-auto"
          >
            <button
                :disabled="updateEmailButton"
                class="btn btn-light fw-boldest px-6"
                @click="emailFormDisplay = !emailFormDisplay"
            >
              {{ $t("Change Email") }}
            </button>
          </div>
        </div>
        <!--end::Email Address-->

        <!--begin::Password-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div
              id="kt_signin_password"
              :class="{ 'd-none': passwordFormDisplay }"
          >
            <div class="fs-4 fw-boldest mb-1">{{ $t("password") }}</div>
            <div class="fs-6 fw-bold text-gray-600">************</div>
          </div>
          <div
              id="kt_signin_password_edit"
              :class="{ 'd-none': !passwordFormDisplay }"
              class="flex-row-fluid"
          >
            <div class="fs-6 fw-bold text-gray-600 mb-4">
              {{ $t("alert_password") }}
            </div>

            <!--begin::Form-->
            <Form
                id="kt_signin_change_password"
                :validation-schema="changePassword"
                class="form"
                novalidate="novalidate"
                @submit="updatePassword()"
            >
              <div class="row mb-6">
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bolder mb-3"
                        for="currentpassword"
                    >{{ $t("Current Password") }}</label
                    >
                    <Field
                        id="currentpassword"
                        v-model="changePasswordForm.currentpassword"
                        class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                        name="currentpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="currentpassword"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bolder mb-3"
                        for="newpassword"
                    >{{ $t("New Password") }}</label
                    >
                    <Field
                        id="newpassword"
                        v-model="changePasswordForm.newpassword"
                        class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                        name="newpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="newpassword"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                        class="form-label fs-6 fw-bolder mb-3"
                        for="confirmpassword"
                    >{{ $t("Confirm New Password") }}</label
                    >
                    <Field
                        id="confirmpassword"
                        class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                        name="confirmpassword"
                        type="password"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmpassword"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button
                    id="kt_password_submit"
                    ref="updatePasswordButton"
                    :data-kt-indicator="updatePasswordButton ? 'on' : null"
                    :disabled="updatePasswordButton"
                    class="btn btn-primary me-2 px-6"
                    type="submit"
                >
                  <span class="indicator-label">
                    {{ $t("UpdatePassword") }}
                  </span>
                  <span class="indicator-progress">
                    {{ $t("PleaseWait") }}
                    <span
                        class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                    id="kt_password_cancel"
                    class="btn btn-color-gray-400 btn-active-light-primary px-6"
                    type="button"
                    @click="passwordFormDisplay = !passwordFormDisplay"
                >
                  {{ $t("Cancel") }}
                </button>
              </div>
            </Form>
            <!--end::Form-->
          </div>
          <div
              id="kt_signin_password_button"
              :class="{ 'd-none': passwordFormDisplay }"
              class="ms-auto"
          >
            <button
                class="btn btn-light fw-boldest"
                @click="passwordFormDisplay = !passwordFormDisplay"
            >
              {{ $t("Reset Password") }}
            </button>
          </div>
        </div>
        <!--end::Password-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Sign-in Method-->
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import ApiService from "@/core/services/ApiService";
import {useI18n} from "vue-i18n";
import JwtService from "@/core/services/JwtService";
import {Mutations} from "@/store/enums/StoreEnums";
import {useStore} from "vuex";
import th from "element-plus/packages/locale/lang/th";

interface ProfileDetails {
  profile: string;
  name: string;
  surname: string;
  company: string;
  contactPhone: string;
  companySite: string;
  country: string;
  language: string;
  timezone: string;
  currency: string;
  communications: {
    email: boolean;
    phone: boolean;
  };
  allowMarketing: boolean;
}

export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  data() {
    return {
      LocalI18n: useI18n(),
      submitButton1: false,
      submitButton2: ref<HTMLElement | null>(null),
      submitButton3: ref<HTMLElement | null>(null),
      submitButton4: ref<HTMLElement | null>(null),
      submitButton5: ref<HTMLElement | null>(null),
      updateEmailButton: false,
      updatePasswordButton: false,

      emailFormDisplay: ref(false),
      passwordFormDisplay: ref(false),

      profileDetailsValidator: Yup.object().shape({
        name: Yup.string().required(),
        usrrname: Yup.string().required(),
        phone: Yup.string().required().label("Contact phone"),
        email: Yup.string().min(4).required().email().label("Email"),
      }),

      changeEmail: Yup.object().shape({
        emailaddress: Yup.string().required().email().label("Email"),
        confirmemailpassword: Yup.string().required().label("Password"),
      }),
      changeEmailForm: {
        emailaddress: "",
        confirmemailpassword: "",
      },
      changePasswordForm: {
        currentpassword: "",
        newpassword: "",
      },
      changePassword: Yup.object().shape({
        currentpassword: Yup.string().required().label("Current password"),
        newpassword: Yup.string().min(4).required().label("Password"),
        confirmpassword: Yup.string()
            .min(4)
            .required()
            .oneOf([Yup.ref("newpassword"), null], this.$t("Passwordsmustmatch"))
            .label("Password Confirmation"),
      }),

      profileDetails: JwtService.getUserData(),
      errors: [],
      files: {
        profile: null,
        logo: null,
      },
    };
  },
  beforeCreate() {
    let res = ApiService.get("site/auth/user-profile").then((data) => {
      this.profileDetails = data.data.data;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("userSetting"), [this.$t("customer")]);
  },
  methods: {
    // profile data
    handleFileUpload($event, name) {
      this.files[name] = $event.target.files[0];

      if (name == "logo")
        this.profileDetails.logoUrl = URL.createObjectURL(
            $event.target.files[0]
        );
      if (name == "profile")
        this.profileDetails.profileUrl = URL.createObjectURL(
            $event.target.files[0]
        );
    },
    saveChanges1() {
      this.submitButton1 = true;

      const formData = new FormData();
      Object.keys(this.profileDetails).forEach((value) => {
        if (
            this.profileDetails[value] &&
            Object.keys(this.files).indexOf(value) == -1
        )
          formData.append(value, this.profileDetails[value]);
      });

      Object.keys(this.files).forEach((value) => {
        if (this.files[value]) formData.append(value, this.files[value]);
      });
      ApiService.post("site/auth/update-profile", formData)
          .then((res) => {
            this.profileDetails = res.data.data;
            this.files = {
              profile: null,
              logo: null,
            };
            useStore().commit(Mutations.SET_USER, res.data.data);
            this.$forceUpdate;

            Swal.fire({
              text: this.$t("emailIsSuccessFullyChanged!"),
              icon: "success",
              confirmButtonText: this.$t("Ok"),
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-light-primary",
              },
            });
            this.submitButton1 = false;
          })
          .catch(() => {
            this.errors = ApiService.errors;
            this.submitButton1 = false;
          });
    },

    saveChanges2() {
      // if (this.submitButton2) {
      // Activate indicator
      // this.submitButton2.setAttribute("data-kt-indicator", "on");
      ApiService.post("site/auth/change-email", this.profileDetails)
          .then((res) => {
            this.profileDetails = res.data.data;
            Swal.fire({
              text: this.$t("emailIsSuccessFullyChanged!"),
              icon: "success",
              confirmButtonText: "Ok",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-light-primary",
              },
            }).then(() => {
              useStore().commit(Mutations.SET_USER, res.data.data);
            });
            this.$forceUpdate();
          })
          .catch(() => {
            this.errors = ApiService.errors;
          });
      // this.submitButton2?.removeAttribute("data-kt-indicator");
      // }
    },

    saveChanges3() {
      if (this.submitButton3) {
        // Activate indicator
        this.submitButton3.setAttribute("data-kt-indicator", "on");

        this.submitButton3?.removeAttribute("data-kt-indicator");
      }
    },

    saveChanges4() {
      if (this.submitButton4) {
        // Activate indicator
        this.submitButton4.setAttribute("data-kt-indicator", "on");

        this.submitButton4?.removeAttribute("data-kt-indicator");
      }
    },

    async updateEmail() {
      this.updateEmailButton = true;
      await ApiService.post("site/auth/update-email", this.changeEmailForm)
          .then((res) => {
            Swal.fire({
              text: this.$t("emailIsSuccessFullyChanged!"),
              icon: "success",
              confirmButtonText: "Ok",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-light-primary",
              },
            }).then(() => {
              useStore().commit(Mutations.SET_USER, res.data.data);
              this.emailFormDisplay = false;
            });
          })
          .catch(() => {
            this.errors = ApiService.errors;
          });
      this.updateEmailButton = false;
    },

    async updatePassword() {
      this.updatePasswordButton = true;
      await ApiService.post(
          "site/auth/update-password",
          this.changePasswordForm
      )
          .then((res) => {
            this.passwordFormDisplay = false;
            Swal.fire({
              text: this.$t("Passwordissuccessfullychanged!"),
              icon: "success",
              confirmButtonText: this.$t("Ok"),
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-light-primary",
              },
            });
          })
          .catch(() => {
            this.errors = ApiService.errors;
          });
      this.updatePasswordButton = false;
    },
    removeImage() {
      this.profileDetails.profile = "/media/profiles/blank.png";
    },
  },
});
</script>
