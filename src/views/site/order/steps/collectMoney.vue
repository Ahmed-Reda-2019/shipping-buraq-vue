<template>
  <div class="pb-10 pb-lg-15 mt-5">
    <!--begin::Title-->
    <h2 class="fw-bolder text-dark">
      {{ $t("collectMoneyFromResiver") }}
    </h2>
    <!--end::Title-->
    <!--begin::Notice-->
    <div class="row">
      <div class="mb-10 col-12 col-md-6">
        <!--begin::Label-->
        <label class="form-label fw-bolder fs-6 text-gray-700">{{
          $t("money")
          }}</label>
        <!--end::Label-->
        <!--begin::Select-->
        <input
            v-model="order.bussiness_collect_money"
            class="form-control form-control-solid"
        />
        <span
            v-if="Errors['bussiness_collect_money']"
            class="text-danger"
        >{{ Errors["bussiness_collect_money"][0] }}</span
        >

        <!--end::Select-->
      </div>
      <div class="mb-10 col-12 col-md-6">
        <!--begin::Label-->
        <label class="form-label fw-bolder fs-6 text-gray-700">{{
          $t("currency")
          }}</label>
        <!--end::Label-->
        <!--begin::Select-->
        <select
            v-model="order.bussiness_collect_money_currency"
            class="form-select form-select-solid"
        >
          <option
              v-for="(cu, iCu) in currencies"
              :key="iCu"
              :value="cu.symbol"
          >
            {{ cu.iso_code }} :
            {{ cu.symbol }}
          </option>
        </select>

        <span
            v-if="Errors['bussiness_collect_money_currency']"
            class="text-danger"
        >{{
            Errors["bussiness_collect_money_currency"][0]
          }}</span
        >

        <!--end::Select-->
      </div>
    </div>
    <div class="fv-row mb-10">
      <label
          class="form-check form-check-custom form-check-solid"
      >
        <input
            v-model="order.toc"
            class="form-check-input"
            type="checkbox"
        />
        <span class="form-check-label fw-bold text-gray-700 fs-6">
                        {{ $t("I_Agree") }} &
                        <a
                            class="ms-1 link-primary"
                            data-bs-target="#kt_modal_order_conditions"
                            data-bs-toggle="modal"
                        >{{ $t("Terms_and_conditions") }}</a
                        >.
                      </span>
      </label>
      <div class="fv-help-block text-danger">
                      <span v-if="Errors['toc']" class="text-danger">{{
                          Errors["toc"][0]
                        }}</span>
      </div>
    </div>

    <!--end::Notice-->
  </div>


</template>

<script>
export default {
  name: "collectMoney",
  props: ['payments', 'Errors', 'currencies'],

  computed: {
    order() {
      return this.$parent.order;
    }
  }

}
</script>