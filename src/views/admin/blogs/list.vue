<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div
        class="
          flex-lg-row-fluid
          order-2 order-lg-1
          mb-10 mb-lg-0
          position-relative
        "
      >
        <div class="blockui-overlay bg-dark bg-opacity-25" v-if="loading">
          <span class="spinner-border text-primary"></span>
        </div>

        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("blogs") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_Blog_item"
                data-bs-toggle="modal"
                @click="openModelBlogNew()"
              >
                {{ $t("Add New") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3 pb-0">
            <my-table
              :list="tableDataBlogFilter"
              modal="kt_modal_Blog_item"
              :tableHeader="[
                { name: 'title', key: 'title' },
                { name: 'crm categories', key: 'category' },
                { name: 'actions', key: 'actions' },
              ]"
            >
              <template v-slot:cell-title="{ row: item }">
                {{ item.title }}
              </template>
              <template v-slot:cell-category="{ row: item }">
                {{ item.category }}
              </template>
              <template v-slot:cell-actions="{ row: item, index: i }">
                <a
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_Blog_item"
                  data-bs-toggle="modal"
                  @click="openModelBlogEdit(i)"
                >
                  <span class="svg-icon svg-icon-primary svg-icon-2x"
                    ><inline-svg src="/media/icons/duotune/art/art005.svg" />
                  </span>
                </a>
                <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteBlog(i)"
                >
                  <i class="icon-xl fas fa-trash-alt"></i>
                </a>

                <router-link
                  :to="{
                    name: 'site-blog-show',
                    params: {
                      id: item.id,
                      title: item.title.replaceAll(' ', '-'),
                    },
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
              </template>
            </my-table>
            <pagnation
              v-model:pageNumber="filters.page"
              :page="blogsPage"
              @change="loadData"
            ></pagnation>
            <!--end::Section-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_Blog_item"
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
            <h2 v-if="isEditBlog > -1" class="fw-bolder">
              {{ $t("editBlog") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addBlog") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_Blog_item_close"
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
                    >{{ $t("category") }}
                  </label>
                  <el-select
                    v-model="BlogForm.category_id"
                    class="w-100"
                    filterable
                  >
                    <el-option
                      v-for="item in categories"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>

                  <span v-if="BlogErrors['category_id']" class="text-danger">{{
                    BlogErrors["category_id"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("title") }}
                  </label>
                  <el-form-item prop="title">
                    <el-input v-model="BlogForm.title" type="text" />
                  </el-form-item>
                  <span v-if="BlogErrors['title']" class="text-danger">{{
                    BlogErrors["title"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("Meta title") }}
                  </label>
                  <el-form-item prop="title">
                    <el-input v-model="BlogForm.meta_title" type="text" />
                  </el-form-item>
                  <span v-if="BlogErrors['meta_title']" class="text-danger">{{
                    BlogErrors["meta_title"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("Meta tags") }}
                  </label>
                  <el-form-item prop="meta_tags">
                    <el-input v-model="BlogForm.meta_tags" type="text" />
                  </el-form-item>
                  <span v-if="BlogErrors['meta_tags']" class="text-danger">{{
                    BlogErrors["meta_tags"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("Meta description") }}
                  </label>
                  <el-form-item prop="meta_desk">
                    <el-input v-model="BlogForm.meta_desk" type="text" />
                  </el-form-item>
                  <span v-if="BlogErrors['meta_desk']" class="text-danger">{{
                    BlogErrors["meta_desk"][0]
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
                <span v-if="BlogErrors['photo']" class="text-danger">
                  {{ BlogErrors["photo"][0] }}
                </span>

                <div class="fv-row mb-7">
                  <editor
                    v-model="BlogForm.description"
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
                :data-kt-indiBlogor="loading ? 'on' : null"
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
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Editor from "@tinymce/tinymce-vue";
import Pagnation from "@/components/pagnation";
import MyTable from "@/views/admin/components/myTable";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "Blog-list",
  data() {
    return {
      filters: {
        search: "",
        start_date: null,
        end_date: null,
        filters: [],
        page: 1,
      },
      blogsPage: {},
      LocalI18n: useI18n(),
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      tableDataBlog: [],
      categories: [],
      BlogformModelRef: (ref < null) | (HTMLFormElement > null),
      BlogForm: {},
      BlogErrors: [],
      isEditBlog: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
      search: "",
      files: {},
    };
  },
  components: {
    TranslationModel,
    Pagnation,
    MyTable,
    editor: Editor,
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("blogs"), [this.$t("cp")]);
  },
  created() {
    this.loadData();
    ApiService.get("site/list/category").then((data) => {
      this.categories = data.data;
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
  methods: {
    async loadData(page = 0) {
      if (page > 0) this.filters.page = page;
      await ApiService.query("admin/crm/blog", this.filters)
        .then((data) => {
          this.tableDataBlog = data.data.data;
          this.blogsPage = data.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    handleFileUpload(name) {
      this.files[name] = this.$refs[name].files[0];
    },

    openModelBlogNew() {
      this.isEditBlog = -1;
      this.BlogForm = {};
    },
    openModelBlogEdit(i) {
      this.isEditBlog = i;
      this.BlogForm = this.tableDataBlog[i];
    },

    async submitModelForm() {
      this.loading = true;
      this.BlogErrors = [];

      const formData = new FormData();

      Object.keys(this.BlogForm).forEach((value, key) => {
        formData.append(value, this.BlogForm[value]);
      });
      Object.keys(this.files).forEach((value, key) => {
        if (this.files[value]) formData.append(value, this.files[value]);
      });
      if (this.isEditBlog > -1) {
        await ApiService.post(
          "admin/crm/blog/" +
            this.tableDataBlog[this.isEditBlog].id +
            "?_method=PUT",
          formData
        )
          .then((res) => {
            hideModal("kt_modal_Blog_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataBlog[this.isEditBlog] = res.data.data;
          })
          .catch((error) => {
            this.BlogErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post("admin/crm/blog", formData)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableDataBlog.push(res.data.data);
              hideModal("kt_modal_Blog_item");
            }
          })
          .catch((error) => {
            this.BlogErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    async deleteBlog(i) {
      this.loading = true;

      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataBlog[i].title +
          " )",
        text: this.$t("messages.notAble"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("messages.sureDeleted"),
      })
        .then((result) => {
          if (result.isConfirmed) {
            ApiService.delete(
              "admin/crm/blog/" + this.tableDataBlog[i].id
            ).then((res) => {
              this.tableDataBlog.splice(i, 1);
              Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
              );
            });
          }
        })
        .finally(() => {
          this.loading = false;
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
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    tableDataBlogFilter() {
      return this.tableDataBlog.filter(
        (data) =>
          !this.search ||
          data.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
});
</script>
