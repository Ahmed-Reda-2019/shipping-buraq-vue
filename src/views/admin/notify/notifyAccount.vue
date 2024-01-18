<template>
  <button
    class="btn btn-warning btn-shadow font-weight-bold mx-2"
    data-bs-target="#kt_modal_notify_user"
    data-bs-toggle="modal"
  >
    <i class="fas fa-bell p-0"></i>
  </button>

  <div
    id="kt_modal_notify_user"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header py-7 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>{{ $t("notify User") }}</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <form
            id="kt_modal_offer_a_deal_form"
            class="mx-auto pt-15 pb-10"
            @submit.prevent="sendNotify"
          >
            <div class="w-100">
              <div class="fv-row mb-8">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">{{ $t("title") }}</label>
                <!--end::Label-->
                <!--begin::Label-->
                <input
                  class="form-control form-control-lg form-control-solid"
                  v-model="sendNotifyForm.title"
                  :placeholder="$t('Enter title')"
                  type="text"
                />
                <!--end::Label-->
              </div>
              <span v-if="sendNotifyFormError['title']" class="text-danger">{{
                sendNotifyFormError["title"][0]
              }}</span>

              <div class="fv-row mb-8">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("type") }}
                </label>

                <select v-model="sendNotifyForm.type" class="form-select">
                  <option value="info">{{ $t("info") }}</option>
                  <option value="warning">{{ $t("warning") }}</option>
                  <option value="danger">{{ $t("danger") }}</option>
                </select>
                <span v-if="sendNotifyFormError['type']" class="text-danger">{{
                  sendNotifyFormError["type"][0]
                }}</span>
              </div>

              <!--begin::Input group-->
              <div class="fv-row mb-8">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">{{ $t("Description") }}</label>
                <!--end::Label-->
                <!--begin::Label-->
                <textarea
                  v-model="sendNotifyForm.description"
                  :placeholder="$t('Enter Description')"
                  class="form-control form-control-solid"
                  name="details_description"
                  rows="3"
                ></textarea>
                <!--end::Label-->
              </div>
              <span
                v-if="sendNotifyFormError['description']"
                class="text-danger"
                >{{ sendNotifyFormError["description"][0] }}</span
              >

              <div class="fv-row mb-15">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack">
                  <!--begin::Label-->
                  <div class="me-5">
                    <label class="required fs-6 fw-bold">
                      {{ $t("Notifications Type") }}
                    </label>
                    <div class="fs-7 fw-bold text-muted"></div>
                  </div>
                  <!--end::Label-->
                  <!--begin::Checkboxes-->
                  <div class="d-flex">
                    <!--begin::Checkbox-->
                    <label
                      class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                        v-model="sendNotifyForm.types"
                        class="form-check-input h-20px w-20px"
                        type="checkbox"
                        value="email"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("email")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Checkbox-->
                    <label
                      class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                        v-model="sendNotifyForm.types"
                        class="form-check-input h-20px w-20px"
                        type="checkbox"
                        value="sms"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("SMS")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <label
                      class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                        v-model="sendNotifyForm.types"
                        class="form-check-input h-20px w-20px"
                        type="checkbox"
                        value="whatsApp"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("whatsapp")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <!--end::Checkbox-->
                  </div>

                  <!--end::Checkboxes-->
                </div>
                <span v-if="sendNotifyFormError['types']" class="text-danger">
                  {{ sendNotifyFormError["types"][0] }}</span
                >
                <!--begin::Wrapper-->
              </div>
            </div>
            <div class="text-center">
              <button
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                type="reset"
              >
                {{ $t("discard") }}
              </button>
              <button
                :data-kt-indicator="loading ? 'on' : null"
                :disabled="loading"
                class="btn btn-primary"
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
          </form>
        </div>
        <!--begin::Modal body-->
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";

export default {
  name: "notifyAccount",
  props: ["url"],
  data() {
    return {
      sendNotifyForm: { types: [] },
      sendNotifyFormError: [],
      loading: false,
    };
  },
  methods: {
    async sendNotify() {
      this.loading = true;
      this.sendNotifyFormError = [];
      //var formData = new FormData();
      // Object.keys(this.sendNotifyForm).forEach(value => {
      //   formData.append(value , this.sendNotifyForm[value])
      // })
      ApiService.post(this.url, this.sendNotifyForm)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.sendNotifyForm = { types: [], description: "" };
          hideModal("kt_modal_notify_user");
          this.loading = false;
        })
        .catch(() => {
          this.sendNotifyFormError = ApiService.errors;
          this.loading = false;
        });
    },
  },
};
</script>
