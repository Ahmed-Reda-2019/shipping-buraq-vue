<template>
  <div v-if="status == false" class="mb-10">
    <form id="payment-form" @submit.prevent="submit">
      <!--begin::Input group-->
      <div class="d-flex flex-column mb-7 fv-row">
        <!--begin::Label-->
        <label class="fs-6 fw-bold form-label mb-2">{{
          $t("Card Number")
          }}</label>
        <!--end::Label-->
        <!--begin::Input wrapper-->
        <div class="position-relative">
          <!--begin::Input-->
          <div id="card-number" class="form-control form-control-solid"></div>
          <!--end::Input-->
          <!--begin::Card logos-->
          <div class="position-absolute translate-middle-y top-50 end-0 me-5">
            <img alt="" class="h-25px" src="/media/svg/card-logos/visa.svg"/>
            <img
                alt=""
                class="h-25px"
                src="/media/svg/card-logos/mastercard.svg"
            />
            <img
                alt=""
                class="h-25px"
                src="/media/svg/card-logos/american-express.svg"
            />
          </div>
          <!--end::Card logos-->
        </div>
        <!--end::Input wrapper-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mx-0 mb-10">
        <!--begin::Col-->
        <div class="col-md-8 mb-sm-0 mb-7 ps-0 pe-sm-3 pe-0 fv-row">
          <!--begin::Label-->
          <label class="fs-6 fw-bold form-label mb-2">{{
            $t("Expiration Date")
            }}</label>
          <!--end::Label-->
          <div id="card-expiry" class="form-control form-control-solid"></div>
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-md-4 pe-0 ps-sm-3 ps-0 fv-row">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
            <span>{{ $t("CVV") }}</span>
            <i
                class="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Enter a card CVV code"
            ></i>
          </label>
          <!--end::Label-->
          <!--begin::Input wrapper-->
          <div class="position-relative">
            <!--begin::Input-->
            <div
                id="card-cvc"
                class="form-control ps-1 form-control-solid"
            ></div>
            <!--end::Input-->
            <!--begin::CVV icon-->
            <div class="position-absolute translate-middle-y top-50 end-0 me-3">
              <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
              <span class="svg-icon svg-icon-2hx">
                <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 7H2V11H22V7Z" fill="black"/>
                  <path
                      d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                      fill="black"
                      opacity="0.3"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
            <!--end::CVV icon-->
          </div>
          <!--end::Input wrapper-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
    </form>
  </div>
  <div v-else class="mb-10">
    <!-- <p>id : {{ paymentIntent.id }}</p>
    <p>price : {{ price }}</p> -->
    <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex">
      <div
          class="swal2-success-circular-line-left"
          style="background-color: rgb(255, 255, 255)"
      ></div>
      <span class="swal2-success-line-tip"></span>
      <span class="swal2-success-line-long"></span>
      <div class="swal2-success-ring"></div>
      <div
          class="swal2-success-fix"
          style="background-color: rgb(255, 255, 255)"
      ></div>
      <div
          class="swal2-success-circular-line-right"
          style="background-color: rgb(255, 255, 255)"
      ></div>
    </div>
  </div>
  <div id="messages"></div>
</template>

<script>
import ApiService from "@/core/services/ApiService";

export default {
  name: "StripeVueCard",
  props: ["order"],
  data() {
    return {
      publishableKey:
          "pk_test_51KO0yGCa7Y8EtRSsaJcKQg5sq9hU6P285tH9HXTuetPX6XUmn280wRRfLgTw4ES6H2xbU6J5PFJo2hnZHqjgUI6A008ND8rWWi",
      loading: false,
      orderData: this.order,
      stripe: null,
      elsements: null,
      cardElement: null,
      price: null,
      status: false,
      paymentIntent: null,
      paymentData: null,
    };
  },
  beforeUnmount() {
    this.loading = false;
    this.stripe = null;
    this.elsements = null;
    this.cardElement = null;
    this.price = null;
    this.status = false;
    this.paymentIntent = null;
  },

  mounted() {

    this.createCard()
  },

  methods: {
    createCard() {
      this.loading = true;
      if (!this.key)
        return;
      this.stripe = window.Stripe(this.key);
      this.elsements = this.stripe.elements();
      var elementStyles = {
        base: {
          color: "#32325D",
          fontWeight: 500,
          fontFamily: "Source Code Pro, Consolas, Menlo, monospace",
          fontSize: "16px",
          fontSmoothing: "antialiased",

          "::placeholder": {
            color: "#CFD7DF",
          },
          ":-webkit-autofill": {
            color: "#e39f48",
          },
        },
        invalid: {
          color: "#E25950",

          "::placeholder": {
            color: "#FFCCA5",
          },
        },
      };

      var elementClasses = {
        focus: "focused",
        empty: "empty",
        invalid: "invalid",
      };

      var cardNumber = this.elsements.create("cardNumber", {
        style: elementStyles,
        classes: elementClasses,
      });
      cardNumber.mount("#card-number");

      var cardExpiry = this.elsements.create("cardExpiry", {
        style: elementStyles,
        classes: elementClasses,
      });
      cardExpiry.mount("#card-expiry");

      var cardCvc = this.elsements.create("cardCvc", {
        style: elementStyles,
        classes: elementClasses,
      });
      cardCvc.mount("#card-cvc");

      this.cardElement = {
        ...cardNumber,
        ...cardExpiry,
        ...cardCvc,
      };
      this.loading = false;
    },
    async submit(order = {}) {
      if (this.paymentData && this.paymentData.paymentIntent_id) {
        return Promise.resolve();
      }

      this.loading = true;
      let IsError = false;
      let clientSecret, price;
      await ApiService.post("site/order/price/stripe", order)
          .then((r) => {
            if (r.data && r.data.price && r.data.price > 0) {
              clientSecret = r.data.clientSecret;
              price = r.data.price;
              IsError = false;
            } else IsError = true;
          })
          .catch(() => {
            this.loading = false;
            this.status = false;
            IsError = true;
          });
      if (IsError) return new Promise.resolve();

      this.price = price;
      let card = this.cardElement;
      const {error: stripeError, paymentIntent} =
          await this.stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: this.order.sender_name,
                phone: this.order.sender_phone,
                address: {
                  line1: this.order.sender_address,
                  postal_code: this.order.sender_zip,
                },
              },
            },
            shipping: {
              name: this.order.receiver_name,
              phone: this.order.receiver_phone,
              address: {
                line1: this.order.receiver_address,
                postal_code: this.order.receiver_zip,
              },
            },
          });

      this.loading = false;
      if (stripeError) {
        this.status = false;
        return Promise.resolve();
      }

      if (paymentIntent.status != "succeeded") {
        this.status = false;
        return Promise.resolve();
      }
      this.status = true;
      this.paymentIntent = paymentIntent;
      this.paymentData = {
        type: "Stripe",
        paymentIntent_id: paymentIntent.id,
      };
      await this.delay(3000);
      this.$emit("paymentCreated", this.paymentData);
      return Promise.resolve();
    },
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
  },
  watch: {
    order(newVal) {
      // this.order = newVal;
      this.orderData = newVal;
    },
  },
  computed: {
    key() {
      if (this.$parent.order && this.$parent.order.payment_key)
        return this.$parent.order.payment_key;
      return null
    }
  }
};
</script>
