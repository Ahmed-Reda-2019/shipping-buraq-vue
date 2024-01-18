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
              <h2 class="fw-bolder">{{ $t("companies") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_Blog_item"
                data-bs-toggle="modal"
                @click="apiCompany.setEmptyItem()"
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
              :list="apiCompany.list"
              modal="kt_modal_Blog_item"
              :tableHeader="[
                { name: 'code', key: 'code' },
                { name: 'name', key: 'name' },
                { name: 'official Name', key: 'title' },
                { name: 'address', key: 'address' },
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
                  @click="apiCompany.setCurrentItem(item)"
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


              </template>
            </my-table>
            <pagnation
              v-model:pageNumber="filters.page"
              :page="apiCompany.allData"
              @change="apiCompany.getList"
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
      <div class="modal-dialog modal-dialog-centered mw-850px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Country_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="apiCompany.currentItem.id" class="fw-bolder">
              {{ $t("edit Company") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("add New Company") }}</h2>
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
          <el-form @submit.prevent="apiCompany.save()">
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
                    >{{ $t("Code") }}
                  </label>
                  <el-form-item prop="title">
                    <el-input v-model="apiCompany.currentItem.code" type="text" />
                  </el-form-item>
                  <span v-if="apiCompany.errors['code']" class="text-danger">{{
                      apiCompany.errors["code"][0]
                  }}</span>
                </div>
                <div class="row row-cols-1 row-cols-md-2">
                  <div class="fv-row mb-7">
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ $t("official Name") }}
                    </label>
                    <el-form-item prop="title">
                      <el-input v-model="apiCompany.currentItem.title" type="text" />
                    </el-form-item>
                    <span v-if="apiCompany.errors['title']" class="text-danger">{{
                        apiCompany.errors["title"][0]
                    }}</span>
                  </div>
                  <div class="fv-row mb-7">
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ $t("Name") }}
                    </label>
                    <el-form-item prop="name">
                      <el-input v-model="apiCompany.currentItem.name" type="text" />
                    </el-form-item>
                    <span v-if="apiCompany.errors['name']" class="text-danger">{{
                        apiCompany.errors["name"][0]
                    }}</span>
                  </div>
                  <div class="fv-row mb-7">
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ $t("Address") }}
                    </label>
                    <el-form-item prop="address">
                      <el-input v-model="apiCompany.currentItem.address" type="text" />
                    </el-form-item>
                    <span v-if="apiCompany.errors['address']" class="text-danger">{{
                        apiCompany.errors["address"][0]
                    }}</span>
                  </div>
                  <div class="fv-row mb-7">
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ $t("tax number") }}
                    </label>
                    <el-form-item prop="address">
                      <el-input v-model="apiCompany.currentItem.tax_number" type="text" />
                    </el-form-item>
                    <span v-if="apiCompany.errors['tax_number']" class="text-danger">
                      {{apiCompany.errors["tax_number"][0] }}
                    </span>
                  </div>
                </div>
                <div class="fv-row mb-7 ">
                  <div class="d-flex justify-content-between">
                    <label class="fs-6 fw-bold mb-2 invalid"
                    >{{ $t("phones") }}
                    </label>
                    <a
                      class="btn btn-light-primary"
                      @click="apiCompany.currentItem.phones.push('')"
                    >
                      <i class="la la-plus"></i>
                      {{ $t("Add New") }}
                    </a>
                  </div>
                  <div class="w-100 row my-2" v-for="(item,i) in apiCompany.currentItem.phones" :key="i">

                    <div class="col-2 col-sm-1 text-end">
                      <a class="btn btn-sm btn-light-info pt-4 pb-4">
                        {{i+1}}
                      </a>
                    </div>

                    <div class="col-8 col-sm-10">
                      <input
                        v-model="apiCompany.currentItem.phones[i]"
                        class="form-control "
                        type="text"
                        :class="{
                     'invalid':apiCompany.errors['phones.'+i]
                    }"
                      />
                    </div>
                    <div class="col-2 col-sm-1 text-end">
                      <a
                        class="btn btn-sm btn-light-danger pt-4 pb-4"
                        @click="apiCompany.currentItem.phones.splice(i, 1)"
                      >
                        <i class="la la-trash-o fs-3 pe-0"></i>
                      </a>
                    </div>
                  </div>

                </div>
                <div class=" mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="fs-6 fw-bold mb-2 invalid"
                    >{{ $t("Bank Accounts") }}
                    </label>
                    <a
                      class="btn btn-light-primary"
                      @click="apiCompany.currentItem.accounts.push('')"
                    >
                      <i class="la la-plus"></i>
                      {{ $t("Add New") }}
                    </a>
                  </div>

                  <div class="my-2 border-dashed border border-dark account-box" v-for="(item,i) in apiCompany.currentItem.accounts" :key="i">
                    <legend class="" style="border: 1px black solid;margin-left: 1em; padding: 0.2em 0.8em ">{{i+1}}</legend>

                    <div class="row">
                      <div class="form-floating mb-3 col-10" >
                      <input type="text" class="form-control" :class="{
                    'is-invalid': apiCompany.errors[`accounts.${i}.bank_name`]
                  }" v-model="item.bank_name">
                      <label >{{ $t('bank Name') }} (m)</label>
                    </div>
                      <div class="col-2 text-end">
                        <a
                            class="btn btn-sm btn-light-danger pt-4 pb-4"
                            @click="apiCompany.currentItem.accounts.splice(i, 1)"
                        >
                          <i class="la la-trash-o fs-3 pe-0"></i>
                        </a>
                      </div>

                      <div class="form-floating mb-3 col-7" >
                      <input type="text" class="form-control" :class="{
                    'is-invalid': apiCompany.errors[`accounts.${i}.name`]
                  }" v-model="item.name">
                      <label >{{ $t('account Name') }} (m)</label>
                    </div>
                      <div class="form-floating col-5">
                      <select class="form-select" v-model="item.currency">
                        <option v-for="cur in apiCompany.currencies" :value="cur.iso_code" :key="cur.iso_code">{{cur.iso_code}}</option>
                      </select>
                      <label for="floatingSelect">{{$t('currency')}}</label>
                    </div>

                      <div class="form-floating mb-3 col-12" >
                      <input type="text"  class="form-control" :class="{
                    'is-invalid': apiCompany.errors[`accounts.${i}.iban`]
                  }" v-model="item.iban">
                      <label >{{ $t('account iban') }} (m)</label>
                    </div>

                    </div>
                  </div>

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
                :data-kt-indiBlogor="apiCompany.loading ? 'on' : null"
                :disabled="apiCompany.loading"
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
  </div>
</template>
<style>
.account-box legend{
  border: 1px solid black;
  margin-left: 1em;
  padding: 0.2em 0.8em;
  position: relative;
  top: -1em;
  background-color: white;
  width: auto !important;
}
</style>
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
import useCompany from "@/composables/company";

export default defineComponent({
  name: "Blog-list",
  data() {
    return {
      filters2: {
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
      apiCompany:useCompany()
    };
  },
  components: {
    Pagnation,
    MyTable,
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("companies"), [this.$t("cp")]);
  },
  async created() {
    this.loading = true;
    this.apiCompany.getList();
    this.loading = false;
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
    filters(){
      return useCompany().filters;
    },
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
