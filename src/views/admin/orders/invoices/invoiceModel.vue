<script lang="ts">
import {defineComponent} from 'vue'
import InvoicePriceInputs from "@/views/admin/orders/form/invoicePriceInputs.vue";
import InvoiceItem from "@/views/admin/orders/form/invoiceItem.vue";

export default defineComponent({
  name: "invoiceModel",
  components: {InvoiceItem, InvoicePriceInputs},
  props: ['invoice', 'errors', 'index', 'currencies'],
  data(){
    return {
      item: this.invoice
    };
  },
  watch: {
    invoice: {
      deep: true,
      handler() {
        this.updateData();
      },
      immediate: true
    }
  },
  methods: {
    updateData() {
      this.$emit('update', this.invoice);
    },
  }
})
</script>

<template>
  <div
    id="kt_modal_edit_invoice"
    aria-hidden="true"
    class="modal fade"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">{{ $t("Invoice Data") }}
            <template v-if="item.id"> {{ $t('edit') }}  ( #{{ index}})</template>
          </h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            id="kt_modal_edit_invoice_close"
            class="btn btn-icon btn-sm btn-active-icon-primary"
            data-bs-dismiss="modal"
          >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
              </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Modal body-->

        <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">

          <div class="invoice-data row" >

            <div class="col-12 col-lg-8 col-md-6 row row-cols-1 row-cols-md-1 row-cols-lg-2">

              <div class="fv-row mb-2 w-100">
                <label class="required fs-6 fw-bold mb-2 d-block">
                  {{ $t("Date") }}
                </label>
                <el-date-picker class="w-100" v-model="item.date" placeholder="Please input" clearable />
              </div>

              <div class="fv-row mb-2">
                <label class="required fs-6 fw-bold mb-2">
                  {{ $t("company name") }}
                </label>
                <el-input v-model="item.company.name" disabled clearable />
              </div>

              <div class="fv-row mb-2">
                <label class="required fs-6 fw-bold mb-2">
                  {{ $t("company name official") }}
                </label>
                <el-input v-model="invoice.company.title" />
              </div>
              <div class="fv-row mb-2">
                <label class="required fs-6 fw-bold mb-2">
                  {{ $t("contact Phone") }}
                </label>
                <el-input v-model="invoice.company.phone"  />
              </div>
              <div class="fv-row mb-2">
                <label class="required fs-6 fw-bold mb-2">
                  {{ $t("contacter Name") }}
                </label>
                <el-input v-model="invoice.company.res_name"  />
              </div>

              <div class="fv-row mb-2 w-100">

                <invoice-price-inputs
                  :value="invoice" :currencies="currencies" :errors="orderErrors"
                  v-model:p_subtotal="invoice.p_subtotal" :index="invoiceIndex"
                  v-model:p_currency="invoice.p_currency"
                  v-model:p_currency_id="invoice.p_currency_id"
                  v-model:p_currency_code="invoice.p_currency_code"
                  v-model:p_multiplier="invoice.p_multiplier"

                  v-model:p_vat="invoice.p_vat"
                  v-model:p_prices_with_vat="invoice.p_prices_with_vat"

                />
              </div>

              <div class="d-flex justify-content-between w-100">
                <h4>{{$t("Invoice Items")}}</h4>
                <div class="card-toolbar">
                  <a class="btn btn-sm btn-secondary" @click="invoice.items.push({ qty: 1 })">
                    {{$t('add Item')}}
                    <i class="fa fa-plus-circle"></i>
                  </a>
                </div>
              </div>

              <div class="w-100 row" v-for="(product , number) in invoice.items" :key="number">

                <invoice-item v-if="product.is_received != 0"  :value="product" :index="number" :errors="orderErrors"
                              v-model:name="product.name"
                              v-model:price="product.price"
                              v-model:qty="product.qty"
                              v-model:text="product.text"
                              @removeItem="(i)=>{ invoice.items.splice(i, 1) }"
                />
                <div v-else class="w-100">
                  {{product.name }} ({{product.qty}}) {{$t('Is Received')}}
                </div>

              </div>


              <div class="fv-row mb-2 w-100">
                <label class="required fs-6 fw-bold mb-2">
                  {{ $t("Shipping cost") }}
                </label>
                <el-input v-model="invoice.shipping_cost"  />
              </div>

            </div>
            <div class="col-12 col-lg-4 col-md-6">
              <div class="fv-row mb-2">
                <label class="required fs-6 fw-bold mb-2"
                >{{ $t("plz upload invoice image") }}
                </label>
                <input
                  :ref="`oImageFileInvoicePrices`"
                  class="form-control"
                  type="file"
                  @change="imageToInvoice(`oImageFileInvoicePrices`)"
                />
                <span v-if="orderErrors['file']" class="text-danger">{{
                    orderErrors["file"][0]
                  }}</span>
              </div>
              <div class="image-preview d-flex">
                <img
                  class="preview-invoice "
                  v-if="invoice.url"
                  :src="invoice.url"
                />
              </div>

              <div>

              </div>

            </div>
          </div>

        </div>
        <!--end::Modal body-->
        <div class="modal-footer">
          <button
            :data-kt-indicator="loading ? 'on' : null"
            :disabled="loading"
            class="btn btn-lg btn-primary me-3"
            data-kt-stepper-action="submit"
            type="button"
            @click="submitInvoice"
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
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<style scoped>

</style>
