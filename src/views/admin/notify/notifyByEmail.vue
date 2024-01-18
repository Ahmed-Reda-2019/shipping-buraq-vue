<template>
  <a
    class="btn btn-bg-secondary btn-shadow font-weight-bold mx-2"
    data-bs-target="#kt_modal_notify_any_with_email"
    data-bs-toggle="modal"
  >
    <i class="fa fa-envelope p-0"></i>
  </a>

  <div
    id="kt_modal_notify_any_with_email"
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
          <h2>{{ $t("notify Emails") }}</h2>
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
            class="mx-auto pt-15 pb-10"
            @submit.prevent="sendNotifyOrder"
          >
            <div class="w-100">
              <!--begin::Input group-->
              <div class="fv-row mb-8">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">{{ $t("Subject") }}</label>
                <!--end::Label-->
                <!--begin::Label-->
                <textarea
                  v-model="sendNotifyForm.title"
                  :placeholder="$t('Enter Subject')"
                  class="form-control form-control-solid"
                  rows="3"
                ></textarea>

                <span v-if="sendNotifyFormError['title']" class="text-danger">{{
                  sendNotifyFormError["title"][0]
                }}</span>
                <!--end::Label-->
              </div>

              <div class="fv-row mb-8">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">{{ $t("Description") }}</label>
                <!--end::Label-->
                <!--begin::Label-->
                <editor
                  v-model="sendNotifyForm.text"
                  :init="{
                    height: 400,
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
              <div class="card-header p-0">
                <!--begin::Title-->
                <div class="card-title">
                  <!--begin::User-->
                  <div class="d-flex justify-content-center flex-column me-3">
                    <h2 class="fw-bolder text-dark">
                      {{ $t("emails") }}
                    </h2>
                  </div>
                  <!--end::User-->
                </div>
                <!--end::Title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                  <a
                    class="btn btn-light-primary"
                    @click="sendNotifyForm.emails.push({})"
                  >
                    <i class="la la-plus"></i>
                    {{ $t("Add New") }}
                  </a>
                </div>
              </div>
              <div class="row">
                <div
                  v-for="(item, i) in sendNotifyForm.emails"
                  :key="i"
                  class="mb-10 fv-row col-12 col-md-6 row"
                >
                  <!--begin::Label-->
                  <div class="col-10">
                    <label class="form-label mb-3"
                      >{{ $t("senderEmail") }} : {{ i + 1 }}</label
                    >
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="item.email"
                      class="form-control form-control-lg form-control-solid"
                      type="email"
                    />
                    <span
                      v-if="sendNotifyFormError[`emails.${i}.email`]"
                      class="text-danger"
                      >{{ sendNotifyFormError[`emails.${i}.email`][0] }}</span
                    >
                  </div>
                  <div class="col-2">
                    <label class="form-label mb-3 d-block">&nbsp;</label>
                    <a
                      class="btn btn-sm btn-light-danger pt-4 pb-4"
                      @click="sendNotifyForm.emails.slice(i, 1)"
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
import Editor from "@tinymce/tinymce-vue";

export default defineComponent({
  name: "notify-by-email",
  components: {
    editor: Editor,
  },
  data() {
    return {
      loading: false,
      sendNotifyForm: {
        types: [],
        emails: [],
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

      ApiService.post("admin/notify/using/email", this.sendNotifyForm)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.sendNotifyForm = { types: [], emails: [] };
          hideModal("kt_modal_notify_any_with_email");
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
