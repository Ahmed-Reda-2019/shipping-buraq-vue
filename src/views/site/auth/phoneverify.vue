<template>
  <div class="d-flex flex-column flex-root">
    <!--begin::Authentication - Signup Verify Email -->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Content-->
      <div
        class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15"
      >
        <!--begin::Logo-->
        <a class="mb-10 pt-lg-10" href="../../demo2/dist/index.html">
          <img
            alt="Logo"
            class="h-40px mb-5"
            src="assets/media/logos/logo-1.svg"
          />
        </a>
        <!--end::Logo-->
        <!--begin::Wrapper-->
        <div class="pt-lg-10 mb-10">
          <!--begin::Logo-->
          <h1 class="fw-bolder fs-2qx text-gray-800 mb-7">Verify Your Email</h1>
          <!--end::Logo-->
          <!--begin::Message-->
          <div class="fs-3 fw-bold text-muted mb-10">
            We have sent an email to
            <a class="link-primary fw-bolder" href="#">max@keenthemes.com</a>
            <br />pelase follow a link to verify your email.
          </div>
          <!--end::Message-->
          <!--begin::Action-->
          <div class="text-center mb-10">
            <a
              class="btn btn-lg btn-primary fw-bolder"
              href="../../demo2/dist/authentication/flows/basic/sign-in.html"
              >Skip for now</a
            >
          </div>
          <!--end::Action-->
          <!--begin::Action-->
          <div class="fs-5">
            <span class="fw-bold text-gray-700">Did’t receive an email?</span>
            <a
              class="link-primary fw-bolder"
              href="../../demo2/dist/authentication/flows/basic/sign-up.html"
              >Resend</a
            >
          </div>
          <!--end::Action-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Illustration-->
        <div
          class="
            d-flex
            flex-row-auto
            bgi-no-repeat
            bgi-position-x-center
            bgi-size-contain
            bgi-position-y-bottom
            min-h-100px min-h-lg-350px
          "
          style="
            background-image: url(assets/media/illustrations/sigma-1/17.png;
          "
        ></div>
        <!--end::Illustration-->
      </div>
      <!--end::Content-->
      <!--begin::Footer-->
      <div class="d-flex flex-center flex-column-auto p-10">
        <!--begin::Links-->
        <div class="d-flex align-items-center fw-bold fs-6">
          <a
            class="text-muted text-hover-primary px-2"
            href="/About"
            >About</a
          >
          <a
            class="text-muted text-hover-primary px-2"
            href="mailto:a7medfci2020@gmail.com"
            >Contact</a
          >
          <a
            class="text-muted text-hover-primary px-2"
            href="https://1.envato.market/EA4JP"
            >Contact Us</a
          >
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Authentication - Signup Verify Email-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "password-reset",
  components: {},
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
      ApiService.post("", values)
        .then((res) => {
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
        })
        .catch((error) => {
          Swal.fire({
            text: store.getters.getErrors[0],
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Try again!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        });

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
