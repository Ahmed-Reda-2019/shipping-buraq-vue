<template>
  <form
      id="kt_modal_offer_a_deal_form"
      class="mx-auto pt-15 pb-10"
      @submit.prevent="sendNotifyOrder"
  >
    <div class="w-100">
      <div class="mb-10">
        <!--begin::Label-->
        <label class="form-label fs-5 fw-bold mb-3"
        >{{ $t("work") }}:</label
        >
        <!--end::Label-->
        <!--begin::Input-->
        <el-select
            v-model="sendNotifyForm.work_ids"
            class="w-100"
            filterable
            multiple
        >
          <el-option :label="$t('all')"></el-option>
          <el-option
              v-for="item in worksList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="mb-10">
        <!--begin::Label-->
        <label class="form-label fs-5 fw-bold mb-3"
        >{{ $t("type") }}:</label
        >
        <!--end::Label-->
        <!--begin::Input-->

        <select
            v-model="sendNotifyForm.is_bussness"
            class="form-select form-select-solid fw-bolder"
            data-allow-clear="true"
            data-dropdown-parent="#kt-toolbar-filter"
            data-kt-customer-table-filter="month"
            data-kt-select2="true"
            data-placeholder="Select option"
        >
          <option selected></option>
          <option value="1">{{ $t("Bussness_Account") }}</option>
          <option value="0">{{ $t("Personal_Account") }}</option>
        </select>
        <!--end::Input-->
      </div>
      <country
          :FormData="sendNotifyForm"
          :FormLErrors="sendNotifyFormError"
      ></country>
      <!--begin::Input group-->
      <div class="fv-row mb-8">
        <!--begin::Label-->
        <label class="fs-6 fw-bold mb-2">{{
          $t("Description")
          }}</label>
        <!--end::Label-->
        <!--begin::Label-->
        <editor
            v-model="sendNotifyForm.text"
            :init="{
                      height: 500,
                      menubar: true,
                      plugins: [
                        'advlist autolink lists link image charmap',
                        'searchreplace visualblocks code fullscreen',
                        'print preview anchor insertdatetime media',
                        'paste code help wordcount table',
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic |         alignleft aligncenter alignright |         bullist numlist outdent indent | help',
                    }"
            apiKey="s4jd5fu6curdhw172qan40vl1l7rg045sh7ax538441tzswa"
        >
        </editor>

        <!--end::Label-->
      </div>
      <span v-if="sendNotifyFormError['text']" class="text-danger">{{
                  sendNotifyFormError["text"][0]
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
              <span class="form-check-label fw-bold">{{ $t("SMS") }}</span>
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
              <span class="form-check-label fw-bold">{{ $t("whatsapp") }}</span>
              <!--end::Label-->
            </label>
            <!--end::Checkbox-->
          </div>

          <!--end::Checkboxes-->
        </div>
        <span
            v-if="sendNotifyFormError['type']"
            class="text-danger"
        >{{ sendNotifyFormError["type"][0] }}</span
        >
        <!--begin::Wrapper-->
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-light me-3" data-bs-dismiss="modal">
        {{ $t("discard") }}
      </button>
      <button
          :data-kt-indicator="loading ? 'on' : null"
          :disabled="loading" class="btn btn-primary"
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
</template>
<script>
import Editor from "@tinymce/tinymce-vue";

export default defineComponent({
  name: "notify-cusmers",
  components: {
    editor: Editor,
    data() {
      return {
        loading: false,
        sendNotifyForm: {
          types: [],
        },
        sendNotifyFormError: [],
      }
    },
    methods: {
      async sendNotifyOrder() {
        this.loading = true;
        this.sendNotifyFormError = [];
        ApiService.post("admin/customers/sendNotify", this.sendNotifyForm)
            .then((res) => {
              this.$toast.success(res.data.message);
              this.sendNotifyForm = {types: []};
              this.$emit('close');
              ///hideModal("kt_modal_notify_order");
              this.loading = false;
            })
            .catch(() => {
              this.sendNotifyFormError = ApiService.errors;
              this.loading = false;
            });
      },
    },
  },
});
</script>
