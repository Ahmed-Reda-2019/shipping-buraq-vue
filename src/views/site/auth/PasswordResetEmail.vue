<template>
  <!--begin::Wrapper-->
  <div class=" p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <!--begin::Title-->
    <h1 class="text-dark mb-3">Forgot Password ?</h1>
    <!--end::Title-->
    <div class="text-gray-400 fw-bold fs-4">
      you can  <r></r>est By .
    </div>

    <form @submit.prevent="sendNewPassword">
      <div class="fv-row mb-10 d-none">
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
        <div v-if="errors && errors['password']" class="text-danger">
          {{ errors["password"][0] }}
        </div>
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
            :to="{name:'site-sign-in'}" >
          {{ $t('Cancel') }}
        </router-link>
      </div>
    </form>

    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import * as Yup from "yup";
import {Actions} from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import th from "element-plus/packages/locale/lang/th";
import ApiService from "@/core/services/ApiService";
import router from "@/router";

export default defineComponent({
  name: "password-reset-email",
  components: {
    Field,
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
  created() {
    this.ForgotForm['token'] = this.$route.params.token;
  },
  methods:{
    sendNewPassword(){
      this.errors = {};
      this.loading = true;
      ApiService.post('site/auth/verifyPassword/' + this.ForgotForm['token'] ,this.ForgotForm ).then(res =>{
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
            router.push({name: "site-sign-in"});
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
