<template>
  <div id="kt_content" class="content flex-row-fluid">
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-lg-row position-relative">
      <!--begin::Content-->
      <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
        <span class="spinner-border text-primary"></span>
      </div>
      <div class="flex-lg-row-fluid">
        <KTModalCard
          v-if="tableDataCustomerReciever.length == 0"
          :button-text="$t('Add Reciever')"
          :description="$t('noData')"
          :title="$t('CustomerReciever')"
          image="/media/illustrations/sigma-1/n18.png"
          modal-id="kt_modal_resiver_item"
        ></KTModalCard>
        <div v-else class="card card-flush pt-3">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("Receivers") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_resiver_item"
                data-bs-toggle="modal"
                @click="openModelCustomerRecieverNew()"
              >
                {{ $t("Add Reciever") }}
              </a>
            </div>

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle table-row-dashed fs-6 gy-4 mb-0">
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
                    <th class="min-w-150px">{{ $t("name") }}</th>
                    <th class="min-w-125px">{{ $t("address") }}</th>
                    <th class="min-w-125px">{{ $t("phone") }}</th>
                    <th class="min-w-125px">{{ $t("email") }}</th>
                    <th class="text-end min-w-70px">{{ $t("actions") }}</th>
                  </tr>
                  <!--end::Table row-->
                </thead>
                <!--end::Table head-->
                <!--begin::Table body-->
                <tbody class="fw-bold text-gray-800">
                  <tr v-for="(item, i) in tableDataCustomerReciever" :key="i">
                    <td>
                      <label class="w-150px">{{ item.reciever_name }}</label>
                    </td>
                    <td>
                      <label class="w-150px">{{ item.reciever_address }}</label>
                      <div class="fw-normal text-gray-600">
                        {{ item.reciever_floor }} -
                        {{ item.reciever_zip }}
                      </div>
                    </td>

                    <td>
                      <label class="w-150px">{{ item.reciever_phone }}</label>
                    </td>

                    <td>
                      <label class="w-150px">{{ item.reciever_email }}</label>
                    </td>
                    <td class="text-end">
                      <!--begin::Action-->
                      <a
                        class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_resiver_item"
                        data-bs-toggle="modal"
                        @click="openModelCustomerRecieverEdit(i)"
                      >
                        <span class="svg-icon svg-icon-primary svg-icon-2x">
                          <inline-svg
                            src="/media/icons/duotune/art/art005.svg"
                          />
                        </span>
                      </a>
                      <a
                        class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                        @click="deleteCustomerReciever(i)"
                      >
                        <i class="icon-xl fas fa-trash-alt"></i>
                      </a>

                      <!--end::Action-->
                    </td>
                  </tr>
                </tbody>
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
          </div>
          <!--end::Card body-->
        </div>
      </div>
    </div>

    <div
      id="kt_modal_resiver_item"
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
            <h2 v-if="isEditCustomerReciever > -1" class="fw-bolder">
              {{ $t("Edit Reciever") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("Add Reciever") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_resiver_item_close"
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
                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("name")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerRecieverForm.reciever_name"
                      type="text"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerRecieverErrors['reciever_name']"
                    class="text-danger"
                    >{{ CustomerRecieverErrors["reciever_name"][0] }}</span
                  >
                </div>
                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("address")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerRecieverForm.reciever_address"
                      type="text"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerRecieverErrors['reciever_address']"
                    class="text-danger"
                    >{{ CustomerRecieverErrors["reciever_address"][0] }}</span
                  >
                </div>

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("floor")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerRecieverForm.reciever_floor"
                      min="0"
                      type="number"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerRecieverErrors['reciever_floor']"
                    class="text-danger"
                    >{{ CustomerRecieverErrors["reciever_floor"][0] }}</span
                  >
                </div>

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("zip")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerRecieverForm.reciever_zip"
                      type="zip"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerRecieverErrors['reciever_zip']"
                    class="text-danger"
                    >{{ CustomerRecieverErrors["reciever_zip"][0] }}</span
                  >
                </div>

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("email")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerRecieverForm.reciever_email"
                      type="email"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerRecieverErrors['reciever_email']"
                    class="text-danger"
                    >{{ CustomerRecieverErrors["reciever_email"][0] }}</span
                  >
                </div>
                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("phone")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerRecieverForm.reciever_phone"
                      type="tel"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerRecieverErrors['reciever_phone']"
                    class="text-danger"
                    >{{ CustomerRecieverErrors["reciever_phone"][0] }}</span
                  >
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
                  <span class="svg-icon svg-icon-3 ms-2 me-0 arrow">
                    <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
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

<script>
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import KTModalCard from "@/components/cards/Card.vue";

export default defineComponent({
  name: "CustomerReciever-list",
  components: {
    KTModalCard,
  },
  data() {
    return {
      loading: true,
      tableDataCustomerReciever: [],
      CustomerRecieverForm: {},
      CustomerRecieverErrors: [],
      isEditCustomerReciever: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
      allCountries: [],
      allCounties: [],
      allAreas: [],
    };
  },
  created() {
    ApiService.get("site/customer/recievers").then((data) => {
      this.tableDataCustomerReciever = data.data.data;
      this.allCountries = data.data.country;
      this.allCounties = data.data.county;
      this.allAreas = data.data.areas;
      this.loading = false;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("CustomerReciever"), []);
  },
  methods: {
    openModelCustomerRecieverNew() {
      this.isEditCustomerReciever = -1;
      this.CustomerRecieverForm = {};
    },
    openModelCustomerRecieverEdit(i) {
      this.isEditCustomerReciever = i;
      this.CustomerRecieverForm = this.tableDataCustomerReciever[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.CustomerRecieverErrors = [];
      if (this.isEditCustomerReciever > -1) {
        await ApiService.put(
          "site/customer/recievers/" +
            this.tableDataCustomerReciever[this.isEditCustomerReciever].id,
          this.CustomerRecieverForm
        )
          .then((res) => {
            hideModal("kt_modal_resiver_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDataCustomerReciever[this.isEditCustomerReciever] =
              res.data.data;
            this.CustomerRecieverForm = {};
          })
          .catch(() => {
            this.CustomerRecieverErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post(
          "site/customer/recievers",
          this.CustomerRecieverForm
        )
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.CustomerRecieverForm = {};
              this.tableDataCustomerReciever.push(res.data.data);
              hideModal("kt_modal_resiver_item");
            }
          })
          .catch(() => {
            this.CustomerRecieverErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    async deleteCustomerReciever(i) {
      this.loading = true;
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDataCustomerReciever[i].reciever_name +
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
              "site/customer/recievers/" + this.tableDataCustomerReciever[i].id
            ).then((res) => {
              this.tableDataCustomerReciever.splice(i, 1);
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
  },
});
</script>
