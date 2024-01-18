<template>
  <div
    id="kt_modal_trans"
    ref="transFormModalRef"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_trans_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">{{ $t("trans") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_trans_close"
            class="btn btn-icon btn-sm btn-active-icon-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form @submit.prevent="submitTrans()">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              id="kt_modal_add_trans_scroll"
              class="scroll-y me-n7 pe-7"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-dependencies="#kt_modal_add_branche_header"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-offset="100px"
              data-kt-scroll-wrappers="#kt_modal_add_branche_scroll"
            >
              <!--begin::Input group-->
              <div
                v-for="(item, key) in transObject.trans"
                :key="key"
                class="fv-row mb-7"
              >
                <!--begin::Label-->
                <label class="required fs-6 fw-bold mb-2">{{ $t(key) }}</label>
                <!--end::Label-->
                <!--begin::Input-->
                <el-form-item v-for="(lang, i) in langs" :key="i">
                  <div>
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ lang.name }}
                    </label>
                    <pre class="d-none">
                      {{ lang }}
                    {{ key + i }}
                    </pre>
                    <el-input
                      v-model="transObject.trans[key][i]"
                      :disabled="i == LocalI18n.locale"
                      type="text"
                    />
                  </div>
                </el-form-item>
                <!--end::Input-->

                <!--end::Label-->
                <!--begin::Input-->
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
              id="kt_modal_trans_cancel"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              type="reset"
            >
              {{ $t("discard") }}
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              :disabled="loading"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span class="indicator-label">
                {{ $t("submit") }}
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
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script>
import langs from "@/core/config/langs";
import { useI18n } from "vue-i18n";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";

export default {
  name: "translationModel",
  props: ["object"],
  data() {
    return {
      langs: langs,
      LocalI18n: useI18n(),
      loading: false,
      transObject: {},
    };
  },
  methods: {
    async submitTrans() {
      this.loading = true;
      const transObject = this.transObject;
      let data = {
        id: transObject.id,
        trans: transObject.trans,
        class: transObject.class,
      };
      await ApiService.put("admin/Localization/update", data)
        .then(() => {
          hideModal("kt_modal_trans");
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    object(newVal) {
      this.transObject = newVal;
    },
  },
};
</script>

<style scoped>
</style>