<template>
  <div v-if="tableCustomerServices.length == 0">
    <KTModalCard
        :button-text="$t('addservicesPrices')"
        :description="$t('noData')"
        :title="$t('servicesPricesForCustomer')"
        image="/media/illustrations/sigma-1/n18.png"
        modal-id="kt_modal_services_customer_prices"
    ></KTModalCard>
  </div>
  <div v-else class="card card-flush pt-3 mb-5 mb-xl-10 w-100">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bolder">{{ $t("servicesPricesForCustomer") }}</h2>
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <a
            class="btn btn-light-primary"
            data-bs-target="#kt_modal_services_customer_prices"
            data-bs-toggle="modal"
            @click="openModelservicesPricesNew()"
        >
          {{ $t("addservicesPrices") }}
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
            <th class="min-w-150px">{{ $t("customer") }}</th>
            <th class="min-w-150px">{{ $t("from") }}</th>
            <th class="min-w-125px">{{ $t("to") }}</th>
            <th class="min-w-125px">{{ $t("price") }}</th>
            <th class="text-end min-w-70px">{{ $t("actions") }}</th>
          </tr>
          <!--end::Table row-->
          </thead>
          <!--end::Table head-->
          <!--begin::Table body-->
          <tbody class="fw-bold text-gray-800">
          <tr v-for="(item, i) in tableCustomerServices" :key="i">
            <td>
              <label v-if="item.customer.name" class="w-150px">
                {{ item.customer.name }}</label
              >
            </td>
            <td>
              <label>
                {{ item.fromArea }}
              </label>
            </td>
            <td>
              <label>
                {{ item.toArea }}
              </label>
            </td>
            <td>
              <label class="w-150px">{{ item.price_business }}</label>
            </td>

            <td class="text-end">
              <!--begin::Action-->
              <a
                  class="btn btn-icon btn-light-primary mt-0 mb-0 m-2"
                  data-bs-target="#kt_modal_services_customer_prices"
                  data-bs-toggle="modal"
                  @click="openModelservicesPricesEdit(i)"
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
                      </g>
                    </svg>
                  </span>
              </a>
              <a
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2"
                  @click="deleteservicesPrices(i)"
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

  <div
      id="kt_modal_services_customer_prices"
      ref="servicesPricesformModelRef"
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
          <h2 v-if="isEditservicesPrices > -1" class="fw-bolder">
            {{ $t("editservicesPrices") }}
          </h2>
          <h2 v-else class="fw-bolder">{{ $t("addservicesPrices") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
              id="kt_modal_services_customer_prices_close"
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
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fw-bolder fs-6 text-gray-700">{{
                  $t("customer")
                  }}</label>
                <!--end::Label-->
                <!--begin::Select-->
                <el-select
                    v-model="servicesPricesForm.customer_id"
                    class="w-100"
                    filterable
                >
                  <el-option
                      v-for="customer in customerList"
                      :key="customer.id"
                      :label="customer.name"
                      :value="customer.id"
                  >
                    {{ customer.name }}-{{ customer.phone }} -{{
                    customer.email
                    }}
                  </el-option>
                </el-select>

                <!--end::Select-->
              </div>

              <div class="row">
                <div class="col-6">
                  <SArea
                      ref="AreaDataSender"
                      :FormData="servicesPricesForm"
                      :FormLErrors="servicesPricesErrors"
                      :mode="1"
                      key_area="from_area_id"
                      key_country="country_id"
                      key_county="fromCounty_id"
                      @change="setLocationData"
                  />
                </div>
                <div class="col-6">
                  <RArea
                      ref="AreaDataSender"
                      :FormData="servicesPricesForm"
                      :FormLErrors="servicesPricesErrors"
                      :mode="1"
                      key_area="to_area_id"
                      key_country="tocountry_id"
                      key_county="toCounty_id"
                      @change="setLocationData"
                  />
                </div>
              </div>

              <div class="mb-10">
                <label class="form-label fw-bolder fs-6 text-gray-700">{{
                  $t("price_business")
                  }}</label>
                <el-form-item prop="name">
                  <el-input
                      v-model="servicesPricesForm.price_business"
                      step=".01"
                      type="number"
                  />
                </el-form-item>
                <span
                    v-if="servicesPricesErrors['price_business']"
                    class="text-danger"
                >{{ servicesPricesErrors["price_business"][0] }}</span
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
                :data-kt-indicator="loading ? 'on' : null" :disabled="loading"
                class="btn btn-lg btn-primary"
                type="submit"
            >
              <span class="indicator-label">
                {{ $t("submit") }}
                <span class="svg-icon svg-icon-3 ms-2 me-0 arrow">
                  <inline-svg src="/media/icons/duotune/arrows/arr064.svg"/>
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
</template>

