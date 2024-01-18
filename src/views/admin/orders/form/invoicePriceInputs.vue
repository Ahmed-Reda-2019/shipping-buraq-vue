<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "invoicePriceInputs",
  inheritAttrs: false,
  props: ['value', 'errors', 'index', 'currencies'],
  data() {
    return {
      item: this.value
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function (someData) {
        // check someData and eventually call
        this.item = someData;
      },
      immediate: true
    }
  },
  methods: {
    update(key, value) {
      this.$emit('update:' + key, value)
    },
  },
  computed: {
    myErrors() {
      return this.errors ?? {};
    }
  }
})
</script>

<template>


  <div>
    <label class="required fs-6 fw-bold mb-2">
      {{ $t("total price list") }}
    </label>
    <div class="row">
      <div class="col-6  p-0">
        <input
            :value="item.p_subtotal"
            @input="update('p_subtotal', $event.target.value)"
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
                   update('p_currency_key' , item.p_currency_key);
                   update('p_currency' , value.p_currency);
                   update('p_currency_id' , item.p_currency_id);
                   update('p_currency_code' , item.p_currency.iso_code);
                   update('p_multiplier' , item.p_currency.multiplier);
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

  <label class="form-check form-check-custom form-check-solid m-2">
    <el-switch v-model="item.p_prices_with_vat"
               :active-value="1"
               :inactive-value="0"
               @change="()=>{
                       if(item.p_prices_with_vat == 1){
                          item.p_vat = 0;
                          item.p_vat_value = 0
                      }
                 update('p_prices_with_vat', item.p_prices_with_vat)
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
             :value="item.p_vat"
             @input="update('p_vat', $event.target.value)"
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


</template>

<style scoped>

</style>
