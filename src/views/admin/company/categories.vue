<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
            <span class="spinner-border text-primary"></span>
          </div>
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("categories") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_Cat_item"
                data-bs-toggle="modal"
                @click="openModelCatNew()"
              >
                {{ $t("add Category") }}
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
              <!--begin::Product table-->
              <div class="table-responsive">
                <!--begin::Table-->
                <table
                  class="table align-middle table-row-dashed fs-6 gy-4 mb-0"
                >
                  <!--begin::Table head-->
                  <thead>
                    <!--begin::Table row-->
                    <tr
                      class="
                        border-bottom border-gray-200
                        text-start text-gray-400
                        fw-bolder
                        fs-7
                        text-uppercase
                        gs-0
                      "
                    >
                      <th>{{ $t("name") }}</th>
                      <th class="text-center">{{ $t("actions") }}</th>
                    </tr>
                    <!--end::Table row-->
                  </thead>
                  <!--end::Table head-->
                  <!--begin::Table body-->
                  <tbody class="fw-bold text-gray-800">
                    <tr v-for="(item, i) in tableDataCatFilter" :key="i">
                      <td>
                        <label>{{ item.name }}</label>
                      </td>
                      <td class="text-end">
                        <a
                          class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                          data-bs-target="#kt_modal_Cat_item"
                          data-bs-toggle="modal"
                          @click="openModelCatEdit(i)"
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
                          v-if="item.core == 0"
                          class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                          @click="deleteCat(i)"
                        >
                          <i class="icon-xl fas fa-trash-alt"></i>
                        </a>

                        <router-link
                          :to="{
                            name: 'site-category',
                            params: { id: item.slug },
                          }"
                          class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                          target="_blank"
                        >
                          <i class="icon-xl fas far fa-eye"></i>
                        </router-link>

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
                  <!--end::Table body-->
                </table>
              </div>
              <!--end::Product table-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_Cat_item"
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
            <h2 v-if="isEditCat > -1" class="fw-bolder">{{ $t("editCat") }}</h2>
            <h2 v-else class="fw-bolder">{{ $t("addCat") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_Cat_item_close"
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
                  <el-form-item prop="name">
                    <el-input v-model="CatForm.name" type="text" />
                  </el-form-item>
                  <span v-if="CatErrors['name']" class="text-danger">{{
                    CatErrors["name"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("slug") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="CatForm.slug" type="text" />
                  </el-form-item>
                  <span v-if="CatErrors['slug']" class="text-danger">{{
                    CatErrors["slug"][0]
                  }}</span>
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
                <span v-if="CatErrors['photo']" class="text-danger">
                  {{ CatErrors["photo"][0] }}
                </span>

                <div class="fv-row mb-7">
                  <editor
                    v-model="CatForm.description"
                    :init="{
                      height: 500,
                      menubar: true,
                      plugins: [
                        'advlist autolink lists link image charmap',
                        'searchreplace visualblocks code fullscreen',
                        'print preview anchor insertdatetime media',
                        'paste code help wordcount table',
                      ],
                      file_picker_types: 'image',
                      images_upload_url: '/api/admin/crm/upload/file',
                      toolbar:
                        'undo redo | formatselect | bold italic |         alignleft aligncenter alignright |         bullist numlist outdent indent | help',
                    }"
                    apiKey="s4jd5fu6curdhw172qan40vl1l7rg045sh7ax538441tzswa"
                  >
                  </editor>
                </div>
                <span v-if="CatErrors['description']" class="text-danger">
                  {{ CatErrors["description"][0] }}
                </span>
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

    <translation-model :object="transObject" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Editor from "@tinymce/tinymce-vue";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "Cat-list",
  data() {
    return {
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      tableDataCat: [],
      CatformModelRef: (ref < null) | (HTMLFormElement > null),
      CatForm: {},
      CatErrors: [],
      isEditCat: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
      search: "",
      files: {},
    };
  },
  components: {
    TranslationModel,
    editor: Editor,
  },
  created() {
    ApiService.get("admin/crm/Category").then((data) => {
      this.tableDataCat = data.data.data;
      this.loading = false;
    });
    document.addEventListener("focusin", (e) => {
      if (
        e.target.closest(
          ".tox-tinymce-aux, .moxman-window, .tam-assetmanager-root"
        ) !== null
      ) {
        e.stopImmediatePropagation();
      }
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("crm categories"), [this.$t("cp")]);
  },
  methods: {
    handleFileUpload(name) {
      this.files[name] = this.$refs[name].files[0];
    },
    openModelCatNew() {
      this.isEditCat = -1;
      this.CatForm = {};
    },
    openModelCatEdit(i) {
      this.isEditCat = i;
      this.CatForm = this.tableDataCat[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.CatErrors = [];
      const formData = new FormData();

      Object.keys(this.CatForm).forEach((value, key) => {
        formData.append(value, this.CatForm[value]);
      });
      Object.keys(this.files).forEach((value, key) => {
        if (this.files[value]) formData.append(value, this.files[value]);
      });

      if (this.isEditCat > -1) {
        await ApiService.post(
          "admin/crm/Category/" +
            this.tableDataCat[this.isEditCat].id +
            "?_method=PUT",
          formData
        )
          .then((res) => {
            hideModal("kt_modal_Cat_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataCat[this.isEditCat] = res.data.data;
          })
          .catch((error) => {
            this.CatErrors = ApiService.errors;
          });
      } else {
        await ApiService.post("admin/crm/Category", formData)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableDataCat.push(res.data.data);
              hideModal("kt_modal_Cat_item");
            }
          })
          .catch((error) => {
            this.CatErrors = ApiService.errors;
          });
      }
      this.loading = false;
    },

    async deleteCat(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataCat[i].name +
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
            "admin/crm/Category/" + this.tableDataCat[i].id
          ).then((res) => {
            this.tableDataCat.splice(i, 1);
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
          this.$toast.success(this.$t("messages.delteted"));
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
  },
  computed: {
    tableDataCatFilter() {
      return this.tableDataCat.filter(
        (data) =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
});
</script>
