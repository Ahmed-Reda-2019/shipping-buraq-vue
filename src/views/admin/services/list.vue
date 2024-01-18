<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <div class="blockui-overlay bg-dark bg-opacity-25" v-if="loading">
            <span class="spinner-border text-primary"></span>
          </div>

          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("services") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_form_item"
                data-bs-toggle="modal"
                @click="openModelNew()"
              >
                {{ $t("addServices") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <my-table
              :enable-items-per-page-dropdown="true"
              :list="tableDataItems"
              :tableHeader="[
                { name: 'name', key: 'name' },
                { name: 'dimensions', key: 'dimensions' },
                { name: 'status', key: 'status' },
                { name: 'parent', key: 'parent' },
                { name: 'actions', key: 'actions' },
              ]"
            >
              <template v-slot:cell-name="{ row: item }">
                <span
                  class="me-2 service-icon cursor-move d-inline-block w-50px"
                  v-html="item.icon"
                ></span>
                <label class="w-150px">{{ item.name }}</label>
              </template>
              <template v-slot:cell-dimensions="{ row: item }">
                <label class="w-50">
                  {{ $t("weight") }} :
                  {{
                    item.weight > 0
                      ? item.weight
                      : item.weight == -1
                      ? $t("not seen")
                      : $t("open dimention")
                  }}
                </label>
                <label class="w-50">
                  {{ $t("length") }} :
                  {{
                    item.length > 0
                      ? item.length
                      : item.length == -1
                      ? $t("not seen")
                      : $t("open dimention")
                  }}
                </label>
                <label class="w-50">
                  {{ $t("width") }} :
                  {{
                    item.width > 0
                      ? item.width
                      : item.width == -1
                      ? $t("not seen")
                      : $t("open dimention")
                  }}
                </label>
                <label class="w-50">
                  {{ $t("height") }} :
                  {{
                    item.height > 0
                      ? item.height
                      : item.height == -1
                      ? $t("not seen")
                      : $t("open dimention")
                  }}
                </label>
              </template>
              <template v-slot:cell-status="{ row: item }">
                <span
                  v-if="item.status && item.status == 1"
                  class="badge badge-light-success"
                >
                  {{ $t("active") }}
                </span>
                <span v-else class="badge badge-light-danger">{{
                  $t("unactive")
                }}</span>
              </template>
              <template v-slot:cell-parent="{ row: item }">
                <template v-if="item.parent.name">
                  {{ item.parent.name }}
                </template>
                <template v-else> -- </template>
              </template>
              <template v-slot:cell-actions="{ row: item, index: i }">
                <router-link
                  :to="{
                    name: 'Services-prices-list',
                    params: { Id: item.id },
                  }"
                  class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                >
                  <i class="icon-xl fas far fa-eye"></i>
                </router-link>

                <a
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_form_item"
                  data-bs-toggle="modal"
                  @click="openModelEdit(i)"
                >
                  <span class="svg-icon svg-icon-primary svg-icon-2x">
                    <inline-svg src="/media/icons/duotune/art/art005.svg" />
                  </span>
                </a>

                <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteItem(i)"
                >
                  <i class="icon-xl fas fa-trash-alt"></i>
                </a>
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
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_form_item"
      ref="formModelRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-950px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_add_Country_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEdit > -1" class="fw-bolder">
              {{ $t("editServices") }}
            </h2>
            <h2 v-else class="fw-bolder">
              {{ $t("addNewServices") }}
            </h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_form_item_close"
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
          <el-form
            enctype="multipart/form-data"
            @submit.prevent="submitModelForm()"
          >
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
                  <label class="required fs-6 fw-bold mb-2">{{
                    $t("name")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.name" type="text" />
                  </el-form-item>
                  <span v-if="errors['name']" class="text-danger">{{
                    errors["name"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2">{{
                    $t("Description")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.text" type="text" />
                  </el-form-item>
                  <span v-if="errors['text']" class="text-danger">{{
                    errors["text"][0]
                  }}</span>
                </div>

                <div class="row">
                  <div class="fv-row mb-7 col-12 col-md-6">
                    <label class="required fs-6 fw-bold mb-2">
                      {{ $t("length") }}
                    </label>
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      :title="$t('length note')"
                    ></i>
                    <div class="input-group">
                      <div class="input-group-text">
                        <input
                          aria-label="Checkbox for following text input"
                          class="form-check-input mt-0"
                          type="checkbox"
                          :checked="ItemForm.length > -1"
                          @change="
                            ItemForm.length = ItemForm.length != -1 ? -1 : 0
                          "
                        />
                      </div>
                      <input
                        min="-1"
                        v-model="ItemForm.length"
                        :disabled="ItemForm.length == -1"
                        aria-label="Text input with checkbox"
                        class="form-control"
                        type="number"
                      />
                    </div>
                    <span v-if="errors['length']" class="text-danger">
                      {{ errors["length"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-7 col-12 col-md-6">
                    <label class="required fs-6 fw-bold mb-2">
                      {{ $t("width") }}
                    </label>
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      :title="$t('width note')"
                    ></i>
                    <div class="input-group">
                      <div class="input-group-text">
                        <input
                          aria-label="Checkbox for following text input"
                          class="form-check-input mt-0"
                          type="checkbox"
                          :checked="ItemForm.width > -1"
                          @change="
                            ItemForm.width = ItemForm.width != -1 ? -1 : 0
                          "
                        />
                      </div>
                      <input
                        min="-1"
                        v-model="ItemForm.width"
                        :disabled="ItemForm.width == -1"
                        aria-label="Text input with checkbox"
                        class="form-control"
                        type="number"
                      />
                    </div>
                    <span v-if="errors['width']" class="text-danger">
                      {{ errors["width"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-7 col-12 col-md-6">
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ $t("height") }}
                    </label>
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      :title="$t('width note')"
                    ></i>
                    <div class="input-group">
                      <div class="input-group-text">
                        <input
                          aria-label="Checkbox for following text input"
                          class="form-check-input mt-0"
                          type="checkbox"
                          :checked="ItemForm.height > -1"
                          @change="
                            ItemForm.height = ItemForm.height != -1 ? -1 : 0
                          "
                        />
                      </div>
                      <input
                        min="-1"
                        v-model="ItemForm.height"
                        :disabled="ItemForm.height == -1"
                        aria-label="Text input with checkbox"
                        class="form-control"
                        type="number"
                      />
                    </div>
                    <span v-if="errors['height']" class="text-danger">
                      {{ errors["height"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-7 col-12 col-md-6">
                    <label class="required fs-6 fw-bold mb-2">
                      {{ $t("weight") }}
                    </label>
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      :title="$t('weight note')"
                    ></i>
                    <div class="input-group">
                      <div class="input-group-text">
                        <input
                          aria-label="Checkbox for following text input"
                          class="form-check-input mt-0"
                          type="checkbox"
                          :checked="ItemForm.weight > -1"
                          @change="
                            ItemForm.weight = ItemForm.weight != -1 ? -1 : 0
                          "
                        />
                      </div>
                      <input
                        min="-1"
                        v-model="ItemForm.weight"
                        :disabled="ItemForm.weight == -1"
                        aria-label="Text input with checkbox"
                        class="form-control"
                        type="number"
                      />
                    </div>
                    <span v-if="errors['weight']" class="text-danger">
                      {{ errors["weight"][0] }}
                    </span>
                  </div>

                  <div class="d-flex flex-column mb-7 fv-row col-12 col-md-6">
                    <label class="fs-6 fw-bold mb-2">
                      <span class="required">{{ $t("status") }}</span>
                    </label>
                    <select v-model="ItemForm.status" class="form-select">
                      <option value="1">{{ $t("yes") }}</option>
                      <option value="0">{{ $t("no") }}</option>
                    </select>
                  </div>

                  <div class="d-flex flex-column mb-7 fv-row col-12 col-md-6">
                    <label class="fs-6 fw-bold mb-2">
                      <span class="required">{{ $t("multiple") }}</span>
                    </label>
                    <select v-model="ItemForm.multiple" class="form-select">
                      <option value="1">{{ $t("yes") }}</option>
                      <option value="0">{{ $t("no") }}</option>
                    </select>
                  </div>

                  <div class="d-flex flex-column mb-7 fv-row col-12 col-md-6">
                    <label class="fs-6 fw-bold mb-2">
                      <span class="required">{{ $t("requireItems") }}</span>
                    </label>
                    <select
                      v-model="ItemForm.require_items"
                      class="form-select"
                    >
                      <option value="1">{{ $t("yes") }}</option>
                      <option value="0">{{ $t("no") }}</option>
                    </select>
                  </div>

                  <div class="d-flex flex-column mb-7 fv-row col-12 col-md-6">
                    <label class="fs-6 fw-bold mb-2">
                      <span class="required">{{ $t("Parents Service") }}</span>
                    </label>
                    <select v-model="ItemForm.parent_id" class="form-select">
                      <option
                        v-for="item in tableDataItems"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>

                  <div class="fv-row mb-7 col-12 col-md-6">
                    <label class="required fs-6 fw-bold mb-2"
                      >{{ $t("index") }}
                    </label>
                    <el-form-item prop="name">
                      <el-input
                        v-model="ItemForm.index"
                        step="0.01"
                        type="number"
                      />
                    </el-form-item>
                    <span v-if="errors['index']" class="text-danger">{{
                      errors["index"][0]
                    }}</span>
                  </div>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("payments") }}
                  </label>
                  <el-select
                    v-model="ItemForm.payments"
                    class="w-100"
                    filterable
                    multiple
                  >
                    <el-option
                      v-for="item in payments"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>

                  <span v-if="errors['payments']" class="text-danger">
                    {{ errors["payments"][0] }}
                  </span>
                </div>
                <div class="d-flex flex-stack">
                  <!--begin::Label-->
                  <div class="me-5">
                    <label class="fs-6 fw-bold form-label">{{
                        $t("Custom Service")
                      }}</label>
                  </div>
                  <!--end::Label-->
                  <!--begin::Switch-->
                  <label
                      class="
                          form-check
                          form-switch
                          form-check-custom
                          form-check-solid
                        "
                  >
                    <input
                        v-model="ItemForm.custom"
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                    />
                  </label>
                  <!--end::Switch-->
                </div>

                <div class="fv-row mb-15">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label mb-2">
                    <span class="required">{{ $t("icon") }}</span>
                  </label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <div class="d-flex align-items-center">
                    <span
                      v-if="ItemForm.icon"
                      v-html="ItemForm.icon"
                      class="me-2 service-icon"
                    ></span>
                    <textarea
                      v-model="ItemForm.icon"
                      class="form-control form-control-solid rounded-3"
                      name="additional_info"
                    ></textarea>
                  </div>
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
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import MyTable from "@/views/admin/components/myTable";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "Services-list",
  components: {
    TranslationModel,
    MyTable,
  },
  data() {
    return {
      errors: [],
      loading: true, //ref(useStore().getters.Submitted),
      tableDataItems: [],
      payments: [],
      ItemForm: {},
      file: "",
      isEdit: -1,
      transObject: {},
    };
  },
  created() {
    ApiService.get("admin/Services")
      .then((data) => {
        this.tableDataItems = data.data.data;
        this.payments = data.data.payments;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("services"), [this.$t("cp")]);
  },
  methods: {
    openModelNew() {
      this.isEdit = -1;
      this.ItemForm = {};
    },
    openModelEdit(i) {
      this.isEdit = i;
      this.ItemForm = this.tableDataItems[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.errors = [];
      // const formData = new FormData();
      // if (this.file != "")
      //   formData.append('image' , this.file)
      // Object.keys(this.ItemForm).forEach( (value , key )=> {
      //   if (value != "image")
      //     formData.append(value , this.ItemForm[value])
      // })
      if (this.isEdit > -1) {
        await ApiService.put(
          "admin/Services/" + this.tableDataItems[this.isEdit].id,
          this.ItemForm
        )
          .then((res) => {
            hideModal("kt_modal_form_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataItems[this.isEdit] = res.data.data;
          })
          .catch(() => {
            this.errors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post("admin/Services", this.ItemForm)
          .then((res) => {
            if (res.data.data) {
              this.tableDataItems.push(res.data.data);
              //hideModal("kt_modal_form_item");
              this.$toast.success("success");
              this.file = "";
            }
          })
          .catch(() => {
            this.errors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    async deleteItem(i) {
      this.loading = true;
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          "( " +
          this.tableDataItems[i].name +
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
              "admin/Services/" + this.tableDataItems[i].id
            ).then(() => {
              this.tableDataItems.splice(i, 1);
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

    handleFileUpload() {
      this.file = this.$refs.file.files[0];

      // this.ItemForm.name = "image";
      // var files = e.target.files || e.dataTransfer.files;
      //
      // if (!files.length)
      //   return;
      // this.createImage(files[0]);
      // this.ItemForm =  event.target.files[0];;
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
        .then(() => {
          hideModal("kt_modal_trans");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
