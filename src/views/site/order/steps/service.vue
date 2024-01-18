<template>
  <div class="pb-10 pb-lg-15">
    <!--begin::Title-->
    <h2 class="fw-bolder d-flex align-items-center text-dark">
      {{ $t("chooseService") }}
      <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Billing is issued based on your selected account type"
      ></i>
    </h2>
    <!--end::Title-->
    <!--begin::Notice-->
    <div class="text-muted fw-bold fs-6">
      {{ $t("chooseServiceText") }}
    </div>
    <!--end::Notice-->
  </div>
  <div class="fv-row">
    <!--begin::Row-->
    <div class="row justify-content-around">
      <!--begin::Col-->
      <div
          v-for="service in services"
          :key="service.id"
          class="col-6 col-md-6 col-lg-4"
      >
        <!--begin::Option-->
        <input
            :id="'kt_service_type_' + service.id"
            v-model="order.service_id"
            :value="service.id"
            class="btn-check"
            type="radio"
            @change="change(service)"
        />
        <label :for="'kt_service_type_' + service.id"
               class="
                          btn btn-outline btn-outline-dashed btn-outline-default
                          p-7
                          d-flex
                          align-items-center
                          mb-10
                        "
        >
          <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
          <div
              class="service-icon-box me-1"
              v-html="service.icon"
          ></div>
          <!--end::Svg Icon-->
          <!--begin::Info-->
          <span class="d-block fw-bold text-start">
                          <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                              service.name
                            }}</span>
                          <span class="text-muted fw-bold fs-6">{{
                              service.text
                            }}</span>
                        </span>
          <!--end::Info-->
        </label>
        <!--end::Option-->
      </div>
      <span v-if="Errors && Errors['service_id']" class="text-danger">{{
          Errors['service_id'][0]
        }}</span>
      <!--end::Col-->
    </div>
    <!--end::Row-->
  </div>


</template>

<script>
export default {
  name: "service",
  props: ['services', 'Errors'],
  data() {
    return {
      // order:{}
    }
  },
  methods: {
    async change(service) {
      // await this.$parent.fillOrder(this.order);
      await this.$parent.setService(service);
      // this.$parent.calcPrice();
    }
  },
  computed: {
    order() {
      return this.$parent.order;
    }
  }

}
</script>