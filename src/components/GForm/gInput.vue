<template>
    <div class="fv-row mb-7">
      <label class="required fs-6 fw-bold mb-2">
        {{ $t(lable) }}
      </label>
      <input
          v-bind="$attrs"
          class="form-control form-control-solid"
          :value="modelValue"
          @input="$emit('update:modelValue' , $event.target.value)"
      />
      <span v-if="errors['title']" class="text-danger">
        {{ errors["title"][0] }}
      </span>
    </div>
  </template>

  <script>
  export default {
  name: "g-Input",
    props:['lable' , 'modelValue' , 'errors' ]
  }
  </script>

  <style scoped>

  </style>
