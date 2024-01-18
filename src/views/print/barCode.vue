<template>
  <div
    id="kt_content_container"
    class="d-flex flex-column-fluid align-items-start container-xxl"
  >
    <!--begin::Post-->
    <div id="current-barCode" class="content flex-row-fluid">
      <!--begin::Invoice 2 main-->
      <template
        v-for="(box , i) in this.invoiceData.boxes"
        :key="i"
      >
        <div
          v-show="!forSticker"
          v-if="currentIndex == -1 || currentIndex == i "
          class="card barcode-item"
        >
          <!--begin::Body-->
          <div
            class="border border-dark rounded border-3 m-3 p-5"
            style="height: 586px"
          >

            <div class=" border-bottom border-1 border-dark w-100 d-flex justify-content-">
              <div
                class="justify-content-center pb-2 d-flex fs-1 fw-bolder">
                {{ t("Order_Nr") }}. :<span class="fs-1">
                {{
                  invoiceData.code
                }}
                <span v-if="invoiceData.customer.id" class="px-2 bg-black text-white">
                   ( {{invoiceData.customer.code}} )
                </span>
              </span>
              </div>
              <div class="col-6 ps-2 pb-2">
                <img
                  :src="invoiceData.barcode"
                  alt="Barcode image"
                  class="mt-3 h-40px float-end"
                  style="width: 210px"
                />
              </div>
            </div>
            <div class=" border-bottom border-1 border-dark w-100 row">
              <div
                class="
                flex-column
                justify-content-center
                col-7
                pb-2
                d-flex fw-bolder" >

                <p class="fs-2 ">
                  {{invoiceData.toAdrress}}
                </p>
                <div class="fs-4 ">

                  <p>
                    {{ invoiceData.address.to.address_1 }}
                  </p>
                  <p>
                    {{ invoiceData.address.to.address_2 }}
                  </p>
                  <p>
                    {{$t('tel')}} : {{ invoiceData.address.to.tel }}
                  </p>
                  <p>
                    {{$t('Vat')}} : {{ invoiceData.address.to.vat }}
                  </p>
                  <p>
                    {{$t('email')}} : {{ invoiceData.address.to.email }}
                  </p>
                </div>

              </div>
              <div class="col-5 ps-2 p-2">

                <img
                  v-if="box.qrcode"
                  :src="box.qrcode"
                  alt="image"
                  class="h-125px img-fluid float-center w-100"
                />

                <div class="fw-bolder py-2 text-center">
                  {{ t("Box_Nr") }}.:
                  <span class="fs-1 fw-bolder  text-white bg-black float-center ">{{ invoiceData.code }}:{{box.number}}</span>
                </div>

                <h3  class="bold text-center" >
                {{ (i + 1) }}
              </h3>
              </div>
            </div>


            <div
              class="
              d-flex
              pb-2
              justify-content-center
              border-bottom border-1 border-dark
            "
            >
              <img
                :src="setting.getVal('site_main_image')"
                alt="Logo"
                class="h-40px"
              />
            </div>

            <div class="d-flex border-bottom border-1 border-dark ">
              <div class="col-6 ps-2 pb-2 fw-bolder">
                <div class=" fs-4">
                  {{$t('Sender Data')}}
                </div>

                <div class="fw-bold fs-4">
                  {{ invoiceData.address.from.address_1 }}
                </div>
                <div class="fw-bold fs-4" v-if="invoiceData.address.from.address_2">
                  {{ invoiceData.address.from.address_2 }}
                </div>

                <template >


<!--                  <div class="fw-bold fs-4" v-if="invoiceData.address.from.vat">-->
<!--                    {{$t("Vat")}} : {{ invoiceData.address.from.vat }}-->
<!--                  </div>-->

                </template>
              </div>
              <div class="col-6 ps-2 pb-2">
                <div class=" fs-2">
                  {{ invoiceData.fromAdrress }}
                </div>
                <div class=" fs-2">
                  {{ invoiceData.address.from.email }}
                </div>
              </div>
            </div>


            <div class="d-flex border-bottom border-1 border-dark">
              <div
                class="
                flex-column
                justify-content-center
                col-8
                pb-2
                d-flex
                fs-1
                fw-bold
              "
              >
                <span class="fs-3">
                <span
                >{{ box.length }}m/</span
                >
                <span
                >{{ box.width }}m/</span
                >
                <span
                >{{ box.height }}m/</span
                >
                <span
                >{{ box.weight }}kg</span>
              </span>

              </div>
            </div>

            <div class="d-flex justify-content-center">
              &copy; {{ setting.getTitle("brand") }}
            </div>
          </div>
        </div>

      </template>
      <!--end::Invoice 2 main-->
    </div>
    <!--end::Post-->
  </div>
</template>
<style>
.barcode-item{
  width:100%;
  height:100%;
  page-break-after:always
}
</style>
<script>
import { defineComponent } from "vue";
import moment from "moment";
import { useI18n } from "vue-i18n";
import Setting from "@/core/config/Setting";

export default defineComponent({
  name: "invoice",
  props: ["invoiceData" , 'currentIndex'],
  data() {
    return {
      forSticker: false,
      //  service_number: 1,
    };
  },
  computed: {
    service_number() {
      if (this.invoiceData.service_number) {
        return Array.from(
          Array(parseInt(this.invoiceData.service_number)).keys()
        );
      }
      return [1];
    },
    setting() {
      return Setting;
    },
  },
  methods: {
    formatDate(d) {
      // return moment(d).format("LLLL");
      return moment(d).format("YYYY-MM-DD H:m");
    },
    t(text) {
      return useI18n().t(text);
    },

    async printCurrentInvoice() {
      await this.$forceUpdate;
      let stylesHtml = "";
      document
        .querySelectorAll('link[rel="stylesheet"], style')
        .forEach(function (node) {
          stylesHtml += node.outerHTML;
        });

      let prtHtml = document.getElementById("current-barCode").innerHTML;
      prtHtml = prtHtml.replaceAll(
        Setting.getVal("site_main_image"),
        Setting.getVal("logo_print")
      );
      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html> <html class="ltr">
        <head>
          ${stylesHtml}
        </head>
        <body onloadddd='setTimeout(()=>{window.print();window.close()},500)'>
          ${prtHtml}
        </body>
      </html>`);

      WinPrint.document.close();
      WinPrint.focus();
    },
  },
});
</script>
