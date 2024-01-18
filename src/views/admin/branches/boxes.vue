<template>
  <div class="row w-100 justify-content-center">
    <div class="col-12 col-md-6 col-lg-3" v-for="(item, i) in list" :key="i">
      <!--begin::Budget-->
      <div class="card p-5 card-body my-4">
        <div class="fs-2t fw-bolder">{{ item.name }}</div>
        <template v-if="item.in_destination == 0">
          <div class="fs-6 d-flex justify-content-between">
            <div class="fw-bold">{{ $t("Waiting for shipment") }}</div>
            <div class="d-flex fw-bolder">
              <span class="svg-icon svg-icon-3 me-1 svg-icon-success">
                <inline-svg src="/media/icons/duotune/arrows/arr007.svg" />
              </span>
              <!--end::Svg Icon-->
              {{ item.size }}
            </div>
          </div>
        </template>
        <template v-else>
          <div class="fs-6 d-flex justify-content-between">
            <div class="fw-bold">{{ $t("Waiting for delivery") }}</div>
            <div class="d-flex fw-bolder">
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr006.svg-->
              <span class="svg-icon svg-icon-3 me-1 svg-icon-danger">
                <inline-svg src="/media/icons/duotune/arrows/arr006.svg" />
              </span>
              <!--end::Svg Icon-->
              {{ item.size }}
            </div>
          </div>
        </template>
      </div>
      <!--end::Budget-->
    </div>
  </div>
</template>

<script>
export default {
  name: "boxes",
  props: ["list"],
};
</script>
