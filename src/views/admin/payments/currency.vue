<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Content-->

      <div class="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
        <div class="card card-flush pt-3 mb-5 mb-xl-10">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">Currencies</h2>
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
                Add Currency
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
                    <th class="min-w-150px">module</th>
                    <th class="min-w-150px">name</th>
                    <th class="min-w-150px">multiplier</th>
                    <th class="min-w-125px">status</th>
                    <th class="text-end min-w-70px">Actions</th>
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
                          Active
                        </span>
                      <span v-else class="badge badge-light-danger"
                      >unActive</span
                      >
                    </td>

                    <td class="text-end">
                      <!--begin::Action-->
                      <a
                          class="
                            btn btn-icon btn-active-light-primary
                            w-30px
                            h-30px
                          "
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
                                <rect height="24" width="24" x="0" y="0"/>
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
                          class="
                            btn btn-icon btn-active-light-primary
                            w-30px
                            h-30px
                          "
                          @click="deleteItem(i)"
                      >
                        <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                        <span class="svg-icon svg-icon-3">
                            <svg
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                  fill="black"
                              />
                              <path
                                  d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                  fill="black"
                                  opacity="0.3"
                              />
                            </svg>
                          </span>
                        <!--end::Svg Icon-->
                      </a>

                      <a
                          class="
                            btn btn-icon btn-active-dark-primary
                            w-30px
                            h-30px
                          "
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
        ref="formModelRef"
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
            <h2 v-if="isEdit > -1" class="fw-bolder">Edit a Currency</h2>
            <h2 v-else class="fw-bolder">Add New Currency</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                id="kt_modal_form_item_close"
                class="btn btn-icon btn-sm btn-active-icon-primary"
                data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg"/>
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
                  <label class="required fs-6 fw-bold mb-2">Name </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.name" type="text"/>
                  </el-form-item>
                  <span v-if="errors['name']" class="text-danger">{{
                    errors["name"][0]
                  }}</span>
                </div>

                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2">iso_code </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.iso_code" type="text"/>
                  </el-form-item>
                  <span v-if="errors['iso_code']" class="text-danger">{{
                    errors["iso_code"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2">symbol </label>
                  <el-form-item prop="name">
                    <el-input v-model="ItemForm.symbol" type="text"/>
                  </el-form-item>
                  <span v-if="errors['symbol']" class="text-danger">{{
                    errors["symbol"][0]
                  }}</span>
                </div>
                <div class="fv-row mb-7">
                  <label class="required fs-6 fw-bold mb-2">multiplier </label>
                  <el-form-item prop="name">
                    <el-input
                        v-model="ItemForm.multiplier"
                        step="0.01"
                        type="number"
                    />
                  </el-form-item>
                  <span v-if="errors['multiplier']" class="text-danger">{{
                    errors["multiplier"][0]
                  }}</span>
                </div>

                <div class="d-flex flex-column mb-7 fv-row">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">status</span>
                  </label>
                  <el-select v-model="ItemForm.status">
                    <el-option value="1">Yes</el-option>
                    <el-option value="0">No</el-option>
                  </el-select>
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
                Discard
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
                  Submit
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow"
                  ><inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
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
import {defineComponent, ref} from "vue";
import {useI18n} from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import langs from "@/core/config/langs";
import {useStore} from "vuex";
import {MenuComponent} from "../../assets/ts/components";
import {setCurrentPageBreadcrumbs} from "../../core/helpers/breadcrumb";
import ApiService from "../../core/services/ApiService";
import {useRoute} from "vue-router";
import {hideModal} from "../../core/helpers/dom";
import TranslationModel from "@/views/admin/components/translationModel";

export default defineComponent({
  name: "Currencies-list",
  components: {TranslationModel},
  data() {
    return {
      errors: [],
      LocalI18n: useI18n().locale.value,
      langs: langs,
      loading: false, //ref(useStore().getters.Submitted),
      tableHeader: ref([
        {
          key: "checkbox",
        },
        {
          name: "name",
          key: "name",
          sortable: true,
        },
        {
          name: "iso_code",
          key: "iso_code",
          sortable: true,
        },

        {
          name: "phone_code",
          key: "phone_code",
          sortable: true,
        },
        {
          name: "status",
          key: "status",
          sortable: true,
        },
        {
          name: "Actions",
          key: "actions",
        },
      ]),
      tableDataItems: [],
      formModelRef: (ref < null) | (HTMLFormElement > null),
      ItemForm: {},
      isEdit: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
    };
  },
  created() {
    let res = ApiService.get("admin/Currencies").then((data) => {
      this.tableDataItems = data.data.data;
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
      if (this.isEdit > -1) {
        await ApiService.put(
            "admin/Currencies/" + this.tableDataItems[this.isEdit].id,
            this.ItemForm
        ).then((res) => {
          hideModal(this.formModelRef);
          this.tableDataItems[this.isEdit] = res.data.data;
        });
      } else {
        await ApiService.post("admin/Currencies", this.ItemForm)
            .then((res) => {
              if (res.data.data) {
                this.tableDataItems.push(res.data.data);
                hideModal(this.formModelRef);
              }
              this.loading = false;
            })
            .catch((error) => {
              this.loading = false;
            });
      }
    },

    async deleteItem(i) {
      Swal.fire({
        title:
            "Are you sure To delete ? ( " + this.tableDataItems[i].name + " )",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(
              "admin/Currencies/" + this.tableDataItems[i].id
          ).then((res) => {
            this.tableDataItems.splice(i, 1);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
            hideModal(this.transFormModalRef);
            this.loading = false;
          })
          .catch((error) => {
            let errors = error;
            //
            this.loading = false;
          });
    },
  },
});
</script>
