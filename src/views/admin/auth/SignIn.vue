<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
        id="kt_login_signin_form"
        :validation-schema="login"
        class="form w-100"
        @submit="onSubmitLogin"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">{{ $t("signIn") }}</h1>
        <!--end::Title-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bolder text-dark">{{
          $t("email")
          }}</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
            autocomplete="off"
            class="form-control form-control-lg form-control-solid"
            name="email"
            type="text"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bolder text-dark fs-6 mb-0">{{
            $t("password")
            }}</label>
          <!--end::Label-->

          <!--begin::Link-->
          <router-link class="link-primary fs-6 fw-bolder" :to="{name:'password-reset'}">
            {{ $t("forgotPassword") }}
          </router-link>
          <!--end::Link-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->
        <div class="input-group mb-3">
          <Field
              :type="passwordType == true ? 'password' : 'text'"
              autocomplete="off"
              class="form-control form-control-lg form-control-solid"
              name="password"
          />
          <span
              class="input-group-text end-0 bt"
              @click="passwordType = !passwordType"
          >
            <i v-if="passwordType == true" class="icon-xl fas far fa-eye"></i>
            <i v-else class="fas fa-eye-slash"></i>
          </span>
        </div>
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->
      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button
            id="kt_sign_in_submit"
            ref="submitButton"
            :data-kt-indicator="loading ? 'on' : null"
            :disabled="loading"
            class="btn btn-lg btn-primary w-100 mb-5"
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
        <!--end::Submit button-->
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
import {Mutations} from "@/store/enums/StoreEnums";
import {mapGetters, useStore} from "vuex";
import {useRouter} from "vue-router";
import * as Yup from "yup";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapGetters(["Submitted"]),
  },
  data() {
    return {
      passwordType: true,
    };
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const SiteSettings = useStore().commit(Mutations.GETSETTING, "");
    if (store.getters.isUserAuthenticated && JwtService.isEmployee()) {
      router.push({name: "dashboard"});
    }
    const submitButton = ref<HTMLElement | null>(null);
    let errors = ref([]);
    let loading = ref(false);
    // submitButton.value.setAttribute("data-kt-indicator", "on");

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().required().label("email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values) => {
      loading.value = true;
      await ApiService.post("auth/login", values)
          .then((res) => {
            if (res.data) {
              store.commit(Mutations.SET_AUTH, res.data);
              ApiService.setHeader();
              router.push({name: "dashboard"});
            }
          })
          .catch((error) => {
            errors.value = ApiService.errors;
          });

      loading.value = false;

      // let response = await  store.dispatch(Actions.LOGIN, values).catch(function (){
      // })
    };

    return {
      onSubmitLogin,
      login,
      errors,
      loading,
      submitButton,
    };
  },
});
</script>
