<script setup lang="ts">

</script>

<template>
  <div class="fv-row mb-2 w-100 row">
    <h5 class="col-12"> {{$t('Invoice Date')}} </h5>

    <div class="col-12 col-md-6">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t("invoice price") }}
      </label>
      <el-input v-model="invoice.subtotal"   clearable />
    </div>

    <div class="col-12 col-md-6">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t("currency") }}
      </label>
      <el-select v-model="invoice.currency_id"  placeholder="Please input" @change="chnageCurency"  >
        <el-option
            v-for="item in allCurrencies"
            :key="item.id"
            :label="item.iso_code +  '( ' + item.multiplier + ')'"
            :value="item.id"
        />
      </el-select>
    </div>

  </div>


  <div class="fv-row mb-2 row">
    <div class="col-6">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t("Vat value") }}
      </label>
      <label class="form-control form-control-solid">
        <template v-if="invoice.p_vat && invoice.subtotal">
          {{ invoice.vat_value =  (invoice.p_vat/100) * invoice.subtotal  }}
        </template>
      </label>
    </div>
    <div class="col-6">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t("Vat different") }}
      </label>
      <label class="form-control form-control-solid ">
        <template v-if="invoice.vat_value && invoice.p_vat_value">
          {{ invoice.vat_value =  invoice.p_vat_value - invoice.vat_value  }}
        </template>
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>
