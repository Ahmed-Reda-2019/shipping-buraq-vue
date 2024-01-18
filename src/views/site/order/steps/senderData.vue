<template>

  <div class="card-header p-0">
    <!--begin::Title-->
    <div class="card-title">
      <!--begin::User-->
      <div
          class="d-flex justify-content-center flex-column me-3"
      >
        <h2 class="fw-bolder text-dark">
          {{ $t(key+"Data") }}
        </h2>
      </div>

      <!--end::User-->
    </div>
    <!--end::Title-->
    <!--begin::Card toolbar-->
    <div
        v-if="isBusiness"
        class="card-toolbar"
        data-bs-target="#kt_modal_resivers_search"
        data-bs-toggle="modal"
        @click="sercheMode =  key == 'sender' ? 1 : 2"
    >
      <a class="btn btn-light-primary">
        <i class="la la-plus"></i>
        {{ $t("addFromSaved") }}
      </a>
    </div>
  </div>
  <div class="mb-10 fv-row">
    <!--begin::Label-->
    <label class="form-label mb-3">{{
      $t(key+"Name")
      }}</label>
    <!--end::Label-->
    <!--begin::Input-->
    <input
        v-model="order[key+'_name']"
        class="form-control form-control-lg form-control-solid"
        type="text"
    />
    <!--end::Input-->
  </div>
  <span v-if="Errors && Errors[key+'_name']" class="text-danger">{{
      Errors[key+'_name'][0]
    }}</span>

  <div class="mb-10 fv-row">
    <!--begin::Label-->
    <label class="form-label mb-3">{{
      $t(key+"Email")
      }}</label>
    <!--end::Label-->
    <!--begin::Input-->
    <input
        v-model="order[key+'_email']"
        class="form-control form-control-lg form-control-solid"
        type="text"
    />
    <!--end::Input-->
  </div>
  <span v-if="Errors && Errors[key+'_email']" class="text-danger">{{
      Errors[key+'_email'][0]
    }}</span>

  <div class="mb-10 fv-row">
    <!--begin::Label-->
    <label class="form-label mb-3">{{
      $t(key+"Phone")
      }}</label>
    <!--end::Label-->
    <!--begin::Input-->
    <input
        v-model="order[key+'_phone']"
        class="form-control form-control-lg form-control-solid"
        type="text"
    />
    <!--end::Input-->
  </div>
  <span v-if="Errors && Errors[key+'_phone']" class="text-danger">{{
      Errors[key+'_phone'][0]
    }}</span>

  <!--begin::Input group-->
  <div class="d-flex flex-column mb-5 fv-row">
    <!--begin::Label-->
    <label class="fs-5 fw-bold mb-2">{{
      $t("addressLine")
      }}</label>
    <!--end::Label-->
    <!--begin::Input-->
    <input
        v-model="order[key+'_address']"
        class="form-control form-control-solid"
        name="city"
    />
    <!--end::Input-->
    <span
        v-if="Errors[key+'_address']"
        class="text-danger"
    >{{ Errors[key+"_address"][0] }}</span
    >
  </div>

  <div class="d-flex flex-stack">
    <!--begin::Label-->
    <div class="me-5">
      <label class="fs-6 fw-bold form-label">
        {{
        key == 'sender' ?
        $t("delivery_to_branch") :
        $t("receipt_from_branch_text")
        }}
      </label>
      <div class="fs-7 fw-bold text-muted">
        {{ $t("delivery_to_branch_text") }}
      </div>
    </div>
    <!--end::Label-->
    <!--begin::Switch-->
    <label
        class="
                          form-check
                          form-switch
                          form-check-custom
                          form-check-solid
                        "
    >
      <input
          v-model="order[key == 'sender' ? 'delivery_to_branch' : 'receipt_from_branch']"
          class="form-check-input"
          type="checkbox"
          value="1"
      />
      <span class="form-check-label fw-bold text-muted">
        {{
          key == 'sender' ?
              $t("delivery_to_branch_text2") :
              $t("receipt_from_branch_text2")
        }}
      </span>
    </label>
    <!--end::Switch-->
  </div>

  <!--end::Input group-->
  <!--begin::Input group-->
  <div class="row g-9 mb-5">
    <!--begin::Col-->
    <div class="col-md-6 fv-row">
      <!--begin::Label-->
      <label class="fs-5 fw-bold mb-2">{{
        $t("floor")
        }}</label>
      <!--end::Label-->
      <!--begin::Input-->
      <input
          v-model="order[key +'_floor']"
          class="form-control form-control-solid"
      />
      <!--end::Input-->
      <span
          v-if="Errors[key+'_floor']"
          class="text-danger"
      >{{ Errors[key+"_floor"][0] }}</span
      >
    </div>
    <!--end::Col-->
    <!--begin::Col-->
    <div class="col-md-6 fv-row">
      <!--begin::Label-->
      <label class="fs-5 fw-bold mb-2"> {{ $t("zip") }}</label>
      <!--end::Label-->
      <!--begin::Input-->
      <input
          v-model="order[key+'_zip']"
          class="form-control form-control-solid"
      />
      <!--end::Input-->
    </div>
    <span
        v-if="Errors[key+'_zip']"
        class="text-danger"
    >{{ Errors[key+"_zip"][0] }}</span>

    <!--end::Col-->
  </div>
  <!--end::Input group-->

</template>

<script>
import JwtService from "@/core/services/JwtService";

export default {
  name: "senderData",
  props: ['Errors'],
  data() {
    return {
      key: "sender"
    }
  },
  computed: {
    mode() {
      if (this.key == 'sender')
        return true;
      else
        return false;
    },
    order() {
      return this.$parent.order;
    },
    sercheMode() {
      return this.$parent.sercheMode;
    },
    isBusiness() {
      return JwtService.isBusiness()
    }

  }

}
</script>