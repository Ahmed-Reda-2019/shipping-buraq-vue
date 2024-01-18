<template>

  <!--begin::Heading-->
  <div class="pb-10 pb-lg-15">
    <!--begin::Title-->
    <h2 class="fw-bolder text-dark">{{ $t("paymentOrdre") }}</h2>
    <!--end::Title-->
    <!--begin::Notice-->
    <div class="text-muted fw-bold fs-6">
      {{ $t("paymentOrderText") }}
    </div>
    <!--end::Notice-->
    <div class="row">
      <template v-for="(payment, i) in payments" :key="i">
        <div
            v-if="
                          payment.show_card == 0 ||
                          (order.price && order.price > 0)
                        "
            class="col-12 col-sm-6 col-md-4">
          <!--begin::Option-->
          <label
              class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            active
                            d-flex
                            text-start
                            p-6
                          "
              data-kt-button="true"
          >
            <!--begin::Radio-->
            <span
                class="
                              form-check
                              form-check-custom
                              form-check-solid
                              form-check-sm
                              align-items-start
                              mt-1
                            "
            >
                            <input
                                v-model="order.payment_id"
                                :value="payment.id"
                                class="form-check-input"
                                type="radio"
                                @click="order.show_card = payment.show_card"
                            />
                          </span>
            <!--end::Radio-->
            <!--begin::Info-->
            <span class="ms-5">
                            <span
                                class="fs-4 fw-bolder text-gray-800 mb-2 d-block"
                            >{{ payment.name }}</span
                            >
                            <span class="fw-bold fs-7 text-gray-600"></span>
                          </span>
            <!--end::Info-->
          </label>
          <!--end::Option-->
        </div>
      </template>
      <span
          v-if="Errors['payment_id']"
          class="text-danger"
      >{{ Errors["payment_id"][0] }}</span
      >
    </div>
  </div>
  <!--end::Heading-->


</template>

<script>
export default {
  name: "payments",
  props: ['payments', 'Errors'],

  computed: {
    order() {
      return this.$parent.order;
    }
  }

}
</script>