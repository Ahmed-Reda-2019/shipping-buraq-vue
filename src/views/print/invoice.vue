<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="kt_content" class="content flex-row-fluid">
      <!--begin::Invoice 2 main-->
      <div v-show="!forSticker" id="current-invoice" class="card">
        <!--begin::Body-->
        <div class="card-body p-lg-20">
          <!--begin::Layout-->
          <div class="d-flex flex-column flex-xl-row">
            <!--begin::Content-->
            <div class="flex-lg-row-fluid me-xl-18 mb-xl-0">
              <!--begin::Invoice 2 content-->
              <div class="mt-n1">
                <!--begin::Top-->
                <div class="d-flex flex-stack pb-10 justify-content-around">
                  <!--begin::Logo-->
                  <a href="#">
                    <img
                      v-if="
                        invoiceData.sender &&
                        invoiceData.sender.is_bussness == 1 &&
                        invoiceData.sender.logo != null
                      "
                      :src="invoiceData.sender.logo"
                      alt="Logo"
                      class="h-100px"
                    />
                    <img
                      v-else
                      :src="setting.getVal('site_main_image')"
                      alt="Logo"
                      class="h-100px"
                    />
                  </a>
                  <!--end::Logo-->
                  <a
                    class="btn btn-success d-print-none"
                    @click="printCurrentInvoice()"
                  >
                    <i class="bi bi-printer pe-3 d-print-none"></i>
                    {{ $t("Print Invoice") }}
                  </a>

                  <a @click="printQrcode" class="btn btn-success d-print-none">
                    <i class="fas fa-barcode p-0"></i>
                    {{ $t("Print Label") }}
                  </a>

                  <a
                    class="btn btn-primary d-print-none"
                    @click="$emit('close')"
                  >
                    {{ $t("home.startYourOrder") }}
                  </a>

                  <!--end::Action-->
                </div>
                <!--end::Top-->
                <!--begin::Wrapper-->
                <div class="m-0">
                  <!--begin::Label-->
                  <div class="fw-bolder fs-3 text-gray-800 mb-8">
                    {{ $t("invoice") }} : {{ invoiceData.code }}
                  </div>
                  <!--end::Label-->
                  <!--begin::Row-->
                  <div class="row g-5 mb-11">
                    <!--end::Col-->
                    <div class="col-sm-6 col-print-6">
                      <!--end::Label-->
                      <div class="fw-bold fs-7 text-gray-600 mb-1">
                        {{ $t("issueDate") }}:
                      </div>
                      <!--end::Label-->
                      <!--end::Col-->
                      <div class="fw-bolder fs-6 text-gray-800">
                        {{ formatDate(invoiceData.created_at) }}
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Col-->
                    <!--end::Col-->
                    <div class="col-sm-6 col-print-6">
                      <!--end::Label-->
                      <div class="fw-bold fs-7 text-gray-600 mb-1">
                        {{ $t("dueDate") }}:
                      </div>
                      <!--end::Label-->
                      <!--end::Info-->
                      <div
                        class="
                          fw-bolder
                          fs-6
                          text-gray-800
                          d-flex
                          align-items-center
                          flex-wrap
                        "
                      >
                        <span class="pe-2">{{ invoiceData.date }}</span>
                      </div>
                      <!--end::Info-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Row-->
                  <!--begin::Row-->
                  <div class="row g-5 mb-12">
                    <!--end::Col-->
                    <div class="col-sm-6 col-print-6">
                      <!--end::Label-->
                      <div class="fw-bold fs-7 text-gray-600 mb-1">
                        {{ $t("issuedBy") }}:
                        <span class="fw-bolder fs-6 text-gray-800">
                          {{ invoiceData.sender_name }}
                        </span>
                      </div>
                      <!--end::Label-->
                      <!--end::Text-->
                      <!--end::Text-->
                      <!--end::Description-->
                      <div class="fw-bolder fs-6 text-gray-800">
                        {{ $t("from") }} <br />
                      </div>
                      <div class="fw-bold fs-7 text-gray-600">
                        {{ invoiceData.sender_address }}
                        <br />
                        {{ invoiceData.fromAdrress }} <br />
                        {{ $t("zip") }} :
                        {{
                          invoiceData.sender_zip == null
                            ? "-"
                            : invoiceData.sender_zip
                        }}
                        <br />
                        {{ $t("floor") }} : {{ invoiceData.sender_floor }}
                        <br />
                        {{ $t("receiver_phone") }} :
                        <span class="text-end">
                          {{ invoiceData.sender_phone }}
                        </span>
                        <br />
                        {{ $t("receiver_email") }} :
                        {{
                          invoiceData.sender_email == null
                            ? "-"
                            : invoiceData.sender_email
                        }}
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Row-->
                    <!--end::Col-->
                    <div class="col-sm-6 col-print-6">
                      <!--end::Label-->
                      <div class="fw-bold fs-7 text-gray-600 mb-1">
                        {{ $t("issueFor") }}:
                        <span class="fw-bolder fs-6 text-gray-800">
                          {{ invoiceData.receiver_name }}
                        </span>
                      </div>
                      <!--end::Label-->
                      <!--end::Text-->

                      <!--end::Text-->
                      <div class="fw-bolder fs-6 text-gray-800">
                        {{ $t("to") }} <br />
                      </div>
                      <!--end::Description-->
                      <div class="fw-bold fs-7 text-gray-600">
                        {{ invoiceData.receiver_address }}
                        <br />
                        {{ invoiceData.toAdrress }} <br />
                        {{ $t("zip") }} :
                        {{
                          invoiceData.receiver_zip == null
                            ? "-"
                            : invoiceData.receiver_zip
                        }}
                        <br />
                        {{ $t("floor") }} : {{ invoiceData.receiver_floor }}
                        <br />
                        {{ $t("receiver_phone") }} :
                        <span class="text-end">
                          {{ invoiceData.receiver_phone }}
                        </span>
                        <br />
                        {{ $t("receiver_email") }} :
                        {{
                          invoiceData.receiver_email == null
                            ? "-"
                            : invoiceData.receiver_email
                        }}
                      </div>
                      <!--end::Description-->
                    </div>
                    <!--end::Col-->
                    <div v-if="invoiceData.service" class="text text-center">
                      <h1 class="fs-2x">
                        {{ $t("service") }} : {{ invoiceData.service.name }} -
                        {{ $t("counts") }} : {{ invoiceData.service_number }}
                      </h1>
                      <br />
                      <table class="table mb-3">
                        <thead>
                          <tr class="border-bottom fs-6 fw-bolder text-muted">
                            <th
                              v-if="!['-1', '0'].includes(invoiceData.length)"
                              class="pb-2"
                            >
                              {{ $t("length") }} : {{ invoiceData.length }}m
                            </th>
                            <th
                              v-if="!['-1', '0'].includes(invoiceData.width)"
                              class="pb-2"
                            >
                              {{ $t("width") }} : {{ invoiceData.width }}m
                            </th>
                            <th
                              v-if="!['-1', '0'].includes(invoiceData.height)"
                              class="pb-2"
                            >
                              {{ $t("height") }} : {{ invoiceData.height }}m
                            </th>
                            <th
                              v-if="!['-1', '0'].includes(invoiceData.weight)"
                              class="pb-2"
                            >
                              {{ $t("weight") }} : {{ invoiceData.weight }}kg
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <!--begin::Content-->
                    <div class="flex-grow-1">
                      <!--begin::Table-->
                      <div
                        v-if="invoiceData.items && invoiceData.items.length > 0"
                        class="table-responsive border-bottom mb-9"
                      >
                        <table class="table mb-3">
                          <thead>
                            <tr class="border-bottom fs-6 fw-bolder text-muted">
                              <th class="pb-2">#</th>
                              <th class="pb-2">{{ $t("type") }}</th>
                              <th class="min-w-70px text-end pb-2">
                                {{ $t("other_content") }}
                              </th>
                              <th class="min-w-80px text-end pb-2">
                                {{ $t("quantity") }}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, iItem) in invoiceData.items"
                              :key="iItem"
                              class="fw-bolder text-gray-700 fs-5 text-end"
                            >
                              <td class="pt-6">{{ iItem + 1 }}</td>
                              <td class="d-flex align-items-center pt-6">
                                <i
                                  class="
                                    fa fa-genderless
                                    text-success
                                    fs-2
                                    me-2
                                  "
                                ></i>
                                {{ item.type.name }}
                              </td>
                              <td class="pt-6">{{ item.other_content }}</td>
                              <td class="pt-6 text-dark fw-boldest">
                                {{ item.quantity }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--end::Table-->
                      <!--begin::Container-->
                      <div class="row">
                        <div class="col-12 col-md-8 col-print-8">
                          <img
                            :src="invoiceData.qrcode"
                            alt="image"
                            class="me-6"
                            style="width: 120px"
                          />
                          <img
                            :src="invoiceData.barcode"
                            alt="image"
                            class="mt-3 w-300px h-80px"
                          />
                        </div>

                        <div class="col-12 col-md-4 col-print-4">
                          <div class="d-flex flex-stack mb-3">
                            <!--begin::Accountname-->
                            <div class="fw-bold pe-10 text-gray-600 fs-7">
                              {{ $t("Payment") }}:
                            </div>
                            <!--end::Accountname-->
                            <!--begin::Label-->
                            <div
                              v-if="invoiceData.payment"
                              class="text-end fw-bolder fs-6 text-gray-800"
                            >
                              {{ invoiceData.payment.name }}
                            </div>
                            <!--end::Label-->
                          </div>
                          <div class="d-flex flex-stack mb-3">
                            <!--begin::Accountname-->
                            <div class="fw-bold pe-10 text-gray-600 fs-7">
                              {{ $t("shippingCost") }}:
                            </div>
                            <!--end::Accountname-->
                            <!--begin::Label-->
                            <div class="text-end fw-bolder fs-6 text-gray-800">
                              {{
                                invoiceData.shippingCurrency
                                  ? (
                                      invoiceData.shipping_cost *
                                      invoiceData.shippingCurrency.multiplier
                                    ).toFixed(2)
                                  : invoiceData.shipping_cost
                              }}
                              <template
                                v-if="
                                  invoiceData.shippingCurrency &&
                                  invoiceData.shippingCurrency.symbol
                                "
                              >
                                {{ invoiceData.shippingCurrency.symbol }}
                              </template>
                            </div>
                            <!--end::Label-->
                          </div>
                          <div class="d-flex flex-stack mb-3">
                            <!--begin::Accountname-->
                            <div class="fw-bold pe-10 text-gray-600 fs-7">
                              {{ $t("shipping_paid") }}:
                            </div>
                            <!--end::Accountname-->
                            <!--begin::Label-->
                            <div class="text-end fw-bolder fs-6 text-gray-800">
                              <span v-if="invoiceData.shipping_paid == 1">
                                {{ $t("yes") }}
                              </span>
                              <span v-if="invoiceData.shipping_paid == 0">
                                {{ $t("no") }}
                              </span>
                            </div>
                            <!--end::Label-->
                          </div>

                          <div class="d-flex flex-stack mb-3">
                            <!--begin::Accountname-->
                            <div class="fw-bold pe-10 text-gray-600 fs-7">
                              {{ $t("collect_money") }}:
                            </div>
                            <!--end::Accountname-->
                            <!--begin::Label-->
                            <div class="text-end fw-bolder fs-6 text-gray-800">
                              <template
                                v-if="
                                  invoiceData.bussiness_collect_money &&
                                  invoiceData.bussiness_collect_money > 0
                                "
                              >
                                <div class="d-flex flex-stack mb-3">
                                  <!--begin::Accountname-->
                                  <div
                                    class="
                                      text-end
                                      fw-bolder
                                      pe-1
                                      text-gray-800
                                      fs-6
                                    "
                                  >
                                    {{ invoiceData.bussiness_collect_money }}
                                  </div>
                                  <!--end::Accountname-->
                                  <!--begin::Label-->
                                  <div
                                    class="
                                      text-end
                                      fw-bolder
                                      fs-6
                                      text-gray-800
                                    "
                                  >
                                    {{
                                      invoiceData.bussiness_collect_money_currency
                                    }}
                                  </div>
                                  <!--end::Label-->
                                </div>
                              </template>
                              <div
                                v-else
                                class="text-end fw-bolder fs-6 text-gray-800"
                              >
                                {{ $t("no") }}
                              </div>
                            </div>
                            <!--end::Label-->
                          </div>
                        </div>

                        <div
                          class="
                            col-12 col-print-12
                            d-flex
                            justify-content-center
                          "
                        >
                          <img
                            v-if="
                              invoiceData.sender &&
                              invoiceData.sender.is_bussness == 1 &&
                              invoiceData.sender.logo != null
                            "
                            :src="setting.getVal('site_main_image')"
                            alt="image"
                            class="mt-10 ms-5 h-50px"
                          />
                        </div>
                      </div>
                      <!--end::Container-->
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Wrapper-->
                </div>
                <!--end::Invoice 2 content-->
              </div>
              <!--end::Content-->
            </div>
            <!--end::Layout-->
          </div>
          <!--end::Body-->
        </div>
      </div>
      <!--end::Invoice 2 main-->
    </div>
    <!--end::Post-->
  </div>
  <div id="print-bar-code" class="card d-none">
    <bar-code v-bind:invoiceData="invoiceData"></bar-code>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import moment from "moment";
import Setting from "@/core/config/Setting";
import BarCode from "@/views/print/barCode";

export default defineComponent({
  name: "invoice",
  props: ["invoiceData", "orderData"],
  components: {
    BarCode,
  },
  data() {
    return {
      forSticker: false,
    };
  },
  computed: {
    setting() {
      return Setting;
    },
  },
  methods: {
    formatDate(d) {
      return moment(d).format("YYYY-MM-DD H:m");
    },
    async printQrcode() {
      BarCode.methods.printCurrentInvoice();
    },
    async printCurrentInvoice() {
      await this.$forceUpdate;

      let stylesHtml = "";
      document
        .querySelectorAll('link[rel="stylesheet"], style')
        .forEach(function (node) {
          stylesHtml += node.outerHTML;
        });

      let prtHtml = document.getElementById("current-invoice").innerHTML;
      prtHtml = prtHtml.replaceAll(
        Setting.getVal("site_main_image"),
        Setting.getVal("logo_print")
      );

      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
      <html class="ltr">
        <head>
          ${stylesHtml}
        </head>
        <body onload='setTimeout(()=>{window.print();window.close()},500)'>
          ${prtHtml}
        </body>
      </html>`);

      WinPrint.document.close();
      WinPrint.focus();
    },
  },
});
</script>
