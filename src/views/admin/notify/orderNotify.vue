<template>
  <button
      class="btn btn-warning btn-shadow font-weight-bold mx-2 my-3"
      data-bs-target="#kt_modal_notify_order"
      data-bs-toggle="modal"
  >
    <i class="fas fa-bell p-0"></i>
  </button>

  <div
      id="kt_modal_notify_order"
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
          <h2>{{ $t("notify Order") }}</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
              <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                    fill="black"
                    height="2"
                    opacity="0.5"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    width="16"
                    x="6"
                    y="17.3137"
                />
                <rect
                    fill="black"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    width="16"
                    x="7.41422"
                    y="6"
                />
              </svg>
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
              @submit.prevent="sendNotifyOrder"
          >
            <div class="w-100">
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

              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-15">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack">
                  <!--begin::Label-->
                  <div class="me-5">
                    <label class="required fs-6 fw-bold"
                    >{{ $t("Notifications User") }}
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
                          v-model="sendNotifyForm.user"
                          class="form-check-input h-20px w-20px"
                          type="checkbox"
                          value="owner"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("Account")
                      }}</span>
                      <!--end::Label-->
                    </label>

                    <!--begin::Checkbox-->
                    <label
                        class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                          v-model="sendNotifyForm.user"
                          class="form-check-input h-20px w-20px"
                          type="checkbox"
                          value="sender"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("sender")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <!--begin::Checkbox-->
                    <label
                        class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                          v-model="sendNotifyForm.user"
                          class="form-check-input h-20px w-20px"
                          type="checkbox"
                          value="receiver"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("resiver")
                      }}</span>
                      <!--end::Label-->
                    </label>

                    <!--end::Checkbox-->
                  </div>

                  <!--end::Checkboxes-->
                </div>
                <span v-if="sendNotifyFormError['user']" class="text-danger">{{
                  sendNotifyFormError["user"][0]
                }}</span>

                <!--begin::Wrapper-->
              </div>
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
                          v-model="sendNotifyForm.type"
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
                          v-model="sendNotifyForm.type"
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
                          v-model="sendNotifyForm.type"
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
                <span v-if="sendNotifyFormError['type']" class="text-danger">{{
                  sendNotifyFormError["type"][0]
                }}</span>
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
import {hideModal} from "@/core/helpers/dom";

export default {
  name: "orderNotify",
  props: ["orderId"],
  data() {
    return {
      sendNotifyForm: {type: [], user: []},
      sendNotifyFormError: [],
      loading: false,
      url: "",
    };
  },
  created() {
    this.url = "admin/order/" + this.orderId + "/send/notify";
  },
  methods: {
    async sendNotifyOrder() {
      this.loading = true;
      this.sendNotifyFormError = [];
      //var formData = new FormData();
      // Object.keys(this.sendNotifyForm).forEach(value => {
      //   formData.append(value , this.sendNotifyForm[value])
      // })
      ApiService.post(this.url, this.sendNotifyForm)
          .then((res) => {
            this.$toast.success(res.data.message);
            this.sendNotifyForm = {type: [], user: [], description: ""}
            hideModal("kt_modal_notify_order");
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
