<template>

  <div v-if="!OrderFinshed" id="kt_content" class="content flex-row-fluid">
    <!--begin::Card-->
    <div class="card">
      <div
          id="kt_create_account_stepper"
          class="stepper stepper-links d-flex flex-column pt-15"
      >
        <!--begin::Nav-->
        <div class="stepper-nav mb-5">
          <div
              v-for="(step , Istep) in steps"
              v-show="current == Istep ? 'current' : ''" :key="Istep"
              class="stepper-item"
              data-kt-stepper-element="nav"
          >
            <h3 class="stepper-title">{{ $t(`step${Istep}H`) }}</h3>
          </div>

        </div>

        <form
            id="kt_create_account_form"
            class="mx-auto mw-1000px w-100 pt-15 pb-10"
            novalidate="novalidate"
        >
          <div
              :class="current == 1 ? 'current' : ''"
              class="m-3"
              data-kt-stepper-element="content"
          >
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--begin::Heading-->
              <!--end::Heading-->
              <!--begin::Input group-->
              <service :Errors="errors" :services="services"></service>
              <div
                  v-show="order.service_id && order.service_id > 0"
                  class="row select-location"
              >
                <div class="col-12 col-md-6">
                  <SCountry :Errors="errors"
                            :word="$t('from')"
                            key_form="sender_country_id"></SCountry>
                </div>
                <div class="col-12 col-md-6">
                  <RCountry :Errors="errors" :key_form="`receiver_country_id`"
                            :word="$t('to')"></RCountry>
                </div>
              </div>

              <!--end::Input group-->
            </div>
            <!--end::Wrapper-->
          </div>
          <div
              :class="current == 2 ? 'current' : ''"
              class="m-3"
              data-kt-stepper-element="content"
          >
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--begin::Heading-->
              <service-data :Errors="errors" :services="services" :types="types"></service-data>
              <orderDate :Errors="errors"></orderDate>
            </div>
            <!--end::Wrapper-->
          </div>

          <div
              :class="current == 3 ? 'current' : ''"
              class="m-3"
              data-kt-stepper-element="content"
          >
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--begin::Heading-->
              <div class="pb-10 pb-lg-15 d-none">
                <!--begin::Title-->
                <h2 class="fw-bolder d-flex align-items-center text-dark">
                  {{ $t("senderAddress") }}
                  <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      title="Billing is issued based on your selected account type"
                  ></i>
                </h2>
                <!--end::Title-->
              </div>
              <!--end::Heading-->
              <!--begin::Input group-->
              <div class="fv-row">
                <!--begin::Row-->
                <div class="col-12">
                  <div class="card-header p-0">
                    <!--begin::Title-->
                    <div class="card-title">
                      <!--begin::User-->
                      <div
                          class="
                              d-flex
                              justify-content-center
                              flex-column
                              me-3
                            "
                      >
                        <h2 class="fw-bolder text-dark">
                          {{ $t("senderAddress") }}
                        </h2>
                      </div>
                      <!--end::User-->
                    </div>
                    <!--end::Title-->
                    <!--begin::Card toolbar-->
                    <div
                        v-if="isAuth"
                        class="card-toolbar"
                        data-bs-target="#kt_modal_address_search"
                        data-bs-toggle="modal"
                        @click="sercheMode = 1"
                    >
                      <a class="btn btn-light-primary">
                        <i class="la la-plus"></i>
                        {{ $t("addFromSaved") }}
                      </a>
                    </div>
                  </div>
                  <SArea
                      ref="AreaDataSender"
                      :FormData="order"
                      :FormLErrors="errors"
                      :mode="1"
                      key_area="sender_area_id"
                      key_country="sender_country_id"
                      key_county="sender_county_id"
                      @change="fillOrder"
                  />
                  <div class="col-12">
                    <SenderData key="sender" :Errors="errors"></SenderData>
                  </div>

                </div>

                <!--end::Row-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Wrapper-->
          </div>
          <div
              :class="current == 4 ? 'current' : ''"
              class="m-3"
              data-kt-stepper-element="content"
          >
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--begin::Heading-->
              <div class="pb-10 pb-lg-15 d-none">
                <!--begin::Title-->
                <h2 class="fw-bolder d-flex align-items-center text-dark">
                  {{ $t("resiverAddress") }}
                  <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      title="Billing is issued based on your selected account type"
                  ></i>
                </h2>
                <!--end::Title-->
              </div>
              <!--end::Heading-->
              <!--begin::Input group-->
              <div class="fv-row">
                <!--begin::Row-->
                <div class="card-header p-0">
                  <!--begin::Title-->
                  <div class="card-title">
                    <!--begin::User-->
                    <div
                        class="
                              d-flex
                              justify-content-center
                              flex-column
                              me-3
                            "
                    >
                      <h2 class="fw-bolder text-dark">
                        {{ $t("senderAddress") }}
                      </h2>
                    </div>
                    <!--end::User-->
                  </div>
                  <!--end::Title-->
                  <!--begin::Card toolbar-->
                  <div
                      v-if="isAuth"
                      class="card-toolbar"
                      data-bs-target="#kt_modal_address_search"
                      data-bs-toggle="modal"
                      @click="sercheMode = 2"
                  >
                    <a class="btn btn-light-primary">
                      <i class="la la-plus"></i>
                      {{ $t("addFromSaved") }}
                    </a>
                  </div>

                </div>
                <div class="col-12">
                  <RArea
                      ref="AreaDataReceiver"
                      :FormData="order"
                      :FormLErrors="errors"
                      :mode="2"
                      key_area="receiver_area_id"
                      key_country="receiver_country_id"
                      key_county="receiver_county_id"
                      @change="fillOrder"
                  />
                  <div class="col-12">
                    <receiver-data :Errors="errors"></receiver-data>
                  </div>

                </div>

                <!--end::Row-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Wrapper-->
          </div>
          <div
              :class="current == 5 ? 'current' : ''"
              class="m-3"
              data-kt-stepper-element="content"
          >
            <!--begin::Wrapper-->
            <div class="w-100">

              <payments :Errors="errors" :payments="payments"></payments>
              <StripeVueCard
                  v-if="
                    order.show_card && order.show_card == 1 && order.price > 0
                  "
                  ref="stripeCard"
                  :order="order"
                  @paymentCreated="paymentCreated"
              ></StripeVueCard>
              <!--begin::Input group-->
              <collect-money :Errors="errors" :currencies="currencies"></collect-money>
            </div>
            <!--end::Wrapper-->
          </div>


          <div
              class="
          py-3
          px-4 px-md-15 px-lg-20
          card card-flush
          bg-white
          mb-0
          end-0
          position-fixed
          z-index-3
          bottom-0
          w-100
        "
              style="box-shadow: 0 0px 15px 0 #4c577d3d"
          >
            <div class="d-flex justify-content-between center">
              <button
                  v-show="current > 1"
                  class="btn btn-lg btn-light-primary me-3 d-inline-block"
                  type="button"
                  @click="previous()"
              >
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg-->
                <span class="svg-icon svg-icon-4 me-1 arrow d-sm-inline d-none">
              <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                    fill="black"
                    height="2"
                    opacity="0.5"
                    rx="1"
                    width="13"
                    x="6"
                    y="11"
                />
                <path
                    d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                    fill="black"
                />
              </svg>
            </span>
                <!--end::Svg Icon-->{{ $t("Back") }}
              </button>
              <div class="d-flex">
                <div class="position-relative me-3 w-100px">
                  <!--begin::Decrease control-->
                  <button
                      class="
                  btn btn-icon btn-active-color-gray-700
                  position-absolute
                  translate-middle-y
                  top-50
                  start-0
                "
                      type="button"
                      @click="changeServiceNumberBy(-1)"
                  >
                    <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                    <span class="svg-icon svg-icon-1">
                  <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                        fill="black"
                        height="20"
                        opacity="0.3"
                        rx="5"
                        width="20"
                        x="2"
                        y="2"
                    />
                    <rect
                        fill="black"
                        height="2"
                        rx="1"
                        width="12"
                        x="6.0104"
                        y="10.9247"
                    />
                  </svg>
                </span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--end::Decrease control-->
                  <!--begin::Input control-->
                  <input
                      :value="order.service_number"
                      class="
                  form-control form-control-solid
                  border-0
                  ps-14
                  h-100
                  fw-bolder
                "
                      readonly="readonly"
                      type="text"
                  />
                  <!--end::Input control-->
                  <!--begin::Increase control-->
                  <button
                      class="
                  btn btn-icon btn-active-color-gray-700
                  position-absolute
                  translate-middle-y
                  top-50
                  end-0
                "
                      type="button"
                      @click="changeServiceNumberBy(1)"
                  >
                    <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                    <span class="svg-icon svg-icon-1">
                  <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                        fill="black"
                        height="20"
                        opacity="0.3"
                        rx="5"
                        width="20"
                        x="2"
                        y="2"
                    />
                    <rect
                        fill="black"
                        height="2"
                        rx="1"
                        transform="rotate(-90 10.8891 17.8033)"
                        width="12"
                        x="10.8891"
                        y="17.8033"
                    />
                    <rect
                        fill="black"
                        height="2"
                        rx="1"
                        width="12"
                        x="6.01041"
                        y="10.9247"
                    />
                  </svg>
                </span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--end::Increase control-->
                </div>

                <button
                    :data-kt-indicator="loadingPrice ? 'on' : null"
                    :disabled="loadingPrice"
                    class="btn btn-lg btn-info me-3"
                >
              <span class="indicator-label">
                <template v-if="order.price && order.price > 0">
                {{
                    (
                        order.price *
                        currency_multiplier *
                        order.service_number
                    ).toFixed(2)
                  }}
                </template>
                <template>
                  0.00
                </template>
                {{ currency_symbol }}
              </span>

                  <span class="indicator-progress">
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
                </button>
                <button
                    v-show="current < 5"
                    class="btn btn-lg btn-primary"
                    type="button"
                    @click="next()"
                >
                  {{ $t("continue") }}
                  <span
                      class="svg-icon svg-icon-4 ms-1 me-0 arrow d-sm-inline d-none"
                  >
                <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                      fill="black"
                      height="2"
                      opacity="0.5"
                      rx="1"
                      transform="rotate(-180 18 13)"
                      width="13"
                      x="18"
                      y="13"
                  />
                  <path
                      d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                      fill="black"
                  />
                </svg>
              </span>
                </button>
                <button
                    v-show="current == 5"
                    :data-kt-indicator="loading ? 'on' : null"
                    :disabled="loading"
                    class="btn btn-lg btn-primary me-3"
                    type="button"
                    @click="onComplete"
                >
              <span class="indicator-label"
              >{{ $t("submit") }}
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                <span class="svg-icon svg-icon-3 ms-2 me-0 d-sm-inline d-none">
                  <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                        fill="black"
                        height="2"
                        opacity="0.5"
                        rx="1"
                        transform="rotate(-180 18 13)"
                        width="13"
                        x="18"
                        y="13"
                    />
                    <path
                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                        fill="black"
                    />
                  </svg>
                </span>
              </span>
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

        </form>


      </div>
    </div>
  </div>
  <Invoice
      v-else
      v-bind:invoiceData="invoice"
      v-bind:orderData="order"
      @close="makeNewOrder()"
  ></Invoice>

  <template v-if="isAuth">
    <search-address-model :addresses="custemerAddress" :divId="kt_modal_address_search"
                          :sercheMode="1"></search-address-model>
    <search-receiver-model v-if="isBusiness" :addresses="custemerresivers" :divId="kt_modal_resivers_search"
                           :sercheMode="1"></search-receiver-model>

    <div id="kt_modal_order_conditions" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("Terms_and_conditions") }}</h5>

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
            <p>{{ $t("Terms_and_conditions_body") }}</p>
          </div>

          <div class="modal-footer">
            <button
                class="btn btn-light"
                data-bs-dismiss="modal"
                type="button"
            >
              {{ $t("close") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>


</template>

<script>
import ApiService from "@/core/services/ApiService";
import store from "@/store";
import Service from "@/views/site/order/steps/service";
import {setCurrentPageBreadcrumbs} from "@/core/helpers/breadcrumb";
import JwtService from "@/core/services/JwtService";
import {default as SCountry} from "@/views/admin/locations/country";
import {default as RCountry} from "@/views/admin/locations/country";
import {mapGetters} from "vuex";
import {default as SArea} from "@/views/admin/locations/area.vue";
import {default as RArea} from "@/views/admin/locations/area.vue";
import "flatpickr/dist/flatpickr.css";
import StripeVueCard from "@/components/StripeVueCard";
import * as Yup from "yup";
import SearchAddressModel from "@/views/site/order/steps/searchAddressModel";
import SearchReceiverModel from "@/views/site/order/steps/searchReceiverModel";
import ServiceData from "@/views/site/order/steps/serviceData";
import orderDate from "@/views/site/order/steps/orderDate";
import {default as SenderData} from "@/views/site/order/steps/senderData";
import Payments from "@/views/site/order/steps/payments";
import CollectMoney from "@/views/site/order/steps/collectMoney";
import ReceiverData from "@/views/site/order/steps/receiverData";
import Invoice from "@/views/print/invoice.vue";


const createOrderSchema = [
  Yup.object({
    service_id: Yup.number().required(),
    receiver_country_id: Yup.number().required(),
    sender_country_id: Yup.number().required(),
  }),
  Yup.object({
    date: Yup.date().required(),
  }),
  Yup.object({
    sender_country_id: Yup.number().required(),
    sender_area_id: Yup.number().required(),
    sender_county_id: Yup.number().required(),


    sender_email: Yup.string().nullable().email(),
    sender_address: Yup.string().required().min(5),
    sender_name: Yup.string().required().min(5),
    sender_phone: Yup.string().required()
        .matches(/^(\+?\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
        .min(10)
    ,
    sender_floor: Yup.string().required().min(1),

  }),
  Yup.object({
    receiver_country_id: Yup.number().required(),
    receiver_area_id: Yup.number().required(),
    receiver_county_id: Yup.number().required(),

    receiver_email: Yup.string().nullable().email(),
    receiver_address: Yup.string().required().min(5),
    receiver_name: Yup.string().required().min(5),
    receiver_phone: Yup.string().required()
        // .regex(/^(\+\d\d?\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
        .min(10),
    receiver_floor: Yup.string().required().min(1),

  }),
  Yup.object({
    receiver_address: Yup.number().required(),
    toc: Yup.boolean().required(),
  }),

];


const today = new Date();
export default {
  name: "mob",
  components: {
    ReceiverData,
    CollectMoney,
    Payments,
    SenderData,
    ServiceData,
    SearchReceiverModel, Invoice,
    SearchAddressModel, StripeVueCard, Service, SCountry, RCountry, SArea, RArea, orderDate
  },
  data() {
    return {
      isAuth: false,
      custemerresivers: [],
      custemerAddress: [],
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "Y-m-d",
        altInput: true,
        dateFormat: "Y-m-d",
        minDate:
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            (today.getDate() + 1),
      },
      invoice: {},
      current: 1,
      steps: [
        'step1',// select service
        'step2',// Countries
        'step3',// services data and Date
        'step3',// services sender data and location
        'step3',// services reciver data and location
      ],
      OrderFinshed: false,
      loading: false,
      loadingPrice: false,
      order: {
        service_number: 1,
        items: [{}]
      },
      services: [],
      payments: [],
      countries: [],
      errors: [],
      types: [],
      servicedimintions: [],
      sercheMode: 1
    }
  },
  beforeCreate() {
    ApiService.get("site/GeneralData").then((res) => {
      this.services = res.data.services;
      this.payments = res.data.payments;
      this.currencies = res.data.currencies;
    });
  },
  created() {
    setCurrentPageBreadcrumbs(this.$t("Home"));
    this.isAuth = JwtService.isCustomer();
    if (this.isAuth) {
      let resiver = JwtService.getUserData() || "{}";
      this.order["sender_name"] = resiver.name;
      this.order["sender_email"] = resiver.email;
      this.order["sender_phone"] = resiver.phone;
    }
    if (this.isBusiness) {
      ApiService.get("site/customer/myData").then((res) => {
        this.custemerAddress = res.data.adderss;
        this.custemerresivers = res.data.recievers;
      });
    }

    this.rqMessage = [this.$t("messages.validation.required")];
    this.diffMessage = [this.$t("messages.validation.diff")];
  },
  methods: {
    async next() {
      if (await this.validat()) {
        this.current += 1;
      } else {
        this.$toast.error(this.$t('Please Complete The Data'));
      }
    },
    previous() {
      if (this.current > 1) this.current -= 1;
      else this.$toast.error(this.$t("You in First Step"));
    },
    async onComplete() {
      if (!await this.validat()) {
        return;
      }
      if (this.services[this.order.service_id]["require_items"] == 0) {
        this.order.items = [];
      }
      this.loading = true;
      if (
          this.payments[this.order["payment_id"]] &&
          this.payments[this.order["payment_id"]]["show_card"] == 1
      ) {
        await this.$refs.stripeCard.submit(this.order);
        if (
            !this.order["payment_data"] ||
            !this.order["payment_data"].paymentIntent_id
        ) {
          this.$toast.error(this.$t('Please check payment details'));
          this.loading = false;
          return;
        }
      }
      this.loading = false;
      this.sendOrrder();
    },
    async sendOrrder() {
      this.loading = true;
      this.order["shipping_currency"] = store.state.currency_iso_code;
      await ApiService.post("site/order/create", this.order)
          .then((res) => {
            if (res.data.data) {
              this.OrderFinshed = true;
              this.invoice = res.data.data;
            }
          }).catch(() => {
            this.orderErrors = ApiService.errors;
          });
      this.loading = false;

    },

    async validat() {
      let errors = {};
      if (createOrderSchema[this.current - 1]) {
        await createOrderSchema[this.current - 1].validate(this.order, {abortEarly: false})
            .then(function () {
              errors = {};
            }).catch(function (err) {
              err.inner.forEach((e) => {
                errors[e.path] = [e.message];
              });
            });
      }
      this.errors = errors;
      return Object.keys(this.errors).length == 0 ? true : false;
    },

    fillOrder(object) {
      Object.keys(object).forEach(value => {
        this.order[value] = object[value];
      })
      this.calcPrice()
    },


    async calcPrice() {
      this.loadingPrice = true;
      this.order.price = 0;
      await ApiService.post("site/order/price", this.order)
          .then((res) => {
            if (res.data.price) {
              this.order.price = res.data.price;
              this.order["showPrice"] =
                  (res.data.price * store.state.currency_multiplier).toFixed(2) +
                  " " +
                  store.state.currency_symbol;
            } else {
              this.order["showPrice"] = " 0 " + " " + store.state.currency_symbol;
              this.order.price = 0;
            }
            this.loadingPrice = false;
          })
          .catch(() => {
            this.loadingPrice = false;
          });
    },
    changeServiceNumberBy(count) {
      this.order.service_number += count;
      if (this.order.service_number < 1)
        this.order.service_number = 1;
    },
    paymentCreated(data) {
      this.order["payment_data"] = data;
    },
    setService(service) {
      //
      ApiService.get("site/get/types/" + service.id).then((res) => {
        this.types = res.data.serviceTypes;
        this.servicedimintions = res.data.servicedimintions;
        this.order.items = [{}];
      });
      this.order.height =
          service.height > 100
              ? parseFloat(String(service.height / 100)).toFixed(2)
              : service.height;
      this.order.length =
          service.length > 100
              ? parseFloat(String(service.length / 100)).toFixed(2)
              : service.length;
      this.order.width =
          service.width > 100
              ? parseFloat(String(service.width / 100)).toFixed(2)
              : service.width;
      this.order.weight =
          service.weight > 1000
              ? parseFloat(String(service.weight / 1000)).toFixed(2)
              : service.weight;
      if (
          service.height == 0 ||
          service.length == 0 ||
          service.width == 0 ||
          service.weight == 0
      )
        this.isCustemService = true;

      this.calcPrice();
    },
    makeNewOrder() {
      this.OrderFinshed = false;
      this.order = {
        items: [{}],
        price: 0,
        service_id: 0,
        length: -1,
        height: -1,
        weight: -1,
        width: -1,
        service_number: 1,
      };
      this.current = 1;
    },
  },
  computed: {
    ...mapGetters([
      "currency_iso_code",
      "currency_symbol",
      "currency_multiplier",
    ]),
    isBusiness() {
      return JwtService.isBusiness()
    }
  }
}
</script>
