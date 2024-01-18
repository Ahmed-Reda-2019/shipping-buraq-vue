<script >
import {defineComponent} from "vue";

export default defineComponent({
  name: "ReceiverAddress",
  props: {
    name: String,
    phone_1: String,
    phone_2: String,
    email: String,
    errors: Object,
  },

});
</script>

<template>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

    <div class="fv-row mb-2">
      <label class="fs-6 fw-bold mb-2">
        {{ $t("Receiver Name") }}
      </label>
      <input
        class="form-control "
        type="text"  :value="name"
                 @input="$emit('update:name', $event.target.value)"
      />
      <span v-if="errors[ `receiver.name`]" class="text-danger">
      {{errors[`receiver.name`][0] }}
    </span>
    </div>
    <div class="fv-row mb-2">
      <label class="fs-6 fw-bold mb-2">
        {{ $t("Receiver Phone") }} 1
      </label>
      <input
        class="form-control "
        type="tel" :value="phone_1"
                 @input="$emit('update:phone_1', $event.target.value)"
      />
      <span v-if="errors[ `receiver.phone_1`]" class="text-danger">
      {{errors[`receiver.phone_1`][0] }}
    </span>
    </div>
    <div class="fv-row mb-2">
      <label class="fs-6 fw-bold mb-2">
        {{ $t("Receiver Phone") }}
      </label>
      <input
        class="form-control "
        type="tel"
        :value="phone_2"
        @input="$emit('update:phone_2', $event.target.value)"  />
      <span v-if="errors[ `receiver.phone_2`]" class="text-danger">
      {{errors[`receiver.phone_2`][0] }}
    </span>
    </div>
    <div class="fv-row mb-2">
      <label class="fs-6 fw-bold mb-2">
        {{ $t("receiver.Receiver Email") }}
      </label>
      <input
        class="form-control "
        type="email"  :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
      <span v-if="errors[ `receiver.email`]" class="text-danger">
      {{errors[`receiver.email`][0] }}
    </span>
    </div>
  </div>

</template>

<style scoped>

</style>

