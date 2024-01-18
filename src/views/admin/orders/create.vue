<template>

  <div class="card">
    <div class="card-header">
      <div class="card-title">
        <h2>{{ $t("Create") }} {{ $t("orders") }}</h2>
      </div>
      <div class="card-toolbar"></div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-md-6 fv-row">
          <select-customer @result="getSender"></select-customer>

          <span v-if="orderErrors['customer_id']" class="text-danger">{{
              orderErrors["customer_id"][0]
            }}</span>
        </div>
        <div class="col-12 col-md-6 fv-row">
          <label class="required fs-6 fw-bold mb-2 d-block">
            {{ $t("Date") }}
          </label>
          <el-date-picker class="w-100" v-model="order.date" clearable />
          <span v-if="orderErrors[`date`]" class="text-danger">{{
              orderErrors[`date`][0]
            }}
              </span>
        </div>

        <div>
          <label class="required fs-6 fw-bold mb-2">
            {{ $t("Order Direction") }}
          </label>
          <div class="row w-100 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-around">
            <div class="" v-for="item in paths" :key="item.id">
              <label class="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6"
                     data-kt-button="true">
                <!--begin::Radio button-->
                <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                      <input class="form-check-input" type="radio" v-model="order.path_id" :value="item.id" @change="() => {
                        if (paths[order.path_id]) {
                          order.from_branch_id = paths[order.path_id].from_branch_id;
                          order.to_branch_id = paths[order.path_id].to_branch_id;
                          order.sender_county_id = paths[order.path_id].sender_county_id;
                          order.receiver_county_id = paths[order.path_id].receiver_county_id;
                          order.sender_country_id = paths[order.path_id].sender_country_id;
                          order.receiver_country_id = paths[order.path_id].receiver_country_id;
                        }
                      }">
                    </span>
                <!--end::Radio button-->
                <span class="ms-5">
                      <span class="fs-4 fw-bolder mb-1 d-block">{{ item.title }}</span>
                      <span class="fw-bold fs-7 ">
                        {{ item.title }}
                      </span>
                    </span>
              </label>
            </div>
            <div class="">
              <label class="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6 border-dark"
                     data-kt-button="true">
                <!--begin::Radio button-->
                <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                      <input class="form-check-input" type="radio" v-model="order.path_id" :value="0">
                    </span>
                <!--end::Radio button-->
                <span class="ms-5">
                      <span class="fs-4 fw-bolder mb-1 d-block">{{ $t('custom') }}</span>
                      <span class="fw-bold fs-7 ">{{$t('select')}}</span>
                    </span>
              </label>
            </div>
          </div>
          <span v-if="orderErrors[`path_id`]" class="text-danger">
                {{ orderErrors[`path_id`][0] }}
              </span>

        </div>


        <template v-if="order.path_id == 0">
          <div class="col-12 col-md-6 ">
            <label>
              {{ $t('from Address') }}
            </label>
            <SArea ref="SenderAddress" :FormData="order" :FormLErrors="orderErrors" :mode="1"
                   key_country="sender_country_id" key_country_ob="sender_country" key_county="sender_county_id"
                   @change="setLocationDataSender" />
          </div>
          <div class="col-12 col-md-6 ">
            <label>
              {{ $t('to Address') }}
            </label>
            <RArea ref="ReceiverAddress" :FormData="order" :FormLErrors="orderErrors" :mode="1"
                   key_country="receiver_country_id" key_country_ob="receiver_country" key_county="receiver_county_id"
                   @change="setLocationDataResiver" />
          </div>
        </template>
        <template v-else>

              <span v-if="orderErrors[`sender_county_id`]" class="text-danger">
                {{ orderErrors[`sender_county_id`][0] }}
              </span>
          <span v-if="orderErrors[`receiver_country_id`]" class="text-danger">
                {{ orderErrors[`receiver_country_id`][0] }}
              </span>
        </template>
      </div>

      <div class="row">
        <div class="card-header d-flex justify-content-between h-50px px-0">
          <h2> {{ $t('add Your prices Lists') }}</h2>
          <div class="card-toolbar">
            <a class="btn btn-sm btn-secondary" @click="addInvoice">
              {{ $t('add prices List') }}
              <i class="fa fa-plus-circle"></i>
            </a>
          </div>
        </div>

        <div class="my-2 border-dashed border border-dark account-box"
             v-for="(invoice, i) in order.invoices" :key="i">
          <legend class="" style="border: 1px black solid;margin-left: 1em; padding: 0.2em 0.8em ">
            <span class="me-10">{{ i + 1 }}</span>

            <a class="btn px-3 btn-icon btn-sm btn-danger" @click="order.invoices.splice(i, 1)">
              <i class="la la-close fs-3 pe-0"></i>
            </a>
          </legend>

          <div class="row row-cols-1 row-cols-sm-2">
            <invoice-data-prev

              :value="invoice" :index="i"
              :currencies="allCurrencies" :errors="orderErrors"
              @update="(data)=>{
                      invoice = data
                  }"
            />


          </div>
        </div>

      </div>
      <div class="order-data mt-4">
        <receiver-address v-model:name="order.receiver.name" v-model:email="order.receiver.email"
                          v-model:phone_1="order.receiver.phone_1" v-model:phone_2="order.receiver.phone_2" :errors="orderErrors" />

        <div class="fv-row mb-2 w-100">
          <label class="fs-6 fw-bold mb-2">
            {{ $t("Extra charge") }}
          </label>
          <div class="row ">
            <div class="col-12 col-md-6 ">
              <input class="form-control " type="number" v-model="order.shipping_cost" step=".5" />
              <span v-if="orderErrors[`shipping_cost`]" class="text-danger">
                    {{ orderErrors[`shipping_cost`][0] }}
                  </span>

            </div>
            <div class="col-12 col-md-6 ">
              <el-select v-model="order.shipping_currency_iso">
                <el-option v-for="(item, i) in allCurrencies" :key="item.id"
                           :label="item.iso_code + '( ' + item.multiplier + ')'" :value="i" />
              </el-select>
            </div>
          </div>
        </div>

      </div>

      <div class="d-flex text-end">
        <button :data-kt-indicator="loading == true ? 'on' : null" :disabled="loading == true"
                class="btn btn-lg btn-primary me-3" data-kt-stepper-action="submit" type="button" @click="onComplete">
                <span class="indicator-label">{{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0 d-sm-inline d-none arrow">
                    <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
          <span class="indicator-progress">
                  {{ $t("PleaseWait") }}
                  <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
        </button>
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>

<script>
import { defineComponent } from "vue";
import SelectCustomer from "@/views/admin/clients/selectCustomer";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { default as SArea } from "@/views/admin/locations/area.vue";
import { default as RArea } from "@/views/admin/locations/area.vue";
import useOrders from "@/composables/order";
import InvoiceDataPrev from "@/views/admin/orders/form/invoiceDataPrev.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

// import { default as ResiverCustomer } from "@/views/admin/clients/selectCustomer.vue";

// shipping_currency_iso shipping_cost
// accountant_approved
// invoice_count

export default defineComponent({
  name: "order-modal",
  components: {
    // RemoteSelect,
    InvoiceDataPrev,
    // InvoicePriceInputs,
    // InvoicePriceInputs,
    // InvoiceItem,
    // ReceiverAddress,
    SelectCustomer,
    // Index,
    RArea,
    SArea,
    // ResiverCustomer,
  },
  data() {
    return {
      inputs: [
        {
          label: "company name",
          type: "text",
          labelClass: "",
          Class: "",
          required: true,
          key: "company_name"
        },
        {
          label: "company name official",
          type: "text",
          labelClass: "",
          Class: "",
          required: true,
          key: "company_name_off"
        },
        {
          label: "company name",
          type: "text",
          labelClass: "",
          Class: "",
          required: true,
          key: "company_name"
        },
      ],
      price: 0,
      order: {
        invoices: [
          {
            company: {},
            items: [],
            vat: 0,
            p_currency_key:"usd",
            p_currency_id:1,
          },
        ],
        receiver: {},
        shipping_cost:0,
        shipping_currency_iso:"usd"
      },
      errors: [],
      currencies: [],
      countries: [],
      def_country: 181,
      apiOrder: useOrders(),
      loading: false,
      paths: {}
    };
  },
  beforeCreate() {
    this.isAuth = JwtService.isCustomer();
    ApiService.get("site/GeneralData").then((res) => {
      this.countries = res.data.country;
      // this.types = res.data.types;
      // this.payments = res.data.payments;
      this.currencies = res.data.currencies;
      this.paths = res.data.paths;
      this.order.sender_country_id = res.data.def_country;
      this.order.receiver_country_id = res.data.def_country;
    });
  },
  methods: {
    addInvoice() {
      this.order.invoices.push({
        company: {},
        items: [],
        vat: 0,
        p_currency_key:"usd",
        p_currency_id:1,
      });
    },
    imageToInvoice(key, i) {
      console.log(key)
      console.log(this.$refs[key].files)
      console.log(i)
      const file = this.$refs[key].files[0];
      this.order.invoices[i].file = file;
      this.order.invoices[i].url = URL.createObjectURL(file);
    },

    async onComplete() {
      this.loading = true;
      console.log('loading' + true);
      var res = await this.apiOrder.store(this.order, (res) => {
        console.log(res, res.data);
        Swal.fire({
          title: this.$t("messages.create now Order ?"),
          text: "",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: this.$t("Go to order"),
          confirmButtonText: this.$t("yes"),
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("Shoud rest")
            console.log(this.order)
            this.order = {
              invoices: [
                {
                  company: {},
                  items: [],
                  vat: 0
                }
              ],
              receiver: {}
            };
            console.log(this.order)
            this.$forceUpdate();
            this.$nextTick()
          }else {
            this.$router.push({name:"order-view",params:{Id:res.data.data.code}})
          }
        });
      }, false)
      this.loading = false;
      console.log('loading' + false);
    },
    changeInvoiceCurrency(i) {
      var invoice = this.order.invoices[i];
      if (invoice.p_currency) {
        invoice.p_currency_id = invoice.p_currency.id;
        invoice.p_multiplier = invoice.p_currency.multiplier;
      } else {
        invoice.p_currency_id = 0;
        invoice.p_multiplier = 1;
      }
    },
    setLocationDataSender(op) {
      this.order["sender_county_id"] = op.sender_county_id;
      this.order["sender_country_id"] = op.sender_country_id;
    },
    setLocationDataResiver(op) {
      this.order["receiver_county_id"] = op.receiver_county_id;
      this.order["receiver_country_id"] = op.receiver_country_id;
    },

    getSender(cu) {
      console.log(cu);
      this.order.customer_id = cu.id;
      this.order.receiver.name = cu.name;
      this.order.receiver.phone_1 = cu.phone;
      this.order.receiver.email = cu.email;
      // this.order.customer_id = cu.id;

      this.customer_name = cu.name;
      // if (cu.id && cu.id > 0) {
      //   let ob = {};
      //   ob["sender_id"] = cu.id;
      //   ob["sender_name"] = cu.name;
      //   ob["sender_email"] = cu.email;
      //   ob["temp_sender_phone"] = cu.phone;
      //   ob["sender_address"] = cu.address;
      //   ob["sender_zip"] = cu.zip;
      //   ob["sender_floor"] = cu.floor;
      //   if (cu.country_id) {
      //     ob["sender_country_id"] = cu.country_id;
      //     ob["sender_county_id"] = cu.county_id;
      //   }
      //   this.$refs.createOrder.$refs.AreaDataSender.setAddress({
      //     country_id: cu.country_id,
      //     county_id: cu.county_id,
      //   });
      //   this.sendData(ob);
      // }
    },
    getResiver(cu) {
      this.order.client_id = cu.id;
      if (cu.id && cu.id > 0) {
        let ob = {};
        ob["receiver_id"] = cu.id;
        ob["receiver_name"] = cu.name;
        ob["receiver_email"] = cu.email;
        ob["receiver_zip"] = cu.zip;
        ob["receiver_floor"] = cu.floor;
        ob["temp_receiver_phone"] = cu.phone;
        ob["receiver_address"] = cu.address;
        if (cu.country_id) {
          ob["receiver_country_id"] = cu.country_id;
          ob["receiver_county_id"] = cu.county_id;
        }
        this.$refs.createOrder.$refs.AreaDataReceiver.setAddress({
          country_id: cu.country_id,
          county_id: cu.county_id,
        });
        this.sendData(ob);
      }
    },
    sendData(ob) {

      this.$refs.createOrder.fillOrder(ob);
    },
  },
  computed: {
    orderErrors() {
      return this.apiOrder.errors; // this.$refs.createOrder.data().orderErrors;
    },
    orderErrorsss() {
      return ApiService.errors; // this.$refs.createOrder.data().orderErrors;
    },
    allCurrencies() {
      return this.currencies;
    }
  },
});
</script>
