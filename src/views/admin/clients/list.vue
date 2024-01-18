<template>
  <div class="card bg-transparent">
    <div class="blockui-overlay bg-dark bg-opacity-25" v-if="loading">
      <span class="spinner-border text-primary"></span>
    </div>

    <div
      class="
        card-header
        border-0
        pt-6
        px-0
        justify-content-sm-between justify-content-center
      "
    >
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="/media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            v-model="filters.search"
            class="form-control form-control-solid w-250px ps-15"
            type="text"
            :placeholder="$t('Search')"
            @keyup="
              filters.page = 1;
              loadData();
            "
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar justify-content-center">
        <!--begin::Toolbar-->
        <button
          v-if="can('send-notification')"
          class="btn btn-warning btn-shadow font-weight-bold mx-2"
          data-bs-target="#kt_modal_notify_order"
          data-bs-toggle="modal"
        >
          <i class="fas fa-bell p-0"></i>
        </button>
        <notifyByPhone></notifyByPhone>
        <notifyByEmail></notifyByEmail>
        <button
          class="btn btn-primary ms-sm-1 my-sm-0 my-2"
          data-bs-target="#kt_modal_add_customer"
          data-bs-toggle="modal"
          type="button"
          @click="
            formData = {};
            isEditCustomer = -1;
          "
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="/media/icons/duotone/Navigation/Plus.svg" />
          </span>
          {{ $t("addcustomer") }}
        </button>
      </div>
      <!--end::Card toolbar-->
    </div>

    <div v-if="customers.length == 0" class="px-0">
      <KTModalCard
        :button-text="$t('addcustomer')"
        :description="$t('noData')"
        :title="$t('Welcome')"
        image="/media/illustrations/sigma-1/n18.png"
        modal-id="kt_modal_add_customer"
      ></KTModalCard>
    </div>
    <div v-else class="card-body pt-0 px-0">
      <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
        <span class="spinner-border text-primary"></span>
      </div>

      <div class="row g-4">
        <!--begin::Col-->
        <div
          v-for="(item, i) in customers"
          :key="i"
          class="col-md-6 col-xl-4"
        >
          <!--begin::Card-->
          <a class="card border-hover-primary">
            <!--begin::Card header-->
            <div class="card-header border-0 pt-9">
              <!--begin::Card Title-->
              <div class="card-title m-0">
                <!--begin::Avatar-->
                <div class="symbol symbol-50px w-50px bg-light">
                  <img :src="item.logoUrl" alt="image" class="p-1" />
                </div>
                <!--end::Avatar-->
                <span class="mx-5">
                  ({{item.code}})
                  {{ item.name }}
                  <a
                    :href="'mailto:' + item.email"
                    class="text-muted fs-6 d-block"
                    >{{ item.email }}</a
                  >
                </span>
              </div>
              <!--end::Car Title-->
              <!--begin::Card toolbar-->
              <div class="card-toolbar">

                <a class="btn btn-sm btn-light-info"
                   data-bs-target="#kt_modal_balance_to_client"
                   data-bs-toggle="modal"
                   type="button"
                   @click="customer = item"
                >
                  {{$t('add Balance')}}
                </a>

                  <a class="btn btn-light-instagram mx-2">
                      ( {{ item.balance}} ) $
                  </a>
                <router-link
                  :to="{ name: 'customers-view', params: { customer: item.id } }"
                  class="btn btn-icon btn-light-success mt-0 mb-0 m-2 btn-sm"
                >
                  <i class="icon-xl fas far fa-eye"></i>
                </router-link>
                <a
                  v-if="can('delete-customer')"
                  class="btn btn-icon btn-light-danger mt-0 mb-0 m-2 btn-sm"
                  @click="deleteCustomer(i)"
                >
                  <i class="icon-xl fas fa-trash-alt"></i>
                </a>
              </div>
              <!--end::Card toolbar-->
            </div>
            <!--end:: Card header-->
            <!--begin:: Card body-->
            <div class="card-body p-9">
              <!--begin::Info-->
              <div class="d-flex flex-wrap mb-5 flex-column">
                <!--begin::Due-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    mb-3
                  "
                >
                  <div class="fw-bold text-gray-400">{{ $t("address") }}</div>
                  <div class="fs-6 text-gray-800 fw-bolder">
                    {{ item.address }}
                  </div>
                  <span class="badge badge-success" v-if="item.county">{{item.county.name}}</span>
                  <span class="badge badge-info" v-if="item.country">{{item.country.name}}</span>
                </div>
                <!--end::Due-->
                <!--begin::Budget-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    mb-3
                  "
                >
                  <div class="fw-bold text-gray-400">{{ $t("phone") }}</div>
                  <div class="fs-6 text-gray-800 fw-bolder">
                    {{ item.phone_1 }}
                  </div>
                </div>
                <!--end::Budget-->
              </div>
              <!--end::Info-->
            </div>
            <!--end:: Card body-->
          </a>
          <!--end::Card-->
        </div>
      </div>

      <pagnation
        v-model:pageNumber="filters.page"
        :page="customersPage"
        @change="loadData"
      ></pagnation>
    </div>
  </div>

  <div
    id="kt_modal_notify_order"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header py-7 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>{{ $t("notify Customers") }}</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <form
            id="kt_modal_offer_a_deal_form"
            class="mx-auto pt-15 pb-10"
            @submit.prevent="sendNotifyOrder"
          >
            <div class="w-100">
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fs-5 fw-bold mb-3"
                  >{{ $t("work") }}:</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <el-select
                  v-model="sendNotifyForm.work_ids"
                  class="w-100"
                  filterable
                  multiple
                >
                  <el-option :label="$t('all')" :value="0"></el-option>
                  <el-option
                    v-for="item in worksList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fs-5 fw-bold mb-3"
                  >{{ $t("type") }}:</label
                >
                <!--end::Label-->
                <!--begin::Input-->

                <select
                  v-model="sendNotifyForm.is_bussness"
                  class="form-select form-select-solid fw-bolder"
                  data-allow-clear="true"
                  data-dropdown-parent="#kt-toolbar-filter"
                  data-kt-customer-table-filter="month"
                  data-kt-select2="true"
                  data-placeholder="Select option"
                >
                  <option selected></option>
                  <option value="1">{{ $t("Bussness_Account") }}</option>
                  <option value="0">{{ $t("Personal_Account") }}</option>
                </select>
                <!--end::Input-->
              </div>
              <country
                :FormData="sendNotifyForm"
                :FormLErrors="sendNotifyFormError"
              ></country>
              <!--begin::Input group-->
              <div class="fv-row mb-8">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">{{ $t("Description") }}</label>
                <!--end::Label-->
                <!--begin::Label-->
                <editor
                  v-model="sendNotifyForm.text"
                  :init="{
                    height: 500,
                    menubar: true,
                    plugins: [
                      'advlist autolink lists link image charmap',
                      'searchreplace visualblocks code fullscreen',
                      'print preview anchor insertdatetime media',
                      'paste code help wordcount table',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic |         alignleft aligncenter alignright |         bullist numlist outdent indent | help',
                  }"
                  apiKey="s4jd5fu6curdhw172qan40vl1l7rg045sh7ax538441tzswa"
                >
                </editor>

                <!--end::Label-->
              </div>
              <span v-if="sendNotifyFormError['text']" class="text-danger">{{
                sendNotifyFormError["text"][0]
              }}</span>

              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-15">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack">
                  <!--begin::Label-->
                  <div class="me-5">
                    <label class="required fs-6 fw-bold">
                      {{ $t("Notifications Type") }}
                    </label>
                    <div class="fs-7 fw-bold text-muted"></div>
                  </div>
                  <!--end::Label-->
                  <!--begin::Checkboxes-->
                  <div class="d-flex">
                    <!--begin::Checkbox-->
                    <label
                      class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                        v-model="sendNotifyForm.types"
                        class="form-check-input h-20px w-20px"
                        type="checkbox"
                        value="email"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("email")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Checkbox-->
                    <label
                      class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                        v-model="sendNotifyForm.types"
                        class="form-check-input h-20px w-20px"
                        type="checkbox"
                        value="sms"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("SMS")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <!--end::Checkbox-->

                    <!--begin::Checkbox-->
                    <label
                      class="
                        form-check form-check-custom form-check-solid
                        me-10
                      "
                    >
                      <!--begin::Input-->
                      <input
                        v-model="sendNotifyForm.types"
                        class="form-check-input h-20px w-20px"
                        type="checkbox"
                        value="whatsApp"
                      />
                      <!--end::Input-->
                      <!--begin::Label-->
                      <span class="form-check-label fw-bold">{{
                        $t("whatsapp")
                      }}</span>
                      <!--end::Label-->
                    </label>
                    <!--end::Checkbox-->
                  </div>

                  <!--end::Checkboxes-->
                </div>
                <span v-if="sendNotifyFormError['type']" class="text-danger">{{
                  sendNotifyFormError["type"][0]
                }}</span>
                <!--begin::Wrapper-->
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-light me-3" data-bs-dismiss="modal">
                {{ $t("discard") }}
              </button>
              <button
                :data-kt-indicator="loading ? 'on' : null"
                :disabled="loading"
                class="btn btn-primary"
                type="submit"
              >
                <span class="indicator-label">{{ $t("submit") }}</span>
                <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
          </form>
        </div>
        <!--begin::Modal body-->
      </div>
    </div>
  </div>

  <div
    id="kt_modal_add_customer"
    ref="addCustomerModalRef"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-950px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_add_customer_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 v-if="isEditCustomer > -1" class="fw-bolder">
            {{ $t("editCustomer") }}
          </h2>
          <h2 v-else class="fw-bolder">{{ $t("addCustomer") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_customer_close"
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
        <client-form
          :formData="formData"
          :formErrorProp="formDataErroes"
          @submitForm="submitformData"
        ></client-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
  <div
    id="kt_modal_balance_to_client"
    class="modal fade"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t("Add balance To Customer") }} {{customer.name}}</h5>

          <!--begin::Close-->
          <div
            aria-label="Close"
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-2x"></span>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">

          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold form-label mb-2">{{
                $t("amount")
              }}($)</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
              v-model="charageForm.amount"
              class="form-control form-control-solid"
              type="text"
            />
            <!--end::Input-->
          </div>
          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="required fs-6 fw-bold form-label mb-2">{{
                $t("reference")
              }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
              v-model="charageForm.reference"
              class="form-control form-control-solid"
              type="text"
            />
            <!--end::Input-->
          </div>


          <div class="fv-row mb-7">
            <!--begin::Label-->
            <label class="fs-6 fw-bold mb-2">{{ $t("Description") }}</label>
            <!--end::Label-->
            <!--begin::Label-->
            <textarea
              v-model="charageForm.note"
              :placeholder="$t('Enter Description')"
              class="form-control form-control-solid"
              name="details_description"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="modal-footer">

          <button class="btn btn-light" data-bs-dismiss="modal" type="button">
            {{ $t("close") }}
          </button>
          <button
            :data-kt-indicator="loading ? 'on' : null"
            :disabled="loading"
            class="btn btn-primary"
            @click="charageClirnt"
          >
            <span class="indicator-label">{{ $t("submit") }}</span>
            <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import { useI18n } from "vue-i18n";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import JwtService from "@/core/services/JwtService";
import KTModalCard from "@/components/cards/Card.vue";
import ClientForm from "@/views/admin/clients/ClientForm.vue";
import Country from "@/views/admin/locations/county.vue";
import { default as notifyByPhone } from "@/views/admin/notify/notifyByPhone.vue";
import { default as notifyByEmail } from "@/views/admin/notify/notifyByEmail.vue";
import Pagnation from "@/components/pagnation.vue";
import Progressbar from "@/components/progressbar.vue";
import Editor from "@tinymce/tinymce-vue";
import useApi from "@/composables/api";

export default defineComponent({
  name: "customers-listing",
  components: {
    notifyByPhone,
    notifyByEmail,
    // Progressbar,
    Pagnation,
    Country,
    ClientForm,
    KTModalCard,
    editor: Editor,
  },
  data() {
    return {
      baseurl: ApiService.BaseURL,
      customers: [],
      customer:{},
      search: "",
      formData: {},
      formDataErroes: {},
      isEditCustomer: -1,
      loading: true,
      filterForm: {},
      customersPage: {},
      filters: {
        search: "",
        page: 1,
        work_id: null,
      },
      worksList: [],
      sendNotifyForm: {
        types: [],
      },
      sendNotifyFormError: [],
      files: {},
      charageForm:{},
    };
  },
  created() {
    this.loadData();
  },
  mounted() {
    setCurrentPageBreadcrumbs(this.$t("customers"), [this.$t("cp")]);
  },
  methods: {
    async loadData(page = 0) {
      if (page || page > 0) this.filters["page"] = page;
      await ApiService.query("admin/customers", this.filters)
        .then((res) => {
          this.customers = res.data.data;
          this.customersPage = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    openCustomerModelNew() {
      this.isEditCustomer = -1;
      this.formData = {};
    },
    openCustomerModelEdit(i) {
      this.isEditCustomer = i;
      this.formData = this.customers[i];
    },
    async submitformData() {
      this.loading = true;
      this.formDataErroes = [];
      if (this.isEditCustomer > -1) {
        await ApiService.put(
          "admin/customers/" + this.customers[this.isEditCustomer]["id"],
          this.formData
        )
          .then((res) => {
            hideModal("kt_modal_add_customer");
            this.$toast.success(this.$t("messages.success"));
            this.customers[this.isEditCustomer] = res.data.data;
          })
          .catch(() => {
            this.formDataErroes = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        await ApiService.post("admin/customers", this.formData)
          .then((res) => {
            if (res.data.data) {
              this.$toast.success(this.$t("messages.success"));
              this.customers.push(res.data.data);
              hideModal("kt_modal_add_customer");
            }
          })
          .catch(() => {
            this.formDataErroes = ApiService.errors;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    async deleteCustomer(i) {
      Swal.fire({
        title:
          this.$t("messages.areSureDeleted") +
          " ? ( " +
          this.customers[i]["name"] +
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
          ApiService.delete("admin/customers/" + this.customers[i]["id"]).then(
            () => {
              this.customers.splice(i, 1);
              Swal.fire(
                this.$t("messages.delteted"),
                this.$t("messages.hasBeenDeleted"),
                "success"
              );
            }
          );
        }
      });
    },
    can(p) {
      return JwtService.can(p);
    },
    async sendNotifyOrder() {
      this.loading = true;
      this.sendNotifyFormError = [];
      // const formData = new FormData();
      //
      // Object.keys(this.sendNotifyForm).forEach((value, key) => {
      //   formData.append(value, this.sendNotifyForm[value]);
      // });
      // Object.keys(this.files).forEach((value, key) => {
      //   if (this.files[value]) formData.append(value, this.files[value]);
      // });

      await ApiService.post("admin/customers/sendNotify", this.sendNotifyForm)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.sendNotifyForm = { types: [] };
          hideModal("kt_modal_notify_order");
        })
        .catch(() => {
          this.sendNotifyFormError = ApiService.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    percentageAccount(item) {
      var length = Object.keys(item).length;
      var countFileds = 0;
      Object.keys(item).forEach((value) => {
        if (item[value]) countFileds++;
      });
      return ((countFileds / length) * 100).toFixed(2);
    },

    async charageClirnt() {
        this.loading = true;
        await useApi().requestPut("admin/customers/" + this.customer.id+'/charge/balance' ,this.charageForm , (res)=>{
            this.customer.balance = res.data.balance;
            hideModal('kt_modal_balance_to_client');
        });
        this.loading = false;
      },

  },
});
</script>
