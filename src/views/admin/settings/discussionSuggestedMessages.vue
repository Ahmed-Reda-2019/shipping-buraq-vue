<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
              <span class="spinner-border text-primary"></span>
            </div>
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">
                {{ $t("Discussion Suggested Messages") }}
              </h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_Type_item"
                data-bs-toggle="modal"
                @click="openModelTypeNew()"
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
            <my-table
              :list="tableData"
              :tableHeader="[
                { name: 'name', key: 'name' },
                { name: 'actions', key: 'actions' },
              ]"
            >
              <template v-slot:cell-name="{ row: item }">
                {{ item.name }}
              </template>
              <template v-slot:cell-actions="{ row: item, index: i }">
                <a
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_Type_item"
                  data-bs-toggle="modal"
                  @click="openModelTypeEdit(i)"
                >
                  <span class="svg-icon svg-icon-primary svg-icon-2x">
                    <inline-svg src="/media/icons/duotune/art/art005.svg" />
                  </span>
                </a>
                <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteType(i)"
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

            <!--end::Section-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_Type_item"
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
            <h2 v-if="isEditType > -1" class="fw-bolder">
              {{ $t("edit") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("Add New") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_Type_item_close"
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
                    <el-input v-model="TypeForm.name" type="text" />
                  </el-form-item>
                  <span v-if="TypeErrors['name']" class="text-danger">{{
                    TypeErrors["name"][0]
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

    <translation-model :object="transObject"></translation-model>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import TranslationModel from "@/views/admin/components/translationModel";
import MyTable from "@/views/admin/components/myTable";

export default defineComponent({
  name: "discussion-suggested-messages",
  components: { MyTable, TranslationModel },
  data() {
    return {
      loading: true, //ref(useStore().getters.Submitted),
      tableData: [],
      TypeForm: {},
      TypeErrors: [],
      isEditType: -1,
      transObject: {},
    };
  },
  created() {
    ApiService.get("admin/Discussion/Suggested/messages").then((data) => {
      this.tableData = data.data.data;
      this.loading = false;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("Discussion Suggested Messages"), [
      this.$t("cp"),
    ]);
  },
  methods: {
    openModelTypeNew() {
      this.isEditType = -1;
      this.TypeForm = {};
    },
    openModelTypeEdit(i) {
      this.isEditType = i;
      this.TypeForm = this.tableData[i];
    },

    async submitModelForm() {
      this.loading = true;
      this.TypeErrors = [];
      if (this.isEditType > -1) {
        await ApiService.put(
          "admin/Discussion/Suggested/messages/" +
            this.tableData[this.isEditType].id,
          this.TypeForm
        )
          .then((res) => {
            hideModal("kt_modal_Type_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableData[this.isEditType] = res.data.data;
          })
          .catch((error) => {
            this.TypeErrors = ApiService.errors;
          });
      } else {
        await ApiService.post(
          "admin/Discussion/Suggested/messages",
          this.TypeForm
        )
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableData.push(res.data.data);
              hideModal("kt_modal_Type_item");
            }
            this.loading = false;
          })
          .catch((error) => {
            this.TypeErrors = ApiService.errors;
            this.loading = false;
          });
      }
    },

    async deleteType(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableData[i].name +
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
            "admin/Discussion/Suggested/messages/" + this.tableData[i].id
          ).then((res) => {
            this.tableData.splice(i, 1);
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
  },
});
</script>