<script>
import {defineComponent} from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

import ApiService from "@/core/services/ApiService";
import {hideModal} from "@/core/helpers/dom";
import {useI18n} from "vue-i18n";
import KTModalCard from "@/components/cards/Card.vue";
import {default as SArea} from "@/views/admin/locations/area.vue";
import {default as RArea} from "@/views/admin/locations/area.vue";

export default defineComponent({
  name: "serviceCustomer",
  components: {
    KTModalCard,
    SArea,
    RArea,
  },
  props: [
    "tableCustomerServices",
    "customerList",
    "customerIdsInService",
    "allAreas",
    "allCounties",
    "allCountries",
  ],
  data() {
    return {
      LocalI18n: useI18n(),
      servicesPricesForm: {},
      isEditservicesPrices: -1,
      servicesPricesErrors: [],
      loading: false,
    };
  },
  methods: {
    openModelservicesPricesNew() {
      this.isEditservicesPrices = -1;
      this.servicesPricesForm = {};
      this.servicesPricesErrors = [];
    },
    openModelservicesPricesEdit(i) {
      this.isEditservicesPrices = i;
      this.servicesPricesForm = this.$parent.tableCustomerServices[i];
    },
    async submitModelForm() {
      if (
          !this.servicesPricesForm.customer_id ||
          this.servicesPricesForm.customer_id < 1
      ) {
        this.$toast.error(this.$t("messages.complateData"));
        return;
      }
      this.loading = true;
      this.servicesPricesErrors = [];
      this.servicesPricesForm.service_id = this.$parent.ServiceId;
      this.servicesPricesForm.price_customer =
          this.servicesPricesForm.price_business;

      if (this.isEditservicesPrices > -1) {
        await ApiService.put(
            "admin/servicep-prices/" +
            this.$parent.tableCustomerServices[this.isEditservicesPrices].id,
            this.servicesPricesForm
        )
            .then((res) => {
              this.servicesPricesErrors = [];
              hideModal("kt_modal_services_customer_prices");
              this.$toast.success(this.$t("messages.success"));
              this.$parent.tableCustomerServices[this.isEditservicesPrices] =
                  res.data.data;
              this.servicesPricesForm = {};
            })
            .catch((error) => {
              this.servicesPricesErrors = ApiService.errors;
            });
      } else {
        await ApiService.post("admin/servicep-prices", this.servicesPricesForm)
            .then((res) => {
              this.servicesPricesErrors = [];
              if (res.data.data) {
                hideModal("kt_modal_services_customer_prices");
                this.servicesPricesForm = {};
                this.$toast.success(this.$t("messages.success"));

                this.$parent.tableCustomerServices.push(res.data.data);
                this.$parent.customerIdsInService.push(res.data.data.customer.id);
              }
              this.loading = false;
            })
            .catch((error) => {
              this.servicesPricesErrors = ApiService.errors;
              this.loading = false;
            });
      }
    },

    async deleteservicesPrices(i) {
      Swal.fire({
        title: this.$t("messages.areSureDeleted") + " ? ",
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
              "admin/servicep-prices/" + this.$parent.tableCustomerServices[i].id
          ).then((res) => {
            let index = this.$parent.customerIdsInService.indexOf(
                this.$parent.tableCustomerServices[i].customer_id
            );
            if (index != -1) {
              this.$parent.customerIdsInService.splice(index, 1);
            }
            this.$parent.tableCustomerServices.splice(i, 1);

            Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
            );
          });
        }
      });
    },
    setLocationData(op) {
      Object.keys(op).forEach((value) => {
        this.servicesPricesForm[value] = op[value];
      });
    },
  },
});
</script>

<style scoped>
</style>