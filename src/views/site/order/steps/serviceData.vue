<template>
  <div v-if="order.service_id > 0" class="pb-10 pb-lg-15">
    <!--begin::Title-->
    <h2 class="fw-bolder text-dark"></h2>

    <!--begin::Row-->
    <div class="row mb-8">
      <!--begin::Col-->
      <div class="col-12 col-md-6">
        <div class="fs-6 fw-bolder mt-2 mb-3">
          {{ services[order.service_id].name }}
        </div>
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <!--end::Col-->
    </div>
    <!--end::Row-->

    <!--end::Title-->
    <!--begin::Notice-->
    <div class="text-muted fw-bold fs-6">
      {{ services[order.service_id].text }}
      <!--                    <a href="#" class="link-primary fw-bolder">Help Page</a>.-->
    </div>
    <!--end::Notice-->
  </div>
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
      <div v-for="(dimintion) in servicedimintions"
           :key="dimintion.id" class="col-6 col-md-6 col-lg-4"
           @click="setDimintion(dimintion)"
      >
        <!--begin::Option-->
        <input
            :id="`kt_service_type_${dimintion.id}`"
            class="btn-check"
            type="radio"
        />

        <label :for="`kt_service_type_${dimintion.id}`"
               class="btn btn-outline btn-outline-dashed btn-outline-default
                        p-7
                        d-flex
                        align-items-center
                        mb-10
                      "
        >
          <div class="service-icon-box me-1" v-html="dimintion.icon">
          </div>
          <span class="d-block fw-bold text-start">
            <span class="text-dark fw-bolder d-block fs-4 mb-2">{{ dimintion.title }}</span>
            <span class="text-muted fw-bold fs-6">
              {{ dimintion.desk }}
            </span><br/>
              <span class="text-muted fw-bold fs-6">
                {{$t('length')}}:{{dimintion.length}} - {{$t('width')}}:{{dimintion.width}}
              </span><br/>
              <span class="text-muted fw-bold fs-6">
              {{$t('weight')}}:{{dimintion.weight}} - {{$t('height')}}: {{dimintion.height}}
            </span>
          </span>
        </label>
      </div>
    </div>
    <!--end::Row-->
  </div>
  <!--end::Heading-->
  <div v-if="order.service_id > 0">
    <div class="row">
      <div
          v-show="services[order.service_id].height > -1"
          class="col-12 col-sm-6 col-md-3 fv-row"
      >
        <label class="fs-5 fw-bold mb-2">{{ $t("height") }}</label>
        <div class="input-group mb-5">
          <input
              v-model="order.height" :class="
                            services[order.service_id] &&
                            services[order.service_id].height != 0
                              ? 'form-control-solid'
                              : ''
                          "
              :disabled="
                            services[order.service_id] &&
                            services[order.service_id].height != 0
                          "
              class="form-control"
              type="number"
              @blur="calcPrice('height')"
          />
          <span class="input-group-text border-0">{{
              services[order.service_id].height > 100 ? "m" : "cm"
            }}</span>
        </div>
      </div>
      <div
          v-show="services[order.service_id].width > -1"
          class="col-12 col-sm-6 col-md-3 fv-row"
      >
        <label class="fs-5 fw-bold mb-2">{{ $t("width") }}</label>
        <div class="input-group mb-5">
          <input
              v-model="order.width" :class="
                            services[order.service_id] &&
                            services[order.service_id].width != 0
                              ? 'form-control-solid'
                              : ''
                          "
              :disabled="
                            services[order.service_id] &&
                            services[order.service_id].width != 0
                          "
              class="form-control"
              type="number"
              @blur="calcPrice('width')"
          />
          <span class="input-group-text border-0">{{
              services[order.service_id].width > 100 ? "m" : "cm"
            }}</span>
        </div>
      </div>
      <div
          v-show="services[order.service_id].length > -1"
          class="col-12 col-sm-6 col-md-3 fv-row"
      >
        <label class="fs-5 fw-bold mb-2">{{ $t("length") }}</label>
        <div class="input-group mb-5">
          <input
              v-model="order.length"
              :class="
                            services[order.service_id] &&
                            services[order.service_id].length != 0
                              ? 'form-control-solid'
                              : ''
                          "
              :disabled="
                            services[order.service_id] &&
                            services[order.service_id].length != 0
                          "
              class="form-control"
              type="number"
              @blur="calcPrice('length')"
          />
          <span class="input-group-text border-0">{{
              services[order.service_id].length > 100 ? "m" : "cm"
            }}</span>
        </div>
      </div>
      <div
          v-show="services[order.service_id].weight > -1"
          class="col-12 col-sm-6 col-md-3 fv-row"
      >
        <label class="fs-5 fw-bold mb-2">{{ $t("weight") }}</label>
        <div class="input-group mb-5">
          <input
              v-model="order.weight" :class="
                            services[order.service_id] &&
                            services[order.service_id].weight != 0
                              ? 'form-control-solid'
                              : ''
                          "
              :disabled="
                            services[order.service_id] &&
                            services[order.service_id].weight != 0
                          "
              class="form-control"
              step=".125"
              type="number"
              @blur="calcPrice('weight')"
          />
          <span class="input-group-text border-0">{{
              services[order.service_id].weight > 1000
                  ? "Ton"
                  : "Kg"
            }}</span>
        </div>
      </div>
    </div>
    <span v-if="Errors['length']" class="text-danger">{{
        Errors["length"][0]
      }}</span>
    <span v-if="Errors['weight']" class="text-danger">{{
        Errors["weight"][0]
      }}</span>
    <span v-if="Errors['width']" class="text-danger">{{
        Errors["width"][0]
      }}</span>
    <span v-if="Errors['height']" class="text-danger">{{
        Errors["height"][0]
      }}</span>
  </div>

  <template
      v-if="
                    services[order.service_id] &&
                    services[order.service_id].require_items &&
                    services[order.service_id].require_items == 1
                  "
  >
    <!--begin::Form group-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <!--begin::User-->
        <div
            class="d-flex justify-content-center flex-column me-3"
        >
          <h2 class="fw-bolder text-dark">
            {{ $t("orderItems") }}
          </h2>
        </div>
        <!--end::User-->
      </div>
      <!--end::Title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <a
            class="btn btn-light-primary"
            @click="order.items.push({})"
        >
          <i class="la la-plus"></i>
          {{ $t("Add New") }}
        </a>
      </div>
    </div>

    <div
        v-for="(item, iItem) in order.items"
        :key="iItem"
        class=""
    >
      <div class=" row mb-5">
        <div
            :class="iItem == 0 ? 'col-md-6' : 'col-md-6'"
            class="col-12"
        >
          <label class="form-label">{{ $t("type") }}:</label>
          <el-select v-model="item.type_id" class="w-100"
                     filterable @change="calcPrice">
            <el-option
                v-for="item in types"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div
            :class="iItem == 0 ? 'col-md-6' : 'col-md-5'"
            class="col-12"
        >
          <label class="form-label">{{ $t("content") }} : </label>
          <input
              v-model="item.other_content"
              class="form-control form-control-solid"
              type="tex"
          />
        </div>
        <div v-if="iItem > 0" class="col-1">
          <label class="d-block form-label">&nbsp;</label>
          <a
              class="btn btn-sm btn-light-danger pt-4 pb-4"
              @click="order.items.splice(iItem, 1)"
          >
            <i class="la la-trash-o fs-3 pe-0"></i>
          </a>
        </div>
      </div>
    </div>

    <span v-if="Errors['items']" class="text-danger">{{
        Errors["items"][0]
      }}</span>
  </template>


</template>

<script>
import VueTinySlider from 'vue-tiny-slider';
import carousel from 'vue-owl-carousel'

export default {
  name: "serviceData",
  props: ['services', 'types', 'Errors'],
  components: {
    // carousel
  },
  methods: {
    async setDimintion(dimintion) {
      this.order.length = dimintion.length;
      this.order.width = dimintion.width;
      this.order.height = dimintion.height;
      this.order.weight = dimintion.weight;
      this.$parent.calcPrice();
    },
    calcPrice(dimantion) {
      this.$parent.calcPrice();
    }
  },
  computed: {
    order() {
      return this.$parent.order;
    },
    servicedimintions() {
      return this.$parent.servicedimintions;
    }
  }

}
</script>