<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <!--begin::Title-->
    <h1 class="text-dark mb-3">Forgot Password ?</h1>
    <!--end::Title-->
    <div class="text-gray-400 fw-bold fs-4">
      you can  <r></r>est By .
    </div>
    <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6 col-12">
      <li class="nav-item col-lg-6">
          <label data-bs-toggle="tab" href="#kt_tab_pane_1"
              class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              d-flex
              col-lg-6 w-100
              align-items-center
              mb-10
              active
            "
          >
            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
            <span class="svg-icon svg-icon-3x me-5">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path d="M4,16 L5,16 C5.55228475,16 6,16.4477153 6,17 C6,17.5522847 5.55228475,18 5,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 Z M1,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z M3,6 L5,6 C5.55228475,6 6,6.44771525 6,7 C6,7.55228475 5.55228475,8 5,8 L3,8 C2.44771525,8 2,7.55228475 2,7 C2,6.44771525 2.44771525,6 3,6 Z" fill="#000000" opacity="0.3"/>
        <path d="M10,6 L22,6 C23.1045695,6 24,6.8954305 24,8 L24,16 C24,17.1045695 23.1045695,18 22,18 L10,18 C8.8954305,18 8,17.1045695 8,16 L8,8 C8,6.8954305 8.8954305,6 10,6 Z M21.0849395,8.0718316 L16,10.7185839 L10.9150605,8.0718316 C10.6132433,7.91473331 10.2368262,8.02389331 10.0743092,8.31564728 C9.91179228,8.60740125 10.0247174,8.9712679 10.3265346,9.12836619 L15.705737,11.9282847 C15.8894428,12.0239051 16.1105572,12.0239051 16.294263,11.9282847 L21.6734654,9.12836619 C21.9752826,8.9712679 22.0882077,8.60740125 21.9256908,8.31564728 C21.7631738,8.02389331 21.3867567,7.91473331 21.0849395,8.0718316 Z" fill="#000000"/>
    </g>
</svg>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                  $t("email")
                }}</span>
            </span>
            <!--end::Info-->
          </label>
      </li>
      <li class="nav-item col-lg-6" >
          <label
              data-bs-toggle="tab" href="#kt_tab_pane_2"
              class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              d-flex
              col-lg-6 w-100
              align-items-center
              mb-10

            "
          >
            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
            <span class="svg-icon svg-icon-3x me-5">


              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path d="M7.13888889,4 L7.13888889,19 L16.8611111,19 L16.8611111,4 L7.13888889,4 Z M7.83333333,1 L16.1666667,1 C17.5729473,1 18.25,1.98121694 18.25,3.5 L18.25,20.5 C18.25,22.0187831 17.5729473,23 16.1666667,23 L7.83333333,23 C6.42705272,23 5.75,22.0187831 5.75,20.5 L5.75,3.5 C5.75,1.98121694 6.42705272,1 7.83333333,1 Z" fill="#000000" fill-rule="nonzero"/>
        <polygon fill="#000000" opacity="0.3" points="7 4 7 19 17 19 17 4"/>
        <circle fill="#000000" cx="12" cy="21" r="1"/>
    </g>
