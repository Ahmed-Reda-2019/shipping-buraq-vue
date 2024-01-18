<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
        id="kt_login_password_reset_form"
        :validation-schema="PhoneVerify"
        class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        @submit="onSubmitPhoneVerify"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Forgot Password ?</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">
          Enter your email to reset your password.
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-label fw-bolder text-gray-900 fs-6">opt</label>
        <Field
            class="form-control form-control-solid"
            name="opt"
            placeholder=""
            type="opt"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="opt"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex flex-wrap justify-content-center pb-lg-0">
        <button
            id="kt_password_reset_submit"
            ref="submitButton"
            class="btn btn-lg btn-primary fw-bolder me-4"
            type="submit"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span
                class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <router-link
            class="btn btn-lg btn-light-primary fw-bolder"
            to="/sign-up"
        >Cancel
        </router-link
        >
      </div>
      <!--end::Actions-->
    </Form>
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
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);

    //Create form validation object
    const PhoneVerify = Yup.object().shape({
      opt: Yup.string().required().label("opt"),
    });

    //Form submit function
    const onSubmitPhoneVerify = (values) => {
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // dummy delay
      ApiService.post('', values).then((res) => {
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

          // router.push({ name: "dashboard" });
        });
      }).catch((error) => {
        Swal.fire({
          text: store.getters.getErrors[0],
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          customClass: {
            confirmButton: "btn fw-bold btn-light-danger",
          },
        });
      })

      submitButton.value?.removeAttribute("data-kt-indicator");

    };

    return {
      onSubmitPhoneVerify,
      PhoneVerify,
      submitButton,
    };
  },
});
</script>
