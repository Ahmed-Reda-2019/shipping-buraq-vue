<template>
  <form
      v-if="order && order.id"
      id="kt_modal_edit_Address_form"
      class="form"
      @submit.prevent="editOrderAddress()"
  >
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card-header p-0">
          <!--begin::Title-->
          <div class="card-title">
            <!--begin::User-->
            <div class="d-flex justify-content-center flex-column me-3">
              <h2 class="fw-bolder text-dark">
                {{ $t("senderData") }}
              </h2>
            </div>
            <!--end::User-->
          </div>
          <!--end::Title-->
          <!--begin::Card toolbar-->
        </div>

        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="form-label mb-3">{{ $t("senderName") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.sender_name"
              class="form-control form-control-lg form-control-solid"
              type="text"
          />
          <!--end::Input-->
        </div>

        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="form-label mb-3">{{ $t("senderEmail") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.sender_email"
              class="form-control form-control-lg form-control-solid"
              type="text"
          />
          <!--end::Input-->
        </div>
        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="form-label mb-3">{{ $t("senderPhone") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.sender_phone"
              class="form-control form-control-lg form-control-solid"
              type="text"
          />
          <!--end::Input-->
        </div>
        <!--begin::Input group-->
        <div class="d-flex flex-column mb-5 fv-row">
          <!--begin::Label-->
          <label class="fs-5 fw-bold mb-2">{{ $t("addressLine") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.sender_address"
              class="form-control form-control-solid"
              name="city"
          />
          <!--end::Input-->
          <span v-if="orderErrors['sender_address']" class="text-danger">{{
            orderErrors["sender_address"][0]
          }}</span>
        </div>

        <div class="d-flex flex-stack">
          <!--begin::Label-->
          <div class="me-5">
            <label class="fs-6 fw-bold form-label">{{
              $t("delivery_to_branch")
              }}</label>
          </div>
          <!--end::Label-->
          <!--begin::Switch-->
          <label
              class="form-check form-switch form-check-custom form-check-solid"
          >
            <input
                v-model="order.delivery_to_branch"
                class="form-check-input"
                type="checkbox"
            />
          </label>
          <!--end::Switch-->
        </div>

        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="row g-9 mb-5">
          <!--begin::Col-->
          <div class="col-md-6 fv-row">
            <!--begin::Label-->
            <label class="fs-5 fw-bold mb-2">{{ $t("floor") }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
                v-model="order.sender_floor"
                class="form-control form-control-solid"
            />
            <!--end::Input-->
            <span v-if="orderErrors['sender_floor']" class="text-danger">{{
              orderErrors["sender_floor"][0]
            }}</span>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div class="col-md-6 fv-row">
            <!--begin::Label-->
            <label class="fs-5 fw-bold mb-2"> {{ $t("zip") }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
                v-model="order.sender_zip"
                class="form-control form-control-solid"
            />
            <!--end::Input-->
          </div>
          <span v-if="orderErrors['sender_zip']" class="text-danger">{{
            orderErrors["sender_zip"][0]
          }}</span>

          <!--end::Col-->
        </div>
        <!--end::Input group-->
      </div>
      <div class="col-12 col-md-6">
        <div class="card-header p-0">
          <!--begin::Title-->
          <div class="card-title">
            <!--begin::User-->
            <div class="d-flex justify-content-center flex-column me-3">
              <h2 class="fw-bolder text-dark">
                {{ $t("receiverData") }}
              </h2>
            </div>
            <!--end::User-->
          </div>
          <!--end::Title-->
          <!--begin::Card toolbar-->
        </div>

        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="form-label mb-3">{{ $t("receiverName") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.receiver_name"
              class="form-control form-control-lg form-control-solid"
              type="text"
          />
          <!--end::Input-->
          <span v-if="orderErrors['receiver_name']" class="text-danger">{{
            orderErrors["receiver_name"][0]
          }}</span>
        </div>

        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="form-label mb-3"> {{ $t("receiverEmail") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.receiver_email"
              class="form-control form-control-lg form-control-solid"
              type="text"
          />
          <!--end::Input-->
          <span v-if="orderErrors['receiver_email']" class="text-danger">{{
            orderErrors["receiver_email"][0]
          }}</span>
        </div>
        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="form-label mb-3">{{ $t("receiverPhone") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.receiver_phone"
              class="form-control form-control-lg form-control-solid"
              type="text"
          />
          <!--end::Input-->
          <span v-if="orderErrors['receiver_phone']" class="text-danger">{{
            orderErrors["receiver_phone"][0]
          }}</span>
        </div>
        <!--begin::Input group-->
        <div class="d-flex flex-column mb-5 fv-row">
          <!--begin::Label-->
          <label class="fs-5 fw-bold mb-2">{{ $t("addressLine") }}</label>
          <!--end::Label-->
          <!--begin::Input-->
          <input
              v-model="order.receiver_address"
              class="form-control form-control-solid"
          />
          <span v-if="orderErrors['receiver_address']" class="text-danger">{{
            orderErrors["receiver_address"][0]
          }}</span>

          <!--end::Input-->
        </div>
        <div class="d-flex flex-stack">
          <!--begin::Label-->
          <div class="me-5">
            <label class="fs-6 fw-bold form-label">{{
              $t("receipt_from_branch")
              }}</label>
          </div>
          <!--end::Label-->
          <!--begin::Switch-->
          <label
              class="form-check form-switch form-check-custom form-check-solid"
          >
            <input
                v-model="order.receipt_from_branch"
                class="form-check-input"
                type="checkbox"
            />
          </label>
          <!--end::Switch-->
        </div>

        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="row g-9 mb-5">
          <!--begin::Col-->
          <div class="col-md-6 fv-row">
            <!--begin::Label-->
            <label class="fs-5 fw-bold mb-2">{{ $t("floor") }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
                v-model="order.receiver_floor"
                class="form-control form-control-solid"
            />
            <!--end::Input-->
            <span v-if="orderErrors['receiver_floor']" class="text-danger">{{
              orderErrors["receiver_floor"][0]
            }}</span>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div class="col-md-6 fv-row">
            <!--begin::Label-->
            <label class="fs-5 fw-bold mb-2">{{ $t("zip") }}</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input
                v-model="order.receiver_zip"
                class="form-control form-control-solid"
            />
            <!--end::Input-->
            <span v-if="orderErrors['receiver_zip']" class="text-danger">{{
              orderErrors["receiver_zip"][0]
            }}</span>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Input group-->
      </div>
    </div>

    <div class="text-center">
      <button class="btn btn-light me-3" data-bs-dismiss="modal" type="reset">
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
    <!--end::Actions-->
  </form>
</template>

<script>
import ApiService from "@/core/services/ApiService";

export default {
  name: "editAddressFrom",
  props: ["orderData", "editUrl"],
  data() {
    return {
      loading: false,
      order: null,
      orderErrors: [],
    };
  },
  methods: {
    editOrderAddress() {
      var formData = {
        sender_email: this.order.sender_email,
        sender_name: this.order.sender_name,
        sender_phone: this.order.sender_phone,
        sender_address: this.order.sender_address,
        sender_zip: this.order.sender_zip,
        sender_floor: this.order.sender_floor,
        delivery_to_branch: this.order.delivery_to_branch,

        receiver_address: this.order.receiver_address,
        receiver_email: this.order.receiver_email,
        receiver_floor: this.order.receiver_floor,
        receiver_name: this.order.receiver_name,
        receiver_phone: this.order.receiver_phone,
        receiver_zip: this.order.receiver_zip,
        receipt_from_branch: this.order.receipt_from_branch,
      };
      this.orderErrors = [];
      this.loading = true;
      ApiService.post(this.editUrl, formData)
          .then(() => {
            this.$toast.success(this.$t("messages.success"));
            this.loading = false;

            this.$emit("afterEdit", this.order);
          })
          .catch(() => {
            this.$toast.success(this.$t("messages.failed"));
            this.orderErrors = ApiService.errors;
            this.loading = false;
          });
    },
  },
  watch: {
    orderData(value) {
      this.order = value;
      this.$forceUpdate;
    },
    url(value) {
      this.url = value;
    },
  },
};
</script>
