<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("Site Setting") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_Setting_item"
                data-bs-toggle="modal"
                @click="openModelSettingNew()"
              >
                {{ $t("Add New") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <!--begin::Section-->
            <!--end::Section-->
            <!--begin::Section-->
            <div class="mb-0">
              <!--begin::Title-->
              <!--end::Title-->
              <!--begin::Setting table-->
              <div class="table-responsive">
                <div
                  v-if="loading"
                  class="blockui-overlay bg-dark bg-opacity-25"
                  style="
                    z-index: 1;
                    transition: all 0.3s ease;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <span class="spinner-border text-primary"></span>
                </div>

                <table
                  id="kt_customerss_table"
                  class="table align-middle table-row-dashed fs-6 gy-5"
                >
                  <!--begin::Table head-->
                  <thead>
                    <!--begin::Table row-->
                    <tr class="text-start text-gray-600 fw-bolder fs-7 gs-0">
                      <th>{{ $t("name") }}</th>
                      <th>{{ $t("Value") }}</th>
                      <th>{{ $t("actions") }}</th>
                    </tr>
                    <!--end::Table row-->
                  </thead>
                  <tbody class="fw-bold text-gray-600">
                    <tr
                      v-for="(item, i) in tableDataSetting"
                      :key="i"
                      class="
                        text-start text-gray-400
                        fw-bolder
                        fs-7
                        gs-0
                        text-gray-900
                      "
                    >
                      <td>{{ item.title }}</td>
                      <td>
                        <template v-if="item.type == 'file'">
                          <img
                            :src="item.value"
                            class="w-75px h-50px bg-dark"
                          />
                        </template>
                        <template v-else>
                          {{ item.value }}
                        </template>
                      </td>
                      <td>
                        <a
                          class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                          data-bs-target="#kt_modal_Setting_item"
                          data-bs-toggle="modal"
                          @click="openModelSettingEdit(i)"
                        >
                          <span class="svg-icon svg-icon-primary svg-icon-2x"
                            ><svg
                              height="24px"
                              version="1.1"
                              viewBox="0 0 24 24"
                              width="24px"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <g
                                fill="none"
                                fill-rule="evenodd"
                                stroke="none"
                                stroke-width="1"
                              >
                                <rect height="24" width="24" x="0" y="0" />
                                <path
                                  d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                  transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                />
                                <rect
                                  fill="#000000"
                                  height="2"
                                  opacity="0.3"
                                  rx="1"
                                  width="15"
                                  x="5"
                                  y="20"
                                />
                              </g></svg
                            ><!--end::Svg Icon-->
                          </span>
                        </a>

                        <a
                          class="btn btn-icon btn-light-info mt-0 mb-0 m-2"
                          data-bs-target="#kt_modal_trans"
                          data-bs-toggle="modal"
                          @click="openModelTransObject(item)"
                        >
                          <i aria-hidden="true" class="fa fa-language"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!--begin::Table-->

                <!--end::Table-->
              </div>
              <!--end::Setting table-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_Setting_item"
      ref="my-modal"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Country_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditSetting > -1" class="fw-bolder">
              {{ $t("Edit Setting") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("Add Setting") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_Setting_item_close"
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
          <el-form @submit.prevent="submitModelForm()">
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
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("name") }}
                  </label>
                  <el-form-item prop="title">
                    <el-input
                      v-model="SettingForm.name"
                      type="text"
                      class="form-control form-control-solid"
                      readonly
                    />
                  </el-form-item>
                  <span v-if="SettingErrors['name']" class="text-danger">{{
                    SettingErrors["name"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("title") }}
                  </label>
                  <el-form-item prop="title">
                    <el-input v-model="SettingForm.title" type="text" />
                  </el-form-item>
                  <span v-if="SettingErrors['title']" class="text-danger">{{
                    SettingErrors["title"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("type") }}
                  </label>

                  <select
                    v-model="SettingForm.type"
                    class="form-select"
                    @change="SettingForm.type == 'text' ? (files = {}) : ''"
                  >
                    <option value="text">{{ $t("text") }}</option>
                    <option value="file">{{ $t("file") }}</option>
                    <option value="select">{{ $t("select") }}</option>
                  </select>
                  <span v-if="SettingErrors['type']" class="text-danger">{{
                    SettingErrors["type"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("values") }}
                  </label>

                  <input
                    v-if="SettingForm.type == 'file'"
                    ref="value"
                    class="form-control"
                    type="file"
                    @change="handleFileUpload('value')"
                  />

                  <select
                    v-else-if="SettingForm.type == 'select'"
                    v-model="SettingForm.value"
                    class="form-select"
                  >
                    <template
                      v-if="
                        SettingForm.options &&
                        Array.isArray(SettingForm.options)
                      "
                    >
                      <option
                        :value="op.value"
                        v-for="op in SettingForm.options"
                        :key="op.value"
                      >
                        {{ op.title }}
                      </option>
                    </template>
                  </select>

                  <el-form-item v-else prop="title">
                    <el-input
                      v-model="SettingForm.value"
                      :type="SettingForm.type ? SettingForm.type : 'text'"
                    />
                  </el-form-item>

                  <span v-if="SettingErrors['value']" class="text-danger">{{
                    SettingErrors["value"][0]
                  }}</span>
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
                data-bs-dismiss="modal"
                type="reset"
              >
                {{ $t("discard") }}
              </button>
              <!--end::Button-->

              <!--begin::Button-->
              <button
                :data-kt-indiSettingor="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indiSettingor-label">
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                    ><inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
                <span v-if="loading" class="indiSettingor-progress">
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

    <translation-model :object="transObject"></translation-model>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "Setting-list",
  data() {
    return {
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        filters: [],
        page: 1,
      },
      SettingPage: {},
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      tableDataSetting: [],
      categories: [],
      SettingformModelRef: (ref < null) | (HTMLFormElement > null),
      SettingForm: {},
      SettingErrors: [],
      isEditSetting: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
      search: "",
      files: {},
    };
  },
  components: {
    TranslationModel,
    // editor: Editor,
  },
  created() {
    this.loadData();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Setting"), [
      this.$t("cp"),
      this.$t("site"),
    ]);
  },
  methods: {
    loadData(page = 0) {
      this.loading = true;
      if (page > 0) this.filters.page = page;
      ApiService.query("admin/site/setting", this.filters).then((data) => {
        this.tableDataSetting = data.data.data;
        this.loading = false;
      });
    },
    handleFileUpload(name) {
      this.files[name] = this.$refs[name].files[0];
    },

    openModelSettingNew() {
      this.isEditSetting = -1;
      this.SettingForm = {};
    },
    openModelSettingEdit(i) {
      this.isEditSetting = i;
      this.SettingForm = this.tableDataSetting[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.SettingErrors = [];

      const formData = new FormData();

      Object.keys(this.SettingForm).forEach((value, key) => {
        formData.append(value, this.SettingForm[value]);
      });
      Object.keys(this.files).forEach((value, key) => {
        if (this.files[value]) formData.append(value, this.files[value]);
      });
      // console.log(formData);
      if (this.isEditSetting > -1) {
        await ApiService.post(
          "admin/site/setting/" +
            this.tableDataSetting[this.isEditSetting].id +
            "?_method=PUT",
          formData
        )
          .then((res) => {
            hideModal("kt_modal_Setting_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataSetting[this.isEditSetting] = res.data.data;
          })
          .catch((error) => {
            this.SettingErrors = ApiService.errors;
          });
      } else {
        await ApiService.post("admin/site/setting", formData)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableDataSetting.push(res.data.data);
              hideModal("kt_modal_Setting_item");
            }
            this.loading = false;
          })
          .catch((error) => {
            this.SettingErrors = ApiService.errors;
            this.loading = false;
          });
      }
      this.loading = false;
    },

    async deleteSetting(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataSetting[i].title +
          " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(
            "admin/crm/Setting/" + this.tableDataSetting[i].id
          ).then((res) => {
            this.tableDataSetting.splice(i, 1);
            Swal.fire(
              this.$t("messages.delteted"),
              this.$t("messages.hasBeenDeleted"),
              "success"
            );
          });
        }
      });
    },

    openModelTransObject(item) {
      this.transObject = item;
    },
    async submitTrans() {
      this.loading = true;
      let data = {
        id: this.transObject.id,
        trans: this.transObject.trans,
        class: this.transObject.class,
      };
      await ApiService.put("admin/Localization/update", data)
        .then((res) => {
          hideModal("kt_modal_trans");
          this.$toast.success(this.$t("messages.success"));
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
  },
  computed: {
    tableDataSettingFilter() {
      return this.tableDataSetting.filter(
        (data) =>
          !this.search ||
          data.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
});
</script>