</svg>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                  $t("phone")
                }}</span>
            </span>
            <!--end::Info-->
          </label>
      </li>
    </ul>


    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
        <Form
            id="kt_login_password_reset_form"
            class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            @submit="onSubmitForgotPasswordByEmail"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
              Enter your email to reset your password.
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->
          <div class="fv-row mb-10">
            <label class="form-label fw-bolder text-gray-900 fs-6">Email</label>
            <Field
                v-model="ForgotForm.email"
                class="form-control form-control-solid"
                name="email"
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

          <!--begin::Actions-->
          <div class="d-flex flex-wrap justify-content-center pb-lg-0">
            <button
                :data-kt-indicator="loading ? 'on' : null"
                :disabled="loading"
                class="btn btn-lg btn-primary fw-bolder me-4"
                type="submit"
            >
                <span class="indicator-label">
                  Submit
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


            <router-link
                class="btn btn-lg btn-light-primary fw-bolder"
                to="/sign-up">
              Cancel
            </router-link>
          </div>
          <!--end::Actions-->
        </Form>

      </div>
      <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
        <form
            class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            @submit.prevent="onSubmitForgotPasswordByPhone"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
              Enter your email to reset your password.
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->
          <div class="fv-row mb-10">
            <label class="form-label fw-bolder text-gray-900 fs-6">{{ $t("phone") }}</label>
            <div class="input-group mb-5">
            <span class="input-group-text" v-if="!ForgotForm.verify_phone" @click="onSubmitForgotPasswordByPhone">
              <i class="fa fa-paper-plane"></i>
            </span>
            <span class="input-group-text" v-if="ForgotForm.verify_phone && ForgotForm.verify_phone == true" @click="onSubmitForgotPasswordByPhone">
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </span>

              <Field
                  :readonly="ForgotForm.verify_phone && ForgotForm.verify_phone == true"
                  v-model="ForgotForm.phone"
                  class="form-control form-control-lg form-control-solid"
                  type="tel"
              />
            </div>
            <div v-if="errors && errors['phone']" class="text-danger">
              {{ errors["phone"][0] }}
            </div>
          </div>
          <template v-if="ForgotForm.verify_phone && ForgotForm.verify_phone == true">
              <span class="link-primary fs-6 fw-bolder text-end" @click="delete  ForgotForm['verify_phone']">
                  {{ $t("Change Phone") }}
              </span>
          </template>


          <template v-if="ForgotForm.verify_phone && ForgotForm.verify_phone == true">
            <form @submit.prevent="sendNewPassword">
              <div class="fv-row mb-10">
              <label class="form-label fw-bolder text-gray-900 fs-6"> Code  </label>
              <Field
                  v-model="ForgotForm.token"
                  class="form-control form-control-solid"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email"/>
                </div>
                <div v-if="errors && errors['token']" class="text-danger">
                  {{ errors["token"][0] }}
                </div>
              </div>
            </div>

              <div class="mb-10 fv-row" data-kt-password-meter="true">
              <!--begin::Wrapper-->
              <div class="mb-1">
                <!--begin::Label-->
                <label class="form-label fw-bolder text-dark fs-6">
                  {{ $t("password") }}
                </label>
                <!--end::Label-->
                <div class="input-group mb-3">
                  <Field
                      v-model="ForgotForm.password"
                      :type="passwordType == true ? 'password' : 'text'"
                      autocomplete="off"
                      class="form-control form-control-lg form-control-solid"
                  />
                  <span
                      class="input-group-text end-0 bt"
                      @click="passwordType = !passwordType"
                  >
            <i v-if="passwordType == true" class="icon-xl fas far fa-eye"></i>
            <i v-else class="fas fa-eye-slash"></i>
          </span>
                </div>
              </div>
              <!--end::Wrapper-->
                <div v-if="errors && errors['password']" class="text-danger">
                  {{ errors["password"][0] }}
                </div>
            </div>
              <div class="mb-10 fv-row" data-kt-password-meter="true">
                <!--begin::Wrapper-->
                <div class="mb-1">
                  <!--begin::Label-->
                  <label class="form-label fw-bolder text-dark fs-6">
                    {{ $t("Confirm Password") }}
                  </label>
                  <!--end::Label-->
                  <div class="input-group mb-3">
                    <Field
                        v-model="ForgotForm.password_confirmation"
                        :type="passwordType == true ? 'password' : 'text'"
                        autocomplete="off"
                        class="form-control form-control-lg form-control-solid"
                    />
                    <span
                        class="input-group-text end-0 bt"
                        @click="passwordType = !passwordType"
                    >
            <i v-if="passwordType == true" class="icon-xl fas far fa-eye"></i>
            <i v-else class="fas fa-eye-slash"></i>
          </span>
                  </div>
                </div>
                <!--end::Wrapper-->
              </div>

              <!--end::Input group--->

              <div class="d-flex flex-wrap justify-content-center pb-lg-0">
              <button
                  :data-kt-indicator="loading ? 'on' : null"
                  :disabled="loading"
                  class="btn btn-lg btn-primary fw-bolder me-4"
                  type="submit"
              >
                <span class="indicator-label">
                  {{ $t('submit') }}
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


              <router-link
                  class="btn btn-lg btn-light-primary fw-bolder"
                  :to="{name:'sign-in'}">
                {{ $t('Cancel') }}
              </router-link>
            </div>
            </form>
          </template>
          <!--begin::Actions-->
          <!--end::Actions-->
        </form>

      </div>
    </div>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import ApiService from "@/core/services/ApiService";
import router from "@/router";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data(){
    return {
      ForgotForm:{},
      errors:{},
      by:0,
      loading:false,
      lockedSend:false,
      passwordType:false
    }
  },
  methods:{
    onSubmitForgotPasswordByEmail(){
        console.log(this.ForgotForm)
      this.sendRequest('auth/resetByEmail' , function (res) {
        console.log(res)
      })

    },
    onSubmitForgotPasswordByPhone(){

      this.errors = {};
      this.loading = true;
      ApiService.post('auth/resetByPhone' ,this.ForgotForm ).then(res =>{
        if (res.status == 200){
          Swal.fire({
            text: res.data.message,
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: this.$t('Ok, got it!'),
            customClass: {
              confirmButton: "btn fw-bold btn-light-primary",
            },
          }).then(function () {
            // Go to page after successfully login
            // router.push({name: "dashboard"});
          });
          this.ForgotForm['verify_phone'] = true;
        }else {
          delete this.ForgotForm['verify_phone']
        }
      }).catch(()=>{
        this.errors = ApiService.errors;
      }).finally(()=>{
        this.loading = false;
      })

    },
    sendRequest(url , callBack){
      this.errors = {};
      this.loading = true;
      ApiService.post(url ,this.ForgotForm ).then(res =>{
        if (res.status == 200){
          Swal.fire({
            text: "All is cool! Now you submit this form",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-primary",
            },
          }).then(function () {
            // Go to page after successfully login
            // router.push({name: "dashboard"});
          });
          callBack(res , this.ForgotForm);

        }
      }).catch(()=>{
        this.errors = ApiService.errors;
      }).finally(()=>{
        this.loading = false;
      });
    },
    sendNewPassword(){
      this.errors = {};
      this.loading = true;
      ApiService.post('auth/verifyPassword/' + this.ForgotForm['token'] ,this.ForgotForm ).then(res =>{
        if (res.status == 200){
          Swal.fire({
            text: res.data.message,
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: this.$t('Ok, got it!'),
            customClass: {
              confirmButton: "btn fw-bold btn-light-primary",
            },
          }).then(function () {
            console.log("$router")
            router.push({name: "sign-in"});

          });
        }
      }).catch(()=>{
        this.errors = ApiService.errors;
      }).finally(()=>{
        this.loading = false;
      })
    }


  }
});
</script>
