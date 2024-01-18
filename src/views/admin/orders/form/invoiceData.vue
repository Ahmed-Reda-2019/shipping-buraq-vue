<script lang="ts">
import {defineComponent} from 'vue'
import RemoteSelect from "@/views/admin/clients/RemoteSelect.vue";

export default defineComponent({
  name: "invoiceData",
  inheritAttrs: false,
  props: ['value', 'errors', 'index', 'currencies'],
  components: {
    RemoteSelect,
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
      // company.name = item.name;
      // company.title = item.title;
      // company.title = item.phone;
      // this.updateCompany()
    }
  },
  computed: {
    company(){
      if (!this.item.company)
        this.item.company = {}
      return this.item.company;
    },
    myErrors() {
      return this.errors ?? {};
    }
  }
})
</script>

<template>

  <pre>{{item}}</pre>
  <div class="fv-row mb-2 w-100">
    <label class="required fs-6 fw-bold mb-2 d-block">
      {{ $t("Date") }}
    </label>
    <el-date-picker class="w-100" v-model="item.date" placeholder="Please input" clearable />
  </div>

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
    <el-input v-model="company.title" disabled />
    <span v-if="errors[`invoices.${index}.title`]" class="text-danger">
      {{ errors[`invoices.${index}.title`][0] }}
    </span>
  </div>

  <div class="fv-row mb-2">
    <label class="fs-6 fw-bold mb-2">
      {{ $t("contact Phone") }}
    </label>
    <input
        v-model="company.phone"
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
        v-model="company.res_name"
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

    <div>
      <label class="form-check form-check-custom form-check-solid m-2">
        <el-switch v-model="item.p_prices_with_vat"
                   :active-value="1"
                   :inactive-value="0"
                   @change="()=>{
                       if(item.p_prices_with_vat == 1){
                          item.p_vat = 0;
                          item.p_vat_value = 0
                      }
                 //update('p_prices_with_vat', item.p_prices_with_vat)
               }"
        />

        <span class="form-check-label">
      {{ $t('prices with vat') }}
    </span>
      </label>

      <div class="row" v-show="item.p_prices_with_vat != 1">
        <div class="col-6 p-0">
          <label class="required fs-6 fw-bold mb-2">
            {{ $t("Vat") }} %
          </label>
          <input class="form-control"
                 v-model="item.p_vat"
                 step="0.1" min="0" max="50" type="number"/>

          <span v-if="errors[ `invoices.${index}.p_vat`]" class="text-danger">
          {{errors[`invoices.${index}.p_vat`][0] }}
        </span>
        </div>
        <div class="col-6 p-0">
          <label class="required fs-6 fw-bold mb-2">
            {{ $t("Vat Value") }}
          </label>
          <label class="form-control form-control-solid">
            <template v-if="item.p_vat && item.p_subtotal">
              {{ item.p_vat_value = (item.p_vat / 100) * item.p_subtotal }}
            </template>
          </label>
        </div>

      </div>
      <template v-if="item.p_multiplier && item.p_subtotal">
        <div class="py-3 bold w-100">
          <label class=" fs-6 fw-bold mb-2">
            {{ $t("total") }}
          </label>
          <label class="form-control form-control-solid">
            {{ (parseFloat(item.p_subtotal) + parseFloat(item.p_vat_value)).toFixed(2) }}
            {{ item.p_currency_code }}
          </label>
        </div>
      </template>


    </div>
  </div>
</template>

<style scoped>

</style>
