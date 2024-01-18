<template>
  <div class="mb-0">
    <label class="form-label">{{ $t("orderDate") }}</label>
    <flat-pickr
        v-model="order.date"
        :config="config"
        class="form-control form-control-solid"
        name="date"
        placeholder="Select date"
    />
  </div>
  <span v-if="Errors['date']" class="text-danger">{{
      Errors["date"][0]
    }}</span>
</template>

<script>
import "flatpickr/dist/flatpickr.css";
import flatPickr from "vue-flatpickr-component";

const today = new Date();

export default {
  name: "date",
  props: ['Errors'],
  components: {flatPickr},
  data() {
    return {
      date: "",
      config: {
        wrap: true,
        altFormat: "Y-m-d",
        altInput: true,
        dateFormat: "Y-m-d",
        minDate:
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            (today.getDate() + 1),
      }
    }
  },
  computed: {
    order() {
      return this.$parent.order;
    }
  }

}
</script>