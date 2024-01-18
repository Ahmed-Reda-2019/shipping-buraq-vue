<template>
  <div
      id="kt_modal_add_branche"
      ref="addbrancheModalRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_add_branche_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Add a branche</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
              id="kt_modal_add_branche_close"
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg"/>
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
            ref="formRef"
            :model="formData"
            :rules="rules"
            @submit.prevent="submit()"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
                id="kt_modal_add_branche_scroll"
                class="scroll-y me-n7 pe-7"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-dependencies="#kt_modal_add_branche_header"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-offset="300px"
                data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold mb-2">Name</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name">
                  <el-input
                      v-model="formData.name"
                      placeholder=""
                      type="text"
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
                id="kt_modal_add_branche_cancel"
                class="btn btn-light me-3"
                type="reset"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
                :data-kt-indicator="loading ? 'on' : null" :disabled="loading"
                class="btn btn-lg btn-primary"
                type="submit"
            >
              <span class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"><inline-svg
                    src="/media/icons/duotune/arrows/arr064.svg"/>
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
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {hideModal} from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
import langs from "@/core/config/langs";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "add-branche-modal",
  components: {},
  setup() {
    const u = useI18n();
    const formRef = ref<null | HTMLFormElement>(null);
    const addbrancheModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref({
      name: "",

    });

    const rules = ref({
      name: [
        {
          required: true,
          message: u.t("messages.validation.required"),
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;


          ApiService.put('branches/add', formRef.value).then((res) => {

            Swal.fire({
              text: res.data.data.message, ///"Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              hideModal(addbrancheModalRef.value);
            });

          })
          loading.value = false;

        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addbrancheModalRef,
    };
  },
});
</script>
