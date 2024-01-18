<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "invoiceItem",
  props: ['value' , 'errors' , 'index' ,'types'],
  data(){
    return{
      item:this.value
    }
  },
  methods: {
    update(key, value) {
      this.$emit('update:'+key, value)
    },
  },
})
</script>

<template>

  <div
    class="col-12 col-md-5">
    <label class="form-label">{{ $t("Name") }} : ({{index+1}}) </label>
    <input
      :value="value.name" @input="update('name', $event.target.value)"
      class="form-control form-control"
      type="text"
    />
    <span v-if="errors[ `items.${index}.name`]" class="text-danger">
      {{errors[`items.${index}.name`][0] }}
    </span>
  </div>
  <div class="col-5 col-md-3">
    <label class="form-label">
      {{ $t("Quantity") }} :
    </label>
    <input
      :value="value.qty" @input="update('qty', $event.target.value)"
      class="form-control "
      min="1"
      type="number"
    />
    <span v-if="errors[ `items.${index}.qty`]" class="text-danger">
      {{errors[`items.${index}.qty`][0] }}
    </span>
  </div>
  <div class="col-5 col-md-3">
    <label class="form-label">
      {{ $t("price") }} :
    </label>
    <input
      :value="value.price" @input="update('price', $event.target.value)"
      class="form-control"
      min="1"
      step=".5"
      type="number"
    />
    <span v-if="errors[ `items.${index}.price`]" class="text-danger">
      {{errors[`items.${index}.price`][0] }}
    </span>
  </div>


  <div
    class="col-12 col-md-5">
    <label class="form-label">{{ $t("type") }} : ({{index+1}}) </label>
    <select
      :value="value.type_id"
      @input="update('type_id', $event.target.value)"
      class="form-control form-control"
    >
        <option v-for="type in types" :key="type.id">
            {{type.name}}
        </option>
    </select>
    <span v-if="errors[ `items.${index}.type_id`]" class="text-danger">
      {{errors[`items.${index}.type_id`][0] }}
    </span>
  </div>


  <div class="col-10 col-md-6">
    <label class="form-label">
      {{ $t("Description") }} :
    </label>
    <input
      :value="value.text"
      @input="update('text', $event.target.value)"
      class="form-control "
      type="text"
    />
    <span v-if="errors[ `items.${index}.text`]" class="text-danger">
      {{errors[`items.${index}.text`][0] }}
    </span>
  </div>

  <div class="col-2 col-md-1 text-end">
    <label class="d-block form-label">&nbsp;</label>
    <a
      class="btn btn-sm btn-light-danger pt-4 pb-4"
      @click="$emit('removeItem' , index)"
    >
      <i class="la la-trash-o fs-3 pe-0"></i>
    </a>
  </div>

</template>

<style scoped>

</style>
