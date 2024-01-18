<template>
  <div v-if="!OrderFinshed" id="kt_content" class="content flex-row-fluid">
    <!--begin::Card-->
    <div class="card">
      <!--begin::Card body-->
      <div class="card-body">
        <!--begin::Stepper-->
        <div
          id="kt_create_account_stepper"
          class="stepper stepper-links d-flex flex-column pt-15"
        >
          <!--begin::Nav-->
          <div class="stepper-nav mb-5">
            <!--begin::Step 1-->
            <div
              v-show="step == 1 ? 'current' : ''"
              class="stepper-item"
              data-kt-stepper-element="nav"
            >
              <h3 class="stepper-title">{{ $t("step1H") }}</h3>
            </div>
            <!--end::Step 1-->
            <!--begin::Step 2-->
            <div
              v-show="step == 2 ? 'current' : ''"
              class="stepper-item"
              data-kt-stepper-element="nav"
            >
              <h3 class="stepper-title">{{ $t("step2H") }}</h3>
            </div>
            <!--end::Step 2-->
            <!--begin::Step 3-->
            <div
              v-show="step == 3 ? 'current' : ''"
              class="stepper-item"
              data-kt-stepper-element="nav"
            >
              <h3 class="stepper-title">{{ $t("step3H") }}</h3>
            </div>
            <!--end::Step 3-->
            <!--begin::Step 4-->
            <div
              v-show="step == 4 ? 'current' : ''"
              class="stepper-item"
              data-kt-stepper-element="nav"
            >
              <h3 class="stepper-title">{{ $t("step4H") }}</h3>
            </div>
            <!--end::Step 4-->
            <!--begin::Step 5-->
            <div
              v-show="step == 5 ? 'current' : ''"
              class="stepper-item"
              data-kt-stepper-element="nav"
            >
              <h3 class="stepper-title">{{ $t("Completed") }}</h3>
            </div>
            <!--end::Step 5-->
          </div>
          <!--end::Nav-->
          <!--begin::Form-->
          <form
            id="kt_create_account_form"
            class="mx-auto mw-1000px w-100 pb-10"
            novalidate="novalidate"
          >
            <div v-if="loading" class="blockui-overlay bg-dark bg-opacity-25">
              <span class="spinner-border text-primary"></span>
            </div>
            <!--begin::Step 1-->
            <div
              :class="step == 1 ? 'current' : ''"
              data-kt-stepper-element="content"
            >
              <!--begin::Wrapper-->
              <div class="w-100">
                <!--begin::Heading-->
                <div class="pb-10 pb-lg-15">
                  <!--begin::Title-->
                  <h2 class="fw-bolder d-flex align-items-center text-dark">
                    {{ $t("chooseService") }}
                  </h2>
                  <!--end::Title-->
                  <!--begin::Notice-->
                  <div class="text-muted fw-bold fs-6">
                    {{ $t("chooseServiceText") }}
                  </div>
                  <!--end::Notice-->
                </div>
                <!--end::Heading-->
                <!--begin::Input group-->
                <div class="fv-row">
                  <!--begin::Row-->
                  <div class="row justify-content-around">
                    <!--begin::Col-->
                    <div
                      v-for="service in servicesOrdered"
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
                        @change="setService(service)"
                      />
                      <label
                        :for="'kt_service_type_' + service.id"
                        class="
                          btn btn-outline btn-outline-dashed btn-outline-default
                          p-7
                          d-flex
                          align-items-center
                          mb-10
                        "
                      >
                        <div
                          class="service-icon-box me-1"
                          v-html="service.icon"
                        ></div>
                        <!--begin::Info-->
                        <span class="d-block fw-bold text-start">
                          <span class="text-dark fw-bolder d-block fs-4 mb-2">
                            {{ service.name }}
                          </span>
                          <span class="text-muted fw-bold fs-6">
                            {{ service.text }}
                          </span>
                        </span>
                        <!--end::Info-->
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <div
                    v-show="order.service_id && order.service_id > 0"
                    class="row select-location"
                  >
                    <div class="col-12 col-md-6">
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
                        :FormLErrors="orderErrors"
                        :mode="1"
                        key_area="sender_area_id"
                        key_country="sender_country_id"
                        key_country_ob="sender_country"
                        key_county="sender_county_id"
                        @change="setLocationDataSender"
                      />
                    </div>
                    <div class="col-12 col-md-6">
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
                              {{ $t("resiverAddress") }}
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
                      <RArea
                        ref="AreaDataReceiver"
                        :FormData="order"
                        :FormLErrors="orderErrors"
                        :mode="2"
                        key_area="receiver_area_id"
                        key_country="receiver_country_id"
                        key_country_ob="receiver_country"
                        key_county="receiver_county_id"
                        @change="setLocationDataResiver"
                      />
                    </div>
                  </div>
                  <!--end::Row-->
                </div>
                <!--end::Input group-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Step 1-->
            <!--begin::Step 2-->
            <div
              :class="step == 2 ? 'current' : ''"
              data-kt-stepper-element="content"
            >
              <!--begin::Wrapper-->
              <div class="w-100">
                <div v-if="order.service_id > 0" class="pb-5 pb-lg-10">
                  <!--begin::Row-->
                  <div class="row mb-8">
                    <!--begin::Col-->
                    <div class="col-12 col-md-6">
                      <div
                        v-if="order.service"
                        class="fs-6 fw-bolder mt-2 mb-3"
                      >
                        {{ order.service.name }}
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Row-->
                  <!--begin::Notice-->
                  <div v-if="order.service" class="text-muted fw-bold fs-6">
                    {{ order.service.text }}
                    <!--                    <a href="#" class="link-primary fw-bolder">Help Page</a>.-->
                  </div>
                  <!--end::Notice-->
                </div>

                <div class="row justify-content-around">
                  <div
                    v-for="dimintion in servicedimintions"
                    :key="dimintion.id"
                    class="col-6 col-md-6 col-lg-4"
                    @click="setService(dimintion, true)"
                  >
                    <!--begin::Option-->
                    <input
                      :id="`kt_service_type_${dimintion.id}`"
                      class="btn-check"
                      type="radio"
                    />

                    <label
                      :class="dimintion.id == order.service_id ? 'active' : ''"
                      :for="`kt_service_type_${dimintion.id}`"
                      class="
                        btn btn-outline btn-outline-dashed btn-outline-default
                        p-7
                        d-flex
                        align-items-center
                        mb-10
                      "
                    >
                      <div
                        class="service-icon-box me-1"
                        v-html="dimintion.icon"
                      ></div>
                      <span class="d-block fw-bold text-start">
                        <span class="text-dark fw-bolder d-block fs-4 mb-2">
                          {{ dimintion.name }}
                        </span>
                        <div class="text-muted fw-bold fs-6">
                          {{ dimintion.text }}
                        </div>
                        <div class="text-muted fw-bold fs-6">
                          {{ $t("length") }}:{{ dimintion.length }} -
                          {{ $t("width") }}:{{ dimintion.width }} -
                          {{ $t("height") }}: {{ dimintion.height }}
                        </div>
                      </span>
                    </label>
                  </div>
                </div>

                <div v-if="order.service">
                  <div class="row justify-content-around">
                    <div
                      v-show="order.service.width > -1"
                      class="col-6 col-md-3 fv-row"
                    >
                      <label class="fs-5 fw-bold mb-2">{{ $t("width") }}</label>
                      <div class="input-group mb-5">
                        <input
                          v-model="order.width"
                          :class="
                            order.service && order.service.width != 0
                              ? 'form-control-solid'
                              : ''
                          "
                          :disabled="order.service && order.service.width != 0"
                          class="form-control"
                          @blur="calcPrice"
                        />
                        <span class="input-group-text border-0">
                          {{ order.service.width > 100 ? "m" : "cm" }}
                        </span>
                      </div>
                      <span v-if="orderErrors['width']" class="text-danger">
                        {{ orderErrors["width"][0] }}
                      </span>
                    </div>
                    <div
                      v-show="order.service.length > -1"
                      class="col-6 col-md-3 fv-row"
                    >
                      <label class="fs-5 fw-bold mb-2">
                        {{ $t("length") }}
                      </label>
                      <div class="input-group mb-5">
                        <input
                          v-model="order.length"
                          :class="
                            order.service && order.service.length != 0
                              ? 'form-control-solid'
                              : ''
                          "
                          :disabled="order.service && order.service.length != 0"
                          class="form-control"
                          @blur="calcPrice"
                        />
                        <span class="input-group-text border-0">
                          {{ order.service.length > 100 ? "m" : "cm" }}
                        </span>
                      </div>
                      <span v-if="orderErrors['length']" class="text-danger">
                        {{ orderErrors["length"][0] }}
                      </span>
                    </div>
                    <div
                      v-show="order.service.height > -1"
                      class="col-6 col-md-3 fv-row"
                    >
                      <label class="fs-5 fw-bold mb-2">{{ $t("hight") }}</label>
                      <div class="input-group mb-5">
                        <input
                          v-model="order.height"
                          :class="
                            order.service && order.service.height != 0
                              ? 'form-control-solid'
                              : ''
                          "
                          :disabled="order.service && order.service.height != 0"
                          class="form-control"
                          @blur="calcPrice"
                        />
                        <span class="input-group-text border-0">
                          {{ order.service.height > 100 ? "m" : "cm" }}
                        </span>
                      </div>
                      <span v-if="orderErrors['height']" class="text-danger">
                        {{ orderErrors["height"][0] }}
                      </span>
                    </div>
                    <div
                      v-show="order.service.weight > -1"
                      class="col-6 col-md-3 fv-row"
                    >
                      <label class="fs-5 fw-bold mb-2">
                        {{ $t("weight") }}
                      </label>
                      <div class="input-group mb-5">
                        <input
                          v-model="order.weight"
                          :class="
                            order.service && order.service.weight != 0
                              ? 'form-control-solid'
                              : ''
                          "
                          :disabled="order.service && order.service.weight != 0"
                          class="form-control"
                          @blur="calcPrice"
                        />
                        <span class="input-group-text border-0">
                          {{ order.service.weight > 1000 ? "Ton" : "Kg" }}
                        </span>
                      </div>
                      <span v-if="orderErrors['weight']" class="text-danger">
                        {{ orderErrors["weight"][0] }}
                      </span>
                    </div>
                  </div>
                </div>

                <template
                  v-if="order.service && order.service.require_items == 1"
                >
                  <div class="card-header p-0 mb-4">
                    <!--begin::Title-->
                    <div class="card-title">
                      <h2 class="fw-bolder text-dark">
                        {{ $t("orderItems") }}
                      </h2>
                      <span
                        v-if="orderErrors['require_items']"
                        class="text-danger"
                      >
                        {{ orderErrors["require_items"][0] }}
                      </span>
                    </div>
                    <!--end::Title-->
                    <div class="card-toolbar">

                    </div>
                  </div>

                  <template v-for="(item, iItem) in order.items" :key="iItem">
                    <div class="row mb-5">
                      <div class="col-12 col-md-4">
                        <label class="form-label">{{ $t("type") }}:</label>
                        <el-select
                          v-model="item.type_id"
                          class="w-100"
                          filterable
                          @blur="calcPrice"
                        >
                          <el-option
                            v-for="item in types"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                          >
                          </el-option>
                        </el-select>
                      </div>
                      <div class="col-12 col-md-4">
                        <label class="form-label">
                          {{ $t("Item Quantity") }} :
                        </label>
                        <input
                          v-model="item.quantity"
                          class="form-control form-control-solid"
                          min="1"
                          type="number"
                          @blur="calcPrice"
                        />
                      </div>
                      <div
                        :class="
                          iItem == 0 ? 'col-12 col-md-4' : 'col-10 col-md-3'
                        "
                      >
                        <label class="form-label">{{ $t("content") }} : </label>
                        <input
                          v-model="item.other_content"
                          class="form-control form-control-solid"
                          type="text"
                        />
                      </div>
                      <div v-if="iItem > 0" class="col-2 col-md-1 text-end">
                        <label class="d-block form-label">&nbsp;</label>
                        <a
                          class="btn btn-sm btn-light-danger pt-4 pb-4"
                          @click="order.items.splice(iItem, 1)"
                        >
                          <i class="la la-trash-o fs-3 pe-0"></i>
                        </a>
                      </div>
                    </div>
                  </template>
                </template>

                <div class="card-header p-0 mb-4">
                  <!--begin::Title-->
                  <div class="card-title">
                    <h2 class="fw-bolder text-dark me-3">
                      {{ $t("ordertime") }}
                    </h2>
                    <span v-if="orderErrors['date']" class="text-danger">
                      {{ orderErrors["date"][0] }}
                    </span>
                  </div>
                  <!--end::Title-->
                </div>
                <div class="row" v-if="order.service">
                  <div class="mb-5">
                    <label class="form-label">{{ $t("orderDate") }}</label>
                    <flat-pickr
                      v-model="order.date"
                      :config="config"
                      :placeholder="$t('Select date')"
                      class="form-control form-control-solid"
                      name="date"
                    />
                  </div>
                  <div v-if="order.service.custom == true">
                    <div class="mb-0">
                      <label class="form-label">{{ $t("To Date") }}</label>
                      <flat-pickr
                        v-model="order.to_date"
                        :config="config"
                        :placeholder="$t('Select date')"
                        class="form-control form-control-solid"
                        name="date"
                      />
                    </div>
                    <span v-if="orderErrors['to_date']" class="text-danger">
                      {{ orderErrors["to_date"][0] }}
                    </span>
                  </div>
                  <div>
                    <label class="form-label">
                      {{ $t("Count") }} {{ order.service.name }}
                    </label>
                    <div class="position-relative">
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
                        <span class="svg-icon svg-icon-1">
                          <inline-svg
                            src="/media/icons/duotune/general/gen036.svg"
                          />
                        </span>
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
                        @change="checkServiceNumber()"
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
                        <span class="svg-icon svg-icon-1">
                          <inline-svg
                            src="/media/icons/duotune/general/gen035.svg"
                          />
                        </span>
                      </button>
                      <!--end::Increase control-->
                    </div>
                  </div>
                </div>
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Step 2-->
            <!--begin::Step 3-->
            <div
              :class="step == 3 ? 'current' : ''"
              data-kt-stepper-element="content"
            >
              <div class="row w-100">
                <div class="col-12 col-md-6">
                  <div class="card-header p-0">
                    <!--begin::Title-->
                    <div class="card-title">
                      <!--begin::User-->
                      <div
                        class="d-flex justify-content-center flex-column me-3"
                      >
                        <h2 class="fw-bolder text-dark">
                          {{ $t("senderData") }}
                        </h2>
                      </div>
                      <!--end::User-->
                    </div>
                    <!--end::Title-->
                    <div
                      v-if="isBusiness"
                      class="card-toolbar"
                      data-bs-target="#kt_modal_resivers_search"
                      data-bs-toggle="modal"
                      @click="sercheMode = 1"
                    >
                      <a class="btn btn-light-primary">
                        <i class="la la-plus"></i>
                        {{ $t("addFromSaved") }}
                      </a>
                    </div>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label mb-3">
                      {{ $t("senderName") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="order.sender_name"
                      class="form-control form-control-lg form-control-solid"
                      type="text"
                    />
                    <span v-if="orderErrors['sender_name']" class="text-danger">
                      {{ orderErrors["sender_name"][0] }}
                    </span>
                    <!--end::Input-->
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label mb-3">
                      {{ $t("senderEmail") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="order.sender_email"
                      class="form-control form-control-lg form-control-solid"
                      type="text"
                    />
                    <!--end::Input-->
                    <span
                      v-if="orderErrors['sender_email']"
                      class="text-danger"
                    >
                      {{ orderErrors["sender_email"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label mb-3">
                      {{ $t("senderPhone") }}
                    </label>
                    <!--end::Label-->
                    <div class="input-group mb-5" dir="ltr">
                      <span
                        v-if="
                          temp.sender_country && temp.sender_country.phone_code
                        "
                        class="input-group-text"
                      >
                        {{ temp.sender_country.phone_code }}
                      </span>
                      <input
                        v-model="temp.temp_sender_phone"
                        class="form-control form-control-lg form-control-solid"
                        type="tel"
                      />
                    </div>
                    <span
                      v-if="orderErrors['sender_phone']"
                      class="text-danger"
                    >
                      {{ orderErrors["sender_phone"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="fs-5 fw-bold mb-2">
                      {{ $t("addressLine") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="order.sender_address"
                      class="form-control form-control-solid"
                      name="city"
                    />
                    <!--end::Input-->
                    <span
                      v-if="orderErrors['sender_address']"
                      class="text-danger"
                    >
                      {{ orderErrors["sender_address"][0] }}
                    </span>
                  </div>
                  <div class="d-flex flex-stack">
                    <!--begin::Label-->
                    <div class="me-5">
                      <label class="fs-6 fw-bold form-label">{{
                        $t("delivery_to_branch")
                      }}</label>
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
                        v-model="order.delivery_to_branch"
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                      <span class="form-check-label fw-bold text-muted">
                        {{ $t("delivery_to_branch_text2") }}
                      </span>
                    </label>
                    <!--end::Switch-->
                  </div>
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
                      <span
                        v-if="orderErrors['sender_floor']"
                        class="text-danger"
                      >
                        {{ orderErrors["sender_floor"][0] }}
                      </span>
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
                      <span
                        v-if="orderErrors['sender_zip']"
                        class="text-danger"
                      >
                        {{ orderErrors["sender_zip"][0] }}
                      </span>
                    </div>
                    <!--end::Col-->
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="card-header p-0">
                    <!--begin::Title-->
                    <div class="card-title">
                      <!--begin::User-->
                      <div
                        class="d-flex justify-content-center flex-column me-3"
                      >
                        <h2 class="fw-bolder text-dark">
                          {{ $t("receiverData") }}
                        </h2>
                      </div>
                      <!--end::User-->
                    </div>
                    <!--end::Title-->
                    <div
                      v-if="isBusiness"
                      class="card-toolbar"
                      data-bs-target="#kt_modal_resivers_search"
                      data-bs-toggle="modal"
                      @click="sercheMode = 2"
                    >
                      <a class="btn btn-light-primary">
                        <i class="la la-plus"></i>
                        {{ $t("addFromSaved") }}
                      </a>
                    </div>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label mb-3">
                      {{ $t("receiverName") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="order.receiver_name"
                      class="form-control form-control-lg form-control-solid"
                      type="text"
                    />
                    <!--end::Input-->
                    <span
                      v-if="orderErrors['receiver_name']"
                      class="text-danger"
                    >
                      {{ orderErrors["receiver_name"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label mb-3">
                      {{ $t("receiverEmail") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="order.receiver_email"
                      class="form-control form-control-lg form-control-solid"
                      type="text"
                    />
                    <!--end::Input-->
                    <span
                      v-if="orderErrors['receiver_email']"
                      class="text-danger"
                    >
                      {{ orderErrors["receiver_email"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label mb-3">
                      {{ $t("receiverPhone") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <div class="input-group mb-5" dir="ltr">
                      <span
                        v-if="
                          temp.receiver_country &&
                          temp.receiver_country.phone_code
                        "
                        class="input-group-text"
                        >{{ temp.receiver_country.phone_code }}</span
                      >

                      <input
                        v-model="temp.temp_receiver_phone"
                        class="form-control form-control-lg form-control-solid"
                        type="tel"
                      />
                    </div>
                    <!--end::Input-->
                    <span
                      v-if="orderErrors['receiver_phone']"
                      class="text-danger"
                    >
                      {{ orderErrors["receiver_phone"][0] }}
                    </span>
                  </div>
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="fs-5 fw-bold mb-2">
                      {{ $t("addressLine") }}
                    </label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <input
                      v-model="order.receiver_address"
                      class="form-control form-control-solid"
                    />
                    <span
                      v-if="orderErrors['receiver_address']"
                      class="text-danger"
                    >
                      {{ orderErrors["receiver_address"][0] }}
                    </span>
                    <!--end::Input-->
                  </div>
                  <div class="d-flex flex-stack">
                    <!--begin::Label-->
                    <div class="me-5">
                      <label class="fs-6 fw-bold form-label">
                        {{ $t("receipt_from_branch") }}
                      </label>
                      <div class="fs-7 fw-bold text-muted">
                        {{ $t("receipt_from_branch_text") }}
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
                        v-model="order.receipt_from_branch"
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                      <span class="form-check-label fw-bold text-muted">
                        {{ $t("receipt_from_branch_text2") }}
                      </span>
                    </label>
                    <!--end::Switch-->
                  </div>
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
                      <span
                        v-if="orderErrors['receiver_floor']"
                        class="text-danger"
                      >
                        {{ orderErrors["receiver_floor"][0] }}
                      </span>
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
                      <span
                        v-if="orderErrors['receiver_zip']"
                        class="text-danger"
                      >
                        {{ orderErrors["receiver_zip"][0] }}
                      </span>
                    </div>
                    <!--end::Col-->
                  </div>
                </div>
              </div>
            </div>
            <!--end::Step 3-->
            <!--begin::Step 4-->
            <div
              :class="step == 4 ? 'current' : ''"
              data-kt-stepper-element="content"
            >
              <!--begin::Wrapper-->
              <div class="w-100" v-if="order.service">
                <!--begin::Heading-->
                <div class="pb-10 pb-lg-15">
                  <!--begin::Title-->
                  <h2 class="fw-bolder text-dark">{{ $t("paymentOrdre") }}</h2>
                  <!--end::Title-->
                  <!--begin::Notice-->
                  <!-- <div class="text-muted fw-bold fs-6">
                    {{ $t("paymentOrderText") }}
                  </div> -->
                  <!--end::Notice-->
                  <div class="row mt-5" v-if="order.service.payments">
                    <template v-for="(payment, i) in payments" :key="i">
                      <div
                        v-if="
                          order.service.payments.includes(payment.id) &&
                          (payment.show_card == 0 ||
                            (order.price && order.price > 0))
                        "
                        class="col-12 col-md-4 mb-sm-0 mb-3"
                      >
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
                              @click="showStripe(payment)"
                            />
                          </span>
                          <!--end::Radio-->
                          <!--begin::Info-->
                          <span class="ms-5">
                            <span
                              class="fs-4 fw-bolder text-gray-800 mb-2 d-block"
                            >
                              {{ payment.name }}
                            </span>
                            <!-- <span class="fw-bold fs-7 text-gray-600"></span> -->
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                    </template>
                    <span v-if="orderErrors['payment_id']" class="text-danger">
                      {{ orderErrors["payment_id"][0] }}
                    </span>
                  </div>
                  <div class="mt-10" v-if="isEmployee">
                    <label
                      class="form-check form-check-custom form-check-solid"
                    >
                      <input
                        v-model="order.received_money"
                        class="form-check-input"
                        name="received_money"
                        type="checkbox"
                        value="1"
                      />
                      <span class="form-check-label fw-bold text-gray-700 fs-6">
                        {{ $t("I received the money") }}
                      </span>
                    </label>
                  </div>
                </div>
                <!--end::Heading-->

                <StripeCard
                  v-if="
                    order.show_card && order.show_card == 1 && order.price > 0
                  "
                  :key="order.payment_key"
                  ref="stripeCard"
                  :order="order"
                  @paymentCreated="paymentCreated"
                ></StripeCard>

                <div class="pb-10 pb-lg-15 mt-5">
                  <h2 class="fw-bolder text-dark">
                    {{ $t("collectMoneyFromResiver") }}
                  </h2>
                  <div class="row">
                    <div class="mb-10 col-12 col-md-6">
                      <!--begin::Label-->
                      <label class="form-label fw-bolder fs-6 text-gray-700">
                        {{ $t("money") }}
                      </label>
                      <!--end::Label-->
                      <input
                        v-model="order.bussiness_collect_money"
                        class="form-control form-control-solid"
                        type="number"
                      />
                      <span
                        v-if="orderErrors['bussiness_collect_money']"
                        class="text-danger"
                      >
                        {{ orderErrors["bussiness_collect_money"][0] }}
                      </span>
                    </div>
                    <div class="mb-10 col-12 col-md-6">
                      <label class="form-label fw-bolder fs-6 text-gray-700">
                        {{ $t("currency") }}
                      </label>
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
                        v-if="orderErrors['bussiness_collect_money_currency']"
                        class="text-danger"
                      >
                        {{ orderErrors["bussiness_collect_money_currency"][0] }}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label
                      class="form-check form-check-custom form-check-solid"
                    >
                      <input
                        v-model="toc"
                        class="form-check-input"
                        name="toc"
                        type="checkbox"
                        value="1"
                      />
                      <span class="form-check-label fw-bold text-gray-700 fs-6">
                        {{ $t("I_Agree") }} &
                        <a
                          :href="
                            $router.resolve({
                              name: 'site-category',
                              params: { id: 'terms-conditions' },
                            }).href
                          "
                          target="_blank"
                          class="ms-1 link-primary"
                          >{{ $t("Terms_and_conditions") }}</a
                        >.
                      </span>
                    </label>
                    <div class="fv-help-block text-danger">
                      <span v-if="orderErrors['toc']" class="text-danger">
                        {{ orderErrors["toc"][0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Step 4-->
          </form>
          <!--end::Form-->
        </div>
        <!--end::Stepper-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Card-->

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
          v-show="step > 1"
          class="btn btn-lg btn-light-primary me-3 d-inline-block"
          type="button"
          @click="previous()"
        >
          <span class="svg-icon svg-icon-4 me-1 arrow d-sm-inline d-none">
            <inline-svg src="/media/icons/duotune/arrows/arr063.svg" />
          </span>
          {{ $t("Back") }}
        </button>
        <div class="d-flex">
          <button
            :data-kt-indicator="loadingPrice ? 'on' : null"
            :disabled="loadingPrice"
            class="btn btn-lg btn-info me-3"
          >
            <span class="indicator-label">
              {{
                (
                  order.price *
                  currency_multiplier *
                  order.service_number
                ).toFixed(2)
              }}
              {{ currency_symbol }}
            </span>

            <span class="indicator-progress">
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
          <button
            v-show="step < 4"
            class="btn btn-lg btn-primary"
            @click="next()"
          >
            {{ $t("continue") }}
            <span
              class="svg-icon svg-icon-4 ms-1 me-0 arrow d-sm-inline d-none"
            >
              <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
            </span>
          </button>
          <button
            v-show="step == 4"
            :data-kt-indicator="loading ? 'on' : null"
            :disabled="loading"
            class="btn btn-lg btn-primary me-3"
            data-kt-stepper-action="submit"
            type="button"
            @click="onComplete"
          >
            <span class="indicator-label"
              >{{ $t("submit") }}
              <span
                class="svg-icon svg-icon-3 ms-2 me-0 d-sm-inline d-none arrow"
              >
                <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
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

    <template v-if="isAuth">
      <div
        id="kt_modal_address_search"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
      >
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
          <!--begin::Modal content-->
          <div class="modal-content">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
              <!--begin::Close-->
              <div
                class="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
                </span>
              </div>
              <!--end::Close-->
            </div>
            <!--begin::Modal header-->
            <!--begin::Modal body-->
            <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              <!--begin::Content-->
              <div class="text-center mb-13">
                <h1 class="mb-3">{{ $t("Search in your Address") }}</h1>
              </div>
              <!--end::Content-->
              <!--begin::Search-->
              <div
                id="kt_modal_users_search_handler"
                data-kt-search-enter="enter"
                data-kt-search-keypress="true"
                data-kt-search-layout="inline"
                data-kt-search-min-length="2"
              >
                <!--begin::Form-->
                <form
                  autocomplete="off"
                  class="w-100 position-relative mb-5"
                  data-kt-search-element="form"
                >
                  <span
                    class="
                      svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                      position-absolute
                      top-50
                      ms-5
                      translate-middle-y
                    "
                  >
                    <inline-svg src="/media/icons/duotune/general/gen021.svg" />
                  </span>
                  <!--end::Svg Icon-->
                  <!--end::Icon-->
                  <!--begin::Input-->
                  <input
                    id="addressSerach"
                    class="
                      form-control form-control-lg form-control-solid
                      px-15
                    "
                    data-kt-search-element="input"
                    name="search"
                    :placeholder="$t('Search by username')"
                    type="text"
                    value=""
                    @keyup="
                      serchInHtml('addressSerach', 'searchContiner_address')
                    "
                  />
                  <!--end::Input-->
                  <!--begin::Spinner-->
                  <span
                    class="
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      d-none
                      me-5
                    "
                    data-kt-search-element="spinner"
                  >
                    <span
                      class="
                        spinner-border
                        h-15px
                        w-15px
                        align-middle
                        text-muted
                      "
                    ></span>
                  </span>
                  <!--end::Spinner-->
                  <!--begin::Reset-->
                  <span
                    class="
                      btn btn-flush btn-active-color-primary
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      me-5
                      d-none
                    "
                    data-kt-search-element="clear"
                  >
                    <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                      <inline-svg
                        src="/media/icons/duotune/arrows/arr061.svg"
                      />
                    </span>
                  </span>
                  <!--end::Reset-->
                </form>
                <!--end::Form-->
                <!--begin::Wrapper-->
                <div class="py-5">
                  <!--begin::Suggestions-->
                  <div data-kt-search-element="suggestions">
                    <!--begin::Users-->
                    <div
                      id="searchContiner_address"
                      class="mh-375px scroll-y me-n7 pe-7"
                    >
                      <a
                        v-for="(address, i) in custemerAddress"
                        :key="i"
                        class="
                          align-items-center
                          p-3
                          rounded
                          bg-state-light bg-state-opacity-50
                          mb-1
                        "
                        style="display: flex"
                        @click="setAddress(address)"
                      >
                        <span class="d-none">
                          {{ address.address }}
                        </span>

                        <div class="fw-bold">
                          <span class="fs-6 text-gray-800 me-2">{{
                            address.area_name
                          }}</span>
                          <span class="badge badge-light">{{
                            address.address
                          }}</span>
                        </div>
                      </a>
                    </div>
                    <!--end::Users-->
                  </div>
                  <!--end::Suggestions-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Search-->
            </div>
            <!--end::Modal body-->
          </div>
          <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
      </div>

      <div
        v-if="isBusiness"
        id="kt_modal_resivers_search"
        aria-hidden="true"
        class="modal fade"
        tabindex="-1"
      >
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-650px">
          <!--begin::Modal content-->
          <div class="modal-content">
            <!--begin::Modal header-->
            <div class="modal-header pb-0 border-0 justify-content-end">
              <!--begin::Close-->
              <div
                class="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
                </span>
              </div>
              <!--end::Close-->
            </div>
            <!--begin::Modal header-->
            <!--begin::Modal body-->
            <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              <!--begin::Content-->
              <div class="text-center mb-13">
                <h1 class="mb-3">{{ $t("Search in your resivers") }}</h1>
              </div>
              <!--end::Content-->
              <!--begin::Search-->
              <div
                id="kt_modal_resivers_search_handler"
                data-kt-search-enter="enter"
                data-kt-search-keypress="true"
                data-kt-search-layout="inline"
                data-kt-search-min-length="2"
              >
                <!--begin::Form-->
                <form
                  autocomplete="off"
                  class="w-100 position-relative mb-5"
                  data-kt-search-element="form"
                >
                  <span
                    class="
                      svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                      position-absolute
                      top-50
                      ms-5
                      translate-middle-y
                    "
                  >
                    <inline-svg src="/media/icons/duotune/general/gen021.svg" />
                  </span>
                  <!--end::Svg Icon-->
                  <!--end::Icon-->
                  <!--begin::Input-->
                  <input
                    id="userSerach"
                    class="
                      form-control form-control-lg form-control-solid
                      px-15
                    "
                    data-kt-search-element="input"
                    name="search"
                    :placeholder="$t('Search by username')"
                    type="text"
                    value=""
                    @keyup="serchInHtml('userSerach', 'userSerachContiner')"
                  />
                  <!--end::Input-->
                  <!--begin::Spinner-->
                  <span
                    class="
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      d-none
                      me-5
                    "
                    data-kt-search-element="spinner"
                  >
                    <span
                      class="
                        spinner-border
                        h-15px
                        w-15px
                        align-middle
                        text-muted
                      "
                    ></span>
                  </span>
                  <!--end::Spinner-->
                  <!--begin::Reset-->
                  <span
                    class="
                      btn btn-flush btn-active-color-primary
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      lh-0
                      me-5
                      d-none
                    "
                    data-kt-search-element="clear"
                  >
                    <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                      <inline-svg
                        src="/media/icons/duotune/arrows/arr061.svg"
                      />
                    </span>
                  </span>
                  <!--end::Reset-->
                </form>
                <!--end::Form-->
                <!--begin::Wrapper-->
                <div class="py-5">
                  <!--begin::Suggestions-->
                  <div data-kt-search-element="suggestions">
                    <!--begin::Users-->
                    <div
                      id="userSerachContiner"
                      class="mh-375px scroll-y me-n7 pe-7"
                    >
                      <a
                        v-for="(reciver, i) in custemerresivers"
                        :key="i"
                        class="
                          align-items-center
                          p-3
                          rounded
                          bg-state-light bg-state-opacity-50
                          mb-1
                        "
                        style="display: flex"
                        @click="setResiver(reciver)"
                      >
                        <span class="d-none"
                          >{{ reciver.reciever_address }}
                          {{ reciver.reciever_phone }}
                          {{ reciver.reciever_name }}
                        </span>

                        <div class="fw-bold">
                          <span class="fs-6 text-gray-800 me-2">
                            {{ reciver.reciever_address }}
                          </span>
                          <span class="badge badge-light">
                            {{ reciver.reciever_name }}
                          </span>
                          <span class="badge badge-light">
                            {{ reciver.reciever_phone }}
                          </span>
                        </div>
                      </a>
                    </div>
                    <!--end::Users-->
                  </div>
                  <!--end::Suggestions-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Search-->
            </div>
            <!--end::Modal body-->
          </div>
          <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
      </div>
    </template>
  </div>

  <template v-if="OrderFinshed && invoice.id">
    <invoice
      v-bind:invoiceData="invoice"
      v-bind:orderData="order"
      @close="makeNewOrder()"
    ></invoice>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import "flatpickr/dist/flatpickr.css";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import flatPickr from "vue-flatpickr-component";
import Invoice from "@/views/print/invoice.vue";
import { hideModal } from "@/core/helpers/dom";
import { mapGetters } from "vuex";
import store from "@/store";

import { default as StripeCard } from "@/components/StripeVueCard.vue";
import { default as SArea } from "@/views/admin/locations/area.vue";
import { default as RArea } from "@/views/admin/locations/area.vue";
import * as Yup from "yup";

// import { StripeElementCard } from '@vue-stripe/vue-stripe';

const today = new Date();
let createOrderSchema = [];

export default defineComponent({
  name: "site-index",
  components: {
    StripeCard,
    RArea,
    SArea,
    Invoice,
    flatPickr,
  },
  data() {
    return {
      loadingPrice: false,
      loading: false,
      toc: false,
      custemerresivers: [],
      custemerAddress: [],
      orderErrors: {},
      searchStatus: 0, // 1 for sender 2 for recivers
      services: [],
      order: {
        items: [{ quantity: 1 }],
        price: 0,
        // service_id: 0,
        length: -1,
        height: -1,
        weight: -1,
        width: -1,
        service_number: 1,
      },
      step: 1,
      isAuth: false,
      types: [],
      isCustemService: false,

      date: "",
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
      sercheMode: 0,
      payments: [],
      invoice: {},
      isBusiness: false,
      OrderFinshed: false,
      currencies: [],
      rqMessage: {},
      diffMessage: {},
      temp: {},
      card: {},
      servicedimintions: [],
    };
  },
  beforeCreate() {
    this.isAuth = JwtService.isCustomer();
    ApiService.get("site/GeneralData").then((res) => {
      this.services = res.data.services;
      this.types = res.data.types;
      this.payments = res.data.payments;
      this.currencies = res.data.currencies;
    });

    // this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ (today.getDate()+1);
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
    if (JwtService.isCustomer()) {
      if (JwtService.isBusiness()) this.isBusiness = true;

      ApiService.get("site/customer/myData").then((res) => {
        this.custemerAddress = res.data.adderss;
        this.custemerresivers = res.data.recievers;
      });
    }

    this.rqMessage = [this.$t("messages.validation.required")];
    this.diffMessage = [this.$t("messages.validation.diff")];
    const matchesMessage = this.$t("messages.validation.matches");

    createOrderSchema = [
      Yup.object({
        service_id: Yup.number().required().min(1),

        // sender_area_id: Yup.number().required(),
        sender_county_id: Yup.number().required(),
        sender_country_id: Yup.number().required(),

        receiver_country_id: Yup.number().required(),
        receiver_county_id: Yup.number().required(),
        // receiver_area_id: Yup.number().required(),
      }),
      Yup.object({
        date: Yup.date().required().min(1),
        service_id: Yup.number().required(),
      }),
      Yup.object({
        receiver_email: Yup.string().nullable().email(),
        receiver_address: Yup.string().required().min(5),
        receiver_name: Yup.string().required().min(5),
        receiver_phone: Yup.string()
          .required()
          .matches(
            /^(\+?\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            matchesMessage
          )
          .min(10),
        receiver_floor: Yup.string().required().min(1),

        sender_email: Yup.string().nullable().email(),
        sender_address: Yup.string().required().min(5),
        sender_name: Yup.string().required().min(5),
        sender_phone: Yup.string()
          .required()
          .matches(
            /^(\+?\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            matchesMessage
          )
          .min(10),
        sender_floor: Yup.string().required().min(1),
      }),
      Yup.object({
        payment_id: Yup.number().required(),
        toc: Yup.boolean().required(),
      }),
    ];
  },
  computed: {
    ...mapGetters([
      "currency_iso_code",
      "currency_symbol",
      "currency_multiplier",
    ]),
    isEmployee() {
      return JwtService.isEmployee();
    },
    servicesOrdered() {
      let tempServices = [];
      for (let s in this.services) {
        if (this.services[s].parent_id == 0)
          tempServices.push(this.services[s]);
      }
      tempServices.sort((a, b) => {
        return parseInt(a.index) - parseInt(b.index);
      });
      return tempServices;
    },
    isMultiple() {
      if (this.order.service && this.order.service.multiple == 1) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async onComplete() {
      if (this.order.service["require_items"] == 0) {
        this.order.items = [];
      }
      if (this.toc == false) {
        this.orderErrors["toc"] = [this.$t("You must agree to the terms")];
        this.$toast.error(this.$t("You must agree to the terms"));
        return;
      }
      this.orderErrors["payment_id"] = {};
      if (
        !this.order["payment_id"] ||
        !this.payments[this.order["payment_id"]]
      ) {
        this.orderErrors["payment_id"] = [this.$t("payment is required")];
        return;
      }
      // check payment Card
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
          this.$toast.error(this.$t("Please check payment details"));
          this.loading = false;
          return;
        }
      } else {
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
          this.loading = false;
        })
        .catch(() => {
          this.orderErrors = ApiService.errors;
          this.loading = false;
        });
    },
    async next() {
      this.orderErrors = {};

      await this.validat();
      if (Object.keys(this.orderErrors).length == 0 && this.step < 4) {
        this.step += 1;
      } else {
        this.$toast.error(this.$t("Please Check The Data"));
      }
    },
    async validat() {
      let check = false;
      let Cuservice = this.services[0];
      if (this.order["service_id"]) Cuservice = this.order.service;

      let errors = {};
      if (createOrderSchema[this.step - 1]) {
        await createOrderSchema[this.step - 1]
          .validate(this.order, { abortEarly: false })
          .then(function () {
            errors = {};
          })
          .catch(function (err) {
            err.inner.forEach((e) => {
              errors[e.path] = [e.message];
            });
          });
      }

      this.orderErrors = errors;

      switch (this.step) {
        case 2:
          if (Cuservice["require_items"] && Cuservice["require_items"] == 1) {
            if (
              this.order.items.length < 0 &&
              this.order.items[0]["type_id"] <= 0
            ) {
              this.orderErrors["require_items"] = this.$t(
                "validation.required"
              );
            }
          } else if (Cuservice["require_items"] == 0) {
            this.order.items = [{ quantity: 0 }];
          } else check = false;

          if (
            Object.keys(this.orderErrors).length == 0 &&
            this.order.service.id
          ) {
            if (Cuservice["height"] != 0)
              this.order.height = Cuservice["height"];
            else {
              this.isCustemService = true; //
            }
            if (Cuservice["length"] != 0)
              this.order.length = Cuservice["length"];
            else {
              this.isCustemService = true;
            }
            if (Cuservice["weight"] != 0)
              this.order.weight = Cuservice["weight"];
            else {
              this.isCustemService = true;
            }
            if (Cuservice["width"] != 0) this.order.width = Cuservice["width"];
            else {
              this.isCustemService = true;
            }
            check = true;
          }
          break;
        case 4:
          break;
      }

      return check;
    },
    async calcPrice() {
      this.loadingPrice = true;
      this.order.price = 0;
      // this.invoice = {code:10, name:'ahmed'}
      // if (!this.isCustemService)
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
    previous() {
      if (this.step > 1) this.step -= 1;
      else this.$toast.error(this.$t("you in first step"));
    },
    setService(service, sub) {
      this.order.service_id = service.id;
      this.order.service = service;
      if (!sub) {
        ApiService.get("site/get/types/" + service.id).then((res) => {
          this.types = res.data.serviceTypes;
          if (service.parent_id == 0) {
            this.servicedimintions = res.data.servicedimintions;
            this.order.service = res.data.service;
          }
          this.order.items = [{ quantity: 1 }];
        });
      }
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
      this.goDown();
    },
    validateObject(object, array) {
      // let message = this.t('message.required');
      array.forEach((key) => {
        if (!object[key] || object[key] == "" || object[key] == 0)
          this.orderErrors[key] = this.rqMessage;
      });

      return true;
    },
    setAddress(address) {
      if (this.sercheMode == 1) {
        this.$refs.AreaDataSender.setAddress(address);
        this.order["sender_zip"] = address.zip;
      } else {
        this.$refs.AreaDataReceiver.setAddress(address);
        this.order["receiver_zip"] = address.zip;
      }
      this.calcPrice();
      hideModal("kt_modal_address_search");
    },
    setResiver(resiver) {
      if (this.sercheMode != 2) {
        this.order["sender_address"] = resiver.reciever_address;
        this.order["sender_zip"] = resiver.reciever_zip;
        this.order["sender_floor"] = resiver.reciever_floor;
        this.order["sender_name"] = resiver.reciever_name;
        this.order["sender_email"] = resiver.reciever_email;
        this.order["sender_phone"] = resiver.reciever_phone;
      } else {
        this.order["receiver_address"] = resiver.reciever_address;
        this.order["receiver_zip"] = resiver.reciever_zip;
        this.order["receiver_floor"] = resiver.reciever_floor;
        this.order["receiver_name"] = resiver.reciever_name;
        this.order["receiver_email"] = resiver.reciever_email;
        this.order["receiver_phone"] = resiver.reciever_phone;
      }
      this.calcPrice();
      hideModal("kt_modal_resivers_search");
    },
    serchInHtml(inputId, CDivId) {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById(inputId);
      filter = input.value.toUpperCase();
      ul = document.getElementById(CDivId);
      li = ul.getElementsByTagName("a");
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "flex";
        } else {
          li[i].style.display = "none";
        }
      }
    },
    goDown() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    },
    onSearch(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    checkServiceNumber() {
      if (this.order.service_number < 1) this.order.service_number = 1;
    },
    changeServiceNumberBy(count) {
      this.order.service_number += count;
      this.checkServiceNumber();
    },
    makeNewOrder() {
      window.location.reload();
    },
    setLocationDataSender(op) {
      this.order["sender_area_id"] = op.sender_area_id;
      this.order["sender_county_id"] = op.sender_county_id;
      this.order["sender_country_id"] = op.sender_country_id;
      if (op.sender_country) {
        this.temp.sender_country = op.sender_country;
      }
      this.calcPrice();
    },
    setLocationDataResiver(op) {
      this.order["receiver_area_id"] = op.receiver_area_id;
      this.order["receiver_county_id"] = op.receiver_county_id;
      this.order["receiver_country_id"] = op.receiver_country_id;
      if (op.receiver_country) {
        this.temp.receiver_country = op.receiver_country;
      }
      this.calcPrice();
    },
    paymentCreated(data) {
      this.order["payment_data"] = data;
      //this.onComplete();
    },
    setDimintion(dimintion) {
      this.order.length = dimintion.length;
      this.order.width = dimintion.width;
      this.order.height = dimintion.height;
      this.order.weight = dimintion.weight;
      this.calcPrice();
    },
    fillOrder(object) {
      Object.keys(object).forEach((value) => {
        if (value.search("temp_") > -1) this.temp[value] = object[value];
        else this.order[value] = object[value];
      });
      this.calcPrice();
    },
    showStripe(payment) {
      if (payment.show_card == 1) {
        this.order.payment_key = payment.user;
      }
      this.order.show_card = payment.show_card;
    },
  },
  watch: {
    "temp.temp_sender_phone": function (val) {
      if (this.temp.sender_country && this.temp.sender_country.phone_code) {
        this.order.sender_phone =
          this.temp.sender_country.phone_code +
          val.replace(this.temp.sender_country.phone_code, "");
      } else this.order.sender_phone = val;
    },
    "temp.temp_receiver_phone": function (val) {
      if (this.temp.receiver_country && this.temp.receiver_country.phone_code) {
        this.order.receiver_phone =
          this.temp.receiver_country.phone_code +
          val.replace(this.temp.receiver_country.phone_code, "");
      } else this.order.receiver_phone = val;
    },
  },
});
</script>
