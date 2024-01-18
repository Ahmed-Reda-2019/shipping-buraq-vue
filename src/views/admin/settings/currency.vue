<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
            <span class="spinner-border text-primary"></span>
          </div>
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("currencies") }}</h2>
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
                {{ $t("addCurrency") }}
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
                      <th class="min-w-150px">{{ $t("iso_code") }}</th>
                      <th class="min-w-150px">{{ $t("name") }}</th>
                      <th class="min-w-150px">{{ $t("multiplier") }}</th>
                      <th class="min-w-125px">{{ $t("status") }}</th>
                      <th class="text-end min-w-70px">{{ $t("actions") }}</th>
                    </tr>
                    <!--end::Table row-->
                  </thead>
                  <!--end::Table head-->
                  <!--begin::Table body-->
                  <tbody class="fw-bold text-gray-800">
                    <tr v-for="(item, i) in tableDataItems" :key="i">
                      <td>
                        <label class="w-150px">{{ item.iso_code }}</label>
                        <div class="fw-normal text-gray-600">
                          {{ item.symbol }}
                        </div>
                      </td>
                      <td>
                        <label class="w-150px">{{ item.name }}</label>
                      </td>
                      <td>
                        <label class="w-150px">{{ item.multiplier }}</label>
                      </td>
                      <td>
                        <span
                          v-if="item.status"
                          class="badge badge-light-success"
                        >
                          {{ $t("active") }}
                        </span>
                        <span v-else class="badge badge-light-danger">{{
                          $t("unactive")
                        }}</span>
                      </td>

                      <td class="text-end">
                        <a
                          class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                          data-bs-target="#kt_modal_form_item"
                          data-bs-toggle="modal"
                          @click="openModelEdit(i)"
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

                        <!--end::Action-->
                      </td>
                    </tr>
                  </tbody>
                  <!--end::Table body-->
                </table>
                <!--end::Table-->
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
      id="kt_modal_form_item"
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
            <h2 v-if="isEdit > -1" class="fw-bolder">
              {{ $t("editCurrency") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addCurrency") }}</h2>
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
                    <el-input v-model="ItemForm.name" type="text" />
                  </el-form-item>
                  <span v-if="currencyError['name']" class="text-danger">{{
                    currencyError["name"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("iso_code") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.iso_code" type="text" />
                  </el-form-item>
                  <span v-if="currencyError['iso_code']" class="text-danger">{{
                    currencyError["iso_code"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("symbol") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.symbol" type="text" />
                  </el-form-item>
                  <span v-if="currencyError['symbol']" class="text-danger">{{
                    currencyError["symbol"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2"
                    >{{ $t("multiplier") }}
                  </label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="ItemForm.multiplier"
                      step="0.01"
                      type="number"
                    />
                  </el-form-item>
                  <span
                    v-if="currencyError['multiplier']"
                    class="text-danger"
                    >{{ currencyError["multiplier"][0] }}</span
                  >
                </div>

                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("status") }}</span>
                  </label>
                  <select v-model="ItemForm.status" class="form-select">
                    <option value="1">{{ $t("yes") }}</option>
                    <option value="0">{{ $t("no") }}</option>
                  </select>
                  <span v-if="currencyError['status']" class="text-danger">{{
                    currencyError["status"][0]
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

    <translation-model :object="transObject"/>

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
  name: "Currencies-list",
  components: {TranslationModel},
  data() {
    return {
      errors: [],
      langs: langs,
      loading: true, //ref(useStore().getters.Submitted),
      tableDataItems: [],
      formModelRef: (ref < null) | (HTMLFormElement > null),
      ItemForm: {},
      currencyError: [],
      isEdit: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
    };
  },
  created() {
    ApiService.get("admin/Currencies").then((data) => {
      this.tableDataItems = data.data.data;
      this.loading = false;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("currencies"), [this.$t("cp")]);
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
      this.currencyError = [];
      if (this.isEdit > -1) {
        await ApiService.put(
          "admin/Currencies/" + this.tableDataItems[this.isEdit].id,
          this.ItemForm
        )
          .then((res) => {
            hideModal("kt_modal_form_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataItems[this.isEdit] = res.data.data;
            this.$refs["formModelRef"].hide();
            this.loading = false;
          })
          .catch((error) => {
            this.currencyError = ApiService.errors;
          });
      } else {
        await ApiService.post("admin/Currencies", this.ItemForm)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableDataItems.push(res.data.data);
              hideModal("kt_modal_form_item");
            }
            this.loading = false;
          })
          .catch((error) => {
            this.currencyError = ApiService.errors;
          });
      }
    },

    async deleteItem(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataItems[i].name +
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
            "admin/Currencies/" + this.tableDataItems[i].id
          ).then((res) => {
            this.tableDataItems.splice(i, 1);
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
});
</script>
