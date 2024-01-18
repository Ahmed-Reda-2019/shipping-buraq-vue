<template>
  <div id="kt_content" class="content flex-row-fluid">
    <boxes :list="branch_sizes" />

    <div class="d-flex flex-column flex-lg-row">
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
              <h2 class="fw-bolder">{{ $t("branches") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_form_Branche"
                data-bs-toggle="modal"
                @click="openBrancheModelNew()"
              >
                {{ $t("addbranche") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <my-table
              :list="tableDataBranches"
              modal="kt_modal_Blog_item"
              :btn="$t('addbranche')"
              :tableHeader="[
                { name: 'name', key: 'name' },
                { name: 'title', key: 'title' },
                { name: 'status', key: 'status' },
                { name: 'actions', key: 'actions' },
              ]"
            >
              <template v-slot:cell-name="{ row: item }">
                {{ item.name }}
              </template>
              <template v-slot:cell-title="{ row: item }">
                {{ item.title }}
              </template>
              <template v-slot:cell-status="{ row: item }">
                <span v-if="item.status == 1" class="badge badge-light-success">
                  {{ $t("active") }}
                </span>
                <span v-else class="badge badge-light-danger">{{
                  $t("unactive")
                }}</span>
              </template>
              <template v-slot:cell-actions="{ row: item, index: i }">
                <a
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_form_Branche"
                  data-bs-toggle="modal"
                  @click="openBrancheModelEdit(i)"
                >
                  <span class="svg-icon svg-icon-primary svg-icon-2x">
                    <inline-svg src="/media/icons/duotune/art/art005.svg" />
                  </span>
                </a>
                <router-link
                  :to="{
                    name: 'branche-view',
                    params: { Id: item.id },
                  }"
                  class="btn btn-icon btn-light-success mt-0 mb-0 m-2"
                >
                  <i class="icon-xl fas far fa-eye"></i>
                </router-link>
                <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteBranche(i)"
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
      id="kt_modal_form_Branche"
      ref="ModelBrancheRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div id="kt_modal_branch_header" class="modal-header">
            <!--begin::Modal title-->
            <h2 v-if="isEditBranche > -1" class="fw-bolder">
              {{ $t("editBranche") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addbranche") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_form_Branche_close"
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
          <el-form @submit.prevent="submitBrancheForm()">
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
                    <el-input v-model="BrancheForm.name" type="text" />
                  </el-form-item>
                  <span v-if="brancheError['name']" class="text-danger">{{
                    brancheError["name"][0]
                  }}</span>
                </div>


                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("status") }}</span>
                  </label>
                  <select v-model="BrancheForm.status" class="form-select">
                    <option value="1">{{ $t("yes") }}</option>
                    <option value="0">{{ $t("no") }}</option>
                  </select>

                  <span v-if="brancheError['status']" class="text-danger">{{
                    brancheError["status"][0]
                  }}</span>
                </div>


                <div class="row row-cols-1  row-cols-sm-2">

                  <div class="fv-row">
                    <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("title") }}
                    </label>
                    <el-form-item prop="title">
                      <el-input v-model="BrancheForm.title" type="text" />
                    </el-form-item>
                    <span v-if="brancheError['title']" class="text-danger">{{
                        brancheError["title"][0]
                      }}</span>
                  </div>
                  <div class="fv-row">
                    <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("address Line") }} 2
                    </label>
                    <el-form-item prop="address_1">
                      <el-input v-model="BrancheForm.address_1" type="text" />
                    </el-form-item>
                    <span v-if="brancheError['address_1']" class="text-danger">{{
                        brancheError["address_1"][0]
                      }}</span>
                  </div>
                  <div class="fv-row">
                    <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("address Line") }} 2
                    </label>
                    <el-form-item prop="address_2">
                      <el-input v-model="BrancheForm.address_2" type="text" />
                    </el-form-item>
                    <span v-if="brancheError['address_2']" class="text-danger">{{
                        brancheError["address_2"][0]
                      }}</span>
                  </div>

                  <div class="fv-row">
                    <label class="fs-6 fw-bold mb-2"
                    >{{ $t("tel") }}
                    </label>
                    <el-form-item prop="tel">
                      <el-input v-model="BrancheForm.tel" type="tel" />
                    </el-form-item>
                    <span v-if="brancheError['tel']" class="text-danger">{{
                        brancheError["tel"][0]
                      }}</span>
                  </div>
                  <div class="fv-row">
                    <label class="fs-6 fw-bold mb-2"
                    >{{ $t("vat") }}
                    </label>
                    <el-form-item prop="vat">
                      <el-input v-model="BrancheForm.vat" type="text" />
                    </el-form-item>
                    <span v-if="brancheError['vat']" class="text-danger">{{
                        brancheError["vat"][0]
                      }}</span>
                  </div>
                  <div class="fv-row">
                    <label class="fs-6 fw-bold mb-2"
                    >{{ $t("email") }}
                    </label>
                    <el-form-item prop="email">
                      <el-input v-model="BrancheForm.email" type="email" />
                    </el-form-item>
                    <span v-if="brancheError['email']" class="text-danger">{{
                        brancheError["email"][0]
                      }}</span>
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
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import MyTable from "@/views/admin/components/myTable";
import TranslationModel from "@/views/admin/components/translationModel";
import Boxes from "@/views/admin/branches/boxes";

export default defineComponent({
  name: "branches-list",
  components: {
    Boxes,
    TranslationModel,
    MyTable,
  },
  data() {
    return {
      LocalI18n: useI18n(),
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      tableDataBranches: [],
      ModelBrancheRef: (ref < null) | (HTMLFormElement > null),
      BrancheForm: {},
      brancheError: [],
      isEditBranche: -1,
      transObject: {},
      branch_sizes: [],
    };
  },
  created() {
    ApiService.get("admin/branches")
      .then((data) => {
        this.tableDataBranches = data.data.data;
        this.branch_sizes = data.data.branch_sizes;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("branches"), [this.$t("cp")]);
  },
  methods: {
    openBrancheModelNew() {
      this.isEditBranche = -1;
      this.BrancheForm = {};
    },
    openBrancheModelEdit(i) {
      this.isEditBranche = i;
      this.BrancheForm = this.tableDataBranches[i];
    },
    async submitBrancheForm() {
      this.loading = true;
      this.brancheError = [];
      if (this.isEditBranche > -1) {
        await ApiService.put(
          "admin/branches/" + this.tableDataBranches[this.isEditBranche].id,
          this.BrancheForm
        )
          .then((res) => {
            hideModal("kt_modal_form_Branche");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataBranches[this.isEditBranche] = res.data.data;
          })
          .catch(() => {
            this.brancheError = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post("admin/branches", this.BrancheForm)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableDataBranches.push(res.data.data);
              hideModal("kt_modal_form_Branche");
            }
          })
          .catch(() => {
            this.brancheError = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    async deleteBranche(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataBranches[i].name +
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
          this.loading = true;
          ApiService.delete(
            "admin/branches/" + this.tableDataBranches[i].id
          ).then(() => {
            this.tableDataBranches.splice(i, 1);
            Swal.fire(
              this.$t("messages.delteted"),
              this.$t("messages.hasBeenDeleted"),
              "success"
            );
            this.loading = false;
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
        .then(() => {
          this.$toast.success(this.$t("messages.updated"));
          hideModal("kt_modal_trans");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
