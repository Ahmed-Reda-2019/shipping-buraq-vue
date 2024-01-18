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
          v-if="tableDatacustomerAddress.length == 0"
          :button-text="$t('addCustomerAddress')"
          :description="$t('noData')"
          :title="$t('customerAddress')"
          image="/media/illustrations/sigma-1/n18.png"
          modal-id="kt_modal_order_type_item"
        ></KTModalCard>
        <div v-else class="card card-flush pt-3">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2 class="fw-bolder">{{ $t("customerAddress") }}</h2>
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <a
                class="btn btn-light-primary"
                data-bs-target="#kt_modal_order_type_item"
                data-bs-toggle="modal"
                @click="openModelCustomerAddressNew()"
              >
                {{ $t("addCustomerAddress") }}
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
                    <th class="min-w-150px">{{ $t("address") }}</th>
                    <th class="min-w-125px">{{ $t("area") }}</th>
                    <th class="min-w-125px">{{ $t("county") }}</th>
                    <th class="min-w-125px">{{ $t("notes") }}</th>
                    <th class="text-end min-w-70px">{{ $t("actions") }}</th>
                  </tr>
                  <!--end::Table row-->
                </thead>
                <!--end::Table head-->
                <!--begin::Table body-->
                <tbody class="fw-bold text-gray-800">
                  <tr v-for="(item, i) in tableDatacustomerAddress" :key="i">
                    <td>
                      <label class="w-150px">{{
                        item.address == null ? "-" : item.address
                      }}</label>
                      <div class="fw-normal text-gray-600">
                        {{ item.zip }}
                      </div>
                    </td>
                    <td>
                      <label class="w-150px">{{ item.area_name }}</label>
                    </td>

                    <td>
                      <label class="w-150px">{{ item.county_name }}</label>
                      <div class="fw-normal text-gray-600">
                        {{ item.country_name }}
                      </div>
                    </td>
                    <td>
                      <label class="w-150px">{{ item.notes }}</label>
                    </td>

                    <td class="text-end">
                      <!--begin::Action-->
                      <a
                        class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                        data-bs-target="#kt_modal_order_type_item"
                        data-bs-toggle="modal"
                        @click="openModelCustomerAddressEdit(i)"
                      >
                        <span class="svg-icon svg-icon-primary svg-icon-2x">
                          <inline-svg
                            src="/media/icons/duotune/art/art005.svg"
                          />
                        </span>
                      </a>
                      <a
                        class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                        @click="deleteCustomerAddress(i)"
                      >
                        <i class="icon-xl fas fa-trash-alt"></i>
                      </a>
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
      id="kt_modal_order_type_item"
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
            <h2 v-if="isEditCustomerAddress > -1" class="fw-bolder">
              {{ $t("editCustomerAddress") }}
            </h2>
            <h2 v-else class="fw-bolder">{{ $t("addCustomerAddress") }}</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              id="kt_modal_order_type_item_close"
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
                <Area
                  ref="AreaDataSender"
                  :FormData="CustomerAddressForm"
                  :FormLErrors="CustomerAddressErrors"
                  key_area="area_id"
                  key_country="country_id"
                  key_county="county_id"
                  key_obj="CustomerAddressForm"
                  mode="0"
                  @change="setLocation"
                />

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("address")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerAddressForm.address"
                      type="text"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerAddressErrors['address']"
                    class="text-danger"
                    >{{ CustomerAddressErrors["address"][0] }}</span
                  >
                </div>

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("zip")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input v-model="CustomerAddressForm.zip" type="zip" />
                  </el-form-item>
                  <span
                    v-if="CustomerAddressErrors['zip']"
                    class="text-danger"
                    >{{ CustomerAddressErrors["zip"][0] }}</span
                  >
                </div>

                <div class="mb-10">
                  <label class="form-label fw-bolder fs-6 text-gray-700">{{
                    $t("notes")
                  }}</label>
                  <el-form-item prop="name">
                    <el-input
                      v-model="CustomerAddressForm.notes"
                      type="notes"
                    />
                  </el-form-item>
                  <span
                    v-if="CustomerAddressErrors['notes']"
                    class="text-danger"
                    >{{ CustomerAddressErrors["notes"][0] }}</span
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
import Area from "@/views/admin/locations/area";

export default defineComponent({
  name: "customerAddress-list",
  components: {
    Area,
    KTModalCard,
  },
  data() {
    return {
      loading: true,
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
      tableDatacustomerAddress: [],
      CustomerAddressformModelRef: (ref < null) | (HTMLFormElement > null),
      CustomerAddressForm: {},
      CustomerAddressErrors: [],
      isEditCustomerAddress: -1,
      transObject: {},
      transFormModalRef: (ref < null) | (HTMLElement > null),
      allCountries: [],
      allCounties: [],
      allAreas: [],
    };
  },
  created() {
    ApiService.get("site/customer/address").then((data) => {
      this.tableDatacustomerAddress = data.data.data;
      this.allCountries = data.data.country;
      this.allCounties = data.data.county;
      this.allAreas = data.data.areas;
      this.loading = false;
    });
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("customerAddress"), []);
  },
  methods: {
    setLocation(op) {
      this.CustomerAddressForm.area_id = op.area_id;
      this.CustomerAddressForm.country_id = op.country_id;
      this.CustomerAddressForm.county_id = op.county_id;
    },
    openModelCustomerAddressNew() {
      this.isEditCustomerAddress = -1;
      this.CustomerAddressForm = {};
    },
    openModelCustomerAddressEdit(i) {
      this.isEditCustomerAddress = i;
      this.CustomerAddressForm = this.tableDatacustomerAddress[i];
    },
    async submitModelForm() {
      this.loading = true;
      this.CustomerAddressErrors = [];
      if (this.isEditCustomerAddress > -1) {
        await ApiService.put(
          "site/customer/address/" +
            this.tableDatacustomerAddress[this.isEditCustomerAddress].id,
          this.CustomerAddressForm
        )
          .then((res) => {
            hideModal("kt_modal_order_type_item");
            this.$toast.success(this.$t("messages.success"));
            this.tableDatacustomerAddress[this.isEditCustomerAddress] =
              res.data.data;
          })
          .catch(() => {
            this.CustomerAddressErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post("site/customer/address", this.CustomerAddressForm)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.tableDatacustomerAddress.push(res.data.data);
              hideModal("kt_modal_order_type_item");
            }
          })
          .catch(() => {
            this.CustomerAddressErrors = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    async deleteCustomerAddress(i) {
      this.loading = true;
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.tableDatacustomerAddress[i].address +
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
              "site/customer/address/" + this.tableDatacustomerAddress[i].id
            ).then(() => {
              this.tableDatacustomerAddress.splice(i, 1);
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
