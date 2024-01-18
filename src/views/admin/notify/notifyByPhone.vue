<template>
  <a
    class="btn btn-bg-secondary btn-shadow font-weight-bold mx-2"
    data-bs-target="#kt_modal_notify_any_with_phone"
    data-bs-toggle="modal"
  >
    <i class="fa fa-paper-plane p-0"></i>
  </a>

  <div
    id="kt_modal_notify_any_with_phone"
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
          <h2>{{ $t("notify Phones") }}</h2>
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
          <form class="mx-auto pt-15 pb-10" @submit.prevent="sendNotifyOrder">
            <div class="w-100">
              <!--begin::Input group-->
              <div class="fv-row mb-8">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">{{ $t("Description") }}</label>
                <!--end::Label-->
                <!--begin::Label-->
                <textarea
                  v-model="sendNotifyForm.text"
                  :placeholder="$t('Enter Description')"
                  class="form-control form-control-solid"
                  name="details_description"
                  rows="3"
                ></textarea>

                <span v-if="sendNotifyFormError['text']" class="text-danger">{{
                  sendNotifyFormError["text"][0]
                }}</span>
                <!--end::Label-->
              </div>

              <div class="fv-row mb-7">
                <label class="required fs-6 fw-bold mb-2"
                  >{{ $t("image") }}
                </label>
                <input
                  ref="photo"
                  class="form-control"
                  type="file"
                  @change="handleFileUpload('photo')"
                />
              </div>
              <span v-if="sendNotifyFormError['photo']" class="text-danger">{{
                sendNotifyFormError["photo"][0]
              }}</span>

              <!--end::Input group-->
              <!--begin::Input group-->
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
                        value="sms"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("SMS")
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
              <div class="card-header p-0">
                <!--begin::Title-->
                <div class="card-title">
                  <!--begin::User-->
                  <div class="d-flex justify-content-center flex-column me-3">
                    <h2 class="fw-bolder text-dark">
                      {{ $t("Phones") }}
                    </h2>
                  </div>
                  <!--end::User-->
                </div>
                <!--end::Title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <a
                    class="btn btn-light-primary"
                    @click="sendNotifyForm.phones.push({})"
                  >
                    <i class="la la-plus"></i>
                    {{ $t("Add New") }}
                  </a>
                </div>
              </div>
              <div class="row">
                <div
                  v-for="(item, i) in sendNotifyForm.phones"
                  :key="i"
                  class="mb-10 fv-row col-12 col-md-6 row"
                >
                  <!--begin::Label-->
                  <div class="col-10">
                    <label class="form-label mb-3"
                      >{{ $t("senderPhone") }} : {{ i + 1 }}</label
                    >
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="item.number"
                      class="form-control form-control-lg form-control-solid"
                      type="tel"
                    />
                    <span
                      v-if="sendNotifyFormError[`phones.${i}.number`]"
                      class="text-danger"
                      >{{ sendNotifyFormError[`phones.${i}.number`][0] }}</span
                    >
                  </div>
                  <div class="col-2">
                    <label class="form-label mb-3 d-block">&nbsp;</label>
                    <a
                      class="btn btn-sm btn-light-danger pt-4 pb-4"
                      @click="sendNotifyForm.phones.slice(i, 1)"
                    >
                      <i class="la la-trash-o fs-3 pe-0"></i>
                    </a>
                  </div>
                  <!--end::Input-->
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-light me-3" data-bs-dismiss="modal">
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
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";

export default defineComponent({
  name: "notify-by-phone",
  data() {
    return {
      loading: false,
      sendNotifyForm: {
        types: [],
        phones: [],
      },
      sendNotifyFormError: [],
      files: {},
    };
  },
  methods: {
    handleFileUpload(name) {
      this.files[name] = this.$refs[name].files[0];
    },

    async sendNotifyOrder() {
      this.loading = true;
      this.sendNotifyFormError = [];
      const formData = new FormData();

      Object.keys(this.sendNotifyForm).forEach((value, key) => {
        formData.append(value, this.sendNotifyForm[value]);
      });
      Object.keys(this.files).forEach((value, key) => {
        if (this.files[value]) formData.append(value, this.files[value]);
      });

      ApiService.post("admin/notify/using/phone", this.sendNotifyForm)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.sendNotifyForm = { types: [], phones: [] };
          hideModal("kt_modal_notify_any_with_phone");
          this.loading = false;
        })
        .catch(() => {
          this.sendNotifyFormError = ApiService.errors;
          this.loading = false;
        });
    },
  },
});
</script>
