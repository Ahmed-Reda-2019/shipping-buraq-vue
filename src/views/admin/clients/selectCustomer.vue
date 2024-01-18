<template>
  <div class="w-100">
    <div class="mb-5">
      <!--begin::Label-->
      <label class="required fs-6 fw-bold mb-2 d-block" >
        {{ text ? text : $t("Select Client") }}
        {{ customer.code ? customer.name : "" }}
      </label>
      <!--end::Label-->
      <div class="d-flex">
      <!--begin::Select-->
      <el-select
        v-model="customer.id"
        :loading="loading"
        :remote-method="remoteMethod"
        class="w-100"
        filterable
        :placeholder="$t('Search')"
        remote
        @change="()=>{
          if(customer.id && customers[customer.id]){
            customer = customers[customer.id];
            $emit('result', customer)
          }else
            $emit('result', {id:0})
        }"
      >
        <el-option
          v-for="item in customers"
          :key="item.id"
          :value="item.id"
          :label="item.code + ' - ' + item.name"
        >
        {{ item.code + ' - ' + item.name }}
      </el-option>
      </el-select>
      <a class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default"
         data-bs-target="#kt_modal_add_customer"
         data-bs-toggle="modal"
      >
        <i class="fa fa-plus"></i>
      </a>
      </div>
      <!--end::Select-->
    </div>
  </div>
  <div
      id="kt_modal_add_customer"
      ref="addCustomerModalRef"
      aria-hidden="true"
      class="modal fade"
      tabindex="-1"
      v-if="showAdd == true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-950px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div id="kt_modal_add_customer_header" class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">{{ $t("addCustomer") }}</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
              id="kt_modal_add_customer_close"
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
        <!--begin::Form-->
        <client-form
            :formData="customerForm"
            :formErrorProp="formDataErroes"
            @submitForm="submitformData"
            :loadingSubmit="loading"
        ></client-form>
        <!--end::Form-->
      </div>
    </div>
  </div>

</template>

<script>
import ApiService from "@/core/services/ApiService";
import ClientForm from "@/views/admin/clients/ClientForm.vue";
import {hideModal} from "@/core/helpers/dom";

export default {
  name: "selectCustomer",
  components: {ClientForm},
  // props: ["text" , 'showAdd'],
  props: {
    text: String,
    showAdd: {type: Boolean,default:true},
    url: {type: String,default: "admin/select/customer?search="},
  },
  data() {
    return {
      customerForm:{},
      formDataErroes:{},
      customer: {},
      customers: [],
      loading: false,
    };
  },
  methods: {
    async remoteMethod(query) {
      this.loading = true;
      await ApiService.post(this.url + query)
        .then((res) => {
          this.customers = res.data;
          this.loading = false;
        })
        .catch(() => {
          this.customers = [];
          this.loading = false;
        });
    },
    async submitformData() {
      this.loading = true;
      this.formDataErroes = [];
      await ApiService.post("admin/customers", this.customerForm)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          // this.$toast.success(this.$t("messages.success"));
          this.customer = res.data.data;
          console.log(this.customer);
          hideModal("kt_modal_add_customer");
          this.$emit('result', this.customer)
          this.customerForm = {};
          this.custemers[res.data.data.id] = res.data.data;
        }
      })
      .catch(() => {
        this.formDataErroes = ApiService.errors;
      })
      .finally(() => {
        this.loading = false;
      });
    },

  },
};
</script>
