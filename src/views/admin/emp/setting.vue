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
            <div class="col-lg-8">
              <!--begin::Image input-->
              <div
                  class="image-input image-input-outline"
                  data-kt-image-input="true"
                  style="background-image: url(/media/profiles/blank.png)"
              >
                <!--begin::Preview existing profile-->
                <div
                    :style="`background-image: url(${profileDetails.profile})`"
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
              <label class="form-label fw-bolder text-dark fs-6"
              >username</label
              >
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
              <label class="form-label fw-bolder text-dark fs-6">phone</label>
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
                $t("address")
                }}</label>
              <input
                  v-model="profileDetails.address"
                  autocomplete="off"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email"/>
                </div>
                <div v-if="errors && errors['address']" class="text-danger">
                  {{ errors["address"][0] }}
                </div>
              </div>
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
                ></span>
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
        <!--begin::Password-->
        <div class="d-flex flex-wrap align-items-center mb-8 ">
          <div
              class="w-100"
              id="kt_signin_password"
          >
            <div class="fs-4 fw-boldest mb-1">{{ $t("password") }}</div>
            <div class="fs-6 fw-bold text-gray-600">************</div>
          </div>
          <div
              id="kt_signin_password_edit"
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
              <div class="d-flex">
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
                class="btn btn-light fw-boldest d-none"
                @click="passwordFormDisplay = !passwordFormDisplay"
            >
              Reset Password
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
import store from "@/store";

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
      },
      filesURLs: {
        profile: null,
      },
      loading: false,
    };
  },
  beforeCreate() {
    let res = ApiService.get("auth/user-profile").then((data) => {
      this.profileDetails = data.data;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("userSetting"), [
      this.$t("cp"),
      this.$t("customer"),
    ]);
  },
  methods: {
    handleFileUpload($event, name) {
      //ref="profile"
      this.files[name] = $event.target.files[0];
      this.profileDetails.profile = URL.createObjectURL($event.target.files[0]);
      this.filesURLs[name] = URL.createObjectURL($event.target.files[0]);
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

      ApiService.post("auth/update-profile", formData)
          .then((res) => {
            this.profileDetails = res.data.data;
            Swal.fire({
              text: this.$t("InfoIsSuccessFullyChanged!"),
              icon: "success",
              confirmButtonText: this.$t("Ok"),
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-light-primary",
              },
            });
            store.commit(Mutations.SET_USER, res.data.data);
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
      ApiService.post("auth/change-email", this.profileDetails)
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

    async updatePassword() {
      this.updatePasswordButton = true;
      await ApiService.post("auth/update-password", this.changePasswordForm)
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
  computed: {
    profileImg() {
      // if (this.filesURLs.profile )
      //   return this.filesURLs.profile;
      // return this.profileDetails.profile;
      return "";
    },
  },
});
</script>
