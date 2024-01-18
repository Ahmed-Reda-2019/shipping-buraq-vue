<script lang="ts">
import {defineComponent} from 'vue'
import RemoteSelect from "@/views/admin/clients/RemoteSelect.vue";
import { VueTelInput } from 'vue-tel-input'

export default defineComponent({
  name: "invoiceDataPrev",
  inheritAttrs: false,
  props: ['value', 'errors', 'index', 'currencies'],
  components: {
    RemoteSelect,
    // VueTelInput
  },
  data() {
    return {
      item: this.value
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.updateData();
      },
      immediate: true
    }
  },
  methods: {
    updateData() {
      this.$emit('update', this.value);
    },

    update(key, value) {
      this.$emit('update:' + key, value)
    },
    updateCompany() {
      this.$emit('update:company' , this.item.company)
    },
    setCompany(value){
      // console.log(value)
      this.item.company_id = value.id;
      this.item.company = value;
      // item.company.name = item.name;
      // item.company.title = item.title;
      // item.company.title = item.phone;
      // this.updateCompany()
    }
  },
  computed: {
    myErrors() {
      return this.errors ?? {};
    }
  }
})
</script>

<template>


  <div class="fv-row mb-2">
    <remote-select :text='$t("Company Name")' :url='`/admin/select/company`'
    @result="setCompany"></remote-select>
    <span v-if="errors[`invoices.${index}.company_id`]" class="text-danger">
      {{ errors[`invoices.${index}.company_id`][0] }}
    </span>
    <span v-if="errors[`invoices.${index}.company_id`]" class="text-danger">
      {{ errors[`invoices.${index}.company_id`][0] }}
    </span>
  </div>
  <div class="fv-row mb-2">
    <label class="required fs-6 fw-bold mb-2">
      {{ $t("company name official") }}
    </label>
    <el-input v-model="item.company.title" disabled />
    <span v-if="errors[`invoices.${index}.title`]" class="text-danger">
      {{ errors[`invoices.${index}.title`][0] }}
    </span>
  </div>

  <div class="fv-row mb-2">
    <label class="fs-6 fw-bold mb-2">
      {{ $t("contact Phone") }}
    </label>

    <!-- <VueTelInput v-model="item.company.phone"></VueTelInput> -->

    <input
        v-model="item.company.phone"
        class="form-control form-control"
        type="text"
        />

    <span v-if="errors[`invoices.${index}.phone`]" class="text-danger">
      {{ errors[`invoices.${index}.phone`][0] }}
    </span>
  </div>

  <div class="fv-row mb-2">
    <label class=" fs-6 fw-bold mb-2">
      {{ $t("contact with") }}
    </label>
    <input
        v-model="item.company.res_name"
        class="form-control form-control"
        type="text"
    />
    <span v-if="errors[`invoices.${index}.res_name`]" class="text-danger">
      {{ errors[`invoices.${index}.res_name`][0] }}
    </span>
  </div>

  <div class="w-100">
    <label class="required fs-6 fw-bold mb-2">
      {{ $t("total price list") }}
    </label>
    <div class="fv-row mb-2 row" >
      <div class="col-6  p-0">
        <input
            v-model="item.p_subtotal"
            class="form-control form-control"
            type="number"
            step=".5"
        />
        <span v-if="errors[ `invoices.${index}.p_subtotal`]" class="text-danger">
          {{errors[`invoices.${index}.p_subtotal`][0] }}
        </span>
      </div>

      <div class="col-6  p-0">
        <el-select v-model="item.p_currency_key" placeholder="Please input"
                   class="w-100"
                   @change="
                   item.p_currency =  currencies[item.p_currency_key];
                   item.p_currency_id =  currencies[item.p_currency_key].id;
                   item.p_multiplier = item.p_currency.multiplier;
                   // update('p_currency_key' , item.p_currency_key);
                   // update('p_currency' , value.p_currency);
                   // update('p_currency_id' , item.p_currency_id);
                   // update('p_currency_code' , item.p_currency.iso_code);
                  ">
          <el-option
            v-for="(item, key) in currencies"
            :key="item.id"
            :label="item.iso_code +  '( ' + item.multiplier + ')'"
            :value="key"
          />
        </el-select>
        <span v-if="errors[ `invoices.${index}.p_currency_key`]" class="text-danger">
          {{errors[`invoices.${index}.p_currency_key`][0] }}
        </span>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>
