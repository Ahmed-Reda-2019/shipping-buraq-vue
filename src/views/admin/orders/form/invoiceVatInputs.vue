<script lang="ts">
import {defineComponent} from 'vue'
import invoice from "@/views/print/invoice.vue";

export default defineComponent({
  name: "invoiceVatInputs",
  props: ['value' , 'errors' , 'index' , 'currencies'],
  data(){
    return{
      item:this.value
    }
  },
  watch:{
    value:{
      deep:true,
      handler: function (someData) {
        // check someData and eventually call
        this.item = someData;
      },
      immediate: true
    }
  },
  methods: {
    update(key, value) {
      this.$emit('update:'+ key, value)
    },
  },
  computed:{
    invoice() {
      return invoice;
    },
    myErrors(){
      return this.errors ??{};
    }
  }
})
</script>

<template>


  <div>
    <label class="required fs-6 fw-bold mb-2">
      {{ $t("total price") }}
    </label>
    <div class="row">
      <div class="col-6  p-0">
        <input
          :value="item.subtotal"
          @input="update('subtotal', $event.target.value)"
          class="form-control form-control"
          type="number"
          step=".5"
        />
      </div>

      <div class="col-6  p-0">
        <el-select v-model="item.currency_key" placeholder="Please input"
                   class="w-100"
                   @change="
                   item.currency =  currencies[item.currency_key];
                   item.currency_id =  currencies[item.currency_key].id;
                   update('currency' , value.currency);
                   update('currency_id' , item.currency_id);
                   update('currency_code' , item.currency.iso_code);
                   update('multiplier' , item.currency.multiplier);
                  ">
          <el-option
            v-for="(item, key) in currencies"
            :key="item.id"
            :label="item.iso_code +  '( ' + item.multiplier + ')'"
            :value="key"
          />
        </el-select>
      </div>

    </div>
  </div>
  <label class="form-check form-check-custom form-check-solid m-2">
    <el-switch v-model="item.prices_with_vat"
               :active-value="1"
               :inactive-value="0"
               @change="()=>{
                 if(item.prices_with_vat == 1){
                    item.p_vat = 0;
                    item.p_vat_value = 0
                  }
                 update('prices_with_vat', item.prices_with_vat)
               }"

    />

    <span class="form-check-label">
      {{$t('prices with vat')}}
    </span>
  </label>

  <div class="row" v-show="item.prices_with_vat != 1">
    <div class="col-6 p-0">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t("Vat") }} %
      </label>
      <input class="form-control"
             :value="item.vat"
             @input="update('vat', $event.target.value)"
             step="0.1" min="0" max="50" type="number"   />
    </div>
    <div class="col-6 p-0">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t("Vat Value") }}
      </label>
      <label class="form-control form-control-solid">
        <template v-if="item.vat && item.subtotal">
          {{ item.vat_value =  (item.vat/100) * item.subtotal  }}
        </template>
      </label>
    </div>
  </div>
  <template v-if="item.multiplier && item.subtotal">
    <div class="py-3 bold w-100">
      <label class=" fs-6 fw-bold mb-2">
        {{ $t("total") }}
      </label>
      <label class="form-control form-control-solid">
        {{Number( ( item.subtotal ) + parseFloat(item.vat_value)  ).toFixed(2) }}
        {{item.currency_code}}
      </label>
    </div>
  </template>


</template>

<style scoped>

</style>
